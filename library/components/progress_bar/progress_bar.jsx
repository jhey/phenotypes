/* eslint-disable react/no-array-index-key */
const React = require('react');
const classes = require('classnames');

function ProgressBar({ className, stepClassName, progress, size }) {
  return (
    <ul className={classes('ProgressBar', className)}>
      {Array(...Array(size)).map((_, index) => (
        <li
          key={index}
          className={classes('ProgressBar__step', stepClassName, {
            'ProgressBar__step--active': index < progress,
          })}
        />
      ))}
    </ul>
  );
}

ProgressBar.defaultProps = {
  progress: 0,
  stepClassName: 'flex-1',
};

module.exports = ProgressBar;
