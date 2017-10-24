const React = require('react');
const classes = require('classnames');

function Checkbox(props) {
  const { className, label, ...htmlProps } = props;
  return (
    <label className={classes(className, 'Checkbox')}>
      <input type="checkbox" className="Checkbox__input" { ...htmlProps } />
      <span className="Checkbox__indicator"></span>
      <span className="Checkbox__label">{ props.label }</span>
    </label>
  );
}

module.exports = Checkbox;
