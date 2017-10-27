const React = require('react');

class AnchorButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleAnchorClick = this.handleAnchorClick.bind(this);
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

  render() {
    const { children, disabled, tabIndex, ...htmlProps } = this.props;

    /* eslint-disable jsx-a11y/click-events-have-key-events */
    return (
      <a
        {...htmlProps}
        onClick={this.handleAnchorClick}
        role="button"
        tabIndex={disabled ? -1 : tabIndex}
      >
        {children}
      </a>
    );
  }
}

module.exports = AnchorButton;
