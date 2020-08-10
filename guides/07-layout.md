---
status: draft
---

## Responsive breakpoints

Phenotypes encourages a mobile-first approach for both design and development. The responsive breakpoints and the grid system work together to create consistency across device sizes and product screens or states.

Phenotypes groups devices into the following buckets:

| Bucket      | Abbreviation | Min        | Max     | Devices          |
| ----------- | ------------ | ---------- | ------- | ---------------- |
| Extra small | `xs`         | **0**      | 599px   | Phones           |
| Small       | `sm`         | **600px**  | 899px   | Tablet portrait  |
| Medium      | `md`         | **900px**  | 1199px  | Tablet + desktop |
| Large       | `lg`         | **1200px** |  1499px | Desktop          |
| Extra large | `xl`         | **1500px** | ∞       | Big monitor      |

Since this is a mobile-first system, the breakpoints correspond to each range's minimum value (bold above): 600px, 900px, 1200px, 1500px. Note that the number of breakpoints and their names are the same as Bootstrap, but the breakpoint values are [optimized for bucketing](https://medium.freecodecamp.com/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862) rather than hewing to exact device sizes.

A given layout should, at a minimum, adapt at the 900px breakpoint. Often, it's helpful to create additional optimizations at the 600px and 1200px breakpoints, but it's sometimes unnecessary. The 1500px breakpoint is usually only helpful for big, splashy marketing pages or hero areas.

Within a range, a layout should stretch, flex, or re-flow as needed to make the best use of the space. For example, on an extra small screen, it's usually best to fill up all of the available horizontal space. On a larger screen, it might be better to fix the width of the layout and center it.

## Grid

TK
