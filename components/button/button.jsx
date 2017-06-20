const React = require('react');
const classes = require('classnames');

const AnchorButton = require('./anchor_button.jsx');
const TrueButton = require('./true_button.jsx');

function Button(props) {
  const Component = props.href ? AnchorButton : TrueButton;
  const isDisabled = !!props.disabled;

  return (
    <Component
      {...props}
      aria-disabled={isDisabled}
      className={classes(props.className, 'Button', {
        'Button--is-disabled': isDisabled,
      })}
    />
  );
}

module.exports = Button;
