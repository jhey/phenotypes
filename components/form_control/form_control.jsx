const React = require('react');
const classes = require('classnames');

const responsiveClass = require('../_utilities/responsive_class.js');
const size = require('../_utilities/size.js');

function TextControl(props) {
  return <input type="text" role="textbox" {...props} />;
}

function PasswordControl(props) {
  return <input type="password" {...props} />;
}

function EmailControl(props) {
  return <input type="email" {...props} />;
}

function getControlByType(type) {
  switch (type) {
    case 'password':
      return PasswordControl;

    case 'email':
      return EmailControl;

    case 'text':
      return TextControl;

    default:
      throw new Error(`Unknown input type: ${type}`);
  }
}

function ariaProps(props) {
  return Object.keys(props).reduce((ariaAttrs, key) => {
    if (key.match('^aria-')) {
      return Object.assign(ariaAttrs, { [key]: props[key] });
    }
    return ariaAttrs;
  }, {});
}

function FormControl(props) {
  const Control = getControlByType(props.type);

  return (
    <Control
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
      className={classes(
        props.className,
        'form-control',
        responsiveClass('form-control-small', props, size.isSmall),
        responsiveClass('form-control-large', props, size.isLarge),
      )}
      form={props.from}
      disabled={props.disabled}
      id={props.id}
      name={props.name}
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
      {...ariaProps(props)}
    />
  );
}

FormControl.defaultProps = {
  type: 'text',
};

module.exports = FormControl;
