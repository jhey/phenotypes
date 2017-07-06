import React from 'react';

function GridExamples() {
  return (
    <div className="grid-examples">
      <div className="container">
        <p>
          <strong>Responsive:</strong> add multiple classes with responsive suffixes to
          change column widths depending on breakpoint.
        </p>

        <div className="row">
          <div className="col-4 col-2-md">.col-4.col-2-md</div>
          <div className="col-4 col-8-md">
            Resize me! I'm wider when the screen is wider.<br />.col-4.col-8-md
          </div>
          <div className="col-4 col-2-md">.col-4.col-2-md</div>
        </div>

        <hr />

        <p><strong>Offsets</strong></p>

        <div className="row">
          <div className="col-6 offset-3">.col-6.offset-3</div>
        </div>

        <hr />

        <p>
          <strong>Custom gutter spacing</strong>:
          customize gutter widths by adding <code>.no-gutters</code> to
          your <code>.row</code> class, and then using spacing helpers on the <code>.col-*</code> classes.
        </p>

        <div className="row no-gutters">
          <div className="col-4 px6">.col-4.px6</div>
          <div className="col-4 px6">.col-4.px6</div>
          <div className="col-4 px6">.col-4.px6</div>
        </div>
      </div>
    </div>
  );
}

module.exports = GridExamples;
