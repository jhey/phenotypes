---
status: draft
---

## phSize

All components with sized variants are configured using `phSize*` props. A component's base `phSize` prop selects the size variant for the component regardless of screen size. `phSize` props with with breakpoint suffixes (`phSizeMd`, `phSizeLg`, etc.) are used to apply responsive classes. For example, a component with props `{ phSize: 'small', phSizeMd: 'large' }` will render the `small` variant by default and the `large` variant on medium or larger screens.
