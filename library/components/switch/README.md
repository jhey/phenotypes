The `Switch` component renders a specialized `<input type="checkbox">` that is useful for displaying an "on" or "off" selection.

### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | | Class name for the root element.
| `isOn` | boolean | false | If the switch is toggled on. If set to `True`, the underlying `input` element will have a `checked=true` attribute.

Valid HTML attributes and event handlers for the input element (ex. `disabled`, `onChange`) may be safely passed as additional props. **These props will be applied to the `<input>` element, not the root element of the component.**

Passing a prop that is not a legal DOM attribute will cause React to trigger an [unknown prop warning](https://facebook.github.io/react/warnings/unknown-prop.html).

*Note that there are [several attributes that work differently between React and HTML](https://facebook.github.io/react/docs/dom-elements.html). In these cases, attributes should be passed the React-y way.*

### Usage

Javascript:
```html
<Switch isOn />
```
Rendered markup:
```html
<label class="Switch">
  <input class="Switch__input" type="checkbox" checked />
  <div className="Switch__indicator" />
</label>
```
