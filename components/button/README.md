### Props

If a button has an `href` prop, the component renders an achor tag with `role=button`. Otherwise, the button is rendered as a true `button` HTML element.

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | | Class name for the root element. This should include any BEM modifier classes you wish to use.
| `disabled` | boolean | | If `true`, renders the button in a disabled state and adds an `aria-disabled` attribute for assistive technologies. For true buttons, sets the `disabled` attribute on the element. For anchor-style buttons, adds `tabIndex=-1` to prevent user interaction and disables click handling/pointer events.
| `href` | string | | Determines if the component renders an anchor-style button or a true button. If the `href` prop is `'#'`, `event.preventDefault()` is automatically called on click events.
| `onClick` | function | | Handler for click events. Called with the [SyntheticEvent](https://facebook.github.io/react/docs/events.html) as the only argument.
| `type` | one of: `'button'`, `'submit'`, `'reset'` | `'button'` | Passed `type` attribute for the `button` element. Ignored by anchor-style buttons.


Valid HTML attributes and additional event handlers for the `button` or `a` element tags may be safely passed as extra props. Passing a prop that is not a legal DOM attribute will cause React to trigger an [unknown prop warning](https://facebook.github.io/react/warnings/unknown-prop.html). Additionally, you should take care that the props you're passing make sense for the element type being rendered (for example, you should only be passing a `target` or `rel` prop to an anchor-style button).

*Note that there are [several attributes that work differently between React and HTML](https://facebook.github.io/react/docs/dom-elements.html). In these cases, attributes should be passed the React-y way.*


### Modifiers

| class | default | responsive | notes |
| ----- | ------- | ---------- | ----- |
| `Button--default` | true | true | |
| `Button--small` | false | true | |
| `Button--large` | false | true | |
| `Button--is-disabled` | false | false | If the component has a truthy `disabled` prop, this modifier is applied automatically. |
| `Button--primary` | false | false | |
| `Button--danger` | false | false | |
| `Button--link` | false | false | |

### Usage

Content for the button should be passed as children of the `Button` component:

Javascript:
```html
<Button>Click me!</Button>
<Button href="#">No, click me!</Button>
```
Rendered markup:
```html
<button aria-disabled="false" class="Button" type="button">Click me!</button>
<a href="#" aria-disabled="false" class="Button" role="button">No, click me!</a>
```
