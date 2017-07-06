const React = require('react');
const classes = require('classnames');

const AnchorButton = require('./anchor_button.jsx');
const TrueButton = require('./true_button.jsx');

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
