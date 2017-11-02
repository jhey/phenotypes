const React = require('react');
const classes = require('classnames');

function ProgressBar({ className, stepClassName, currentIndex, size }) {
  return (
    <ul className={classes('ProgressBar', className)}>
      {Array(...Array(size)).map((_, index) => (
        <li
          key={index}
          className={classes('ProgressBar__step', stepClassName, {
            'ProgressBar__step--active': index <= currentIndex,
          })}
        />
      ))}
    </ul>
  );
}

ProgressBar.defaultProps = {
  currentIndex: 0,
};

module.exports = ProgressBar;
