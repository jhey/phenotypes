import React from 'react';
import classes from 'classnames';

function isSpacebarEvent(event) {
  return (event.charCode || event.keyCode) === 32;
}

class AnchorButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { spacePressed: false };
    this.handleAnchorClick = this.handleAnchorClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleAnchorClick(event) {
    const { disabled, onClick } = this.props;

    if (disabled || this.props.href === '#') {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
    } else {
      onClick && onClick(event);
    }
  }

  // Spacebar support: (enter presses are already handled by handleAnchorClick)
  // - when pressed, active style is applied
  // - when released, active style is removed & then button behaves as if it were clicked (link is
  //   followed and onClick is called)

  handleKeyDown(event) {
    if (isSpacebarEvent(event)) {
      if (!this.props.disabled) {
        event.preventDefault();
        this.setState({ spacePressed: true });
      }
    }
  }

  handleKeyUp(event) {
    if (isSpacebarEvent(event)) {
      if (!this.props.disabled) {
        event.preventDefault();
        this.setState({ spacePressed: false });
        // Follow the link & call onClick prop by simulating a click on the anchor, so that
        // props like `target` are obeyed.
        this.element.click();
      }
    }
  }

  render() {
    const { className, children, disabled, tabIndex, ...htmlProps } = this.props;

    return (
      <a
        {...htmlProps}
        ref={(element) => { this.element = element }}
        className={classes(className, { 'Button--is-active': this.state.spacePressed })}
        onClick={this.handleAnchorClick}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex={disabled ? -1 : tabIndex}
      >
        {children}
      </a>
    );
  }
}

module.exports = AnchorButton;
