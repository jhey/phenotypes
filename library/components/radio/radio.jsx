const React = require('react');
const classes = require('classnames');

// TODO: add uncheckable option

function Radio(props) {
  const { className, children, ...htmlProps } = props;
  return (
    <label className={classes(
      className,
      'Radio',
      { 'Radio--is-disabled': htmlProps.disabled }
    )}>
      <input type="radio" className="Radio__input" { ...htmlProps } />
      <span className="Radio__indicator"></span>
      <span className="Radio__label">{ children }</span>
    </label>
  );
}

module.exports = Radio;
