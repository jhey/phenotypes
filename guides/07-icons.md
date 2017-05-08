---
status: stable
---

Phenotypes uses the attractive and comprehensive **[Nucleo](https://nucleoapp.com/) icon set**. Nucleo's 8,000+ icons are vector based, so they're infinitely scalable. Even so, Nucleo provides optimized graphics for five sizes: 16px, 24px, 32px, 48px, and 64px. The smaller icons progressively sacrifice detail for clarity and recognizability, while the larger icons are richer and more visually interesting.

![Icons](/img/guides/icons.png)

When scaling icons, scale up from the **closest smaller size**. E.g. if you need a 36px icon, scale up from 32px; don't scale down from 48px, as there might be details in the larger icon that don't look good when shrunk. 16px icons can often be scaled down to 14px or even smaller (just make sure it's not turning to mush).

### Styles

Nucleo comes in three flavors: outline, glyph (solid), and color. The 16px size only comes in a fourth “mini” flavor, which are essentially size-optimized solid glyphs. At 24px and larger sizes, the **outline style is preferred**, with a **2px stroke weight** and **rounded caps and corners** (more on that in a bit). **Avoid using the full-color icons**, as they don't quite work with the brand color palette.

### Apps

Nucleo provides a **Mac app and a web app** for icon management. When using these apps, be sure the outline style icons are set to use a 2px stroke weight and rounded caps/corners. 

The Mac app is super handy for searching and quickly dragging and dropping an icon into Sketch, Photoshop, or pretty much any other software. When you drag an icon out of the Mac app, it automatically creates an SVG with a unique and recognizable name, which should become the layer name in the design software when you drop the icon. Come implementation time, that name should make it very easy for your developer friends to identify the corresponding icon files.

The web app facilities icon curation workflows, including organizing sets of icons into projects and then exporting those projects as SVG or PNG sprites. You can also quickly grab any icon as PNG or SVG (either as an .svg file or copy-and-paste-able XML) through the web app.

### Colors

For outline and glyph style icons, the Nucleo apps allow you to set an accent color. Generally, single color icons are preferred, but combinations of brand colors may be used for special decorative elements. Again, avoid the pre-made full color icon style.

---

## Appendix

The latest Nucleo source files and Mac app can be downloaded at https://nucleoapp.com/source-files/. We also keep an archive of the source files in Dropbox (https://www.dropbox.com/s/nf8hfb3o4dkah7i/Nucleo%20Icons.zip?dl=0), though they might not be up to date (new icons are added regularly). Source files include the following formats:

* Web fonts (.eot, .ttf, .svg, .woff)
* Adobe Illustrator (.ai)
* Sketch (.sketch)
* Photoshop shapes (.csh)
* Individual SVG (.svg) icons
* Individual PDF (.pdf) icons

Amino has a lifetime team license for Nucleo icons and the apps. Just ask for an available license key or team login credentials (both are in 1Password).
