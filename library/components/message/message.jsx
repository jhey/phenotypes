import React from 'react';

function MessageExamples() {
  return (
    <div>
      <div className="Message Message--success">You did good.</div>

      <br />

      <div className="Message Message--info">
        I’m not very alarming but I get your attention.
      </div>

      <br />

      <div className="Message Message--danger">...we’ve got a problem.</div>
    </div>
  );
}

export default MessageExamples;
