---
status: stable
---

> "A modular scale, like a musical scale, is a prearranged set of harmonious proportions." <br>—Robert Bringhurst

A _modular scale_ is a set of numbers that are proportionally related to each other. Basically, you pick a base number and a multiplier to create a sequence. Then you use that sequence as much as possible to make design decisions. If you need to choose a font size or decide how much whitespace to use in a layout, let the modular scale be your guide. [Learn more about modular scales](https://alistapart.com/article/more-meaningful-typography).

For some reason, there seems to be a bit of mysticism surrounding modular scales. You don't have to look very hard to find flimflam about music theory, golden ratios, and other bits of magic that will make your designs “resonate” (a word borrowed from the article linked above). Take that stuff with a [grain of salt](http://www.lhup.edu/~dsimanek/pseudo/fibonacc.htm), but don't dismiss the power of having your design decisions rooted in some basic logic.

Once you get used to working with the modular scale, it begins to feel like the kind of liberating design constraint that facilitates creativity. Instead of arbitrarily nudging an element around one pixel (or ten pixels) at a time looking for that perfect spot, use a number from the modular scale. Chances are, one will feel right. Plus, your developer friends will love you forever.

Phenotypes uses a modular scale to create harmony and consistency throughout the design system. It's the basis for our typography, spacing, and even color system (for the grays, at least). The mechanics of the modular scale are explained below so that you can use it along with Phenotypes components to maintain that harmony and consistency in the products and assets you create.

Here's our modular scale:

![Modular scale chart](/img/guides/modular-scale-chart.png)

### Base number: 16

The first step in creating a modular scale is to pick a base number. Ours is 16px. That's the web's default font size, and it happens to be a good size for body copy on both mobile and desktop screens. Most icon systems are optimized to look good at 16x16 and pair well with 16px type. Safari on iOS will forcibly zoom the screen when an input field with text smaller than 16px is focused, suggesting that Apple's usability experts find that to be a threshold size for usability. 16 is also a power of 2, which gives it strong mystical value.

### Proportion: 8/7 (roughly 1.143)

This is the multiplier value that's used to create the rest of the numbers in the modular scale. Multiply or divide any number in the modular scale by this proportion, and you have another valid number (it's usually best to round to the nearest pixel). Multiply or divide the proportion by itself and you have another valid ratio. That's all there is to it.

Picking a good proportion turns out to be a pretty interesting exercise. One of the goals of a modular scale is to constrain the number of available options—reducing the need for designers to nudge and for developers to measure. A larger proportion like 1.5 would constrain the options, but it would also leave bigger gaps in a range that's especially useful for UI design. For example, you'd have no font sizes between 11px and 16px, and you would find yourself having to make a lot more one-off exceptions for design sanity.

The smaller 8/7 proportion provides more granularity, which is both a strength and a weakness. It should be able to cover more use cases with fewer one-off exceptions, but it creates too many small values too close together: 5, 6, 7, 8, and 9 are all included 😬.

Given the fundamental tradeoff between granularity and constraint, we go with granularity. If our modular scale requires designers to be making a lot of exceptions, then its utility is greatly diminished, because those exceptions are likely to be made in an arbitrary way and would require careful measurement and one-off styles to implement. On the other hand, if its excessive granularity can be managed by designers creating their own constraints within the constructs of the modular scale, then it's still a very useful tool.

Here's what that means. Try limiting yourself to using every other or every third number, and when you need to make an exception, go ahead and use one of the numbers in between. Phenotypes typography is based primarily on 3-step jumps (highlighted in purple above), but it uses interstitial increments as needed to create balanced, pleasing aesthetics at smaller sizes.

![Modular scale sample](/img/guides/modular-scale-spacing-example.png)

<p class="caption">Every decision in this composition was made using numbers from the modular scale (including the margins).</p>

### Things to keep in mind

Browsers are inconsistent in the way they handle fractional pixel values. Always round to the nearest integer when assigning pixel values. Yes, this means that the modular scale's mathematical purity suffers at smaller sizes, but that's better than having blurry stuff all over the screen.

Remember that the modular scale is just a tool. It can save you a lot of time and let you focus on more important things than whether something should be 93px or 94px away from another thing. It can also potentially get in your way for a particular decision. If you need to break free, make sure you're doing so thoughtfully, and document your decision clearly for any collaborators (e.g. frontend developers). Some math and simple rules can be tremendously helpful, but they're not a replacement for design intuition.

---

## Appendix

Here's a handy table that you can copy and paste or get tattooed on your arm:

| Exponent | Ratio  | Number |
| -------- | ------ | ------ |
| -8       | 0.344  | 5      |
| -7       | 0.393  | 6      |
| -6       | 0.449  | 7      |
| -5       | 0.513  | 8      |
| -4       | 0.586  | 9      |
| -3       | 0.67   | 11     |
| -2       | 0.766  | 12     |
| -1       | 0.875  | 14     |
| **0**    | **1**  | **16** |
| 1        | 1.143  | 18     |
| 2        | 1.306  | 21     |
| 3        | 1.493  | 24     |
| 4        | 1.706  | 27     |
| 5        | 1.95   | 31     |
| 6        | 2.228  | 36     |
| 7        | 2.546  | 41     |
| 8        | 2.91   | 47     |
| 9        | 3.326  | 53     |
| 10       | 3.801  | 61     |
| 11       | 4.344  | 70     |
| 12       | 4.965  | 79     |
| 13       | 5.674  | 91     |
| 14       | 6.485  | 104    |
| 15       | 7.411  | 119    |
| 16       | 8.47   | 136    |
| 17       | 9.68   | 155    |
| 18       | 11.063 | 177    |
| 19       | 12.643 | 202    |
| 20       | 14.449 | 231    |
| 21       | 16.513 | 264    |
| 22       | 18.872 | 302    |
| 23       | 21.568 | 345    |
| 24       | 24.649 | 394    |
| 25       | 28.171 | 451    |
| 26       | 32.195 | 515    |
| 27       | 36.794 | 589    |
| 28       | 42.051 | 673    |
| 29       | 48.058 | 769    |
| 30       | 54.924 | 879    |
| 31       | 62.77  | 1004   |
| 32       | 71.737 | 1148   |
| 33       | 81.985 | 1312   |
| 34       | 93.697 | 1499   |
