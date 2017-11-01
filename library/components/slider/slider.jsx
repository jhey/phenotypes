import React from 'react';
import classes from 'classnames';

function getFillStyle(valueAsPercentage) {
  return {
    right: `${100 - valueAsPercentage}%`,
    // When the handle is at the left edge, hide the fill line (w/ left: 0) so that it doesn't
    // peak out to the left of the handle.
    left: (valueAsPercentage === 0 ? 0 : null),
  };
}

function getTrackStyle(valueAsPercentage) {
  return {
    // When the handle is at one of the edges, bring the track in by one pixel so that it doesn't
    // peak out to the side of the handle.
    left: (valueAsPercentage === 0 ? '1px' : null),
    right: (valueAsPercentage === 100 ? '1px' : null),
  };
}

function getPercentage(value, min, max) {
  const percentage = ((value - min) / (max - min)) || 0;
  return percentage * 100;
}

class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.state = { value: this.props.value };
  }

  render() {
    const { disabled, className } = this.props;
    const valueAsPercentage = getPercentage(this.props.value, this.props.min, this.props.max);

    return (
      <div
        className={classes('Slider', className, { 'Slider--is-disabled': disabled })}
      >
        <div
          className="Slider__track"
          style={getTrackStyle(valueAsPercentage)}
        />
        <div className="Slider__range">
          <div className="Slider__fill" style={getFillStyle(valueAsPercentage)}>
            <div className="Slider__handle" />
          </div>
        </div>
      </div>
    );
  }
}
// <div className="Slider__handle" tabIndex="0" onFocus={(event) => { console.log(event.keyCode) }} />

Slider.defaultProps = {
  disabled: false,
  min: 0,
  max: 100,
  value: null,
};

module.exports = Slider;
