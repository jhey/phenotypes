const React = require('react');
const Radio = require('./radio.jsx');

function ManagedRadio(radioProps) {
  const groupProps = this.props;
  const checked = radioProps.value === groupProps.value;
  return (
    <Radio
      {...radioProps}
      name={groupProps.name}
      checked={checked}
      disabled={groupProps.disabled || radioProps.disabled}
      onChange={() => {
        // Call the radio's own onChange if it has one.
        radioProps.onChange && radioProps.onChange();

        // The group's onChange callback is only called when the value actually changes.
        if (groupProps.onChange) {
          if (!checked || groupProps.clearable) {
            const newValue = checked ? null : radioProps.value;
            groupProps.onChange(newValue);
          }
        }
      }}
    />
  );
}

class RadioGroup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.managedRadio = ManagedRadio.bind(this);
  }

  render() {
    return this.props.render(this.managedRadio);
  }
}

RadioGroup.defaultProps = {
  value: null,
  disabled: false,
  clearable: false,
};

module.exports = RadioGroup;
