import React from 'react';
import Slider from './slider.jsx';

module.exports = function demos() {
  return (
    <div>
      <SliderDemo value={50} min={0} max={100} step={1} />
      <SliderDemo value={1.75} min={1} max={2} step={0.01} />
      <SliderDemo value={25} min={0} max={100} step={1} disabled />
    </div>
  );
};

class SliderDemo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: props.value };
  }

  render() {
    const props = { ...this.props, value: this.state.value };

    return (
      <div className="mb7">
        <Slider
          {...props}
          onChange={(newValue) => { this.setState({ value: newValue }) }}
        />
        <div className="mt1 text-color-secondary text-2">
          <code>{JSON.stringify(props)}</code>
        </div>
      </div>
    );
  }
}
