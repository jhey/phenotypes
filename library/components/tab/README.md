### Props

| name | type | default | ignored when active | description |
| ---- | ---- | ------- | ----------- |
| `active` | boolean | false | | When true, the tab will appear in the active style and be rendered as a span instead of a anchor |
| `className` | string | | | Additional classes to apply to the Tab for custom styling. The component will automatically apply the `Tab` and `Tab--is-active` classes. |
| `href` | string | # | yes | For linking the somewhere |
| `onClick` | callback | | yes | Called when an inactive Tab is clicked. Can be used to change the `active` prop, if desired. |

### Modifiers

| class | default | responsive | notes |
| ----- | ------- | ---------- | ----- |
| `Tab--is-active` | false | false | The React component will apply this automatically when the `active` prop is true. |
