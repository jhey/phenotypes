const React = require('react');
const classes = require('classnames');

function Radio(props) {
  const { className, children, ...htmlProps } = props;
  return (
    <label className={classes(className, 'Radio')}>
      <input type="radio" className="Radio__input" { ...htmlProps } />
      <span className="Radio__indicator"></span>
      <span className="Radio__label">{ children }</span>
    </label>
  );
}

module.exports = Radio;
