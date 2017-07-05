const React = require('react');

function AlertExamples() {
  return (
    <div>
      <div className="Alert Alert--success">
        You did good.
      </div>

      <br />

      <div className="Alert Alert--info">
        I’m not very alarming but I get your attention.
      </div>

      <br />

      <div className="Alert Alert--danger">
        ...we’ve got a problem.
      </div>
    </div>
  );
}

module.exports = AlertExamples;
