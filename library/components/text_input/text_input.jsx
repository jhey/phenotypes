import * as React from 'react';
import classes from 'classnames';

const INPUT_TYPES = {
  color: 'color',
  date: 'date',
  datetime: 'datetime',
  'datetime-local': 'datetime-local',
  email: 'email',
  month: 'month',
  number: 'number',
  password: 'password',
  search: 'search',
  tel: 'tel',
  text: 'text',
  time: 'time',
  url: 'url',
  week: 'week',
};

function validateType(type) {
  if (INPUT_TYPES[type]) {
    return type;
  }

  throw new Error(`Unknown input type: ${type}`);
}

function TextInput(props) {
  const { className, type, ...htmlProps } = props;
  return (
    <input
      className={classes(className, 'TextInput')}
      type={validateType(type)}
      {...htmlProps}
    />
  );
}

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
