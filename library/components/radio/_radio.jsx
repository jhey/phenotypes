/* eslint-disable react/no-multi-comp */
import * as React from 'react';
import RadioGroup from './radio_group.jsx';
import Button from '../button/button.jsx';

function RadioButtonsExamples() {
  return (
    <div>
      <h3>Radios</h3>
      <StylingExamples />
      <SophisticatedLabelExample />

      <hr />
      <br />

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

      <RadioGroup
        name="states-1"
        value="checked"
        render={Radio => (
          <div>
            <Radio value="unchecked" className="mr4">
              Unchecked
            </Radio>
            <Radio value="checked">Checked</Radio>
          </div>
        )}
      />

      <RadioGroup
        name="states-2"
        value="checked"
        disabled
        render={Radio => (
          <div>
            <Radio value="unchecked" className="mr4">
              Disabled
            </Radio>
            <Radio value="checked">Disabled and checked</Radio>
          </div>
        )}
      />

      <RadioGroup
        name="small"
        value="foo"
        render={Radio => (
          <Radio className="d-block mt5 Radio--small" value="foo">
            Small
          </Radio>
        )}
      />

      <RadioGroup
        name="medium"
        value="foo"
        render={Radio => (
          <Radio className="d-block mt1" value="foo">
            Medium (default)
          </Radio>
        )}
      />

      <RadioGroup
        name="large"
        value="foo"
        render={Radio => (
          <Radio className="d-block mt1 Radio--large" value="foo">
            Large
          </Radio>
        )}
      />

      <RadioGroup
        name="responsive"
        value="foo"
        render={Radio => (
          <Radio
            className="d-block mt1 Radio--small Radio--medium-sm Radio--large-md"
            value="foo"
          >
            Responsive
          </Radio>
        )}
      />
    </div>
  );
}

class SophisticatedLabelExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: null };
  }

  render() {
    return (
      <div className="mt6">
        <h6>Sophisticated labels</h6>
        <p>
          You can use html in the label if it needs to be more than just a
          string. Clicking anywhere in the label will check the radio.
        </p>
        <RadioGroup
          name="sophistication"
          value={this.state.value}
          onChange={newValue => {
            this.setState({ value: newValue });
          }}
          render={Radio => (
            <Radio value="foo">
              I have some footer text
              <p className="text-1 text-color-secondary">click me</p>
            </Radio>
          )}
        />
      </div>
    );
  }
}

class BasicGroupExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: 'two' };
  }

  render() {
    return (
      <div>
        <p>
          The <code>RadioGroup</code> component makes it easy to have a single
          field with a selected value, using multiple radio buttons.
        </p>
        <RadioGroup
          name="basic"
          value={this.state.value}
          onChange={newValue => {
            this.setState({ value: newValue });
          }}
          render={Radio => (
            <div className="mt5">
              <Radio className="mr4" value="one">
                one
              </Radio>
              <Radio className="mr4" value="two">
                two
              </Radio>
              <Radio value="three">three</Radio>
            </div>
          )}
        />
      </div>
    );
  }
}

class ClearableGroupExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: 'a' };
  }

  render() {
    return (
      <div className="mt6">
        <h6>Clearable groups</h6>
        <p>
          Use the <code>clearable</code> prop on the <code>RadioGroup</code> to
          allow the user to uncheck a checked radio. This will set the group’s
          value to <code>null</code>.
        </p>
        <RadioGroup
          name="clearable"
          clearable
          value={this.state.value}
          onChange={newValue => {
            this.setState({ value: newValue });
          }}
          render={Radio => (
            <div className="mt5">
              <Radio className="mr4" value="a">
                Uncheck me!
              </Radio>
              <Radio value="b">Hello</Radio>
            </div>
          )}
        />
      </div>
    );
  }
}

class DisabledGroupExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: null, disabled: true };
  }

  render() {
    return (
      <div className="mt6">
        <h6>Disabled groups</h6>
        <p>
          Use the <code>disabled</code> prop to set all the radios in the group
          to disabled. As you can see in this example, you still have flexiblity
          to tinker with each individual radio.
        </p>
        <RadioGroup
          name="disabled"
          disabled={this.state.disabled}
          value={this.state.value}
          onChange={newValue => {
            this.setState({ value: newValue });
          }}
          render={Radio => (
            <div className="mt5">
              <Radio className="mr4" value="a">
                A
              </Radio>
              <Radio className="mr4" value="b">
                B
              </Radio>
              <Radio value="c" disabled>
                I’m always disabled!
              </Radio>
            </div>
          )}
        />
        <Button
          className="Button--small mt4"
          onClick={() => {
            this.setState({ disabled: !this.state.disabled });
          }}
        >
          Toggle disabled
        </Button>
      </div>
    );
  }
}

export default RadioButtonsExamples;
