### Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| `className` | string | | Class name for the root element.
| `currentIndex` | number | 0 | Zero-based index for the current step.
| `size` | number | | Total number of steps.
| `stepClassName` | string | | Class name for individual step elements.

### Usage

The width for step elements is configured using the `stepClassName` prop. To render a progress bar that expands to the width of its container, pass `stepClassName="flex-1"`.

Javascript:
```html
<ProgressBar currentIndex={1} size={3} stepClassName="flex-1"/>
```
Rendered markup:
```html
<ul class="ProgressBar">
  <li class="ProgressBar__step ProgressBar__step--active flex-1"></li>
  <li class="ProgressBar__step ProgressBar__step--active flex-1"></li>
  <li class="ProgressBar__step flex-1"></li>
</ul>
```
