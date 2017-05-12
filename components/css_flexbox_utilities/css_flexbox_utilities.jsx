import React from 'react';

const boxStyle1 = { background: '#eee' };
const boxStyle2 = { background: '#dbdbdb' };


function Label(props) {
  var className = props.className || 'text-color-hint';
  return (
    <p><code className={className}>{props.children}</code></p>
  );
}

function Separator(props) {
	return (
		<hr className="my5" />
	);
}

function Demo(props) {
	const extraClassNames = props.extraClassNames || '';
	const allClassNames = props.classNames + ' ' + extraClassNames;
	const style = Object.assign({}, boxStyle1, {
		height: props.height || ''
	});

	return (
		<div>
			<Label>{ props.classNames.split(' ').map(className => '.' + className + ' ') }</Label>
			<div className={allClassNames} style={style}>{props.children}</div>
		</div>
	);
}

function InnerBox(props) {
	const text = props.children || 'Flex item';
	const classNames = 'p3 m1 ' + (props.className || '');
	return <div className={classNames} style={boxStyle2}>{text}</div>;
}

function FlexboxUtilities(props) {
  return (
    <div>
    	<h3>These display utilities are needed for flexbox</h3>
    	<p>Apply these display utilities to an element to create a flexbox container. This transforms direct children elements into flex items. Apply additional flex properties shown below to further customize.</p>
	    <Demo classNames="d-flex" extraClassNames="p3">I'm a flexbox container!</Demo>
    	<Separator />
    	<Demo classNames="d-inline-flex" extraClassNames="p3">I'm an inline flexbox container!</Demo>

    	<h3 className="mt7">Direction utilities (responsive)</h3>
    	<Demo classNames="d-flex flex-column flex-row-sm" extraClassNames="p2">
	    	<InnerBox>Flex item 1</InnerBox>
	    	<InnerBox>Flex item 2</InnerBox>
	    	<InnerBox>Flex item 3</InnerBox>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex flex-column-reverse flex-row-reverse-sm" extraClassNames="p2">
	    	<InnerBox>Flex item 1</InnerBox>
	    	<InnerBox>Flex item 2</InnerBox>
	    	<InnerBox>Flex item 3</InnerBox>
    	</Demo>

    	<h3 className="mt7">Justify utilities (responsive)</h3>
    	<Demo classNames="d-flex justify-content-start" extraClassNames="p2">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex justify-content-end" extraClassNames="p2">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex justify-content-center" extraClassNames="p2">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex justify-content-between" extraClassNames="p2">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex justify-content-around" extraClassNames="p2">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>

    	<h3 className="mt7">Align utilities (responsive)</h3>
    	<Demo classNames="d-flex align-items-start" height="119px">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex align-items-end" height="119px">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex align-items-center" height="119px">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex align-items-baseline" height="119px">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex align-items-stretch" height="119px">
	    	<InnerBox/><InnerBox/><InnerBox/>
    	</Demo>

    	<h3 className="mt7">Align self utilities (responsive)</h3>
    	TK

    	<h3 className="mt7">Combining utilities with auto margins</h3>
    	<Demo classNames="d-flex justify-content-end" extraClassNames="p2">
	    	<InnerBox className="mr-auto"><code>.mr-auto</code></InnerBox>
	    	<InnerBox/>
	    	<InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex justify-content-start" extraClassNames="p2">
	    	<InnerBox/>
	    	<InnerBox/>
	    	<InnerBox className="ml-auto"><code>.ml-auto</code></InnerBox>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex flex-column align-items-start" height="200px">
	    	<InnerBox className="mb-auto"><code>.mb-auto</code></InnerBox>
	    	<InnerBox/>
	    	<InnerBox/>
    	</Demo>
    	<Separator />
    	<Demo classNames="d-flex flex-column align-items-end" height="200px">
	    	<InnerBox/>
	    	<InnerBox/>
	    	<InnerBox className="mt-auto"><code>.mt-auto</code></InnerBox>
    	</Demo>

    </div>
  );
}

module.exports = FlexboxUtilities;
