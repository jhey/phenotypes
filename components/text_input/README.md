### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | | Class name for the `input` element. This should include any BEM modifier classes you wish to use.

Other supported HTML attributes:
```javascript
aria-*
autoComplete
autoFocus
form
disabled
id
name
pattern
placeholder
type
readOnly
required
size
maxLength
value
```

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

Supported event handlers:
```javascript
onBlur
onChange
onCopy
onCut
onFocus
onInput
onKeyDown
onKeyUp
onPaste
```

### Modifiers

| class | default | responsive | notes |
| ----- | ------- | ---------- | ----- |
| `TextInput--small` | false | true | |
| `TextInput--medium` | true | true | |
| `TextInput--large` | false | true | |
| `TextInput--is-disabled` | false | false | If the component has a truthy `disabled` prop, this modifier is applied automatically. |
| `TextInput--has-error` | false | false | |
