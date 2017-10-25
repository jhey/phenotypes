const React = require('react');
const Radio = require('./radio.jsx');
const RadioGroup = require('./radio_group.jsx');
const Button = require('../button/button.jsx');

function RadioButtonsExamples() {
  return (
    <div>
      <h3>Radio states &amp; modifiers</h3>
      <StylingExamples />

      <hr />

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
      <div>
        <Radio className="mr4">Unchecked</Radio>
        <Radio defaultChecked>Checked</Radio>
      </div>
      <div>
        <Radio className="mr4" disabled>Disabled</Radio>
        <Radio disabled defaultChecked>Disabled and checked</Radio>
      </div>
      <Radio className="d-block mt5 Radio--small" defaultChecked><code>Radio--small</code></Radio>
      <Radio className="d-block mt1 Radio--medium" defaultChecked><code>Radio--medium</code> (default)</Radio>
      <Radio className="d-block mt1 Radio--large" defaultChecked><code>Radio--large</code></Radio>
      <Radio className="d-block mt1 Radio--small Radio--medium-sm Radio--large-md" defaultChecked>Responsive</Radio>
    </div>
  );
}

function BasicGroupExample() {
  return (
    <div>
      <p>
        The <code>RadioGroup</code> component makes it easy to have a single field which has
        multiple radio buttons. It has a <code>render</code> prop, which takes a function that
        renders all the radio buttons. This gives you full control over the markup:
      </p>
      <ul>
        <li>
          The props of each radio are fully customizable. For example, you can set individual
          radios as disabled, set the <code>name</code> prop (or not), and you can have custom
          event handlers on each radio.
        </li>
        <li>
          The <code>RadioGroup</code> component does not choose the container; you can use a
          <code>&lt;form&gt;</code>, or any other element.
        </li>
      </ul>
      <RadioGroup value="two" render={({ value, onChange }) => (
        <div className="mt5">
          <Radio
            className="mr4"
            value="one"
            checked={value === 'one'}
            onChange={() => { onChange('one'); }}> One
          </Radio>
          <Radio
            className="mr4"
            value="two"
            checked={value === 'two'}
            onChange={() => { onChange('two'); }}> Two
          </Radio>
          <Radio
            value="three"
            checked={value === 'three'}
            onChange={() => { onChange('three'); }}> Three
          </Radio>
        </div>
      )} />
    </div>
  );
}

function ClearableGroupExample() {
  return (
    <div className="mt5">
      <h6>Clearable groups</h6>
      <p>
        Use the <code>clearable</code> prop on the <code>RadioGroup</code> to allow the user
        to uncheck a checked radio. This will set the group's value to <code>null</code>.
      </p>
      <RadioGroup value="a" clearable render={({ value, onChange }) => (
        <div className="mt5">
          <Radio
            className="mr4"
            value="a"
            checked={value === 'a'}
            onChange={() => { onChange('a'); }}> Uncheck me!
          </Radio>
          <Radio
            value="b"
            checked={value === 'b'}
            onChange={() => { onChange('b'); }}> Hello
          </Radio>
        </div>
      )} />
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

  render () {
    return (
      <div className="mt5">
        <h6>Disabled groups</h6>
        <p>
          Use the <code>disabled</code> prop to set all the radios in the group to disabled. As you
          can see in this example, you still have flexiblity to tinker with each individual radio.
        </p>
        <RadioGroup disabled={this.state.disabled} render={({ value, disabled, onChange }) => (
          <div className="mt5">
            <Radio
              className="mr4"
              value="a"
              checked={value === 'a'}
              disabled={disabled}
              onChange={() => { onChange('a'); }}> A
            </Radio>
            <Radio
              className="mr4"
              value="b"
              checked={value === 'b'}
              disabled={disabled}
              onChange={() => { onChange('b'); }}> B
            </Radio>
            <Radio
              value="c"
              checked={value === 'c'}
              disabled={true}
              onChange={() => { onChange('c'); }}> I'm always disabled!
            </Radio>
          </div>
        )} />
        <Button className="Button--small mt4" onClick={this.toggleDisabled}>Toggle disabled</Button>
      </div>
    );
  }
}

module.exports = RadioButtonsExamples;
