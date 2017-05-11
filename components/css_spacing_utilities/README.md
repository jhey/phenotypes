Spacing utilities and SASS variables allow you to quickly set an element's margin or padding to defined values that align with the Phenotypes modular scale. 

### SASS variables

| Sass variable | Space |
| -------- | ----- |
| `$spacer-0` | 0 |
| `$spacer-1` | 5px |
| `$spacer-2` | 7px |
| `$spacer-3` | 11px |
| `$spacer-4` | 16px |
| `$spacer-5` | 24px |
| `$spacer-6` | 36px |
| `$spacer-7` | 53px |
| `$spacer-8` | 79px |
| `$spacer-9` | 119px |


### Responsive classes

Responsive class utilities are provided for as well, following this format:

```
.[property][sides][size]-[breakpoint]
```

* `property` is `m` or `p` for margin or padding, respectively
* `sides` (optional) is one of:
	* `t`, `b`, `l`, or `r` for top/bottom/left/right
	* `x` or `y` for horizontal/vertical
	* omitted for all sides
* `size` is a number from 0 to 9 (corresponding to the variables above)
* `breakpoint` is an optional responsive breakpoint (`sm`, `md`, `lg`, `xl`)
* Margin auto values are supported and follow the same syntax (e.g. `.mx-auto-md`)

Examples:

* `.mb4.mb5-md` adds 16px `margin-bottom` for `xs` up, and 24px for `md` up
* `.py1` adds 5px `padding-top` and `padding-bottom`

### Related

* [Modular Scale](/docs/modular-scale/)
* [Spacing](/docs/spacing/)
* [Responsive breakpoints](/docs/layout/#responsive-breakpoints)
