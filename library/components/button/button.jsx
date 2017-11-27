import React from 'react';
import classes from 'classnames';

import AnchorButton from './anchor_button.jsx';
import TrueButton from './true_button.jsx';

function Button(props) {
  const Component = props.href ? AnchorButton : TrueButton;

  return (
    <Component
      {...props}
      aria-disabled={props.disabled}
      className={classes(props.className, 'Button', {
        'Button--is-disabled': props.disabled,
      })}
    />
  );
}

module.exports = Button;
