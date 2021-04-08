---
status: stable
---

### Primary colors

Amino's primary color palette consists of vibrant shades of **orange, red, purple, blue, and green**. The colors are inspired by the Amino logo, and the green is added to complete the set and support product UI needs.

![Primary color palette](/img/guides/colors.png)

If you need a shade that isn't shown here, **interpolate thoughtfully** between the two closest ones. Try doing so in a variety of color spaces (RGB, HSL, and HSB) and pick the one that works best. Here's an example:

- Say you need a color between `purple-200` and `purple-300`
- In HSB, those colors are `(287, 80, 75)` and `(279, 100, 60)`, respectively
- Interpolating equally between the two in HSB, we get `(285, 90, 68)`, or `#8611AD`

Tables are provided in the appendix with copyable hex, RGB, and HSL values.

### Grays

There are **eight gray values** plus pure black and white, making 10 grayscale colors. The grays are distributed between black and white using the modular scale multiplier. For text colors, use black or white with alpha transparency (via `rgba()` or `hsla()`). See [Typography]({{ path '/docs/typography' }}) for more.

![Grays](/img/guides/contrast-ratios.png)

### Gradients

Gradients fall into two families: monochromatic and polychromatic. The monochromatic gradients maintain a single hue, while the polychromatic ones transition between adjacent hues, like orange to red. Don't make arbitrary gradients between nonadjacent brand colors (e.g. green to red).

![Gradients](/img/guides/gradients.png)

**Use gradients sparingly, if at all.** Gradients tend to look best when applied to **very thin strips** or **large areas with a moderate aspect ratio** (e.g. squares, circles, and squarish rectangles) where they appear to simulate pleasant lighting.

![Gradient tips](/img/guides/gradient-tips.png)

For large areas of gradient fill, pin the **lighter color to the top-right corner** and the **darker color to the bottom-left corner**, simulating a consistent soft light source.

On elements that appear as strips, slabs, or bars, **don't apply gradients “against the grain,”** which creates a dated-looking rounded or beveled effect. For thin strips, apply the gradient **in parallel** with the long edge of the strip, and go from **one end to the other**. It's generally best to **avoid gradients for slabs and bars**, as they tend to distract and yank the eye.

---

## Appendix

[macOS color scheme file](https://www.dropbox.com/s/srimpzp6d3osxdk/Phenotypes%202.clr?dl=1) ← Download this file and put it in `~/Library/Colors`. It will show up in the system color picker that Keynote and other Mac apps use.

| Orange                                                     | Name       | Hex     | RGB           | HSL         |
| ---------------------------------------------------------- | ---------- | ------- | ------------- | ----------- |
| <div class="colorChip" style="background: #ffcc96;"></div> | orange-100 | #ffcc96 | rgb(255, 204, 150) | hsl(31, 100%, 79%) |
| <div class="colorChip" style="background: #fb7c27;"></div> | orange-200 | #fb7c27 | rgb(251, 124, 39)  | hsl(24, 96%, 57%)  |
| <div class="colorChip" style="background: #dd2c00;"></div> | orange-300 | #dd2c00 | rgb(221, 44, 0)    | hsl(12, 100%, 43%) |

| Red                                                        | Name    | Hex     | RGB           | HSL          |
| ---------------------------------------------------------- | ------- | ------- | ------------- | ------------ |
| <div class="colorChip" style="background: #ffa6b5;"></div> | red-100 | #ffa6b5 | rgb(255, 166, 181) | hsl(350, 100%, 83%) |
| <div class="colorChip" style="background: #ef304c;"></div> | red-200 | #ef304c | rgb(239, 48, 76)   | hsl(351, 86%, 56%)  |
| <div class="colorChip" style="background: #ab002b;"></div> | red-300 | #ab002b | rgb(171, 0, 43)    | hsl(345, 100%, 34%) |

| Purple                                                     | Name       | Hex     | RGB           | HSL          |
| ---------------------------------------------------------- | ---------- | ------- | ------------- | ------------ |
| <div class="colorChip" style="background: #f4b0ff;"></div> | purple-100 | #f4b0ff | rgb(244, 176, 255) | hsl(292, 100%, 85%) |
| <div class="colorChip" style="background: #9e26bf;"></div> | purple-200 | #9e26bf | rgb(158, 38, 191)  | hsl(287, 67%, 45%)  |
| <div class="colorChip" style="background: #630098;"></div> | purple-300 | #630098 | rgb(99, 0, 152)    | hsl(279, 100%, 30%) |
| <div class="colorChip" style="background: #3e006b;"></div> | purple-400 | #3e006b | rgb(62, 0, 107)    | hsl(275, 100%, 21%) |

| Blue                                                       | Name     | Hex     | RGB           | HSL          |
| ---------------------------------------------------------- | -------- | ------- | ------------- | ------------ |
| <div class="colorChip" style="background: #8fe7ff;"></div> | blue-100 | #8fe7ff | rgb(143, 231, 255) | hsl(193, 100%, 78%) |
| <div class="colorChip" style="background: #00a4e6;"></div> | blue-200 | #00a4e6 | rgb(0, 164, 230)   | hsl(197, 100%, 45%) |
| <div class="colorChip" style="background: #005eb0;"></div> | blue-300 | #005eb0 | rgb(0, 94, 176)    | hsl(208, 100%, 35%) |
| <div class="colorChip" style="background: #002b66;"></div> | blue-400 | #002b66 | rgb(0, 43, 102)    | hsl(215, 100%, 20%) |

| Green                                                      | Name      | Hex     | RGB           | HSL          |
| ---------------------------------------------------------- | --------- | ------- | ------------- | ------------ |
| <div class="colorChip" style="background: #8af2d5;"></div> | green-100 | #8af2d5 | rgb(138, 242, 213) | hsl(163, 80%, 75%)  |
| <div class="colorChip" style="background: #14c99c;"></div> | green-200 | #14c99c | rgb(20, 201, 156)  | hsl(165, 82%, 43%)  |
| <div class="colorChip" style="background: #00856F;"></div> | green-300 | #00856F | rgb(0, 133, 111)   | hsl(170, 100%, 26%) |

| Gray                                                       | Name     | Hex     | RGB           | HSL       |
| ---------------------------------------------------------- | -------- | ------- | ------------- | --------- |
| <div class="colorChip" style="background: #FFFFFF;"></div> | white    | #FFFFFF | rgb(255, 255, 255) | hsl(0, 0%, 100%) |
| <div class="colorChip" style="background: #F9F9F9;"></div> | gray-100 | #F9F9F9 | rgb(249, 249, 249) | hsl(0, 0%, 98%)  |
| <div class="colorChip" style="background: #EEEEEE;"></div> | gray-200 | #EEEEEE | rgb(238, 238, 238) | hsl(0, 0%, 93%)  |
| <div class="colorChip" style="background: #DBDBDB;"></div> | gray-300 | #DBDBDB | rgb(219, 219, 219) | hsl(0, 0%, 86%)  |
| <div class="colorChip" style="background: #C1C1C1;"></div> | gray-400 | #C1C1C1 | rgb(193, 193, 193) | hsl(0, 0%, 76%)  |
| <div class="colorChip" style="background: #969696;"></div> | gray-500 | #969696 | rgb(150, 150, 150) | hsl(0, 0%, 59%)  |
| <div class="colorChip" style="background: #777777;"></div> | gray-600 | #777777 | rgb(119, 119, 119) | hsl(0, 0%, 47%)  |
| <div class="colorChip" style="background: #4D4D4D;"></div> | gray-700 | #4D4D4D | rgb(77, 77, 77)    | hsl(0, 0%, 30%)  |
| <div class="colorChip" style="background: #232323;"></div> | gray-800 | #232323 | rgb(35, 35, 35)    | hsl(0, 0%, 14%)  |
| <div class="colorChip" style="background: #000000;"></div> | black    | #000000 | rgb(0, 0, 0)       | hsl(0, 0%, 0%)   |

| Black alpha                                                | Name      | Value | Usage     |
| ---------------------------------------------------------- | --------- | ----- | --------- |
| <div class="colorChip" style="background: #F9F9F9;"></div> | alpha-100 | 0.02  |
| <div class="colorChip" style="background: #EEEEEE;"></div> | alpha-200 | 0.07  |
| <div class="colorChip" style="background: #DBDBDB;"></div> | alpha-300 | 0.14  |
| <div class="colorChip" style="background: #C1C1C1;"></div> | alpha-400 | 0.24  |
| <div class="colorChip" style="background: #969696;"></div> | alpha-500 | 0.41  |
| <div class="colorChip" style="background: #777777;"></div> | alpha-600 | 0.54  | Hint      |
| <div class="colorChip" style="background: #4D4D4D;"></div> | alpha-700 | 0.70  | Secondary |
| <div class="colorChip" style="background: #232323;"></div> | alpha-800 | 0.86  | Primary   |

| White/reversed alpha                                       | Name               | Value   | Usage     |
| ---------------------------------------------------------- | ------------------ | ------- | --------- |
| <div class="colorChip" style="background: #232323;"></div> | alpha-reversed-100 | 0.14    |
| <div class="colorChip" style="background: #4D4D4D;"></div> | alpha-reversed-200 | 0.30    |
| <div class="colorChip" style="background: #777777;"></div> | alpha-reversed-300 | 0.46    |
| <div class="colorChip" style="background: #969696;"></div> | alpha-reversed-400 | 0.59    |
| <div class="colorChip" style="background: #C1C1C1;"></div> | alpha-reversed-500 | 0.76    | Hint      |
| <div class="colorChip" style="background: #DBDBDB;"></div> | alpha-reversed-600 | 0.86    | Secondary |
| <div class="colorChip" style="background: #EEEEEE;"></div> | alpha-reversed-700 | 0.93    |
| <div class="colorChip" style="background: #F9F9F9;"></div> | alpha-reversed-800 | 0.98    |
| <div class="colorChip" style="background: #FFFFFF;"></div> | white              | 1.0     | Primary   |
