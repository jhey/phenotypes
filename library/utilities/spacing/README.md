Spacing utilities and SASS variables allow you to quickly set an element's margin or padding to defined values that align with the Phenotypes modular scale.

### Responsive classes

Responsive class utilities are provided for as well, following this format:

```
.[property][sides][size]-[breakpoint]
```

- `property` is `m` or `p` for margin or padding, respectively
- `sides` (optional) is one of:
  _ `t`, `b`, `l`, or `r` for top/bottom/left/right
  _ `x` or `y` for horizontal/vertical \* omitted for all sides
- `size` is a number from 0 to 9 (corresponding to the variables above)
- `breakpoint` is an optional responsive breakpoint (`sm`, `md`, `lg`, `xl`)

Special cases:

- Margin auto values follow the pattern `.m[x,y]-auto-[breakpoint]`
- Negative spacing helpers for x-axis: `.mxn[size]-[breakpoint]`

Examples:

- `.mb4.mb5-md` adds 16px `margin-bottom` for `xs` up, and 24px for `md` up
- `.py1` adds 5px `padding-top` and `padding-bottom`

### SASS variables

| SASS variable | Space |
| ------------- | ----- |
| `$spacer-0`   | 0     |
| `$spacer-1`   | 5px   |
| `$spacer-2`   | 7px   |
| `$spacer-3`   | 11px  |
| `$spacer-4`   | 16px  |
| `$spacer-5`   | 24px  |
| `$spacer-6`   | 36px  |
| `$spacer-7`   | 53px  |
| `$spacer-8`   | 79px  |
| `$spacer-9`   | 119px |

### Etc.

Note: this feature is enabled by default and adds 1,835 lines of CSS (approx 42kb) to the compiled CSS. You can toggle it off by setting `$enable-spacing-utilities: false` before importing Phenotypes.

Adapted from Bootstrap 4.

Related:

- [Modular Scale](/docs/modular-scale/)
- [Spacing](/docs/spacing/)
- [Responsive breakpoints](/docs/layout/#responsive-breakpoints)
- [Bootstrap 4 spacing utilities](https://v4-alpha.getbootstrap.com/utilities/spacing/)
