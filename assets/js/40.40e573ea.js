(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{244:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("Even though the generated build works the file names it uses is problematic. It doesn't allow to leverage client level cache efficiently as there's no way tell whether or not a file has changed. Cache invalidation can be achieved by including a hash to the filenames.")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("T> There are more options available, and you can even modify the hashing and digest type as discussed at "),a("a",{attrs:{href:"https://www.npmjs.com/package/loader-utils#interpolatename",target:"_blank",rel:"noopener noreferrer"}},[t._v("loader-utils"),a("OutboundLink")],1),t._v(" documentation.")]),t._m(6),a("p",[t._v("Assume you have the following configuration:")]),t._m(7),a("p",[t._v("Webpack would generate filenames like these based on it:")]),t._m(8),t._m(9),a("p",[t._v("The same result can be achieved by generating static filenames and invalidating the cache through a querystring (i.e., "),a("code",[t._v("main.js?d587bbd6e38337f5accd")]),t._v("). The part behind the question mark invalidates the cache. According to "),a("a",{attrs:{href:"http://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Steve Souders"),a("OutboundLink")],1),t._v(", attaching the hash to the filename is the most performant option.")]),a("p",[t._v("{pagebreak}")]),t._m(10),t._m(11),t._m(12),t._m(13),a("p",[t._v("W> "),a("code",[t._v("[hash]")]),t._v(" is defined differently for "),a("em",[t._v("file-loader")]),t._v(" than for the rest of webpack. It's calculated based on file "),a("strong",[t._v("content")]),t._v(". See "),a("a",{attrs:{href:"https://www.npmjs.com/package/file-loader#placeholders",target:"_blank",rel:"noopener noreferrer"}},[t._v("file-loader documentation"),a("OutboundLink")],1),t._v(" for further information.")]),t._m(14),a("p",[t._v("{pagebreak}")]),t._m(15),t._m(16),t._m(17),a("p",[t._v("W> The hashes have been sliced to make the output fit better in the book. In practice, you can skip slicing them.")]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("Including hashes related to the file contents to their names allows to invalidate them on the client side. If a hash has changed, the client is forced to download the asset again.")]),a("p",[t._v("To recap:")]),t._m(23),t._m(24)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"adding-hashes-to-filenames"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-hashes-to-filenames","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding Hashes to Filenames")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"placeholders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placeholders","aria-hidden":"true"}},[this._v("#")]),this._v(" Placeholders")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Webpack provides "),s("strong",[this._v("placeholders")]),this._v(" for this purpose. These strings are used to attach specific information to webpack output. The most valuable ones are:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("[id]")]),t._v(" - Returns the chunk id.")]),a("li",[a("code",[t._v("[path]")]),t._v(" - Returns the file path.")]),a("li",[a("code",[t._v("[name]")]),t._v(" - Returns the file name.")]),a("li",[a("code",[t._v("[ext]")]),t._v(" - Returns the extension. "),a("code",[t._v("[ext]")]),t._v(" works for most available fields. "),a("code",[t._v("MiniCssExtractPlugin")]),t._v(" is a notable exception to this rule.")]),a("li",[a("code",[t._v("[hash]")]),t._v(" - Returns the build hash. If any portion of the build changes, this changes as well.")]),a("li",[a("code",[t._v("[chunkhash]")]),t._v(" - Returns an entry chunk-specific hash. Each "),a("code",[t._v("entry")]),t._v(" defined in the configuration receives a hash of its own. If any portion of the entry changes, the hash will change as well. "),a("code",[t._v("[chunkhash]")]),t._v(" is more granular than "),a("code",[t._v("[hash]")]),t._v(" by definition.")]),a("li",[a("code",[t._v("[contenthash]")]),t._v(" - Returns a hash generated based on content.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It's preferable to use particularly "),s("code",[this._v("hash")]),this._v(" and "),s("code",[this._v("chunkhash")]),this._v(" only for production purposes as hashing doesn't do much good during development.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("T> It's possible to slice "),a("code",[t._v("hash")]),t._v(" and "),a("code",[t._v("chunkhash")]),t._v(" using specific syntax: "),a("code",[t._v("[chunkhash:4]")]),t._v(". Instead of a hash like "),a("code",[t._v("8c4cbfdb91ff93f3f3c5")]),t._v(" this would yield "),a("code",[t._v("8c4c")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"example-placeholders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-placeholders","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Placeholders")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("PATHS")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[name].[chunkhash].js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("main.d587bbd6e38337f5accd.js\nvendor.dc746a5db4ed650296e1.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If the file contents related to a chunk are different, the hash changes as well, thus the cache gets invalidated. More accurately, the browser sends a new request for the new file. If only "),s("code",[this._v("main")]),this._v(" bundle gets updated, only that file needs to be requested again.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"setting-up-hashing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-hashing","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting Up Hashing")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The build needs tweaking to generate proper hashes. Images and fonts should receive "),s("code",[this._v("hash")]),this._v(" while chunks should use "),s("code",[this._v("chunkhash")]),this._v(" in their names to invalidate them correctly:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" productionConfig "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("merge")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      chunkFilename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[name].[chunkhash:4].js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[name].[chunkhash:4].js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n  "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  parts"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("loadImages")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      limit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("delete")]),t._v("\n      name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[name].[ext]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("delete")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n      name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[name].[hash:4].[ext]"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you used "),s("code",[this._v("chunkhash")]),this._v(" for the extracted CSS as well, this would lead to problems as the code points to the CSS through JavaScript bringing it to the same entry. That means if the application code or CSS changed, it would invalidate both.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Therefore, instead of "),s("code",[this._v("chunkhash")]),this._v(", you can use "),s("code",[this._v("contenthash")]),this._v(" that is generated based on the extracted content:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.parts.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("exports"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("extractCSS")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" include"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclude"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Output extracted CSS to a file")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MiniCssExtractPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("delete")]),t._v("\n    filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[name].css"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("delete")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n    filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[name].[contenthash:4].css"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you generate a build now ("),s("code",[this._v("npm run build")]),this._v("), you should see something:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Hash: fb67c5fd35454da1d6ff\nVersion: webpack 4.1.1\nTime: 3034ms\nBuilt at: 3/16/2018 6:18:07 PM\n                   Asset       Size  Chunks             Chunk Names\n               0.0847.js  161 bytes       0  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    vendors~main.d2f1.js   96.8 KiB       1  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vendors~main\n            main.745c.js   2.25 KiB       2  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n           main.5524.css    1.2 KiB       2  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n   vendors~main.3dd5.css   1.32 KiB       1  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vendors~main\n           0.0847.js.map  203 bytes       0  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nvendors~main.d2f1.js.map    235 KiB       1  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vendors~main\n        main.745c.js.map   11.4 KiB       2  "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n              index.html  349 bytes          "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nEntrypoint main "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vendors~main.d2f1.js "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The files have neat hashes now. To prove that it works for styling, you could try altering "),s("em",[this._v("src/main.css")]),this._v(" and see what happens to the hashes when you rebuild.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("There's one problem, though. If you change the application code, it invalidates the vendor file as well! Solving this requires extracting a "),s("strong",[this._v("manifest")]),this._v(", but before that, you can improve the way the production build handles module IDs.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Webpack's "),a("strong",[t._v("placeholders")]),t._v(" allow you to shape filenames and enable you to include hashes to them.")]),a("li",[t._v("The most valuable placeholders are "),a("code",[t._v("[name]")]),t._v(", "),a("code",[t._v("[chunkhash]")]),t._v(", and "),a("code",[t._v("[ext]")]),t._v(". A chunk hash is derived based on the entry in which the asset belongs.")]),a("li",[t._v("If you are using "),a("code",[t._v("MiniCssExtractPlugin")]),t._v(", you should use "),a("code",[t._v("[contenthash]")]),t._v(". This way the generated assets get invalidated only if their content changes.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Even though the project generates hashes now, the output isn't flawless. The problem is that if the application changes, it invalidates the vendor bundle as well. The next chapter digs deeper into the topic and shows you how to extract a "),s("strong",[this._v("manifest")]),this._v(" to resolve the issue.")])}],!1,null,null,null);n.options.__file="04_adding_hashes_to_filenames.md";s.default=n.exports}}]);