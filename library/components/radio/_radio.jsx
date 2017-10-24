const React = require('react');
const Radio = require('./radio.jsx');

class RadioExample extends React.Component {

  //constructor(props, context) {
  //  super(props, context);
  //  this.state = { activeTab: 0 };
  //}

  render() {
    return (
      <div>
        <h5>States</h5>

        <div>
          <Radio>Unchecked</Radio>
        </div>
        <div className="mt1">
          <Radio defaultChecked>Checked</Radio>
        </div>
        <div className="mt1">
          <Radio disabled>Disabled</Radio>
        </div>
        <div className="mt1">
          <Radio disabled defaultChecked>Disabled and checked</Radio>
        </div>

        <hr />

        <h5>Sizing</h5>

        <div>
          <Radio className="Radio--small" defaultChecked>Radio--small</Radio>
        </div>
        <div className="mt1">
          <Radio className="Radio--medium" defaultChecked>Radio--medium (default)</Radio>
        </div>
        <div className="mt1">
          <Radio className="Radio--large" defaultChecked>Radio--large</Radio>
        </div>
        <div className="mt1">
          <Radio className="Radio--small Radio--medium-sm Radio--large-md" defaultChecked>
            Responsive
          </Radio>
        </div>

        <hr />

        <h5>Custom label content</h5>

        <p>
          You can specify arbitrary markup as children to the radio. Clicking anywhere on the label
          will check the radio.
        </p>

        <div>
          <Radio>
            Radio with some footer text
            <p className="text-1 text-color-secondary">Look at meeee</p>
          </Radio>
        </div>

        <hr />

        <h5>Allowing the user to uncheck the radio</h5>

        <p>
          Use the <code>uncheckable</code> prop to allow the user to uncheck a checked radio.
        </p>

        <div>
          <Radio uncheckable defaultChecked>Uncheck me</Radio>
        </div>

      </div>
    );
  }
}

module.exports = RadioExample;
