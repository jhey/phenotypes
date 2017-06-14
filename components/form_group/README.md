Form group component

### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| `phSize*` | one of: `'small'`, `'large'` | | Size variant for component, [see here](/docs/component-conventions/#phSize/) for more detail about `phSize*`.
| `className` | string | | Additional CSS class to apply to root `<div>` element.
| `controlId` | string | | The `id` for the `input` element described by the form group's `label` text. See below for notes on `controlId` and accessibility.
| `label` | string | | Label for form group.
| `hint` | string | | Helper text for form group.
| `error` | string | | Error message for form group. If present, form group will be rendered in an error state.

### Usage

#### With a single control input

Passing the form group both a `label` and a `controlId` will render a `<label>` element with the `controlId` as its `for` attribute. This pattern should be used for form groups with a visible label and a single text-based input.

Javascript:
```html
<FormGroup
  controlId='dob'
  label='Birthday'
  hint='When were you born?'
>
  <input type="text" id="dob"/>
</FormGroup>
```
Rendered markup:
```html
<div class="FormGroup">
    <label for="dob" class="FormGroup__label">Birthday</label>
    <input type="text" id="dob"/>
    <div class="FormGroup__hint">When were you born?</div>
</div>
```

If the child input has its own label, the `controlId` prop should be omitted.

Javascript:
```html
<FormGroup label='Subscribe'>
  <label for="subscribe-true">Send me updates</label>
  <input type="checkbox" value="yes" id="subscribe-true"/>
</FormGroup>
```
Rendered markup:
```html
<div class="FormGroup">
    <label class="FormGroup__label">Subscribe</label>
    <label for="subscribe-true">Send me updates</label>
    <input type="checkbox" value="yes" id="subscribe-true"/>
</div>
```

#### With multiple inputs

If the form group has multiple inputs, the `controlId` prop can be omitted. In these cases, the child inputs should include an `aria-label` or `aria-labelledby` attribute to ensure accessibility:

Javascript:
```html
<FormGroup label='When are you available?'>
  <input type="text" aria-label="Start time"/>
  <input type="text" aria-label="End time"/>
</FormGroup>
```
Rendered markup:
```html
<div class="FormGroup">
    <label class="FormGroup__label">When are you available?</label>
    <input type="text" aria-label="Start time"/>
    <input type="text" aria-label="End time"/>
</div>
```
