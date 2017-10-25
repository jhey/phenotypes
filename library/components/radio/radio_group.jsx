const React = require('react');
const classes = require('classnames');
const Radio = require('./radio.jsx');

class RadioGroup extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: props.value,
      disabled: props.disabled
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ disabled: nextProps.disabled });
  }

  handleChange(valueOfRadioClicked) {
    const clearing = !!this.props.clearable && valueOfRadioClicked === this.state.value;
    const newValue = clearing ? null : valueOfRadioClicked;

    if (newValue !== this.state.value) {
      this.setState({ value: newValue });
      this.props.onChange && this.props.onChange(newValue);
    }
  }

  renderChildren(name, disabled, handleChange) {
    return React.Children.map(this.props.children, child => (
      child.type !== Radio
        ? child
        : React.cloneElement(child, {
          name: this.props.name,
          checked: child.props.value === this.state.value,
          disabled: this.state.disabled || child.props.disabled,
          onChange: () => {
            child.props.onChange && child.props.onChange();
            this.handleChange(child.props.value);
          }
        })
    ));
  }

  render() {
    return this.props.render({
      name: this.props.name,
      value: this.state.value,
      disabled: this.state.disabled,
      onChange: this.handleChange.bind(this),
    });
  }
}

RadioGroup.defaultProps = {
  value: null,
  disabled: false,
  clearable: false
}

module.exports = RadioGroup;
