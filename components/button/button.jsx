const React = require('react');
const classes = require('classnames');

const BUTTON_TYPES = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

function validateType(type) {
  if (BUTTON_TYPES[type]) {
    return type;
  }
  throw new Error(`Unknown button type: ${type}`);
}


function Button(props) {
  const className = classes(props.className, 'Button', {
    'Button--is-disabled': !!props.disabled,
  });

  // If we have an `href` prop, render an anchor tag styled to look like a button:
  if (props.href) {
    return (
      <a
        className={className}
        href={props.href}
        onClick={props.onClick}
        rel={props.rel}
        role="button"
        target={props.target}
      >
        {props.children}
      </a>
    );
  }

  // Otherwise, render a regular button element:
  return (
    <button
      className={className}
      disabled={props.disabled}
      form={props.form}
      onClick={props.onClick}
      type={validateType(props.type)}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

module.exports = Button;
