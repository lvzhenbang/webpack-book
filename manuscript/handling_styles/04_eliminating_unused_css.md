# Eliminating Unused CSS

Frameworks like [Bootstrap](https://getbootstrap.com/) tend to come with a lot of CSS. Often you use only a small part of it. Normally, you just bundle even the unused CSS. It is possible, however, to eliminate the portions you aren't using.

[PurifyCSS](https://github.com/purifycss/purifycss) is a tool that can achieve this by analyzing files. It walks through your code and figures out which CSS classes are being used. This is enough information for it to strip unused CSS from your project. It also works with single page applications.

## Setting Up Pure.css

To make our demo more realistic, let's install [Pure.css](http://purecss.io/), a small CSS framework, as well and refer to it from our project so that we can see PurifyCSS in action. These two projects aren't related in any way despite the naming.

```bash
npm install purecss --save
```

To make the project aware of Pure.css, `import` it:

**app/index.js**

```javascript
leanpub-start-insert
import 'purecss';
leanpub-end-insert
import './main.css';
import component from './component';

...
```

We should also make our demo component use a Pure.css class so we have something to work with:

**app/component.js**

```javascript
module.exports = function () {
  const element = document.createElement('h1');

leanpub-start-insert
  element.className = 'pure-button';
leanpub-end-insert
  element.innerHTML = 'Hello world';

  return element;
};
```

If you run the application (`npm start`), our "Hello world" should look like a button.

![Styled hello](images/styled-button.png)

Building the application (`npm run build`) should yield output like this:

```bash
Hash: 2d092abb227c6913c794
Version: webpack 2.2.1
Time: 1319ms
     Asset       Size  Chunks             Chunk Names
    app.js    4.13 kB       0  [emitted]  app
   app.css    16.5 kB       0  [emitted]  app
index.html  218 bytes          [emitted]
   [0] ./app/component.js 174 bytes {0} [built]
   [1] ./app/main.css 41 bytes {0} [built]
   [2] ./~/purecss/build/pure-min.css 41 bytes {0} [built]
...
```

As you can see, the size of the CSS file grew quite a bit. This is something we'll fix next with PurifyCSS.

## Enabling PurifyCSS

Using PurifyCSS can lead to great savings. In their example, they purify and minify Bootstrap (140 kB) in an application using ~40% of its selectors to mere ~35 kB. That's a big difference.

[purifycss-webpack](https://www.npmjs.com/package/purifycss-webpack) allows us to achieve results like this. You should use the `ExtractTextPlugin` with it for the best results. Install it and a [glob](https://www.npmjs.org/package/glob) helper first:

```bash
npm install glob purifycss-webpack --save-dev
```

We need one more bit: PurifyCSS configuration. Expand parts like this:

**webpack.parts.js**

```javascript
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
leanpub-start-insert
const PurifyCSSPlugin = require('purifycss-webpack');
leanpub-end-insert

...

leanpub-start-insert
exports.purifyCSS = function({ paths }) {
  return {
    plugins: [
      new PurifyCSSPlugin({ paths: paths }),
    ],
  };
};
leanpub-end-insert
```

Next, we have to connect this part to our configuration. It is important the plugin is used *after* the `ExtractTextPlugin`; otherwise it won't work:

**webpack.config.js**

```javascript
...
leanpub-start-insert
const glob = require('glob');
leanpub-end-insert

const parts = require('./webpack.parts');

...


function production() {
  return merge([
    ...
leanpub-start-insert
    parts.purifyCSS({
      paths: glob.sync(path.join(PATHS.app, '**', '*')),
    }),
leanpub-end-insert
  ]);
}

...
```

W> Note that the order matters. CSS extraction has to happen before purifying.

If you execute `npm run build` now, you should see something like this:

```bash
Hash: 2d092abb227c6913c794
Version: webpack 2.2.1
Time: 1388ms
     Asset       Size  Chunks             Chunk Names
    app.js    4.13 kB       0  [emitted]  app
   app.css    2.23 kB       0  [emitted]  app
index.html  218 bytes          [emitted]
   [0] ./app/component.js 174 bytes {0} [built]
   [1] ./app/main.css 41 bytes {0} [built]
   [2] ./~/purecss/build/pure-min.css 41 bytes {0} [built]
...
```

The size of our style has decreased significantly. Instead of 16k we have roughly 2k now. The difference would be even bigger for heavier CSS frameworks.

T> PurifyCSS supports [additional options](https://github.com/purifycss/purifycss#the-optional-options-argument) including `minify`. You can enable these through the `purifyOptions` field when instantiating the plugin.

T> Given PurifyCSS might not pick all of the classes you are using, you can use `purifyOptions.whitelist` array to define selectors which it should leave in the result no matter what.

W> Using PurifyCSS will lose CSS source maps even if you have enabled them through loader specific configuration! This has to do with the way it works internally.

### Critical Path Rendering

The idea of [critical path rendering](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/) takes a look at CSS performance from a different angle. Instead of optimizing for size, it optimized for render order and puts emphasis on **above-the-fold** CSS.

[isomorphic-style-loader](https://www.npmjs.com/package/isomorphic-style-loader) achieves this using webpack and React. [critical-path-css-tools](https://github.com/addyosmani/critical-path-css-tools) listing by Addy Osmani lists other related tools.

## Conclusion

Using PurifyCSS can lead to a significant decrease in file size. It is particularly useful with static sites that rely on a heavy CSS framework. The more dynamic a site or an application becomes, the harder it becomes to analyze reliably.

The styling portion of our demo is in a good shape. We can make it better by including CSS linting to the project. We'll do that next.