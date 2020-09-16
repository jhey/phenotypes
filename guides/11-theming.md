---
title: Theming
status: draft
---

Phenotypes allows theming for certain aspects of the library. This is done via css custom properties that can be overridden by you as the consumer in your own application.

## Browser Support

CSS variables are [supported by all evergreen browsers](https://caniuse.com/#feat=css-variables). As with most modern web standards Internet Explorer is not supported by default. If you must support IE you can use the [css-vars-ponyfill](https://jhildenbiddle.github.io/css-vars-ponyfill/#/) that will compile away the CSS variables at runtime. This ponyfill will work for all browsers that do not support CSS variables not just IE.

## Custom Themes and CSS Variables

Phenotypes exposes a set of variables that will theme the library styles as well as the React components. These variables provide easy customization for commonly used values like colors for text and components. The variables that we expose and can be themed are below.

**NOTE:**
For a good chunk of variables there are two variable declarations, with values from one relying on the other. For example the `--focus-color` variable relies on the `--focus-color-rgb-values` variable. This is done to allow styling of elements that are tied to each other color wise but don't necessarily need to be defined twice. Phenotypes allows you to customize focus color, but that also means that the box-shadow that provides the focus color "glow", must also match that customized focus color. In order to ensure that you don't need to define two different variables (`--focus-color` & `--focus-shadow-color`) we expose a top level variable that defines the rgb values that should be used for both. So in this case changing `--focus-color-rgb-values` will apply the change to both the focus color as well as the box-shadow that is tied to that focus color. **It is for this reason that we recommend setting the rgb-values and allowing those values to update variables downstream.**

```css
:root {
  --font-family: "Sailec", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif !default;
  --text-color-primary: rgba(0, 0, 0, 0.86);
  --text-color-secondary: rgba(0, 0, 0, 0.54);
  --text-color-hint: rgba(0, 0, 0, 0.41);
  --text-color-primary-reversed: #fff;
  --text-color-secondary-reversed: rgba(255, 255, 255, 0.76);
  --text-color-hint-reversed: rgba(255, 255, 255, 0.59);

  --brand-color-primary-rgb-values: 133, 59, 148;
  --brand-color-primary: rgb(var(--brand-color-primary-rgb-values));
  --brand-color-accent-rgb-values: 252, 134, 38;
  --brand-color-accent: rgb(var(--brand-color-accent-rgb-values));
  --positive-color-rgb-values: 45, 207, 161;
  --positive-color: rgb(var(--positive-color-rgb-values));
  --negative-color-rgb-values: 240, 77, 93;
  --negative-color: rgb(var(--negative-color-rgb-values));
  --warning-color-rgb-values: 252, 134, 38;
  --warning-color: rgb(var(--warning-color-rgb-values));
  --interactive-color-rgb-values: 22, 184, 224;
  --interactive-color: rgb(var(--interactive-color-rgb-values));
  --error-color: var(--negative-color);

  --link-color: var(--interactive-color);
  --link-hover-color-rgb-values: 0, 138, 179;
  --link-hover-color: rgb(var(--link-hover-color-rgb-values));
  --link-color-reversed-rgb-values: 127, 234, 255;
  --link-color-reversed: rgb(var(--link-color-reversed-rgb-values));
  --step-progress-active-color-rgb-values: 179, 93, 186;
  --step-progress-active-color: rgb(
    var(--step-progress-active-color-rgb-values)
  );
  --focus-color-rgb-values: 127, 234, 255;
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

  --message-success-bg-color-rgb-values: 3, 171, 140;
  --message-success-bg-color: rgb(var(--message-success-bg-color-rgb-values));
  --message-info-bg-color: var(--brand-color-primary);
  --message-danger-bg-color: var(--error-color);

  --danger-button-color: var(--negative-color);
  --danger-button-focus-color: #ee3548;
  --danger-button-active-color: #ec192e;

  --primary-button-color: var(--interactive-color);
  --primary-button-focus-color: #14a5c9;
  --primary-button-active-color: #118ead;

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

**It is important to remember that CSS variables follow normal CSS cascade rules, so whichever root variable declaration comes last is the one that will be applied.**

### Theming with SASS

Theming with SASS is not any different than theming with plain css. When using SASS Phenotypes does provide you with some quality of life utilities to make theming these values easier. Phenotypes provides you with a SASS `extract-rgb` function that makes it very easy to set the rgb-values variables. Ex:

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

Phenotypes also provides you with a mixin called `color-variable` to easily author those pairs of CSS variables similar to what we have defined. Ex:

```scss
// If you are authoring a component that has a multiple elements to it
// that you would like to be themable you can use the `color-variable` mixin

:root {
  @include color-variable(--primary-button-color, #008000);
  // this mixin above will be compiled to the following CSS:
  --primary-button-color-rgb-values: 0, 128, 0;
  --primary-button-color: rgb(var(--primary-button-color-rgb-values));
}

// these compiled variables can then be used throughout the application
// wherever they are needed. When the rgb values are overridden, all of the
// places where the variables are used will be updated.

.PrimaryButton {
  background-color: var(--primary-button-color);
}

.PrimaryButton:hover {
  background-color: rgba(var(--primary-button-color-rgb-values), 0.5);
}
```
