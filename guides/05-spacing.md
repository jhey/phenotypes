---
status: stable
---

> “90 percent of design is typography. And the other 90 percent is whitespace.” <br>[@zeldman](https://twitter.com/zeldman/status/679727437198929921)

Deciding where stuff goes is hard. Visual design can involve a lot of time spent nudging and tweaking the spacing and sizing of elements on a canvas. Frontend implementation work can involve at least as much time spent measuring all those values and trying to make sense of it all.

In the interest of sanity and consistency, Phenotypes provides the following **10 standard spacing values**:

## 0 &nbsp;·&nbsp; 5 &nbsp;·&nbsp; 7 &nbsp;·&nbsp; 11 &nbsp;·&nbsp; 16 &nbsp;·&nbsp; 24 &nbsp;·&nbsp; 36 &nbsp;·&nbsp; 53 &nbsp;·&nbsp; 79 &nbsp;·&nbsp; 119

These numbers use the same modular scale as the typography system. With the exception of 5 and 7, they are all 3 steps apart on the scale. Nine spacing options and zero might not seem like much flexibility, but this article layout uses just five of them:

![Spacing](/img/guides/spacing.png)

### How to use these numbers

Here are some ways to use the modular scale to decide on spacing and sizing:

* Use one of the numbers above as a padding, margin, or offset value
* Use one of the numbers above as an element's overall height/width and center its contents vertically/horizontally
* Use an aspect ratio from the modular scale along with a fixed dimension to pick the other other dimension. E.g. if you have an element that must be 800px wide and you need to pick a height for it, consider `800px × [(8/7)^-4] ≈ 470px`.
* Use the numbers above as guidelines (or keylines). E.g. if you have one column of variable-width thin labels and a second column of longer text, the first column could be inset 36px from the edge of the container, and the second column could be inset 119px from the edge.
* Mix and match these techniques as needed

### Yeah, but what if...

Phenotypes aims to balance simplicity and flexibility, but no spacing system can provide all the answers. If you need larger spacing or sizing values, just jump up the modular scale three steps at a time (177, 264, etc). If you need an intermediate value not provided, try to pick another number from the scale and **make a note of it** for your collaborators. If you absolutely need a multiple of 10 or some other number outside of the modular scale, that's okay too. You'll just have to answer to Nick. 🔔
