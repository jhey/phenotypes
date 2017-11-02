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

function getTrackLineStyle(valueAsPercentage) {
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
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragMouseEnd = this.handleDragMouseEnd.bind(this);
  }

  setValueFromEvent(event) {
    const { min, max, step, value, onChange } = this.props;
    const track = this.track.getBoundingClientRect();

    let eventX = event.touches ? event.touches[0].clientX : event.clientX;
    if (eventX < track.left) {
      eventX = track.left;
    } else if (eventX > track.right) {
      eventX = track.right;
    }

    let newValue = ((eventX - track.left) / track.width) * (max - min);
    newValue = Math.round(newValue / step) * step; // rounds to nearest `step`
    newValue += min;

    // Correct floating point weirdness - 5 points of precision is enough b/c the user won't be
    // able to get more delicate than that with their mouse/finger.
    newValue = parseFloat(newValue.toFixed(5));

    if (onChange && newValue !== value) {
      onChange(newValue);
    }
  }

  handleDrag(event) {
    if (this.waitingForDragAnimationFrame) {
      return;
    }

    this.waitingForDragAnimationFrame = true;

    requestAnimationFrame(() => {
      this.waitingForDragAnimationFrame = false;

      if (!this.props.disabled) {
        this.setValueFromEvent(event);
      }
    });
  }

  handleMouseDown(event) {
    const { disabled, onMouseDown, onDragStart } = this.props;

    if (disabled) {
      return;
    }

    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleDragMouseEnd);

    this.setValueFromEvent(event);

    onMouseDown && onMouseDown(event);
    onDragStart && onDragStart(event);
  }

  handleDragMouseEnd(event) {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragMouseEnd);
    this.props.onDragStop && this.props.onDragStop(event);
  }

  render() {
    const {
      className,
      disabled,
      max,
      min,
      name,
      required,
      step,
      value,
      ...other
    } = this.props;

    const valueAsPercentage = getPercentage(value, min, max);

    return (
      <div
        className={classes('Slider', className, { 'Slider--is-disabled': disabled })}
        onMouseDown={this.handleMouseDown}
        {...other}
      >
        <div className="Slider__track-line" style={getTrackLineStyle(valueAsPercentage)} />
        <div className="Slider__track" ref={(element) => { this.track = element }}>
          <div className="Slider__fill" style={getFillStyle(valueAsPercentage)}>
            <div className="Slider__handle" />
          </div>
        </div>
        <input
          type="hidden"
          name={name}
          value={value}
          min={min}
          max={max}
          step={step}
          required={required}
        />
      </div>
    );
  }
}

Slider.defaultProps = {
  disabled: false,
  min: 0,
  max: 100,
  step: 1,
  value: null,
};

module.exports = Slider;
