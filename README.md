# the Erased font plugin (erase.js)

The Erased is a project to visualise the increasing attack on press freedom, by erasing one word for all the journalists imprisoned.
Join the campaign with news organisations from around the world and stand up for press freedom by easily installing the Erased font on your platform.

The Erased toggle allows users to easily retrieve the font file from our GitHub repository, without needing to manually download it. Users can integrate the font into their own projects as desired.

## How to include

### CDN

Include `https://erased-plugin.netlify.app/erase.js` and `https://erased-plugin.netlify.app/erase.css` to head of your HTML and _the Erased font_ message will for press freedom will appear on your website.

```html
<link rel="stylesheet" href="https://erased-plugin.netlify.app/erase.css" />
<script src="https://erased-plugin.netlify.app/erase.js" defer></script>
```

The Erased Font is available in six locales (nl, fr, es, en, ru & ar), based on the language various words will be erased. So it is important to include the the right CSS file in the language your content is written in. The CSS files follow this name convention `erased.[locale].css`.

For example Dutch:

```html
<link rel="stylesheet" href="https://erased-plugin.netlify.app/erase.nl.css" />
<script src="https://erased-plugin.netlify.app/erase.js" defer></script>
```

### Vendor

Download the `/cdn` folder and drop it in your project. Make sure to also include the font (.woff & .woff2) files. However the font is subject to change, erased words are added as visualisation of press freedom.

## How to use

Every site is different, so to withhold interfering with the experience of the user, erase.js can be intergrated in specific sections of your website. By adding the `data-erase` attribute on a HTMLElement, that element will now display the Erased font. To ignore certain parts inside the `data-erase` element you can use `data-erase-ignore`.

For example:

```html
    <div data-erase>
        <p>This text will be displayed with the Erased font.</p>
        <figure>
            <img src="..." />
            <figcaption data-erase-ignore>This text will be ignored by the Erased font.</figcaption>
        </figure />
    </div>
```

## Good to know

- Erase.js is very small (6kb).
- Erase.js will work the best if applied directly to the element that provides the font-family styling (to avoid overwritten styles).
- The Erase.js banner is using scoped styles so will never overwrite the host site styling.

## Other usages

In `src/fonts` you can find the .otf, .woff & .woff2 font files so they can be used for other purposes and creative endeavors. Make sure you toggle on the font ligatures to view the erased words.

## Advanced (API)

The CDN files already include a banner and is build for plug and play usage. If you'd like to do it yourself you can include the package files (`/package`). This will contain the base functionality of erase.js.

For example:

```js
// These are the default values
const erase = new Erase({
  context: document.body,
  selector: "erase",
  ignore: "erase-ignore",
  initialState: false,
});

// Show erased words
erase.ligeratures = true;

// Hide erased words
erase.ligeratures = false;
```
