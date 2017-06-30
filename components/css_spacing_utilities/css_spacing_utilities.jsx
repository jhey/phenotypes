import React from 'react';

function SpacingUtilities(props) {
  return (
    <div>
      <p><code className="text-color-hint">.p3.p4-sm.p5-md.p6-lg.p7-xl.m3.m4-sm.m5-md.m6-lg.m7-xl</code></p>
      <h4 style={{ background: '#232323' }} className="text-color-reversed-primary p3 p4-sm p5-md p6-lg p7-xl m3 m4-sm m5-md m6-lg m7-xl h6 h5-sm h4-md h3-lg h2-xl">🚀 I'm going to space (resize me)</h4>

      {/* noreintegrate move */}
      <h1>Grid</h1>
      <div className="container">
        <div className="row">
          <div className="col-2">col-2</div>
          <div className="col-8">col-8</div>
          <div className="col-2">col-2</div>
        </div>

        <div className="row">
          <div className="col-6 offset-3">col-6 offset-3</div>
        </div>
      </div>
    </div>
  );
}

module.exports = SpacingUtilities;
