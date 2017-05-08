import React from 'react';

function DisplayUtilities(props) {
  return (
    <div>
      <div className="d-none">Hidden at xs size and up</div>
      <div className="d-none-sm">Hidden at sm size and up</div>
      <div className="d-none-md">Hidden at md size and up</div>
      <div className="d-none-lg">Hidden at lg size and up</div>
      <div className="d-none-xl">Hidden at xl size and up</div>
      <br/>
      <div className="d-flex-sm">
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
      </div>
    </div>
  );
}

module.exports = DisplayUtilities;
