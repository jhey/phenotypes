Sizing utility classes are available for setting a fixed width or height on an element. The sizing
utilities share the same modular scale as the [spacing utilities](/components/detail/spacing).

Note: if you don't need fixed widths, [the grid system](/components/detail/grid) is available for
more detailed percentage-based widthery.

### Classes

```
.[property][size][-breakpoint]
```

* `property` is `width` or `height`
* `size` is a modular scale number from 0 to 9, or "-full" for 100%.
* `breakpoint` is an optional responsive breakpoint (`sm`, `md`, `lg`, `xl`)

Examples:

* `.width5`
* `.width-full`
* `.height3-sm`
* `.width3.width-full-xl`

Related:

* [Modular Scale](/docs/modular-scale/)
* [Spacing](/docs/spacing/)
* [Responsive breakpoints](/docs/layout/#responsive-breakpoints)
