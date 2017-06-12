const React = require('react');
const classes = require('classnames');

const FormControl = require('../form_control/form_control.jsx');

function FormGroup(props) {
  const { id, label, error, hint, size, ...control } = props;

  return (
    <div
      className={classes('FormGroup', {
        'FormGroup--small': size === 'small',
        'FormGroup--large': size === 'large',
        'FormGroup--has-error': !!error,
      })}
    >
      { !!label && <label htmlFor={id} className="FormGroup__label">{label}</label> }
      <FormControl id={id} {...control} />
      { !!error && <div className="FormGroup__error">{error}</div> }
      { !!hint && <div className="FormGroup__hint">{hint}</div> }
    </div>
  );
}

module.exports = FormGroup;
