The `Switch` component renders a specialized `<input type="checkbox">` that is useful for displaying an "on" or "off" selection.

### Props

| name            | type    | default | description                                                                     |
| --------------- | ------- | ------- | ------------------------------------------------------------------------------- |
| `className`     | string  |         | Class name for the root element.                                                |
| HTML attributes | various |         | e.g. `checked: true`, `disabled: true`, events, etc. are applied to the `input` |

### Usage

Javascript:

```html
<Switch checked />
```

Rendered markup:

```html
<label class="Switch">
  <input class="Switch__input" type="checkbox" checked />
  <div className="Switch__indicator">
    <div className="Switch__toggler"></div>
  </div>
</label>
```
