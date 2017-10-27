import React from 'react';

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

function TrueButton(props) {
  const { children, type, ...htmlProps } = props;
  return (
    <button
      {...htmlProps}
      type={validateType(type)}
    >
      {children}
    </button>
  );
}

TrueButton.defaultProps = {
  type: 'button',
};

module.exports = TrueButton;
