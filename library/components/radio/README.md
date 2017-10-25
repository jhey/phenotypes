### Radio

The `Radio` component bundles an `<input type="radio">` element with a label. It also hides the native radio control and provides a custom control
that appears more consistent across platforms.

#### Props

| name | type | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | Class name for the `<label>` container (which has the `.Radio` class). This should include any BEM modifier classes you wish to use. |
| HTML attributes | various | E.g. `name`, `checked`, `disabled`, events, etc. These are applied to the `input`. |
| children | node | The children are placed inside of the `.Radio__label` element. |

### Sizing Modifiers

| class | default |
| ----- | ------- |
| `Radio--small[-breakpoint]` ||
| `Radio--medium[-breakpoint]` | yes |
| `Radio--large[-breakpoint]` ||

### RadioGroup

The `RadioGroup` component bundles multiple `Radio` into a single field with one value.

#### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| `value` | string | null | The current selected value of the field |
| `disabled` | boolean | false | Set to true if all of the radio buttons should be disabled |
| `clearable` | false | Set to true if the user should be able to uncheck a checked radio |
| `onChange` | callback | | A callback that will be called with the current value every time it changes |
| `render` | callback | | Called when rendering the group. Should return the full markup up of the group. See below for details. |

#### `render` prop

The `render` callback should return the full markup of the group, *including* the container element. Using a callback gives you full control over the markup, so you can choose any kind of container, have super nested markup within the group, and have total control of the props used on each `Radio`. However, this means you need to handle checking the right radio button, disabling things, etc.

Here's an example that shows how to use the callback and its arguments.

```
<RadioGroup clearable render={({ value, disabled, onChange }) => (
  <form>
    <Radio
      className="d-block Radio--large"
      value="foo"
      checked={value === 'foo'}
      disabled={disabled}
      onChange={() => { onChange('foo'); }}> Foo
    </Radio>

    <Radio
      className="Radio--large"
      value="bar"
      checked={value === 'bar'}
      disabled
      onChange={() => { onChange('bar'); }}> I'm always disabled
    </Radio>
  </form>
)} />
```
