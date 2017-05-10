Text utility classes allow you to quickly set an element's font size, weight, color, and case in accordance with design guidelines. See the demo above for examples.

Responsive versions are provided for text sizing, heading, uppercase utilities. The formats are:

```
.text-[value]-[breakpoint]
.h[value]-[breakpoint]
.uppercase-[value]-[breakpoint]
```

Above, `value` is a number (as shown in the demo), and the `breakpoint` suffix specifies the minimum screen size to apply the rule. For example, `.text-2.text-3-md` would render as 14px at `xs` and `sm` sizes and 16px at `md` and up. 

Related:

* [Typography](/docs/typography/)
* [Responsive breakpoints](/docs/layout/#responsive-breakpoints)
