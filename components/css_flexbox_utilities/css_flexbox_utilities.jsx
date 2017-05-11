import React from 'react';

function Label(props) {
  var className = props.className || 'text-color-hint';
  return (
    <p><code className={className}>{props.children}</code></p>
  );
}

function Separator(props) {
	return (
		<hr className="my6" />
	);
}

function Demo(props) {
	const boxStyle = { background: '#eee' };
	const extraClassNames = props.extraClassNames || [];
	extraClassNames.push(props.className);
	const allClassNames = extraClassNames.join(' ');

	return (
		<div>
			<Label>.{props.className}</Label>
			<div className={allClassNames} style={boxStyle}>{props.children}</div>
		</div>
	);
}

function FlexboxUtilities(props) {
  return (
    <div>
	    <Demo className="d-flex" extraClassNames={["p3"]}>I'm a flexbox container!</Demo>

    	<Separator />
    </div>
  );
}

module.exports = FlexboxUtilities;
