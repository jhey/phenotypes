const React = require('react');
const classes = require('classnames');

function Checkbox(props) {
  const { className, ...htmlProps } = props;
  return (
    <input
      className={classes(className, 'Checkbox', {
        'Checkbox--is-disabled': htmlProps.disabled,
      })}
      type='checkbox'
      {...htmlProps}
    />
  );
}

module.exports = Checkbox;
