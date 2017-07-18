Responsive display utility classes allow you to quickly set an element's `display` property to any valid value. The format is: 

```
.d-[value]-[breakpoint]
```

Above, `value` is one of:

* `none`
* `inline`
* `inline-block`
* `block`
* `table`
* `table-cell`
* `flex`
* `inline-flex`

The `breakpoint` suffix specifies the minimum screen size to apply the rule. For example, `.d-none.d-block-md` would hide the element at `xs` and `sm` sizes and show it at `md` and up.

Note: this feature is enabled by default and adds 95 lines of CSS (approx 2kb) to the compiled CSS. You can toggle it off by setting `$enable-display-utilities: false` before importing Phenotypes.

Adapted from Bootstrap 4.

Related:

* [Bootstrap display utilities](https://v4-alpha.getbootstrap.com/utilities/display-property/)
* [Responsive breakpoints](/docs/layout/#responsive-breakpoints)