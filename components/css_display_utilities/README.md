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

See [responsive breakpoints](/docs/layout/#responsive-breakpoints) documentation.