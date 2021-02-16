---
title: Theming
status: draft
---

Phenotypes allows theming for certain aspects of the library. This is done via CSS custom properties that can be overridden in your own application.

## Browser support

CSS variables are [supported by all evergreen browsers](https://caniuse.com/#feat=css-variables). As with most modern web standards, Internet Explorer is not supported by default. If you must support IE you can use the [css-vars-ponyfill](https://jhildenbiddle.github.io/css-vars-ponyfill/#/) that will compile away the CSS variables at runtime. This ponyfill will work for all browsers that do not support CSS variables—not just IE.

## Custom themes and CSS variables

Phenotypes exposes a set of variables that will theme the library styles as well as the React components. These variables provide easy customization for commonly used values like colors for text and components. The variables that can be themed are listed below.

**Note:**
For several variables, there are **two** variable interdependent declarations. For example the `--focus-color` variable relies on the `--focus-color-rgb-values` variable. This allows styling of elements that are tied to each other with respect to color but don't necessarily need to be defined twice. Phenotypes allows you to customize focus color, but that also means that the box-shadow that provides the focus color "glow", must also match that customized focus color. In order to ensure that you don't need to define two different variables (`--focus-color` & `--focus-shadow-color`) we expose a top level variable that defines the rgb values that should be used for both. So in this case changing `--focus-color-rgb-values` will apply the change to both the focus color as well as the box-shadow that is tied to that focus color. **For this, we recommend setting the `-rgb-values` variables and allowing those values to update variables downstream.**

```css
:root {
  --font-family: "Sailec", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --text-color-primary: rgba(0, 0, 0, 0.86);
  --text-color-secondary: rgba(0, 0, 0, 0.7);
  --text-color-hint: rgba(0, 0, 0, 0.54);
  --text-color-primary-reversed: #fff;
  --text-color-secondary-reversed: rgba(255, 255, 255, 0.86);
  --text-color-hint-reversed: rgba(255, 255, 255, 0.76);

  --brand-color-primary-rgb-values: 99, 0, 152;
  --brand-color-primary: rgb(var(--brand-color-primary-rgb-values));
  --brand-color-accent-rgb-values: 158, 38, 191;
  --brand-color-accent: rgb(var(--brand-color-accent-rgb-values));
  --positive-color-rgb-values: 0, 133, 111;
  --positive-color: rgb(var(--positive-color-rgb-values));
  --negative-color-rgb-values: 171, 0, 43;
  --negative-color: rgb(var(--negative-color-rgb-values));
  --warning-color-rgb-values: 221, 44, 0;
  --warning-color: rgb(var(--warning-color-rgb-values));
  --interactive-color-rgb-values: 0, 94, 176;
  --interactive-color: rgb(var(--interactive-color-rgb-values));
  --error-color: var(--negative-color);

  --link-color: var(--interactive-color);
  --link-hover-color-rgb-values: 0, 43, 102;
  --link-hover-color: rgb(var(--link-hover-color-rgb-values));
  --link-color-reversed-rgb-values: 143, 231, 255;
  --link-color-reversed: rgb(var(--link-color-reversed-rgb-values));
  --step-progress-active-color-rgb-values: 158, 38, 191;
  --step-progress-active-color: rgb(var(--step-progress-active-color-rgb-values));
  --focus-color-rgb-values: 143, 231, 255;
  --focus-color: rgb(var(--focus-color-rgb-values));
  --widget-on-color: var(--positive-color);

  --step-progress-active-glow-opacity: 0.54;
  --text-input-glow-opacity: 0.41;
  --checkbox-focus-glow-opacity: var(--text-input-glow-opacity);
  --checkbox-checked-focus-glow-opacity: 0.24;
  --radio-focus-glow-opacity: var(--text-input-glow-opacity);
  --radio-checked-focus-glow-opacity: var(
    --checkbox-checked-focus-glow-opacity
  );
  --slider-focus-glow-opacity: 0.7;

  --message-success-bg-color-rgb-values: 0, 133, 111;
  --message-success-bg-color: rgb(var(--message-success-bg-color-rgb-values));
  --message-info-bg-color: var(--brand-color-primary);
  --message-danger-bg-color: var(--error-color);

  --danger-button-color: var(--negative-color);
  --danger-button-focus-color: #78001e;
  --danger-button-active-color: #450011;

  --primary-button-color: var(--interactive-color);
  --primary-button-focus-color: #002b66;
  --primary-button-active-color: #001633;

  --border-radius: 3px;
}
```

When overriding a variable you must define the `:root` rule. An example of setting an override is shown below:

```css
:root {
  --focus-color-rgb-values: 0, 128, 0;
}
```

This will change both the focus color to green as well as apply the correct changes to the box-shadow that is tied to the focus color.

**Remember that CSS variables follow normal CSS cascade rules, so whichever root variable declaration comes last is the one that will be applied.**

### Theming with SASS

Theming with SASS is the same as theming with plain CSS. When using SASS, Phenotypes provides you with some nice utilities to make theming these values easier. Specifically, the SASS `extract-rgb` function and `color-variable` mixin make it easier to work with color variables.

**`extract-rgb`** facilitates setting RGB using existing color variables.

```scss
// when overriding the rgb variable values for your own custom theme
// you will need to set it to a triplet of numbers that correspond to rgb
// values like so:

:root {
    --focus-color-rgb-values: 0, 128, 0;
}

// When using SASS, Phenotypes also provides a helper function that makes working
// with exisiting colors easier.
$green: #008000
:root {
    --focus-color-rgb-values: #{extract-rgb($green)};
}

// Using the `extract-rgb` helper is the equivalent of setting the
// triplet of numbers directly.
// The `extract-rgb` helper can also handle any type of color definition:
:root {
    // all of the following are equivalent
    --focus-color-rgb-values: 0, 128, 0;
    --focus-color-rgb-values: #{extract-rgb(#008000)};
    --focus-color-rgb-values: #{extract-rgb($green)};
    --focus-color-rgb-values: #{extract-rgb(rgb(0, 128, 0))};
    --focus-color-rgb-values: #{extract-rgb(hsl(120, 100, 25))};
}
```

**`color-variable`** facilitates authoring color variables pairs.

```scss
// If you are authoring a component that has a multiple elements to it
// that you would like to be themable you can use the `color-variable` mixin

:root {
  @include color-variable(--primary-button-color, #005EB0);
  // this mixin above will be compiled to the following CSS:
  --primary-button-color-rgb-values: 0, 94, 176;
  --primary-button-color: rgb(var(--primary-button-color-rgb-values));
}

// These compiled variables can then be used throughout the application
// wherever they are needed. When the rgb values are overridden, all of the
// places where the variables are used will be updated.

.PrimaryButton {
  background-color: var(--primary-button-color);
}

.PrimaryButton:hover {
  background-color: rgba(var(--primary-button-color-rgb-values), 0.5);
}
```
