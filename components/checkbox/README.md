The `Checkbox` component bundles an `<input type="checkbox">` element with a text label. It also hides the native checkbox control and provides a custom control that appears more consistent across platforms.

The implementation, which is based on [Bootstrap 4](https://v4-alpha.getbootstrap.com/components/forms/#checkboxes), uses an extra element and CSS to acheive the custom look, preserving accessibility.

The component provides responsive utility classes (see Modifiers below) that can be used to scale the custom checkbox control and the text label together.

### Props

| name | type | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | Class name for the `input` element. This should include any BEM modifier classes you wish to use. |
| HTML attributes | various | e.g. `checked: true`, `disabled: true`, events, etc. are applied to the `input` |

Valid HTML attributes and event handlers for the input element may be safely passed as additional props. **These props will be applied to the `<input>` element, not the root element of the component.**

Passing a prop that is not a legal DOM attribute will cause React to trigger an [unknown prop warning](https://facebook.github.io/react/warnings/unknown-prop.html).

*Note that there are [several attributes that work differently between React and HTML](https://facebook.github.io/react/docs/dom-elements.html). In these cases, attributes should be passed the React-y way.*

### Modifiers

| class | default | responsive | notes |
| ----- | ------- | ---------- | ----- |
| `Checkbox--small[-breakpoint]` | false | true | Responsive breakpoint token optional |
| `Checkbox--medium[-breakpoint]` | true | true | Responsive breakpoint token optional |
| `Checkbox--large[-breakpoint]` | false | true | Responsive breakpoint token optional |
| `Checkbox--is-disabled` | false | false | If the component has a truthy `disabled` prop, this modifier is applied automatically. |

For the responsive classes, append a responsive breakpoint token to apply the associated sizing styles at that breakpoint and up. For example, `.Checkbox--small .Checkbox--medium-sm .Checkbox--large-md` will give you a small size checkbox on `xs` screens, medium on `sm` screens, and large on `md` screens and up.