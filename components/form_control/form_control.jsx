const React = require('react');
const classes = require('classnames');

function FormControl(props) {
  const { size } = props;
  return (
    <input
      type="text"
      className={classes('form-control', {
        'form-control-small': size === 'small',
        'form-control-large': size === 'large',
      })}
      value={props.value}
      disabled={!!props.disabled}
      autoFocus={!!props.autoFocus}
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onFocus={props.onFocus}
    />
  );
}

module.exports = FormControl;
