Responsive flexbox utilities allow you to quickly achieve a wide variety of layouts without needing a lot of custom CSS. Combine these with Phenotypes [spacing utilities](/components/detail/css-spacing-utilities) for great justice.

### Usage

See the demos above for implementation details. All utilities are responsive, so you can append breakpoint tokens (`-sm`, `-md`, `-lg`, or `-xl`) to target the corresponding screen sizes and up.

For example, `.flex-column.flex-row-sm` would render a vertical layout on `xs` screens and a horizontal layout on `sm` screens and larger.

### Etc.

Note: this feature is enabled by default and adds 359 lines of CSS (approx 10kb) to the compiled CSS. You can toggle it off by setting `$enable-flex-utilities: false` before importing Phenotypes.

Adapted from Bootstrap 4.

Related:

- [Bootstrap 4 flexbox utilities](https://v4-alpha.getbootstrap.com/utilities/flexbox/)
- [A Complete Guide to Flexbox on CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Responsive breakpoints](/docs/layout/#responsive-breakpoints)
