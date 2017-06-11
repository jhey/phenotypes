const React = require('react');
const classes = require('classnames');

function TextControl(props) {
  return <input type="text" role="textbox" {...props} />;
}

function PasswordControl(props) {
  return <input type="password" {...props} />;
}

function getControlByType(type) {
  switch (type) {
    case 'password':
      return PasswordControl;

    case 'text':
      return TextControl;

    default:
      throw new Error(`Unknown input type: ${type}`);
  }
}

function FormControl(props) {
  const { type, size } = props;
  const Control = getControlByType(type);

  return (
    <Control
      className={classes('form-control', {
        'form-control-small': size === 'small',
        'form-control-large': size === 'large',
      })}
      value={props.value}
      disabled={props.disabled}
      autoFocus={props.autoFocus}
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onFocus={props.onFocus}
    />
  );
}

FormControl.defaultProps = {
  type: 'text',
};

module.exports = FormControl;
