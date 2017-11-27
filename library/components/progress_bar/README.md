### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | | Class name for the root element.
| `progress` | number | 0 | Current progress for the bar.
| `size` | number | | Total number of steps.
| `stepClassName` | string | `flex-1` | Class name for individual step elements. Default option expands step elements so the root element will fill its container.

### Usage

The width for step elements is configured using the `stepClassName` prop. For example, to render a progress bar with 36px steps, pass `stepClassName="width-6"`.

Javascript:
```html
<ProgressBar progress={1} size={3} />
```
Rendered markup:
```html
<ul class="ProgressBar">
  <li class="ProgressBar__step ProgressBar__step--active flex-1"></li>
  <li class="ProgressBar__step flex-1"></li>
  <li class="ProgressBar__step flex-1"></li>
</ul>
```
