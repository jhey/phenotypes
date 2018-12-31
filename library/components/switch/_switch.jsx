const React = require('react');
const Switch = require('./switch.jsx');

class SwitchExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checked: !!props.checked,
    };
  }

  render() {
    const { label, ...props } = this.props;
    const { checked } = this.state;

    return (
      <div>
        <div className="text-1 mb1">{label}</div>
        <div className="d-flex align-items-center">
          <Switch
            {...props}
            checked={checked}
            onChange={() => this.setState({ checked: !checked })}
          />
          {!props.disabled && (
            <span className="ml5">
              ← <span className="uppercase-1">Click me!</span>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default SwitchExample;
