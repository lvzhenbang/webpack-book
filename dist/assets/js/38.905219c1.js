(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{245:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("T> Tree shaking works to an extent through "),a("a",{attrs:{href:"https://www.npmjs.com/package/webpack-common-shake",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-common-shake"),a("OutboundLink")],1),t._v(" against CommonJS module definition. As a majority of npm packages have been authored using the older definition, the plugin has value.")]),t._m(2),a("p",[t._v("To shake code, you have to define a module and use only a part of its code. Set one up:")]),t._m(3),t._m(4),a("p",[t._v("{pagebreak}")]),a("p",[t._v("To make sure you use a part of the code, alter the application entry point:")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),a("p",[t._v("T> There is a CSS Modules related tree shaking proof of concept at "),a("a",{attrs:{href:"https://github.com/simlrh/dead-css-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("dead-css-loader"),a("OutboundLink")],1),t._v(".")]),t._m(10),t._m(11),t._m(12),a("p",[t._v("To get most out of tree shaking with external packages, you have to use "),a("a",{attrs:{href:"https://www.npmjs.com/package/babel-plugin-transform-imports",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-plugin-transform-imports"),a("OutboundLink")],1),t._v(" to rewrite imports so that they work with webpack's tree shaking logic. See "),a("a",{attrs:{href:"https://github.com/webpack/webpack/issues/2867",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack issue #2867"),a("OutboundLink")],1),t._v(" for more information.")]),a("p",[t._v("T> "),a("a",{attrs:{href:"https://survivejs.com/maintenance/packaging/building/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SurviveJS - Maintenance"),a("OutboundLink")],1),t._v(" covers how to write your packages so that it's possible to apply tree shaking against them.")]),t._m(13),t._m(14),a("p",[t._v("To recap:")]),t._m(15),a("p",[t._v("You'll learn how to manage environment variables using webpack in the next chapter.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tree-shaking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking","aria-hidden":"true"}},[this._v("#")]),this._v(" Tree Shaking")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tree shaking")]),this._v(" is a feature enabled by the ES2015 module definition. The idea is that given it's possible to analyze the module definition statically without running it, webpack can tell which parts of the code are being used and which are not. It's possible to verify this behavior by expanding the application and adding code there that should be eliminated.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"demonstrating-tree-shaking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demonstrating-tree-shaking","aria-hidden":"true"}},[this._v("#")]),this._v(" Demonstrating Tree Shaking")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("src/shake.js")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("shake")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"shake"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("bake")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"bake"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" shake"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bake "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("src/index.js")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bake "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./shake"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("bake")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("If you build the project again ("),a("code",[t._v("npm run build")]),t._v(") and examine the build ("),a("em",[t._v("dist/main.js")]),t._v("), it should contain "),a("code",[t._v('console.log("bake")')]),t._v(", but miss "),a("code",[t._v('console.log("shake")')]),t._v(". That's tree shaking in action.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To get a better idea of what webpack is using for tree shaking, run it through "),e("code",[this._v("npm run build -- --display-used-exports")]),this._v(". You should see additional output like "),e("code",[this._v("[no exports used]")]),this._v(" or "),e("code",[this._v("[only some exports used: bake]")]),this._v(" in the terminal.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("T> If you are using "),e("code",[this._v("UglifyJsPlugin")]),this._v(", enable warnings for a similar effect. In addition to other messages, you should see lines like "),e("code",[this._v("Dropping unused variable treeShakingDemo [./src/component.js:17,6]")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tree-shaking-on-package-level"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking-on-package-level","aria-hidden":"true"}},[this._v("#")]),this._v(" Tree Shaking on Package Level")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The same idea works with dependencies that use the ES2015 module definition. Given the related packaging, standards are still emerging, you have to be careful when consuming such packages. Webpack tries to resolve "),e("em",[this._v("package.json")]),e("code",[this._v("module")]),this._v(" field for this reason.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For tools like webpack to allow tree shake npm packages, you should generate a build that has transpiled everything else except the ES2015 module definitions and then point to it through "),e("em",[this._v("package.json")]),e("code",[this._v("module")]),this._v(" field. In Babel terms, you have to let webpack to manage ES2015 modules by setting "),e("code",[this._v('"modules": false')]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Tree shaking is a potentially powerful technique. For the source to benefit from tree shaking, npm packages have to be implemented using the ES2015 module syntax, and they have to expose the ES2015 version through "),e("em",[this._v("package.json")]),e("code",[this._v("module")]),this._v(" field tools like webpack can pick up.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Tree shaking")]),this._v(" drops unused pieces of code based on static code analysis. Webpack performs this process for you as it traverses the dependency graph.")]),e("li",[this._v("To benefit from tree shaking, you have to use ES2015 module definition.")]),e("li",[this._v("As a package author, you can provide a version of your package that contains ES2015 modules, while the rest has been transpiled to ES5.")])])}],!1,null,null,null);n.options.__file="02_tree_shaking.md";e.default=n.exports}}]);