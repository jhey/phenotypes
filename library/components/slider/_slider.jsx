import React from 'react';
import Slider from './slider.jsx';

class SliderDemo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: 50 };
  }

  render() {
    return (
      <div>
        <h6>{this.state.value}</h6>
        <Slider
          value={this.state.value}
          step={0.1}
          min={49}
          max={51}
          onChange={(val) => { this.setState({ value: val }) }}
        />
      </div>
    );
  }
}

module.exports = SliderDemo;
