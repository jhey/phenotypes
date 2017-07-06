import React from 'react';

function GridExamples() {
  return (
    <div>
      <div className="container">
        <p>
          <strong>Responsive:</strong> add multiple classes with responsive suffixes to
          change column widths depending on breakpoint.
        </p>

        <div className="row">
          <div className="col-4 col-2-md">
            <div className="grid-example-content">
              .col-4.col-2-md
            </div>
          </div>
          <div className="col-4 col-8-md">
            <div className="grid-example-content">
              Resize me! I’m wider when the screen is wider.<br />.col-4.col-8-md
            </div>
          </div>
          <div className="col-4 col-2-md">
            <div className="grid-example-content">
              .col-4.col-2-md
            </div>
          </div>
        </div>

        <hr />

        <p><strong>Offsets</strong></p>

        <div className="row">
          <div className="col-6 offset-3">
            <div className="grid-example-content">.col-6.offset-3</div>
          </div>
        </div>

        <hr />

        <p>
          <strong>Custom gutter spacing</strong>:
          customize gutter widths by adding <code>.no-gutters</code> to
          your <code>.row</code> class, and then using <code>.px*</code> padding helpers on the <code>.col-*</code> classes.
        </p>
        <p>
          You’ll also need to add a corresponding negative <code>.mxn*</code> margin class on the <code>.row</code> to get rid of the extra padding on the sides.
        </p>

        <div className="row no-gutters mxn1">
          <div className="col-4 px1">
            <div className="grid-example-content">
              .col-4.px1
            </div>
          </div>
          <div className="col-4 px1">
            <div className="grid-example-content">
              .col-4.px1
            </div>
          </div>
          <div className="col-4 px1">
            <div className="grid-example-content">
              .col-4.px1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = GridExamples;
