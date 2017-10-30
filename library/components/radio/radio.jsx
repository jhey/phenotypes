import React from 'react';
import classes from 'classnames';

function Radio(props) {
  const { className, children, ...inputProps } = props;
  return (
    <label className={classes(className, 'Radio')}>
      <input type="radio" className="Radio__input" {...inputProps} />
      <span className="Radio__indicator" />
      <span className="Radio__label">{ children }</span>
    </label>
  );
}

module.exports = Radio;
