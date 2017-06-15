### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | | Class name for the root element. This should include any BEM modifier classes you wish to use.
| `controlId` | string | | The `id` for the `input` element described by the form group's `label` text. See below for notes on `controlId` and accessibility.
| `label` | string | | Label for form group.
| `hint` | string | | Helper text for form group.
| `error` | string | | Error message for form group. If present, form group will be rendered in an error state.

### Modifiers

| class | default | responsive | notes |
| ----- | ------- | ---------- | ----- |
| `FormGroup--default` | true | true | |
| `FormGroup--small` | false | true | |
| `FormGroup--large` | false | true | |
| `FormGroup--has-error` | false | false | If the component has a truthy `error` prop, this modifier is applied automatically. |

### Usage

Child input components should always use the `FormGroup__control` class so they can be sized/styled with the other group elements.

#### With a single control input

Passing the form group both a `label` and a `controlId` will render a `<label>` element with the `controlId` as its `for` attribute. This pattern should be used for form groups with a visible label and a single text-based input.

Javascript:
```html
<FormGroup
  controlId='dob'
  label='Birthday'
  hint='When were you born?'
>
  <input className="FormGroup__control" type="text" id="dob"/>
</FormGroup>
```
Rendered markup:
```html
<div class="FormGroup">
    <label for="dob" class="FormGroup__label">Birthday</label>
    <input class="FormGroup__control" type="text" id="dob"/>
    <div class="FormGroup__hint">When were you born?</div>
</div>
```

If the child input has its own label, the `controlId` prop should be omitted.

Javascript:
```html
<FormGroup label='Subscribe'>
  <label for="subscribe-true">Send me updates</label>
  <input className="FormGroup__control" type="checkbox" value="yes" id="subscribe-true"/>
</FormGroup>
```
Rendered markup:
```html
<div class="FormGroup">
    <label class="FormGroup__label">Subscribe</label>
    <label for="subscribe-true">Send me updates</label>
    <input class="FormGroup__control" type="checkbox" value="yes" id="subscribe-true"/>
</div>
```

#### With multiple inputs

If the form group has multiple inputs, the `controlId` prop can be omitted. In these cases, the child inputs should include an `aria-label` or `aria-labelledby` attribute to ensure accessibility:

Javascript:
```html
<FormGroup label='When are you available?'>
  <input className="FormGroup__control" type="text" aria-label="Start time"/>
  <input className="FormGroup__control" type="text" aria-label="End time"/>
</FormGroup>
```
Rendered markup:
```html
<div class="FormGroup">
    <label class="FormGroup__label">When are you available?</label>
    <input class="FormGroup__control" type="text" aria-label="Start time"/>
    <input class="FormGroup__control" type="text" aria-label="End time"/>
</div>
```
