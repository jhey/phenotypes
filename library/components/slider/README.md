### Slider

The `Slider` component is a range control with mouse, touch, and keyboard support. It renders with an `<input type="hidden">`, in case it needs to be embedded in a vanilla form.

Keys that interact with the slider when focused:

`↑`, `→`, `↓`, `←`, `page up`, `page down`, `home`, and `end`

#### Focus behavior

The slider is focused when interacting with it (by clicking, touching, or tabbing to it), and will fire the onFocus & onBlur events as expected. Visually, it does not appear focused when clicking or touching (since it's obvious to the user they are interacting with it & the style is distracting).

#### Props

| name          | type     | default | description                                                                                                 |
| ------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `className`   | string   |         | Class names for the root element (which has the `.Slider` class)                                            |
| `disabled`    | boolean  | false   | When true, the slider appears disabled and is not interactive                                               |
| `max`         | number   | 100     | The highest possible number that `value` can be                                                             |
| `min`         | number   | 0       | The lowest possible number that `value` can be                                                              |
| `name`        | string   |         | Added to the the hidden `<input>`                                                                           |
| `onChange`    | callback |         | Called when the value changes (the value does change continuously while the slider is dragged)              |
| `onDragEnd`   | callback |         | Called once when the slider stops dragging                                                                  |
| `onDragStart` | callback |         | Called once when the slider starts dragging                                                                 |
| `required`    | boolean  |         | Added to the hidden `<input>`                                                                               |
| `step`        | number   | 1       | `value` is restricted to increments of this number                                                          |
| `tabIndex`    | number   | 0       | Applied to the root element so the slider can be focused using the keyboard. Change to -1 to disable that   |
| `value`       | number   |         | Current value (you need to pass this back down when `onChange` is called, so the slider can appear to move) |
| `...other`    |          |         | All other props (such as `onFocus`) are applied to the root element                                         |

#### Modifiers

| class                 | notes                                        |
| --------------------- | -------------------------------------------- |
| `Slider--is-disabled` | Automatically applied by the react component |
| `Slider--is-focused`  | Automatically applied by the react component |
