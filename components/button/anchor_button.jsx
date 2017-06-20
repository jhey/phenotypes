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
    const { children, disabled, ...htmlProps } = this.props;
    return (
      <a
        {...htmlProps}
        onClick={this.handleAnchorClick}
        role="button"
        tabIndex={disabled && -1}
      >
        {children}
      </a>
    );
  }
}

module.exports = AnchorButton;
