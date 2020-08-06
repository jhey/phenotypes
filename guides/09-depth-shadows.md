---
status: stable
title: Depth and Shadows
label: Depth and Shadows
---

The visual aesthetic of Phenotypes is mostly "flat" with a little bit of helpful skeuomorphism. To create a sense of clarity, we try to generally rely on whitespace, typographic hierarchy, and flat colors to provide structure in layouts. Too many gradients and shadows can easily make a design feel cluttered and look dated.

That said, a puristic adherance to "flat design" can lead to experiences that feel like prototypes, so Phenotypes has a system for conveying _depth_ on screen. Depth is a very useful tool for guiding a user through inherently layered experiences like modal dialogs, popovers, and side drawers. A primary call to action button can look a lot more clickable with a subtle shadow to lift it off the screen.

![Shadows](/img/guides/shadows.png)

The Phenotypes depth and shadow concepts are inspired by [Material Design's Elevation](https://material.io/guidelines/material-design/elevation-shadows.html) principles. Basically, user interface elements slot into prescribed layers in z-space ("z" is often designated as the depth axis). An element's depth determines how much shadow it gets—more shadow implies more distance from the element's container or the substrate of the screen.

![Depth comparison](/img/guides/depth-comparison.png)

Similarly to the spacing system, Phenotypes provides the following **5 depth values**, which are based on the modular scale: **4**, **7**, **11**, **16**, and **24**.

Conceptually, these values correspond to an element being lifted off its container by 4px, 7px, etc. An element that is sitting directly on its container (most elements) have a depth of 0.

### Constructing the shadow

An element with a non-zero depth value gets **three component drop shadows**, the parameters of which are calculated using (you guessed it) the modular scale.

|           | Shadow 1          | Shadow 2           | Shadow 3          |
| --------- | ----------------- | ------------------ | ----------------- |
| **x**     | 0                 | 0                  | 0                 |
| **y**     | `depth / (8/7)^3` | `depth / (8/7)^12` | 0                 |
| **blur**  | `depth * (8/7)^3` | `depth / (8/7)^9`  | `depth * (8/7)^3` |
| **alpha** | `0.14`            | `0.07`             | `0.07`            |

![Shadow construction](/img/guides/shadow-construction.png)

### Organizing the stack

Each depth value corresponds to a functional user interface layer. Most elements can exist at depth 0, so don't go overboard assigning every piece of a layout to different depths. When you need to use depth to clarify hierarchy or provide affordance, do keep elements organized into the following layers.

| Depth  | Function     | Examples                            |
| ------ | ------------ | ----------------------------------- |
| **4**  | Structural   | Cards, header                       |
| **7**  | Interactive  | CTA button                          |
| **11** | Transitional | Hovered CTA button, dragged element |
| **16** | Disclosures  | Popovers, menus                     |
| **24** | Mode switch  | Modal dialogs, side menu            |

An element can move up or down in z-space, perhaps as the result of user interaction. If possible, the element should move from one prescribed depth value to another, with a smooth transition between the two. A subtle change in size and y-position dramatically improves the illusion of a depth transition.

<img src="/img/guides/shadow-hover.gif" alt="Shadow hover" width="502" height="502">

---

## Appendix

Here are all the shadow parameters for the five depth values:

### Depth 4

|           | Shadow 1 | Shadow 2 | Shadow 3 |
| --------- | -------- | -------- | -------- |
| **x**     | 0        | 0        | 0        |
| **y**     | 3px      | 1px      | 0        |
| **blur**  | 6px      | 1px      | 6px      |
| **alpha** | `0.14`   | `0.07`   | `0.07`   |

### Depth 7

|           | Shadow 1 | Shadow 2 | Shadow 3 |
| --------- | -------- | -------- | -------- |
| **x**     | 0        | 0        | 0        |
| **y**     | 5px      | 1px      | 0        |
| **blur**  | 10px     | 2px      | 10px     |
| **alpha** | `0.14`   | `0.07`   | `0.07`   |

### Depth 11

|           | Shadow 1 | Shadow 2 | Shadow 3 |
| --------- | -------- | -------- | -------- |
| **x**     | 0        | 0        | 0        |
| **y**     | 7px      | 2px      | 0        |
| **blur**  | 16px     | 3px      | 16px     |
| **alpha** | `0.14`   | `0.07`   | `0.07`   |

### Depth 16

|           | Shadow 1 | Shadow 2 | Shadow 3 |
| --------- | -------- | -------- | -------- |
| **x**     | 0        | 0        | 0        |
| **y**     | 11px     | 3px      | 0        |
| **blur**  | 24px     | 5px      | 24px     |
| **alpha** | `0.14`   | `0.07`   | `0.07`   |

### Depth 24

|           | Shadow 1 | Shadow 2 | Shadow 3 |
| --------- | -------- | -------- | -------- |
| **x**     | 0        | 0        | 0        |
| **y**     | 16px     | 5px      | 0        |
| **blur**  | 36px     | 7px      | 36px     |
| **alpha** | `0.14`   | `0.07`   | `0.07`   |
