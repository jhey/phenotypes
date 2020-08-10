---
status: stable
---

### Primary colors

Amino's primary color palette consists of vibrant shades of **orange, red, purple, blue, and green**. The colors are inspired by the Amino logo, and the green is added to complete the set and support product UI needs.

![Primary color palette](/img/guides/colors.png)

If you need a shade that isn't shown here, first consider whether that's really true, and if it is, **interpolate thoughtfully** between the two closest ones. Try doing so in a variety of color spaces (RGB, HSL, and HSB) and pick the one that works best. Here's an example:

- Say you need a color between the darkest purple (`#2F0047`) and the next darkest (`#58166E`)
- In HSB, those colors are `(280, 100, 28)` and `(285, 80, 43)`, respectively
- Interpolating equally between the two in HSB, we get `(283, 90, 36)`, or `#44095C`

Tables are provided in the appendix with copyable hex, RGB, HSB, and HSL values.

### Grays

There are **eight gray values** plus pure black and white, making 10 grayscale colors. The grays are distributed between black and white using the modular scale multiplier. For text colors, use black or white with alpha transparency (via `rgba()` or `hsla()`). See [Typography]({{ path '/docs/typography' }}) for more.

![Grays](/img/guides/grays.png)

### Gradients

Gradients fall into two families: monochromatic and polychromatic. The monochromatic gradients maintain a single hue, while the polychromatic ones transition between adjacent hues, like orange to red. Don't make arbitrary gradients between nonadjacent brand colors (e.g. green to red).

![Gradients](/img/guides/gradients.png)

Don't overdo it with the gradients. For better or worse, bright gradients are currently a big trend, and they're not always applied to good effect. Gradients tend to look best when applied to **very thin strips** or **large areas with a moderate aspect ratio** (e.g. squares, circles, and squarish rectangles) where they appear to simulate pleasant lighting.

![Gradient tips](/img/guides/gradient-tips.png)

For large areas of gradient fill, pin the **lighter color to the top-right corner** and the **darker color to the bottom-left corner**, simulating a consistent soft light source.

On elements that appear as strips, slabs, or bars, **don't apply gradients “against the grain,”** which creates a dated-looking rounded or beveled effect. For thin strips, apply the gradient **in parallel** with the long edge of the strip, and go from **one end to the other**. It's generally best to **avoid gradients for slabs and bars**, as they tend to distract and yank the eye.

---

## Appendix

[macOS color scheme file](https://www.dropbox.com/s/rjca2ssg5i6bvq6/phenotypes.clr?dl=0) ← Put this in `~/Library/Colors` and it will show up in the system color picker that Keynote and other apps use.

| Orange                                                     | Name       | Hex     | RGB           | HSB         | HSL         |
| ---------------------------------------------------------- | ---------- | ------- | ------------- | ----------- | ----------- |
| <div class="colorChip" style="background: #FFC67F;"></div> | orange-100 | #FFC67F | 255, 198, 127 | 33, 50, 100 | 33, 100, 75 |
| <div class="colorChip" style="background: #FC8626;"></div> | orange-200 | #FC8626 | 252, 134, 38  | 27, 85, 99  | 27, 97, 57  |
| <div class="colorChip" style="background: #CD5000;"></div> | orange-300 | #CD5000 | 207, 79, 0    | 23, 100, 81 | 23, 100, 41 |
| <div class="colorChip" style="background: #992800;"></div> | orange-400 | #992800 | 153, 41, 0    | 16, 100, 60 | 16, 100, 30 |
| <div class="colorChip" style="background: #631000;"></div> | orange-500 | #631000 | 99, 17, 0     | 10, 100, 39 | 10, 100, 20 |

| Red                                                        | Name    | Hex     | RGB           | HSB          | HSL          |
| ---------------------------------------------------------- | ------- | ------- | ------------- | ------------ | ------------ |
| <div class="colorChip" style="background: #FF979A;"></div> | red-100 | #FF979A | 255, 150, 154 | 358, 41, 100 | 358, 100, 80 |
| <div class="colorChip" style="background: #F04D5D;"></div> | red-200 | #F04D5D | 240, 77, 93   | 354, 68, 94  | 354, 84, 62  |
| <div class="colorChip" style="background: #BD2B43;"></div> | red-300 | #BD2B43 | 189, 43, 68   | 350, 77, 74  | 350, 63, 46  |
| <div class="colorChip" style="background: #8C092C;"></div> | red-400 | #8C092C | 140, 10, 45   | 344, 93, 55  | 344, 87, 29  |
| <div class="colorChip" style="background: #4A001E;"></div> | red-500 | #4A001E | 74, 0, 31     | 335, 100, 29 | 335, 100, 14 |

| Purple                                                     | Name       | Hex     | RGB           | HSB          | HSL          |
| ---------------------------------------------------------- | ---------- | ------- | ------------- | ------------ | ------------ |
| <div class="colorChip" style="background: #E39AE3;"></div> | purple-100 | #E39AE3 | 227, 154, 227 | 300, 32, 89  | 300, 56, 75  |
| <div class="colorChip" style="background: #B35DBA;"></div> | purple-200 | #B35DBA | 178, 93, 186  | 295, 50, 73  | 295, 40, 55  |
| <div class="colorChip" style="background: #853B94;"></div> | purple-300 | #853B94 | 133, 59, 148  | 290, 60, 58  | 290, 43, 41  |
| <div class="colorChip" style="background: #58166E;"></div> | purple-400 | #58166E | 88, 22, 110   | 285, 80, 43  | 285, 67, 26  |
| <div class="colorChip" style="background: #2F0047;"></div> | purple-500 | #2F0047 | 48, 0, 71     | 280, 100, 28 | 280, 100, 14 |

| Blue                                                       | Name     | Hex     | RGB           | HSB          | HSL          |
| ---------------------------------------------------------- | -------- | ------- | ------------- | ------------ | ------------ |
| <div class="colorChip" style="background: #7FEAFF;"></div> | blue-100 | #7FEAFF | 128, 234, 255 | 190, 50, 100 | 190, 100, 75 |
| <div class="colorChip" style="background: #16B8E0;"></div> | blue-200 | #16B8E0 | 22, 184, 224  | 192, 90, 88  | 192, 82, 48  |
| <div class="colorChip" style="background: #008AB3;"></div> | blue-300 | #008AB3 | 0, 138, 179   | 194, 100, 70 | 194, 100, 35 |
| <div class="colorChip" style="background: #005678;"></div> | blue-400 | #005678 | 0, 86, 120    | 197, 100, 47 | 197, 100, 24 |
| <div class="colorChip" style="background: #00253F;"></div> | blue-500 | #00253F | 0, 37, 64     | 205, 100, 25 | 205, 100, 13 |

| Green                                                      | Name      | Hex     | RGB           | HSB          | HSL          |
| ---------------------------------------------------------- | --------- | ------- | ------------- | ------------ | ------------ |
| <div class="colorChip" style="background: #89F0CF;"></div> | green-100 | #89F0CF | 137, 240, 207 | 161, 43, 94  | 161, 77, 74  |
| <div class="colorChip" style="background: #2DCFA1;"></div> | green-200 | #2DCFA1 | 45, 207, 161  | 163, 78, 81  | 163, 64, 49  |
| <div class="colorChip" style="background: #03AB8C;"></div> | green-300 | #03AB8C | 3, 171, 140   | 169, 98, 67  | 169, 96, 34  |
| <div class="colorChip" style="background: #007868;"></div> | green-400 | #007868 | 0, 120, 104   | 172, 100, 47 | 172, 100, 24 |
| <div class="colorChip" style="background: #003F3E;"></div> | green-500 | #003F3E | 0, 64, 63     | 179, 100, 25 | 179, 100, 13 |

| Orange gradient                                            | Hex     | RGB          | HSB         | HSL         |
| ---------------------------------------------------------- | ------- | ------------ | ----------- | ----------- |
| <div class="colorChip" style="background: #FC8626;"></div> | #FC8626 | 252, 134, 38 | 27, 85, 99  | 27, 97, 57  |
| <div class="colorChip" style="background: #CD5000;"></div> | #CD5000 | 205, 80, 0   | 23, 100, 80 | 23, 100, 40 |

| Red gradient                                               | Hex     | RGB         | HSB         | HSL         |
| ---------------------------------------------------------- | ------- | ----------- | ----------- | ----------- |
| <div class="colorChip" style="background: #F04D5D;"></div> | #F04D5D | 240, 77, 93 | 354, 68, 94 | 354, 84, 62 |
| <div class="colorChip" style="background: #8C092C;"></div> | #8C092C | 140, 9, 44  | 344, 94, 55 | 344, 88, 29 |

| Purple gradient                                            | Hex     | RGB          | HSB         | HSL         |
| ---------------------------------------------------------- | ------- | ------------ | ----------- | ----------- |
| <div class="colorChip" style="background: #B25DBA;"></div> | #B25DBA | 178, 93, 186 | 295, 50, 73 | 295, 40, 55 |
| <div class="colorChip" style="background: #58166E;"></div> | #58166E | 88, 22, 110  | 285, 80, 43 | 285, 67, 26 |

| Blue gradient                                              | Hex     | RGB          | HSB          | HSL          |
| ---------------------------------------------------------- | ------- | ------------ | ------------ | ------------ |
| <div class="colorChip" style="background: #16B8E0;"></div> | #16B8E0 | 22, 184, 224 | 192, 90, 88  | 192, 82, 48  |
| <div class="colorChip" style="background: #005678;"></div> | #005678 | 0, 86, 120   | 197, 100, 47 | 197, 100, 24 |

| Green gradient                                             | Hex     | RGB          | HSB          | HSL          |
| ---------------------------------------------------------- | ------- | ------------ | ------------ | ------------ |
| <div class="colorChip" style="background: #2DCFA1;"></div> | #2DCFA1 | 45, 207, 161 | 163, 78, 81  | 163, 64, 49  |
| <div class="colorChip" style="background: #007868;"></div> | #007868 | 0, 120, 104  | 172, 100, 47 | 172, 100, 24 |

| Orange/red                                                 | Hex     | RGB          | HSB         | HSL         |
| ---------------------------------------------------------- | ------- | ------------ | ----------- | ----------- |
| <div class="colorChip" style="background: #FC8626;"></div> | #FC8626 | 252, 134, 38 | 27, 85, 99  | 27, 97, 57  |
| <div class="colorChip" style="background: #E64253;"></div> | #E64253 | 230, 66, 83  | 354, 71, 90 | 354, 77, 58 |

| Red/purple                                                 | Hex     | RGB          | HSB         | HSL         |
| ---------------------------------------------------------- | ------- | ------------ | ----------- | ----------- |
| <div class="colorChip" style="background: #F04D5D;"></div> | #F04D5D | 240, 77, 93  | 354, 68, 94 | 354, 84, 62 |
| <div class="colorChip" style="background: #892E9C;"></div> | #892E9C | 137, 46, 156 | 290, 71, 61 | 290, 54, 40 |

| Blue/purple                                                | Hex     | RGB          | HSB         | HSL         |
| ---------------------------------------------------------- | ------- | ------------ | ----------- | ----------- |
| <div class="colorChip" style="background: #16B8E0;"></div> | #16B8E0 | 22, 184, 224 | 192, 90, 88 | 192, 82, 48 |
| <div class="colorChip" style="background: #6E3094;"></div> | #6E3094 | 110, 48, 148 | 277, 68, 58 | 277, 51, 38 |

| Green/blue                                                 | Hex     | RGB          | HSB          | HSL          |
| ---------------------------------------------------------- | ------- | ------------ | ------------ | ------------ |
| <div class="colorChip" style="background: #1ADCAE;"></div> | #1ADCAE | 26, 220, 174 | 166, 88, 86  | 166, 79, 48  |
| <div class="colorChip" style="background: #0076AE;"></div> | #0076AE | 0, 118, 174  | 199, 100, 68 | 199, 100, 34 |

| Gray                                                       | Name     | Hex     | RGB           | HSB       | HSL       |
| ---------------------------------------------------------- | -------- | ------- | ------------- | --------- | --------- |
| <div class="colorChip" style="background: #FFFFFF;"></div> | white    | #FFFFFF | 255, 255, 255 | 0, 0, 100 | 0, 0, 100 |
| <div class="colorChip" style="background: #F9F9F9;"></div> | gray-100 | #F9F9F9 | 249, 249, 249 | 0, 0, 98  | 0, 0, 98  |
| <div class="colorChip" style="background: #EEEEEE;"></div> | gray-200 | #EEEEEE | 238, 238, 238 | 0, 0, 93  | 0, 0, 93  |
| <div class="colorChip" style="background: #DBDBDB;"></div> | gray-300 | #DBDBDB | 219, 219, 219 | 0, 0, 86  | 0, 0, 86  |
| <div class="colorChip" style="background: #C1C1C1;"></div> | gray-400 | #C1C1C1 | 193, 193, 193 | 0, 0, 76  | 0, 0, 76  |
| <div class="colorChip" style="background: #969696;"></div> | gray-500 | #969696 | 150, 150, 150 | 0, 0, 59  | 0, 0, 59  |
| <div class="colorChip" style="background: #777777;"></div> | gray-600 | #777777 | 119, 119, 119 | 0, 0, 47  | 0, 0, 47  |
| <div class="colorChip" style="background: #4D4D4D;"></div> | gray-700 | #4D4D4D | 77, 77, 77    | 0, 0, 30  | 0, 0, 30  |
| <div class="colorChip" style="background: #232323;"></div> | gray-800 | #232323 | 36, 36, 36    | 0, 0, 14  | 0, 0, 14  |
| <div class="colorChip" style="background: #000000;"></div> | black    | #000000 | 0, 0, 0       | 0, 0, 0   | 0, 0, 0   |

| Black alpha                                                | Name      | Value | Usage     |
| ---------------------------------------------------------- | --------- | ----- | --------- |
| <div class="colorChip" style="background: #F9F9F9;"></div> | alpha-100 | 0.02  |
| <div class="colorChip" style="background: #EEEEEE;"></div> | alpha-200 | 0.07  |
| <div class="colorChip" style="background: #DBDBDB;"></div> | alpha-300 | 0.14  |
| <div class="colorChip" style="background: #C1C1C1;"></div> | alpha-400 | 0.24  |
| <div class="colorChip" style="background: #969696;"></div> | alpha-500 | 0.41  | Hint      |
| <div class="colorChip" style="background: #777777;"></div> | alpha-600 | 0.54  | Secondary |
| <div class="colorChip" style="background: #4D4D4D;"></div> | alpha-700 | 0.70  |
| <div class="colorChip" style="background: #232323;"></div> | alpha-800 | 0.86  | Primary   |

| White/reversed alpha                                       | Name               | Value   | Usage     |
| ---------------------------------------------------------- | ------------------ | ------- | --------- |
| <div class="colorChip" style="background: #232323;"></div> | alpha-reversed-100 | 0.14    |
| <div class="colorChip" style="background: #4D4D4D;"></div> | alpha-reversed-200 | 0.30    |
| <div class="colorChip" style="background: #777777;"></div> | alpha-reversed-300 | 0.46    |
| <div class="colorChip" style="background: #969696;"></div> | alpha-reversed-400 | 0.59    | Hint      |
| <div class="colorChip" style="background: #C1C1C1;"></div> | alpha-reversed-500 | 0.76    | Secondary |
| <div class="colorChip" style="background: #DBDBDB;"></div> | alpha-reversed-600 | 0.86    |
| <div class="colorChip" style="background: #EEEEEE;"></div> | alpha-reversed-700 | 0.93    |
| <div class="colorChip" style="background: #F9F9F9;"></div> | alpha-reversed-800 | 0.98    |
| white                                                      | 1.0                | Primary |
