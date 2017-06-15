const React = require('react');
const classes = require('classnames');


const INPUT_TYPES = {
  color: 'color',
  date: 'date',
  datetime: 'datetime',
  'datetime-local': 'datetime-local',
  email: 'email',
  month: 'month',
  number: 'number',
  password: 'password',
  search: 'search',
  tel: 'tel',
  text: 'text',
  time: 'time',
  url: 'url',
  week: 'week',
};

function validateType(type) {
  if (INPUT_TYPES[type]) {
    return type;
  }

  throw new Error(`Unknown input type: ${type}`);
}

function ariaProps(props) {
  return Object.keys(props).reduce((ariaAttrs, key) => {
    if (key.match('^aria-')) {
      return Object.assign(ariaAttrs, { [key]: props[key] });
    }
    return ariaAttrs;
  }, {});
}

function TextInput(props) {
  return (
    <input
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
      className={classes(props.className, 'TextInput', {
        'TextInput--is-disabled': props.disabled,
      })}
      form={props.form}
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
      type={validateType(props.type)}
      readOnly={props.readOnly}
      required={props.required}
      size={props.size}
      maxLength={props.maxLength}
      value={props.value}
      {...ariaProps(props)}
    />
  );
}

TextInput.defaultProps = {
  type: 'text',
};

module.exports = TextInput;
