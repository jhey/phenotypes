### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | | Class name for the `input` element. This should include any BEM modifier classes you wish to use. |
| `type` | valid HTML `type` for text-based `input` element | 'text' | |

The `type` prop must be one of the the allowed input types:
```javascript
color
date
datetime
datetime-local
email
month
number
password
search
tel
text
time
url
week
```

Valid HTML attributes* and event handlers for the input element may be safely passed as additional props. Passing a prop that is not a legal DOM attribute will cause React to trigger an [unknown prop warning](https://facebook.github.io/react/warnings/unknown-prop.html).

**Note that there are [several attributes that work differently between React and HTML](https://facebook.github.io/react/docs/dom-elements.html). In these cases, attributes should be passed the React-y way.*

### Modifiers

| class | default | responsive | notes |
| ----- | ------- | ---------- | ----- |
| `TextInput--small` | false | true | |
| `TextInput--medium` | true | true | |
| `TextInput--large` | false | true | |
| `TextInput--is-disabled` | false | false | If the component has a truthy `disabled` prop, this modifier is applied automatically. |
| `TextInput--has-error` | false | false | |
