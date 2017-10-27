const React = require('react');
const classes = require('classnames');

function Switch(props) {
  const { className, ...inputProps } = props;

  return (
    <label className={classes(className, 'Switch')}>
      <input className="Switch__input" type="checkbox" {...inputProps} />
      <div className="Switch__indicator" />
    </label>
  );
}

module.exports = Switch;
