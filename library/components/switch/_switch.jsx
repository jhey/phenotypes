const React = require('react');
const Switch = require('./switch.jsx');

class SwitchExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isOn: !!props.isOn,
    };
  }

  render() {
    const { label, ...props } = this.props;
    const isOn = this.state.isOn;

    return (
      <div>
        <div className="text-1 mb1">{label}</div>
        <div className="d-flex align-items-center">
          <Switch
            {...props}
            isOn={isOn}
            onChange={() => this.setState({ isOn: !isOn })}
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

module.exports = SwitchExample;
