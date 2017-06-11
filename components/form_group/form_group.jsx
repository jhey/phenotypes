const React = require('react');
const classes = require('classnames');

const FormControl = require('../form_control/form_control.jsx');

function getControlProp(props) {
  let control = props.control;
  if (!control && props.__preview) {
    control = <FormControl placeholder="Placeholder text" />;
  }
  return control;
}

function FormGroup(props) {
  const { label, error, hint, size } = props;
  return (
    <div
      className={classes('FormGroup', {
        'FormGroup--small': size === 'small',
        'FormGroup--large': size === 'large',
        'FormGroup--has-error': !!error,
      })}
    >
      { !!label && <div className="FormGroup__label">{label}</div> }
      { getControlProp(props) }
      { !!error && <div className="FormGroup__error">{error}</div> }
      { !!hint && <div className="FormGroup__hint">{hint}</div> }
    </div>
  );
}

module.exports = FormGroup;
