import React from 'react';

function GridExamples(props) {
  return (
    <div>
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

module.exports = GridExamples;
