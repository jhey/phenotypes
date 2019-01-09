import * as React from 'react';
import classes from 'classnames';
import keycode from 'keycode';

function getFillStyle(valueAsPercentage) {
  return {
    right: `${100 - valueAsPercentage}%`,
    // When the handle is at the left edge, hide the fill line (w/ left: 0) so that it doesn't
    // peak out to the left of the handle.
    left: valueAsPercentage === 0 ? 0 : null,
  };
}

function getTrackLineStyle(valueAsPercentage) {
  return {
    // When the handle is at one of the edges, bring the track in by one pixel so that it doesn't
    // peak out to the side of the handle.
    left: valueAsPercentage === 0 ? '1px' : null,
    right: valueAsPercentage === 100 ? '1px' : null,
  };
}

function getPercentage(value, min, max) {
  const percentage = (value - min) / (max - min) || 0;
  return percentage * 100;
}

function cleanFloat(value) {
  // Correct floating point weirdness - 5 points of precision is enough b/c the user won't be
  // able to get more delicate than that with their mouse/finger.
  return parseFloat(value.toFixed(5));
}

// Runs a function once per animation frame
function debounceToAnimationFrame(func) {
  let waitingForAnimationFrame = false;

  function debounced(...args) {
    if (waitingForAnimationFrame) {
      return;
    }

    waitingForAnimationFrame = true;

    requestAnimationFrame(() => {
      waitingForAnimationFrame = false;
      func(...args);
    });
  }

  return debounced;
}

class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { clicked: false, focused: false };

    this.handleDrag = debounceToAnimationFrame(this.handleDrag.bind(this));
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleDragMouseEnd = this.handleDragMouseEnd.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  setValueFromEvent(event) {
    const { min, max, step, value, onChange } = this.props;
    const track = this.track.getBoundingClientRect();

    let eventX = event.touches ? event.touches[0].clientX : event.clientX;

    // There is a small gutter on both sides of the track (so that the handle will stop at the
    // edge of the slider instead of hanging off). If the user clicks in one of the gutters,
    // the slider should behave as if they clicked on the edge of the track, instead.
    if (eventX < track.left) {
      eventX = track.left;
    } else if (eventX > track.right) {
      eventX = track.right;
    }

    let newValue = (eventX - track.left) / track.width * (max - min);
    newValue = Math.round(newValue / step) * step; // rounds to nearest `step`
    newValue += min;
    newValue = cleanFloat(newValue);

    if (onChange && newValue !== value) {
      onChange(newValue);
    }
  }

  handleDrag(event) {
    if (!this.props.disabled) {
      this.setValueFromEvent(event);
    }
  }

  handleMouseDown(event) {
    const { onMouseDown, onDragStart } = this.props;

    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleDragMouseEnd);

    this.setValueFromEvent(event);

    onMouseDown && onMouseDown(event);
    onDragStart && onDragStart(event);

    // Prevent text selection when dragging the slider (but still focus)
    event.preventDefault();
    this.setState({ clicked: true });
    this.slider.focus();
  }

  handleDragMouseEnd(event) {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragMouseEnd);
    this.props.onDragEnd && this.props.onDragEnd(event);
  }

  handleTouchStart(event) {
    const { onTouchStart, onDragStart } = this.props;

    document.addEventListener('touchmove', this.handleDrag);
    document.addEventListener('touchup', this.handleTouchEnd);
    document.addEventListener('touchend', this.handleTouchEnd);
    document.addEventListener('touchcancel', this.handleTouchEnd);

    this.setValueFromEvent(event);

    onTouchStart && onTouchStart(event);
    onDragStart && onDragStart(event);

    // Don't allow page scrolling while dragging the slider
    event.preventDefault();
  }

  handleTouchEnd(event) {
    document.removeEventListener('touchmove', this.handleDrag);
    document.removeEventListener('touchup', this.handleTouchEnd);
    document.removeEventListener('touchend', this.handleTouchEnd);
    document.removeEventListener('touchcancel', this.handleTouchEnd);
    this.props.onDragEnd && this.props.onDragEnd(event);
  }

  handleKeyDown(event) {
    const { value, min, max, step, onChange, onKeyDown } = this.props;
    let newValue;

    switch (keycode(event)) {
      case 'right':
      case 'up':
      case 'page up':
        newValue = Math.min(max, cleanFloat(value + step));
        break;
      case 'left':
      case 'down':
      case 'page down':
        newValue = Math.max(min, cleanFloat(value - step));
        break;
      case 'end':
        newValue = max;
        break;
      case 'home':
        newValue = min;
        break;
      default:
        return;
    }

    if (onChange && newValue !== value) {
      onChange(newValue);
    }

    onKeyDown && onKeyDown(event);

    // Prevent all the keys that interact with the slider from moving the page around
    event.preventDefault();

    this.setState({ clicked: false });
  }

  handleFocus(event) {
    this.setState({ focused: true });
    this.props.onFocus && this.props.onFocus(event);
  }

  handleBlur(event) {
    this.setState({ clicked: false, focused: false });
    this.props.onBlur && this.props.onBlur(event);
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
      tabIndex,
      value,
      ...other
    } = this.props;

    const valueAsPercentage = getPercentage(value, min, max);

    return (
      <div
        role="slider"
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        {...other}
        ref={element => {
          this.slider = element;
        }}
        className={classes('Slider', className, {
          'Slider--is-disabled': disabled,
          'Slider--is-focused':
            !disabled && this.state.focused && !this.state.clicked,
        })}
        tabIndex={disabled ? -1 : tabIndex}
        onMouseDown={!disabled && this.handleMouseDown}
        onTouchStart={!disabled && this.handleTouchStart}
        onFocus={!disabled && this.handleFocus}
        onBlur={!disabled && this.handleBlur}
        onKeyDown={!disabled && this.handleKeyDown}
      >
        <div
          className="Slider__track-line"
          style={getTrackLineStyle(valueAsPercentage)}
        />
        <div
          className="Slider__track"
          ref={element => {
            this.track = element;
          }}
        >
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
  max: 100,
  min: 0,
  step: 1,
  tabIndex: 0,
  value: null,
};

export default Slider;
