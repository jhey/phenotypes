import React from 'react';
import classes from 'classnames';

function Checkbox(props) {
  const { className, label, ...htmlProps } = props;
  return (
    <label className={classes(className, 'Checkbox')}>
      <input type="checkbox" className="Checkbox__input" {...htmlProps} />
      <span className="Checkbox__indicator" />
      <span className="Checkbox__label">{ props.label }</span>
    </label>
  );
}

module.exports = Checkbox;
