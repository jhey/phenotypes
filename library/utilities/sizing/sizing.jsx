import React from 'react';
import classes from 'classnames';

function Example({ size }) {
  return (
    <div>
      <p>
        <code className="text-color-hint">
          .width-{size}.height-{size}
        </code>
      </p>
      <div className={classes(`width-${size}`, `height-${size}`, 'sizing-example')} />
      <hr />
    </div>
  );
}

function SizingExamples() {
  return (
    <div>
      <Example size={0} />
      <Example size={1} />
      <Example size={2} />
      <Example size={3} />
      <Example size={4} />
      <Example size={5} />
      <Example size={6} />
      <Example size={7} />
      <Example size={8} />
      <Example size={9} />
      <Example size="full" />
    </div>
  );
}

module.exports = SizingExamples;
