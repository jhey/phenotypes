import * as React from 'react';

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
  const { children, className, type, ...htmlProps } = props;
  return (
    <div className={className}>
      <button
        {...htmlProps}
        className="Button__control"
        type={validateType(type)}
      >
        {children}
      </button>
    </div>
  );
}

TrueButton.defaultProps = {
  type: 'button',
};

export default TrueButton;
