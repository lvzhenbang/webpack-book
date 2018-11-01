(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{283:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),n("p",[t._v("Another nice touch would be to include information about the build itself to the generated bundles as a small comment at the top of each file including version information at least.")]),t._m(2),t._m(3),t._m(4),n("p",[t._v("Install the "),n("a",{attrs:{href:"https://www.npmjs.com/package/clean-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("clean-webpack-plugin"),n("OutboundLink")],1),t._v(" first:")]),t._m(5),n("p",[t._v("{pagebreak}")]),n("p",[t._v("Next, you need to define a function to wrap the basic idea. You could use the plugin directly, but this feels like something that could be used across projects, so it makes sense to push it to the library:")]),t._m(6),t._m(7),n("p",[t._v("Connect it with the project:")]),t._m(8),t._m(9),t._m(10),n("p",[t._v("{pagebreak}")]),t._m(11),n("p",[t._v("Attaching information related to the current build revision to the build files themselves can be used for debugging. "),n("a",{attrs:{href:"https://webpack.js.org/plugins/banner-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack.BannerPlugin"),n("OutboundLink")],1),t._v(" allows you to achieve this. It can be used in combination with "),n("a",{attrs:{href:"https://www.npmjs.com/package/git-revision-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-revision-webpack-plugin"),n("OutboundLink")],1),t._v(" to generate a small comment at the beginning of the generated files.")]),t._m(12),n("p",[t._v("To get started, install the revision plugin:")]),t._m(13),n("p",[t._v("Then define a part to wrap the idea:")]),t._m(14),t._m(15),n("p",[t._v("{pagebreak}")]),n("p",[t._v("And connect it to the main configuration:")]),t._m(16),t._m(17),t._m(18),t._m(19),n("p",[t._v("W> "),n("a",{attrs:{href:"https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/222",target:"_blank",rel:"noopener noreferrer"}},[t._v("The plugin is broken in production mode in webpack 4"),n("OutboundLink")],1),t._v("!")]),t._m(20),t._m(21),n("p",[t._v("Copying files is another ordinary operation you can handle with webpack. "),n("a",{attrs:{href:"https://www.npmjs.com/package/copy-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("copy-webpack-plugin"),n("OutboundLink")],1),t._v(" can be handy if you need to bring external data to your build without having webpack pointing at them directly.")]),n("p",[n("a",{attrs:{href:"https://www.npmjs.com/package/cpy-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("cpy-cli"),n("OutboundLink")],1),t._v(" is a good option if you want to copy outside of webpack in a cross-platform way. Plugins should be cross-platforms by definition.")]),t._m(22),n("p",[t._v("Often, you work with webpack by identifying a problem and then finding a plugin to tackle it. It's entirely acceptable to solve these types of issues outside of webpack, but webpack can often handle them as well.")]),n("p",[t._v("To recap:")]),t._m(23)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"tidying-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tidying-up","aria-hidden":"true"}},[this._v("#")]),this._v(" Tidying Up")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The current setup doesn't clean the "),s("em",[this._v("build")]),this._v(" directory between builds. As a result, it keeps on accumulating files as the project changes. Given this can get annoying, you should clean it up in between.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"cleaning-the-build-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cleaning-the-build-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" Cleaning the Build Directory")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This issue can be resolved either by using a webpack plugin or solving it outside of it. You could trigger "),s("code",[this._v("rm -rf ./build && webpack")]),this._v(" or "),s("code",[this._v("rimraf ./build && webpack")]),this._v(" in an npm script to keep it cross-platform. A task runner could work for this purpose as well.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"setting-up-cleanwebpackplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-cleanwebpackplugin","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting Up "),s("code",[this._v("CleanWebpackPlugin")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" clean-webpack-plugin --save-dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.parts.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CleanWebpackPlugin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"clean-webpack-plugin"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("clean")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" path "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("CleanWebpackPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("PATHS")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  app"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("join")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"src"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n  build"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("join")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"dist"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" productionConfig "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("merge")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\nleanpub"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n  parts"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("clean")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("PATHS")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n  "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("After this change, the "),s("code",[this._v("build")]),this._v(" directory should remain nice and tidy while building. You can verify this by building the project and making sure no old files remained in the output directory.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"attaching-a-revision-to-the-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attaching-a-revision-to-the-build","aria-hidden":"true"}},[this._v("#")]),this._v(" Attaching a Revision to the Build")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"setting-up-bannerplugin-and-gitrevisionplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-bannerplugin-and-gitrevisionplugin","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting Up "),s("code",[this._v("BannerPlugin")]),this._v(" and "),s("code",[this._v("GitRevisionPlugin")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" git-revision-webpack-plugin --save-dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.parts.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"webpack"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" GitRevisionPlugin "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"git-revision-webpack-plugin"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexports"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("attachRevision")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BannerPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      banner"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("GitRevisionPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("version")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" productionConfig "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("merge")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\nleanpub"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n  parts"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("attachRevision")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nleanpub"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("insert\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you build the project ("),s("code",[this._v("npm run build")]),this._v("), you should notice the built files contain comments like "),s("code",[this._v("/*! 0b5bb05 */")]),this._v(" or "),s("code",[this._v("/*! v1.7.0-9-g5f82fe8 */")]),this._v(" in the beginning.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The output can be customized further by adjusting the banner. You can also pass revision information to the application using "),s("code",[this._v("webpack.DefinePlugin")]),this._v(". This technique is discussed in detail in the "),s("em",[this._v("Environment Variables")]),this._v(" chapter.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("W> The code expects you run it within a Git repository! Otherwise, you get a "),s("code",[this._v("fatal: Not a git repository (or any of the parent directories): .git")]),this._v(" error. If you are not using Git, you can replace the banner with other data.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"copying-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copying-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Copying Files")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("You can find many small plugins that work as tasks and push webpack closer to a task runner.")]),n("li",[t._v("These tasks include cleaning the build and deployment. The "),n("em",[t._v("Deploying Applications")]),t._v(" chapter discusses the latter topic in detail.")]),n("li",[t._v("It can be a good idea to add small comments to the production build to tell what version has been deployed. This way you can debug potential issues faster.")]),n("li",[t._v("Secondary tasks like these can be performed outside of webpack. If you are using a multi-page setup as discussed in the "),n("em",[t._v("Multiple Pages")]),t._v(" chapter, this becomes a necessity.")])])}],!1,null,null,null);e.options.__file="04_tidying_up.md";s.default=e.exports}}]);