import React from 'react';
import classes from 'classnames';

function Radio(props) {
  const { className, children, ...inputProps } = props;
  return (
    <label
      className={classes(className, 'Radio', {
        // Most of the styling for disabled radios is tied to the :disabled input state --
        // adding this modifier on the root element enables the `not-allowed` cursor for
        // child elements with `pointer-events: none`
        'Radio--is-disabled': inputProps.disabled,
      })}
    >
      <input type="radio" className="Radio__input" {...inputProps} />
      <span className="Radio__indicator" />
      <span className="Radio__label">{ children }</span>
    </label>
  );
}

module.exports = Radio;
