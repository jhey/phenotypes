const React = require('react');
const Radio = require('./radio.jsx');
const RadioGroup = require('./radio_group.jsx');
const Button = require('../button/button.jsx');

function RadioButtonsExamples() {
  return (
    <div>
      <h3>Radios</h3>
      <StylingExamples />
      <SophisticatedLabelExample />

      <hr /><br />

      <h3>Radio Groups</h3>
      <BasicGroupExample />
      <ClearableGroupExample />
      <DisabledGroupExample />
    </div>
  );
}

function StylingExamples() {
  return (
    <div>
      <h6>States &amp; modifiers</h6>
      <div>
        <Radio className="mr4" name="styling">Unchecked</Radio>
        <Radio defaultChecked>Checked</Radio>
      </div>
      <div>
        <Radio className="mr4" disabled name="styling">Disabled</Radio>
        <Radio disabled defaultChecked>Disabled and checked</Radio>
      </div>
      <Radio className="d-block mt5 Radio--small" defaultChecked name="styling"><code>Radio--small</code></Radio>
      <Radio className="d-block mt1 Radio--medium" defaultChecked name="styling"><code>Radio--medium</code> (default)</Radio>
      <Radio className="d-block mt1 Radio--large" defaultChecked name="styling"><code>Radio--large</code></Radio>
      <Radio className="d-block mt1 Radio--small Radio--medium-sm Radio--large-md" defaultChecked name="styling">Responsive</Radio>
    </div>
  );
}

function SophisticatedLabelExample() {
  return (
    <div className="mt5">
      <h6>Sophisticated labels</h6>
      <p>
        You can use html in the label if it needs to be more than just a string. Clicking anywhere
        in the label will check the radio.
      </p>
      <Radio name="sophistication">
        I have some footer text
        <p className="text-1 text-color-secondary">click me</p>
      </Radio>
    </div>
  );
}


function BasicGroupExample() {
  return (
    <div>
      <p>
        The <code>RadioGroup</code> component makes it easy to have a single field with a selected
        value, using multiple radio buttons.
      </p>
      <RadioGroup
        value="two"
        render={({ value, onChange }) => (
          <div className="mt5">
            <Radio
              name="basic"
              className="mr4"
              value="one"
              checked={value === 'one'}
              onChange={() => { onChange('one') }}
            > One
            </Radio>
            <Radio
              name="basic"
              className="mr4"
              value="two"
              checked={value === 'two'}
              onChange={() => { onChange('two') }}
            > Two
            </Radio>
            <Radio
              name="basic"
              value="three"
              checked={value === 'three'}
              onChange={() => { onChange('three') }}
            > Three
            </Radio>
          </div>
        )}
      />
    </div>
  );
}

function ClearableGroupExample() {
  return (
    <div className="mt5">
      <h6>Clearable groups</h6>
      <p>
        Use the <code>clearable</code> prop on the <code>RadioGroup</code> to allow the user
        to uncheck a checked radio. This will set the group’s value to <code>null</code>.
      </p>
      <RadioGroup
        value="a"
        clearable
        render={({ value, onChange }) => (
          <div className="mt5">
            <Radio
              name="clearable"
              className="mr4"
              value="a"
              checked={value === 'a'}
              onChange={() => { onChange('a') }}
            > Uncheck me!
            </Radio>
            <Radio
              name="clearable"
              value="b"
              checked={value === 'b'}
              onChange={() => { onChange('b') }}
            > Hello
            </Radio>
          </div>
        )}
      />
    </div>
  );
}

class DisabledGroupExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { disabled: true };
    this.toggleDisabled = this.toggleDisabled.bind(this);
  }

  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    return (
      <div className="mt5">
        <h6>Disabled groups</h6>
        <p>
          Use the <code>disabled</code> prop to set all the radios in the group to disabled. As you
          can see in this example, you still have flexiblity to tinker with each individual radio.
        </p>
        <RadioGroup
          disabled={this.state.disabled}
          render={({ value, disabled, onChange }) => (
            <div className="mt5">
              <Radio
                name="disabled"
                className="mr4"
                value="a"
                checked={value === 'a'}
                disabled={disabled}
                onChange={() => { onChange('a') }}
              > A
              </Radio>
              <Radio
                name="disabled"
                className="mr4"
                value="b"
                checked={value === 'b'}
                disabled={disabled}
                onChange={() => { onChange('b') }}
              > B
              </Radio>
              <Radio
                name="disabled"
                value="c"
                checked={value === 'c'}
                disabled
                onChange={() => { onChange('c') }}
              > I’m always disabled!
              </Radio>
            </div>
          )}
        />
        <Button className="Button--small mt4" onClick={this.toggleDisabled}>Toggle disabled</Button>
      </div>
    );
  }
}

module.exports = RadioButtonsExamples;
