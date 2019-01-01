import * as React from 'react';
import classes from 'classnames';

function Checkbox(props) {
  const { className, label, ...htmlProps } = props;
  return (
    <label
      className={classes(className, 'Checkbox', {
        // Most of the styling for disabled checkboxes is tied to the :disabled input state --
        // adding this modifier on the root element enables the `not-allowed` cursor for
        // child elements with `pointer-events: none`
        'Checkbox--is-disabled': htmlProps.disabled,
      })}
    >
      <input type="checkbox" className="Checkbox__input" {...htmlProps} />
      <span className="Checkbox__indicator" />
      <span className="Checkbox__label">{props.label}</span>
    </label>
  );
}

export default Checkbox;
