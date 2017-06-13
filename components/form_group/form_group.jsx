/* eslint-disable jsx-a11y/label-has-for */
const React = require('react');
const classes = require('classnames');

const FormControl = require('../form_control/form_control.jsx');

class FormGroup extends React.Component {

  renderChildren() {
    // Preview environment won't have a child prop,
    // so we have to supply a default one here:
    if (this.props.__preview) {
      return (
        <FormControl
          id={this.props.controlId}
          placeholder="Placeholder text"
        />
      );
    }
    return this.props.children;
  }

  render() {
    const { label, error, hint, controlId, size } = this.props;

    return (
      <div
        className={classes('FormGroup', {
          'FormGroup--small': size === 'small',
          'FormGroup--large': size === 'large',
          'FormGroup--has-error': !!error,
        })}
      >
        { !!label && <label htmlFor={controlId} className="FormGroup__label">{label}</label> }
        { this.renderChildren() }
        { !!error && <div className="FormGroup__error">{error}</div> }
        { !!hint && <div className="FormGroup__hint">{hint}</div> }
      </div>
    );
  }
}

module.exports = FormGroup;
