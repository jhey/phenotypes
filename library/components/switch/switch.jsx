const React = require('react');
const classes = require('classnames');

function Switch(props) {
  const { className, isOn, ...inputProps } = props;

  return (
    <label className={classes(className, 'Switch')}>
      <input className="Switch__input" type="checkbox" checked={props.isOn} {...inputProps} />
      <div className="Switch__indicator" />
    </label>
  );
}

Switch.defaultProps = {
  isOn: false,
};

module.exports = Switch;
