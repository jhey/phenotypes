---
status: stable
---

Amino's standard typeface is **Sailec**. It was designed by Nico Inosanto and published by Swiss type foundry Type Dynamic in 2014. Sailec is classified as [geometric sans serif](https://www.fontshop.com/content/short-intro-to-geometric-sans). It aims to be highly neutral, which gives it a lot of versatility and a timeless quality. Despite its neutrality, it has an approachable and contemporary personality. Sailec looks great in large headlines, reads comfortably in body copy, and maintains clear legibility even at the smallest sizes.

### Weights

Sailec comes in seven weights, from hairline to black. For simplicity and consistency, Phenotypes uses just the **regular and bold** weights, plus their italic variants. The other weights are very effective in filling out the typography palette and can be used in graphics or print projects, but they should be avoided in product UI elements.

![Typefaces](/img/guides/typefaces.png)

### Core typography styles

The core type system is based on 16px body copy and uses the Phenotypes modular scale to specify all additional sizes, line heights, and margins. The core font sizes are 12, 14, 16, 18, 21, 24, 36, and 53px. Headings should be bold, while body copy should be regular weight. Typical recommended usage is shown here, although either weight can be used at any of the eight core sizes depending on your design needs (see the cheat sheet in the appendix below).

![Core typography](/img/guides/core-typography.png)

Avoid specifying font sizes that are between the core typography sizes (e.g. 20px), but feel free to go bigger or smaller. When going bigger, try to jump up the modular scale 3 steps at a time (79, 119, etc). When going smaller, take great care to make sure humans can still read your type.

### Line height

There's no single line height that works well for all font sizes. As type gets bigger, it naturally looks looser and wraps at fewer characters relative to smaller type in the same space. Accordingly, large headings need proportionally less line height than body copy.

![Line heights](/img/guides/line-heights.png)

Phenotypes prescribes **three line heights that depend on font size.** They are selected from the modular scale:

Font size | Modular scale steps | Line height
---|---|---
**< 12** | **3 steps** | **1.493**
12 | 3 steps | 1.493
14 | 3 steps | 1.493
16 | 3 steps | 1.493
18 | 3 steps | 1.493
21 | 3 steps | 1.493
**24** | **2 steps** | **1.306**
36 | 2 steps | 1.306
**53** | **1 step** | **1.143**
70 | 1 step | 1.143
> 70 | 1 step | 1.143

As always, use your best judgement. If you're designing an event poster with huge type, you might find yourself needing to use a line height of 1.0 or even tighter to achieve the right look. For product UI, presentations, and other general uses, the line heights above should serve you well.

### Line length (a.k.a. measure)

It's very important for readability to pick an appropriate line length—the number of characters at which text wraps to the next line. Somewhere around **66 characters per line** (including spaces) is considered to be an “ideal” line length for body copy. It's okay to go higher or lower, but be careful. Beyond 80 characters or so, it gets harder for the eye to find the beginning of the next line. At the other extreme, paragraphs narrower than about 40 characters per line can appear jagged and require the eye to zig zag back and forth.

On small mobile screens, line length is usually modulated by choosing font sizes, since the width of the device is fixed. On larger screens, there's more freedom to choose both a width and a font size. Pick a width from the modular scale or choose the right number of grid columns for the current responsive breakpoint to create a good reading experience.

### Letter spacing

Generally, letter spacing isn't required for small and medium type*. Type **larger than 50px** starts to feel too loose horizontally and should be given subtle and progressive negative letter spacing according to this formula: 

```
letter_spacing = -0.6 * [floor(font_size * 0.02)^2]
```

This formula does nothing for type smaller than `50px`. Larger type is tightened up progressively as it gets bigger. If you're working with huge type for a static or print graphic, feel free to tweak as needed and remember to kern individual letters.

![Letter spacing](/img/guides/letter-spacing.png)

\* The main exception to this rule is all caps text, which is explained below.

### All caps

All caps text should be used **sparingly**, perhaps for a short label or an article kicker. Limit your usage of all caps to **small type** and apply an **accent color**. All caps text should be **bold weight** and **letter spaced** according to this formula:

```
all_caps_letter_spacing = font_size * 0.143
```

![All caps letter spacing](/img/guides/all-caps-letter-spacing.png)

Don't use all caps for a heading, long sentence, or to convey emphasis in an paragraph (that's what bold is for).

### Colors and contrast

Most general purpose type is set in **various opacities of black or white**, although Amino brand colors can and should be used to create interest or emphasis. Keep in mind that in interactive products, bright blue colors should be reserved for links and other interactive elements. Green and red also tend to carry meaning (success and error, respectively), but can work if the context is clear.

![Colors](/img/guides/typography-colors.png)

These opacities of black match the brand gray palette when set against a white background, and vice versa for reversed type. For type, varying the opacity of black and white rather than using equivalent gray colors makes it possible to change an element's background color and preserve legibility and aesthetics (h/t [Material Design](https://material.io/guidelines/style/color.html#color-text-background-colors)). On the web, it's important to set text opacity using **rgba() and hsla()** and not opacity (more on that [here](http://stackoverflow.com/questions/13385492/css-opacity-vs-rgba-which-one-is-better)).

Text color contrast is a very important accessibility concern. Not everyone can read light gray type on white—a style designers tend to favor. You need to **consider color contrast** whenever you're reducing the prominence of text or setting text in some color against a background pattern, image, or color (including black or white). The [Web Content Accessibility Guidelines (WCAG) 2.0](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast) says the following:

> **4.3 Contrast (Minimum):** The visual presentation of [text](http://www.w3.org/TR/WCAG20/#textdef) and [images of text](http://www.w3.org/TR/WCAG20/#images-of-textdef) has a [contrast ratio](http://www.w3.org/TR/WCAG20/#contrast-ratiodef) of **at least 4.5:1,** except for the following: (Level AA)
> 
> * **Large Text:** [Large-scale](http://www.w3.org/TR/WCAG20/#larger-scaledef) text and images of large-scale text have a contrast ratio of **at least 3:1**;
> * **Incidental:** Text or images of text that are part of an inactive [user interface component](> http://www.w3.org/TR/WCAG20/#user-interface-componentdef), that are [pure decoration](http://> www.w3.org/TR/WCAG20/#puredecdef), that are not visible to anyone, or that are part of a picture that contains significant other visual content, have **no contrast requirement**.
> * **Logotypes:** Text that is part of a logo or brand name has no minimum contrast requirement.

Long story short: try to maintain a **minimum contrast ratio of 4.5**. A contrast ratio of **7 or higher is ideal**, as that's the cutoff for Level AAA accessibility (AAA is the highest level of accessibility compliance, but it's not [expected](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html) for any project to adhere to that level 100% of the time).

The contrast ratio between two colors is [calculated](http://www.w3.org/TR/WCAG20/#contrast-ratiodef) using their relative luminance values. Keep in mind that the contrast ratios for the opacities given above assume a pure black or white background. Contrast is reduced when text is overlaid on gray or any other color, like the purple shown below. 

![Colors](/img/guides/contrast-ratios.png)

Always carefully **check your contrast ratios** against the guidelines and select the appropriate colors or opacities to maintain legibility. There are some handy tools to make this easier, like this [web-based contrast ratio checker](http://leaverou.github.io/contrast-ratio/) and this [Sketch plugin](https://github.com/getflourish/Sketch-Color-Contrast-Analyser).

### Device considerations

If possible, try to choose font sizes that work well across devices. For Sailec, 16px happens to be a good body copy size on both small mobile device screens and desktop browsers, and 14px works well for tooltips and other asides. The largest heading size above (53px) is another story. On desktop, it looks great and packs a punch. On mobile, it tends to wrap on every word or two, which is generally not great for a page or article title. The sizes shown above are not meant to be tied semantically to `<h1>`, `<h2>`, etc. In a responsive design, it's very likely that an `<h1>` would be set at 36px on mobile and 53px on desktop.

### Guidelines and gotchas

Good typography requires a lot of attention to detail, and not just regarding font sizes and line heights. Get up to speed on all the best practices by reading through the [Flawless Typography Checklist](https://app.typographychecklist.com/). Here are some highlights:

* Use proper apostrophes and quotes (`’` and `”` instead of `'` and `"`), proper dashes (`—` instead of `--`), and other typographic characters (`×` instead of `x`) whenever possible.
* Use an “interpunct” or “middot” character (`·`) to separate items in a horizontal list instead of dashes, pipes, or bullets.

Remember to adhere to Amino's editorial style guide for grammar and punctuation, and always write good, concise copy.

### Fallbacks and font stacks

When Sailec is not available, use the native system font as a fallback. This mostly applies to web projects, but is also relevant for cloud-based collaborative document suites. For those, stick with a default sans-serif font (e.g. Helvetica or Arial) or pick a preset theme that is clean, modern, and minimal.

Here's a native system font stack borrowed from [Bootstrap 4](https://v4-alpha.getbootstrap.com/content/reboot/#native-font-stack):

```scss
$font-family-sans-serif:
  // Safari for OS X and iOS (San Francisco)
  -apple-system,
  // Chrome >= 56 for OS X (San Francisco), Windows, Linux and Android
  system-ui,
  // Chrome < 56 for OS X (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  "Roboto",
  // Basic web fallback
  "Helvetica Neue", Arial, sans-serif !default;
```

And here is the same stack as plain old CSS:

```scss
font-family: "Sailec", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
```

---

## Appendix

Download Sailec desktop font files here: <br>
https://www.dropbox.com/sh/fs08wz9lehqwvxi/AAB3BB2Rl9mvLWD5-cAekvkua?dl=0

Webfonts are here: <br>
https://www.dropbox.com/sh/h6dra5lsprd4qhf/AACp78jCNVK9oy-0ZWFHFWHya?dl=0

### Typography cheat sheet

![Cheat sheet](/img/guides/typography-cheat-sheet.png)