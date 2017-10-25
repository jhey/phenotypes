const React = require('react');

class RadioGroup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: props.value,
      disabled: props.disabled,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ disabled: nextProps.disabled });
  }

  handleChange(valueOfRadioClicked) {
    const clearing = this.props.clearable && valueOfRadioClicked === this.state.value;
    const newValue = clearing ? null : valueOfRadioClicked;

    if (newValue !== this.state.value) {
      this.setState({ value: newValue });
      this.props.onChange && this.props.onChange(newValue);
    }
  }

  render() {
    return this.props.render({
      value: this.state.value,
      disabled: this.state.disabled,
      onChange: this.handleChange.bind(this),
    });
  }
}

RadioGroup.defaultProps = {
  value: null,
  disabled: false,
  clearable: false,
};

module.exports = RadioGroup;
