Table of contents
=====
- [Startfeed](#startfeed)
  * [Grid container](#grid-container)
  * [Copy](#copy)
  * [Hero blocks](#hero-blocks)
  * [Regular image blocks](#regular-image-blocks)
  * [Slider](#slider)
  * [Rows with multiple images](#rows-with-multiple-images)
    + [2 images](#2-images)
    + [3 images](#3-images)
  * [Videos](#videos)
    + [mp4 files](#mp4-files)
    + [YouTube](#youtube)
- [Campaigns](#campaigns)
  * [Grid container](#grid-container-1)
  * [Images](#images)
  * [Product texts](#product-texts)
  * [Hotspots](#hotspots)
- [Customize style](#customize-style)

Startfeed
======

[Template HTML file](https://raw.githubusercontent.com/LinusLjung/content/master/templates/startfeed.html)

## Grid container

The grid needs to be wrapped in a container with the class name `nakd-grid`.
Take a look at the [Template HTML file](https://raw.githubusercontent.com/LinusLjung/content/master/templates/startfeed.html)
to see how this is done.

## Copy

Code snippet:
```html
<div class="nakd-grid-copy">
  <div class="nakd-grid-copy-text-1"></div>
  <div class="nakd-grid-copy-text-2"></div>
  <div class="nakd-grid-cta"></div>
</div>
```

Alternatively, text can be replaced with images:
```html
<div class="nakd-grid-copy">
  <img class="nakd-grid-copy-logo" src="">
  <div class="nakd-grid-copy-text-2"></div>
  <div class="nakd-grid-cta"></div>
</div>
```

Copy is by default colored white, but can be changed to black:
```html
<div class="nakd-grid-copy theme-dark">
```

Copy is always positioned horizontally centered. In cases where this is not
suitable, 2 other options are available: left and right
```html
<div class="nakd-grid-copy nakd-grid-copy-left">
```
```html
<div class="nakd-grid-copy nakd-grid-copy-right">
```

CTAs are by default bordered with a transparent background. They can be changed
to have a solid background by appending the class name `nakd-grid-cta-solid`
```html
<div class="nakd-grid-cta nakd-grid-cta-solid"></div>
```

There will be cases where finer tuning is necessary.
See the [Customize style](#customize-style) section.

## Hero blocks

Code snippet:
```html
<div class="nakd-grid-row nakd-grid-hero">
  <div class="nakd-grid-hero-inner">
    <a href="#">
      <img src="" data-size="6">
    </a>

    <div class="nakd-grid-copy">
      <div class="nakd-grid-copy-text-1"></div>
      <div class="nakd-grid-copy-text-2"></div>
      <div class="nakd-grid-cta"></div>
    </div>
  </div>
</div>
```

The hero block has a fixed ratio of 12:5, meaning images like 1920x800 are
expected. Images of other ratios will be cropped to fit into the hero area.
If lower or higher ratios are desired, then it's just a matter of changing the
height on the `nakd-grid-hero` element.
See the [Customize style](#customize-style) section.

## Regular image blocks

Code snippet:
```html
<div class="nakd-grid-row">
  <a href="">
    <img src="">
  </a>

  <div class="nakd-grid-copy">
    <div class="nakd-grid-copy-text-1"></div>
    <div class="nakd-grid-copy-text-2"></div>
    <div class="nakd-grid-cta"></div>
  </div>
</div>
```

## Slider

Code snippet:
```html
<div class="nakd-grid-row">
  <div class="nakd-grid-slide" data-nakd-grid-slide>
    <div class="nakd-grid-slide-inner">
      <div class="nakd-grid-slide-inner-inner">
        <div>
          <a href="">
            <img src="">
          </a>
          <div class="nakd-grid-copy">
            <div class="nakd-grid-copy-text-1"></div>
            <div class="nakd-grid-copy-text-2"></div>
            <div class="nakd-grid-cta"></div>
          </div>
        </div>
        <div>
          <a href="">
            <img src="">
          </a>
          <div class="nakd-grid-copy">
            <div class="nakd-grid-copy-text-1"></div>
            <div class="nakd-grid-copy-text-2"></div>
            <div class="nakd-grid-cta"></div>
          </div>
        </div>
      </div>
    </div>

    <img
      src="https://www.na-kd.com/siteassets/startfeed/2018/02-16/arrow-left.png?ref=D55E7FE073"
      data-nakd-grid-slide-prev>
    <img
      src="https://www.na-kd.com/siteassets/startfeed/2018/02-16/arrow-left.png?ref=D55E7FE073"
      data-nakd-grid-slide-next>
  </div>
</div>
```

Adding images to the slider is just a matter of copying a regular image row
and adding it as a child to `nakd-grid-slide-inner-inner`

## Rows with multiple images
### 2 images

```html
<div class="nakd-grid-row">
  <div class="nakd-grid-item">
    <a href="">
      <img src="">
    </a>

    <div class="nakd-grid-copy nakd-grid-copy-right">
      <div class="nakd-grid-copy-text-1"></div>
      <div class="nakd-grid-copy-text-2"></div>
      <div class="nakd-grid-cta"></div>
    </div>
  </div>
  <div class="nakd-grid-item">
    <a href="">
      <img src="">
    </a>

    <div class="nakd-grid-copy nakd-grid-copy-left">
      <div class="nakd-grid-copy-text-1"></div>
      <div class="nakd-grid-copy-text-2"></div>
      <div class="nakd-grid-cta"></div>
    </div>
  </div>
</div>
```

### 3 images

Rows with 3 images is the same procedure as adding 2 images, but you need to add
the extra class name `nakd-grid-row-split-3` to the `nakd-grid-row`.
```html
<div class="nakd-grid-row nakd-grid-row-split-3">
  <div class="nakd-grid-item">
    <a href="">
      <img src="">
    </a>

    <div class="nakd-grid-copy">
      <div class="nakd-grid-copy-text-1"></div>
      <div class="nakd-grid-copy-text-2"></div>
      <div class="nakd-grid-cta"></div>
    </div>
  </div>
  <div class="nakd-grid-item">
    <a href="">
      <img src="">
    </a>

    <div class="nakd-grid-copy">
      <div class="nakd-grid-copy-text-1"></div>
      <div class="nakd-grid-copy-text-2"></div>
      <div class="nakd-grid-cta"></div>
    </div>
  </div>
  <div class="nakd-grid-item">
    <a href="">
      <img src="">
    </a>

    <div class="nakd-grid-copy">
      <div class="nakd-grid-copy-text-1"></div>
      <div class="nakd-grid-copy-text-2"></div>
      <div class="nakd-grid-cta"></div>
    </div>
  </div>
</div>
```

## Videos
### mp4 files

mp4 files can easily replace a regular image or a hero image.
Simply replace the `<img>` tag with a `<video>` tag.
```html
<video data-autoplay data-playsinline loop data-muted poster="" src=""></video>
```
It's recommended to add a `poster` image as a fallback in case the video can't
be autoplayed

### YouTube
Youtube videos can be replace regular images and hero images by replacing the
`<a>` tag and its contents with the following snippet:
```html
<img class="nakd-grid-youtube-background" src="">
<div class="nakd-grid-youtube-wrap">
  <div data-nakd-youtube-id="" data-nakd-youtube-autoplay><!-- --></div>
  <a href=""><!-- --></a>
</div>
```

Because YouTube can take a while to load, it's recommended to add a background
image to be shown before the video is loaded.

Campaigns
=====

Not much has been standardized on campaigns since each campaign has very
different requirements. There for a lot of custom styling will be needed.
See the [Customize style](#customize-style) section for how this is done.
A few class names have however been introduced to make life a little bit easier.

## Grid container

In addition to having the `nakd-grid` class name, the container also needs the
class name `nakd-campaign`.

As a direct child to `nakd-campaign`, you also need another wrapper with the
class name `nakd-campaign-inner`. This is used to stretch the campaign to
100% screen width.

All content after that should be put inside the `nakd-campaign-inner` container.

Example:
```html
<div class="nakd-grid nakd-campaign">
  <div class="nakd-campaign-inner">
    <!-- All content goes here -->
  </div>
</div>
```

Because of the inner wrapper being absolutely positioned, the outer wrapper
will get a height of zero. To remedy this, when the campaign is complete, check
the height of the inner wrapper and apply the same height (in unit `vw`) to
`nakd-campaign` through custom styling.
See the [Customize style](#customize-style) section.

## Images

Images should be wrapped in a container with the class name `nakd-campaign-image-wrap`.

Example:
```html
<div class="nakd-campaign-image-wrap">
  <img src="">
</div>
```

The image wrap is by default absolutely positioned. But that's all. You will need
to custom style the values `top`, `left`, `width`, and `height` on each image wrapper.
All values for images should be in the unit `vw`
See the [Customize style](#customize-style) section.

Example:
```html
<style>
  .nakd-campaign-image-wrap-1 {
    left: 10vw;
    top: 30vw;
    width: 35vw;
    height: 55vw;
  }
</style>
<div class="nakd-grid nakd-campaign">
  <div class="nakd-campaign-inner">
    <div class="nakd-campaign-image-wrap nakd-campaign-image-wrap-1">
      <img src="">
    </div>
  </div>
</div>
```

## Product texts

Code snippet:
```html
<div class="nakd-campaign-product-group">
  <div class="nakd-campaign-product" data-sku="1015-000840-0013">
    <a href="{{product_link}}">
      <span>{{product_title}}</span>
      <span>{{product_price}}</span>
      <span class="nakd-campaign-shopnow">{{shop_now_label}}</span>
    </a>
  </div>
  <div class="nakd-campaign-product" data-sku="1053-000048-0188">
    <a href="{{product_link}}">
      <span>{{product_title}}</span>
      <span>{{product_price}}</span>
      <span class="nakd-campaign-shopnow">{{shop_now_label}}</span>
    </a>
  </div>
</div>
```

Product data is automatically fetched by providing a product SKU.
The link, title and price is automatically translated to whatever language
and currency the customer is visiting from.

The text is by default black, but can be changed to white by applying the class
name `theme-light`:
```html
<div class="nakd-campaign-product-group theme-light">
</div>
```

The `nakd-campaign-product-group` is absolutely positioned, but you will have
to add a `top` and a `left` value through custom styling. See the previous
section about images for how this could be achieved.

These groups of products could either be added to the bottom of the campaign,
or added as a child to the image wrapper they are related to.
Example:
```html
<div class="nakd-campaign-image-wrap">
  <img src="">

  <div class="nakd-campaign-product-group">
    <div class="nakd-campaign-product" data-sku="1015-000840-0013">
      <a href="{{product_link}}">
        <span>{{product_title}}</span>
        <span>{{product_price}}</span>
        <span class="nakd-campaign-shopnow">{{shop_now_label}}</span>
      </a>
    </div>
  </div>
</div>
```

This is the preferred way to do it, since this will position the product text
relatively to the image. If the image is moved, the text is moved along with the image.

## Hotspots

Hotspots are the clickable areas on the products. They are basically just
empty `<a>` tags positioned over the images. By default they have absolute position,
but you need to provide `top`, `left`, `width`, `height` through custom styling.
See the previous section about images for how this could be achieved.

Same as with the product texts, the hotspot should ideally be placed as a child
to the image wrapper.

Example:
```html
<style>
  .nakd-campaign-hotspot-1 {
    left: 30%;
    top: 50%;
    width: 10%;
    height: 5%;
  }
</style>
<div class="nakd-campaign-image-wrap">
  <img src="">

  <div class="nakd-campaign-hotspot nakd-campaign-hotspot-1" data-sku="">
    <a href="{{product_link}}"><!-- --></a>
  </div>
</div>
```

Customize style
=====

Although many of the use cases should work out of the box using the methods above
(and you should really try and stick to these cases),
there will be cases where you need to override some of the default styling.
This is done by appending a new unique class name to the element that needs
styling (or to a parent of that element), and create a `<style>` block in the top of the grid.
** Inline styling is prohibited **

Example:
Let's say you want to change the color of a CTA. This could be done like so:
```html
<style>
  .nakd-grid-row-sahara .nakd-grid-cta {
    color: pink;
  }
</style>
<div class="nakd-grid">
  <div class="nakd-grid-row nakd-grid-row-sahara">
    <a href="https://www.na-kd.com/en/campaigns/sahara-ray-drop-1">
      <img src="https://www.na-kd.com/siteassets/startfeed/2018/06-11/sahararay-desk-800-monday.jpg?ref=09732EACA4">
    </a>

    <div class="nakd-grid-copy theme-dark">
      <img class="nakd-grid-copy-logo" src="https://www.na-kd.com/siteassets/startfeed/2018/06-07/sahara_ray_logo-2.svg?ref=5BE5B4F5B2">
      <div class="nakd-grid-copy-text-2">just launched</div>
      <div class="nakd-grid-cta">Shop the drop</div>
    </div>
  </div>
</div>
```

Please see the [example startfeed](https://raw.githubusercontent.com/LinusLjung/content/master/desktop.html) for a few more examples of custom styling
