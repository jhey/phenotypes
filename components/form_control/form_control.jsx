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
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
      className={classes('form-control', {
        'form-control-small': size === 'small',
        'form-control-large': size === 'large',
      })}
      form={props.from}
      disabled={props.disabled}
      id={props.id}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onCopy={props.onCopy}
      onCut={props.onCut}
      onFocus={props.onFocus}
      onInput={props.onInput}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      onPaste={props.onPaste}
      pattern={props.pattern}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      required={props.required}
      size={props.size}
      maxLength={props.maxLength}
      value={props.value}
    />
  );
}

FormControl.defaultProps = {
  type: 'text',
};

module.exports = FormControl;
