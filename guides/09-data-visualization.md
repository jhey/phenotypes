---
title: Data Visualization
status: draft
---

Unless otherwise specified, this guide to data visualization standards and practices is specifically meant for data storytelling purposes. While we do visualize a ton of information in the product and in our day-to-day work, data storytelling has unique constraints. Having said that, if you want to make your analytics dashboard or board presentation look nicer, you're more than welcome to borrow these concepts—just keep in mind they don't always translate well to different media!

To get started, [check out this repo on GitHub](https://github.com/parelabs/amino-ggplot-theme).

### Contents

1. [Guiding principles](#guiding-principles)
1. [Colors](#colors)
1. [Constructing the chart](#constructing-the-chart)
1. [Examples](#examples)

---

## Guiding principles

1. **Balance clarity to the layperson with technical precision.** Healthcare is scary. Data is scary. We want to make both less scary. Sometimes, the most technically precise explanation (delivered with the best of intentions) is more likely to be misinterpreted by a layperson than a simpler, less technically precise explanation. Our audience is almost entirely laypeople.<br><br>
2. **Be transparent, truthful, and trustworthy.** The information we present in charts must be clearly decipherable and contain elements that engender trust (e.g. axes start at zero wherever possible). They should also not contain any analytical “black boxes” (e.g. internally derived metrics like CareMatch ranking). This is admittedly tough to enforce when the lines are blurred between product and analysis (e.g. cost product).<br><br>
3. **Maximize visual accessibility, especially for mobile screens.** More than 60% of our blog traffic comes from mobile. In practice, optimizing for mobile means thin margins, bold fonts, and lots of contrast. We also use a color scheme that is discernible to people with common types of colorblindness.


---

## Colors

Color palettes for data visualization need to be bold, distinct, perceptually accurate, and distinguishable to people with [common forms of color blindness](https://nei.nih.gov/health/color_blindness/facts_about). Thankfully, our Amino brand colors check all of these boxes.

![Color factors](/img/guides/color-factors.png)

### Factors/Categorical

**A few notes on factors:** Two factors are commonly used to distinguish patient gender. For the sake of consistency, blue designates male and orange designates female. Adding more than five factor colors to a chart is **strongly** discouraged.

### Continuous/Scalar

These ramps are examples of the chart legends. Color values for each step of the ramps are provided in the table below.

![Continuous scales](/img/guides/continuous-scales.png)

The diverging scale is most commonly used and is best for creating a distinction between low and high values, where blue is typically low and orange is typically high. The ramps are useful for emphasizing just the low values or just the high values. Context is key for selecting the appropriate color ramp—generally speaking, start with purple.

In some cases, coloring via quantiles creates an easier to understand continuous scale.

| |	Diverging | | Blue | | Orange | | Red | | Purple |
|---|---|---|---|---|---|---|---|---|---|
| <div class="colorChip" style="background: #16b8e0;"></div> | #16b8e0 | <div class="colorChip" style="background: #dbdbdb;"></div> | #dbdbdb | <div class="colorChip" style="background: #dbdbdb;"></div> | #dbdbdb | <div class="colorChip" style="background: #dbdbdb;"></div> | #dbdbdb | <div class="colorChip" style="background: #dbdbdb;"></div> | #dbdbdb |
| <div class="colorChip" style="background: #61bfdf;"></div> | #61bfdf | <div class="colorChip" style="background: #ced8dc;"></div> | #ced8dc | <div class="colorChip" style="background: #e3d2c9;"></div> | #e3d2c9 | <div class="colorChip" style="background: #e1cfce;"></div> | #e1cfce | <div class="colorChip" style="background: #d3cad4;"></div> | #d3cad4 |
| <div class="colorChip" style="background: #87c6de;"></div> | #87c6de | <div class="colorChip" style="background: #c2d4dc;"></div> | #c2d4dc | <div class="colorChip" style="background: #e9cbb8;"></div> | #e9cbb8 | <div class="colorChip" style="background: #e6c1c0;"></div> | #e6c1c0 | <div class="colorChip" style="background: #cbbacd;"></div> | #cbbacd |
| <div class="colorChip" style="background: #a6cddd;"></div> | #a6cddd | <div class="colorChip" style="background: #b3d1dd;"></div> | #b3d1dd | <div class="colorChip" style="background: #eec2a6;"></div> | #eec2a6 | <div class="colorChip" style="background: #e9b4b3;"></div> | #e9b4b3 | <div class="colorChip" style="background: #c3abc6;"></div> | #c3abc6 |
| <div class="colorChip" style="background: #c2d4dc;"></div> | #c2d4dc | <div class="colorChip" style="background: #a6cddd;"></div> | #a6cddd | <div class="colorChip" style="background: #f2b995;"></div> | #f2b995 | <div class="colorChip" style="background: #eca8a6;"></div> | #eca8a6 | <div class="colorChip" style="background: #ba9bbf;"></div> | #ba9bbf |
| <div class="colorChip" style="background: #dbdbdb;"></div> | #dbdbdb | <div class="colorChip" style="background: #95c9de;"></div> | #95c9de | <div class="colorChip" style="background: #f5b184;"></div> | #f5b184 | <div class="colorChip" style="background: #ef9999;"></div> | #ef9999 | <div class="colorChip" style="background: #b28cb8;"></div> | #b28cb8 |
| <div class="colorChip" style="background: #e9cbb8;"></div> | #e9cbb8 | <div class="colorChip" style="background: #87c6de;"></div> | #87c6de | <div class="colorChip" style="background: #f8a972;"></div> | #f8a972 | <div class="colorChip" style="background: #f08d8d;"></div> | #f08d8d | <div class="colorChip" style="background: #aa7bb1;"></div> | #aa7bb1 |
| <div class="colorChip" style="background: #f2b995;"></div> | #f2b995 | <div class="colorChip" style="background: #73c3df;"></div> | #73c3df | <div class="colorChip" style="background: #faa161;"></div> | #faa161 | <div class="colorChip" style="background: #f17e81;"></div> | #f17e81 | <div class="colorChip" style="background: #a16ca9;"></div> | #a16ca9 |
| <div class="colorChip" style="background: #f8a972;"></div> | #f8a972 | <div class="colorChip" style="background: #61bfdf;"></div> | #61bfdf | <div class="colorChip" style="background: #fb974f;"></div> | #fb974f | <div class="colorChip" style="background: #f16f75;"></div> | #f16f75 | <div class="colorChip" style="background: #985ca2;"></div> | #985ca2 |
| <div class="colorChip" style="background: #fb974f;"></div> | #fb974f | <div class="colorChip" style="background: #44bbe0;"></div> | #44bbe0 | <div class="colorChip" style="background: #fc8e3b;"></div> | #fc8e3b | <div class="colorChip" style="background: #f15f68;"></div> | #f15f68 | <div class="colorChip" style="background: #8f4c9b;"></div> | #8f4c9b |
| <div class="colorChip" style="background: #fc8626;"></div> | #fc8626 | <div class="colorChip" style="background: #16b8e0;"></div> | #16b8e0 | <div class="colorChip" style="background: #fc8626;"></div> | #fc8626 | <div class="colorChip" style="background: #f04d5d;"></div> | #f04d5d | <div class="colorChip" style="background: #853b94;"></div> | #853b94 |

<p class="caption">The best color scales align hue and luminosity with their respective numerical value. This requires some corrections for perceptual accuracy. For more background information, see [Picking a Colour Scale for Scientific Graphics](https://betterfigures.org/2015/06/23/picking-a-colour-scale-for-scientific-graphics/) by Doug McNeall. Perceptually accurate, intermediary colors are generated via [Chroma.js](http://gka.github.io/palettes).</p>

---

## Constructing the chart

To get started, you will need:

1. R
2. [Sketch](https://www.sketchapp.com/)
3. [Sailec font]({{ path '/docs/typography' }})
4. Amino `ggplot2` theme

Generate the chart area in R via `ggplot2`, export as a PNG via `ggsave`, and drop the resulting file into Sketch.

This process may seem disjointed, but it allows us to create charts in a consistent and easily reproducible manner—playing to the strengths of each platform. If an analysis needs to be updated or tweaked, the chart can easily be refreshed by re-running the code in R. Meanwhile, titles, labels, legends, footers, and other stylistic elements can be handled in Sketch.

### Layout guidelines

**Dimensions:** Default chart dimensions are 1080 by 1080 pixels. These dimensions were chosen as a sort of compromise between the [wildly inconsistent image sizes used across social media platforms](https://makeawebsitehub.com/social-media-image-sizes-cheat-sheet/). Depending on the content being presented, height can be altered to suit, but width must be fixed.

**Header:** With few exceptions, title and subtitle must not exceed 3 lines. Either the title is one line and the subtitle is two lines, or vice versa. This is to keep things neat and concise. Title is black and 40pt, subtitle is 54% transparent black and 37pt.

**Legends and callouts:** Text is black 25pt, which is the minimum readable size.

**Chart area:** The chart background color is `#EEEEEE` to provide contrast against white backgrounds used on our blog, social media, and most other sites.

**Footer:** The footer contains data source information, tagline, logo, and copyright. Text is 54% transparent black and 16pt. Data source information plus tagline must not exceed 2 lines. These can be combined as a single paragraph to accommodate. Footer background is `#DBDBDB`.

### Aesthetic guidelines

To create clear, understandable, and visually accessible charts, its best to think in layers. In order from bottom to top:

1. **Base layer.** The background color `#EEEEEE`
2. **Axis grids and text.**  A darker gray `#DBDBDB`
3. **Axis labels and zero lines.** Both black; axis text is 25pt bold, zero lines have weight of 3px.
4. **The data.** Either colored, or light gray.
5. **Highlighted data.** Emphasized with a stroke of 2px.
6. **Legends.** Pure black text, 25pt font.
7. **Callouts.** Pure black text, 25pt font. Also can include arrows and lines with a stroke weight of 2px.

![Data viz example 1](/img/guides/data-viz-example-1.png)

<p class="caption">This example contains nearly all of the concepts mentioned above.</p>


---

## Examples

Below is an evolving list of examples with commentary and links to their respective blog posts.

### Categorical data

Which axis you put your categorical variables on is an aesthetic choice. In this case, a long list of states is easier to read vertically vs. horizontally. The categorical axis grid is offset to create a table-like effect.

![Data viz example 2](/img/guides/data-viz-example-2.png)
<p class="caption">Source: [Announcing nationwide imaging cost estimates on Amino](https://amino.com/blog/announcing-nationwide-imaging-cost-estimates-on-amino/)</p>


### Time-series data

Line charts are most commonly used to display time-series data. Generally speaking, lines should be used for rate functions, and bars should be used for discrete values.

![Data viz example 6](/img/guides/data-viz-example-6.png)
<p class="caption">Source: [What data from 205 million private health insurance claims reveals about America’s opioid crisis](https://amino.com/blog/opioid-epidemic-data-opioid-use-disorder/)</p>

The top chart shows deaths per 100,000 residents as a line (rate function) while the bottom chart shows patients as bars (discrete values). This is also an example of a combination chart: one title and two subtitles, tied together with narrative callouts.

However, line and bar charts aren't the only way to show how data changes over time. In the example below, a heat map was employed to show when women received a specific type of ultrasound over the course of 308,000 pregnancies. Bands in gray represent weeks where only 100-200 patients were observed as receiving an ultrasound, while the darkest purple bands represent 10,000+ patient observations.

![Data viz example 3](/img/guides/data-viz-example-3.png)
<p class="caption">Source: [What to expect when you’re expecting pregnancy ultrasounds](https://amino.com/blog/pregnancy-ultrasound-cost-how-many-ultrasounds-during-pregnancy/)</p>

### Geographical data

The hexagonal tile map is used when trying to compare states by a scalar variable (like cost, population, or age) and the precise geographical location of each state is not important.

![Data viz example 5](/img/guides/data-viz-example-5.png)
<p class="caption">Source: [Here’s how much women could pay for preventive care under the AHCA](https://amino.com/blog/heres-how-much-women-could-pay-for-preventive-care-under-the-ahca/)</p>

Regular maps are used to display county-level data or similar.

![Data viz example 7](/img/guides/data-viz-example-7.png)
<p class="caption">Source: [What data from 205 million private health insurance claims reveals about America’s opioid crisis](https://amino.com/blog/opioid-epidemic-data-opioid-use-disorder/)</p>


### Relationships

A [chord diagram](https://en.wikipedia.org/wiki/Chord_diagram) is a useful way to visualize relationships in a matrix of data. In this example, the referring doctor is connected to the rendering doctor by a line representing the volume of referrals made that year—the thicker the line, the more referrals.

![Data viz example 4](/img/guides/data-viz-example-4.png)
<p class="caption">Source: [Data on 211 million referrals shows how doctors really work together](https://amino.com/blog/data-on-211-million-referrals-shows-how-doctors-really-work-together/)</p>
