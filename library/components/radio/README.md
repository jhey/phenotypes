### Radio

The `Radio` component bundles an `<input type="radio">` element with a label. It also hides the native radio control and provides a custom control
that appears more consistent across platforms.

#### Props

| name | type | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | Class name for the `<label>` container (which has the `.Radio` class). This should include any BEM modifier classes you wish to use. |
| HTML attributes | various | E.g. `name`, `checked`, `disabled`, events, etc. These are applied to the `input`. |
| children | node | The children are placed inside of the `.Radio__label` element. |

#### Sizing Modifiers

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
| `name` | string | | The `name` to use on the radio buttons |
| `value` | string | null | The current selected value of the group |
| `render` | callback | | Called when rendering the group. Should return the full markup up of the group. See below for details. |
| `onChange` | callback | | A callback that will be called with the current value every time it changes |
| `disabled` | boolean | false | Set to true if all of the radio buttons should be disabled |
| `clearable` | false | Set to true if the user should be able to uncheck a checked radio |

#### `render` prop

The `render` callback should return the full markup of the group, *including* the container element. Using a callback gives you full control over the markup. The callback’s argument is a managed `Radio` component that will automatically behave nicely in the group (e.g. will be checked when its value is selected, will be disabled when the group is disabled, and will automatically update the group's value when the user checks it).

```
<RadioGroup value="foo" clearable render={Radio => (
  <form>
    <Radio className="d-block Radio--large" value="foo">Foo</Radio>
    <Radio className="d-block Radio--large" value="bar">Bar</Radio>
  </form>
)} />
```
