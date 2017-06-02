import React from 'react';

function Label(props) {
  var className = props.className || 'text-color-hint';
  return (
    <p><code className={className}>{props.children}</code></p>
  );
}

function TextUtilities(props) {
  return (
    <div>
      <h4>Text and heading sizes</h4>
      <div className="d-flex-sm">
        <div className="mr7-sm">
          <Label>.text-1<br/>@include text-1</Label>
          <p className="text-1">Regular 12px</p>
          <hr />
          <Label>.text-2<br/>@include text-2</Label>
          <p className="text-2">Regular 14px</p>
          <hr />
          <Label>.text-3<br/>@include text-3</Label>
          <p className="text-3">Regular 16px</p>
          <hr />
          <Label>.text-4<br/>@include text-4</Label>
          <p className="text-4">Regular 18px</p>
          <hr />
          <Label>.text-5<br/>@include text-5</Label>
          <p className="text-5">Regular 21px</p>
          <hr />
          <Label>.text-6<br/>@include text-6</Label>
          <p className="text-6">Regular 24px</p>
          <hr />
          <Label>.text-7<br/>@include text-7</Label>
          <p className="text-7">Regular 36px</p>
          <hr />
          <Label>.text-8<br/>@include text-8</Label>
          <p className="text-8">Regular 53px</p>
        </div>
        <div>
          <Label>.text-1.text-weight-bold<br/>@include text-1($font-weight-bold)</Label>
          <p className="text-1 text-weight-bold">Bold 12px</p>
          <hr />
          <Label>.text-2.text-weight-bold<br/>@include text-2($font-weight-bold)</Label>
          <p className="text-2 text-weight-bold">Bold 14px</p>
          <hr />
          <Label>h6, .h6<br/>@include text-3($font-weight-bold)</Label>
          <p className="h6">Bold 16px</p>
          <hr />
          <Label>h5, .h5<br/>@include text-4($font-weight-bold)</Label>
          <p className="h5">Bold 18px</p>
          <hr />
          <Label>h4, .h4<br/>@include text-5($font-weight-bold)</Label>
          <p className="h4">Bold 21px</p>
          <hr />
          <Label>h3, .h3<br/>@include text-6($font-weight-bold)</Label>
          <p className="h3">Bold 24px</p>
          <hr />
          <Label>h2, .h2<br/>@include text-7($font-weight-bold)</Label>
          <p className="h2">Bold 36px</p>
          <hr />
          <Label>h1, .h1<br/>@include text-8($font-weight-bold)</Label>
          <p className="h1">Bold 53px</p>
        </div>
      </div>

      <hr className="my7" />

      <h4>Uppercase</h4>
      <Label>.uppercase-1<br/>@include uppercase-1</Label>
      <p className="uppercase-1">Uppercase 9px</p>
      <hr />
      <Label>.uppercase-2<br/>@include uppercase-2</Label>
      <p className="uppercase-2">Uppercase 11px</p>
      <hr />
      <Label>.uppercase-3<br/>@include uppercase-3</Label>
      <p className="uppercase-3">Uppercase 12px</p>

      <hr className="my7" />

      <h4>Colors</h4>
      <div className="d-flex-sm">
        <div className="mr7-sm p5">
          <Label>.text-color-primary<br/>$text-color-primary</Label>
          <p className="text-color-primary">◼︎ Primary color</p>
          <hr />
          <Label>.text-color-secondary<br/>$text-color-secondary</Label>
          <p className="text-color-secondary">︎◼︎ Secondary color</p>
          <hr />
          <Label>.text-color-hint<br/>$text-color-hint</Label>
          <p className="text-color-hint">◼︎ Hint color</p>    
        </div>
        <div className="p5" style={{ background: '#232323' }}>
          <Label className="text-color-reversed-hint">.text-color-reversed-primary<br/>$text-color-reversed-primary</Label>
          <p className="text-color-reversed-primary">◼︎ Reversed primary color</p>
          <hr className="hr-reversed" />
          <Label className="text-color-reversed-hint">.text-color-reversed-secondary<br/>$text-color-reversed-secondary</Label>
          <p className="text-color-reversed-secondary">◼︎ Reversed secondary color</p>
          <hr className="hr-reversed" />
          <Label className="text-color-reversed-hint">.text-color-reversed-hint<br/>$text-color-reversed-hint</Label>
          <p className="text-color-reversed-hint">◼︎ Reversed hint color</p>    
        </div>
      </div>

      <hr className="my7" />

      <h4>Weight &amp; style</h4>
      <Label>.text-weight-normal, .text-style-normal<br/>$font-weight-normal</Label>
      <p className="text-weight-normal text-style-normal">Normal weight and style</p>
      <hr />
      <Label>.text-weight-bold<br/>$font-weight-bold</Label>
      <p className="text-weight-bold">Bold weight</p>
      <hr />
      <Label>.text-style-italic</Label>
      <p className="text-style-italic">Italic style</p>
      <hr />
      <Label>.text-weight-bold.text-style-italic</Label>
      <p className="text-style-italic text-weight-bold">Bold weight and italic style</p>


      <hr className="my7" />

      <h4>Responsive demo</h4>
      <Label>.text-1.text-2-sm.text-3-md.text-4-lg.text-5-xl</Label>
      <p className="text-1 text-2-sm text-3-md text-4-lg text-5-xl">Resize to see me change</p>
    </div>
  );
}

module.exports = TextUtilities;
