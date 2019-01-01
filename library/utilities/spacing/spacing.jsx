import * as React from 'react';

function SpacingUtilities() {
  return (
    <div>
      <p>
        <code className="text-color-hint">
          .p3.p4-sm.p5-md.p6-lg.p7-xl.m3.m4-sm.m5-md.m6-lg.m7-xl
        </code>
      </p>
      <h4
        style={{ background: '#232323' }}
        className="text-color-reversed-primary p3 p4-sm p5-md p6-lg p7-xl m3 m4-sm m5-md m6-lg
                   m7-xl h6 h5-sm h4-md h3-lg h2-xl"
      >
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        I’m going to space (resize me)
      </h4>
    </div>
  );
}
export default SpacingUtilities;
