(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{196:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("即使你使用了 "),a("code",[t._v("include")]),t._v(" 和 "),a("code",[t._v("exclude")]),t._v(" 规则，但依赖仍然可以从 "),a("em",[t._v("node_modules")]),t._v(" 引入并工作，这是因为它们就是这样实现的，这些依赖大多数斗志经过严格的测试的，所以基本不存在什么问题，没必要再进行一遍解析，这样只引用不解析，可以大大提高构建编译效率。这将在 "),a("em",[a("a",{attrs:{href:"https://lvzhenbang.github.io/webpack-book/dist/zh/techniques/06_consuming.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Consuming Packages"),a("OutboundLink")],1)]),t._v(" 这一章详解。")]),t._m(3),t._m(4),t._m(5),a("p",[t._v("下面是webpack使用Babel对JavaScript的处理：")]),t._m(6),t._m(7),a("blockquote",[a("p",[t._v("如果你对RegExp匹配不太了解，你可以考虑使用一个在线工具，如： "),a("a",{attrs:{href:"https://regex101.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("regex101"),a("OutboundLink")],1),t._v("， "),a("a",{attrs:{href:"http://regexr.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegExr"),a("OutboundLink")],1),t._v("，或者"),a("a",{attrs:{href:"https://regexper.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Regexper"),a("OutboundLink")],1),t._v("。")])]),t._m(8),t._m(9),a("p",[t._v("可以通过下面的例子来理解rule的使用：")]),t._m(10),a("p",[t._v("你可以把这种从右到左的规则分开，写成这种从下到上的形式：")]),t._m(11),t._m(12),t._m(13),t._m(14),a("p",[t._v("因此你应该像下面这样配置：")]),t._m(15),t._m(16),t._m(17),a("p",[t._v("有一个查询格式，允许传递参数给loader：")]),t._m(18),a("p",[t._v("webpack也接受这种entries和source引入的配置方式。这种方式在个人的使用上很方便，但建议最好还是使用可读性更好的方式。")]),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),a("p",[t._v("这种方式可以用在不同形式的组合配置中。")]),t._m(26),a("p",[t._v("虽然配置级别loader定义比较受欢迎，但是你也可以使用内联的loader定义：")]),t._m(27),a("p",[t._v("这种方法的问题在于它将源代码与webpack结合在一起。尽管如此，它仍然不失为是一种很好的使用方式。由于配置入口经过相同的机制，所以也以同样的格式在那里工作：")]),t._m(28),t._m(29),t._m(30),t._m(31),a("p",[t._v("下面这些布尔类型的字段可以进一步的约束匹配：")]),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),a("p",[a("code",[t._v("issuer")]),t._v(" can be used to control behavior based on where a resource was imported。下面的例子采纳了 "),a("a",{attrs:{href:"https://github.com/webpack-contrib/css-loader/pull/287#issuecomment-261269199",target:"_blank",rel:"noopener noreferrer"}},[t._v("css-loader issue 287"),a("OutboundLink")],1),t._v("，"),a("em",[t._v("style-loader")]),t._v(" 是被用在webpack中，处理当在JavaScript中引入一个css文件的情况：")]),t._m(38),t._m(39),t._m(40),t._m(41),a("p",[t._v("Loader的运行机制，你可以通过监视它，来了解它。"),a("a",{attrs:{href:"https://www.npmjs.com/package/loader-runner",target:"_blank",rel:"noopener noreferrer"}},[t._v("loader-runner"),a("OutboundLink")],1),t._v(" 允许你在不使用webpack的情况下运行它们。Webpack的内部如何使用包（package），"),a("em",[a("a",{attrs:{href:"https://lvzhenbang.github.io/webpack-book/dist/zh/extending/01_loaders.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Extending with Loaders"),a("OutboundLink")],1)]),t._v(" 这章将详细介绍。")]),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/inspect-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("inspect-loader"),a("OutboundLink")],1),t._v(" 允许你监视loader之间是如何传递信息的，你不需要在 "),a("em",[t._v("node_modules")]),t._v(" 内插入 "),a("code",[t._v("console.log")]),t._v(" ，你可以将它添加到你的配置中来了解loader间的信息是如何流动的。")]),t._m(42),t._m(43),a("p",[t._v("内容回顾：")]),t._m(44),a("p",[t._v("在下一章中，将详细介绍使用webpack加载图片资源。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"loader-的基本定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader-的基本定义","aria-hidden":"true"}},[this._v("#")]),this._v(" Loader 的基本定义")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Webpack提供了灵活的配置方法来使用模块loader。Webpack2.x 引入"),s("code",[this._v("use")]),this._v("这个选项，来简化在webpack中引入loader。在这里选择绝对路径是一个好主意，因为它们允许你在不破坏预设的情况下移动配置。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("另一个方法是使用 "),s("code",[this._v("context")]),this._v(" 选项，它可以通过改变入口点和loader的解析来实现相似的效果。它不影响输出，你仍然需要在这里用绝对路径或者"),s("code",[this._v("/")]),this._v(" 。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[a("code",[t._v("include")]),t._v("/"),a("code",[t._v("exclude")]),t._v(" 用在 "),a("em",[t._v("node_modules")]),t._v(" 目录上可以极大的提高webpack的效率。因为webpack默认情况下，是需要处理和遍历引入项目中的所有JavaScript，通过使用"),a("code",[t._v("include")]),t._v("/"),a("code",[t._v("exclude")]),t._v("，你可以避免这个引入。其他类型的文件没有这个问题。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"剖析loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#剖析loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 剖析Loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Webpack 可以通过 "),s("em",[this._v("loaders")]),this._v(" 实现对多种文件格式的处理，它同样支持由JavaScript模块变化而来的很多模块格式。处理他们的思想相同。你总是能够配置一个或几个loader实现对你项目的文件的处理。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// **Conditions** to match files using RegExp, function.")]),t._v("\n        test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// **Restrictions**")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// Restrict matching to a directory. This")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// also accepts an array of paths or a function.")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// The same applies to `exclude`.")]),t._v("\n        include"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("exclude")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token comment"}},[t._v("// You can perform more complicated checks  as well.")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/node_modules/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// **Actions** to apply loaders to the matched files.")]),t._v("\n        use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"babel-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"loader-的执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader-的执行顺序","aria-hidden":"true"}},[this._v("#")]),this._v(" Loader 的执行顺序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用loader你需要明白这一点，webpack的loader是按照从右到左，从下到上的顺序来逐个使用的。理解从右到左的规则，可以借助于函数的使用，你可以把 "),s("code",[this._v('use: ["style-loader", "css-loader"]')]),this._v(" 这样的loader定义看作 "),s("code",[this._v("style(css(input))")]),this._v(" 。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用强制顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用强制顺序","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用强制顺序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("即使上面的规则可以任意的配置，你也可以使用强制的方式来定义某个特定的规则的执行顺序。你可以使用 "),s("code",[this._v("enforce")]),this._v(" 字段，它可以被设置为 "),s("code",[this._v("pre")]),this._v(" 或 "),s("code",[this._v("post")]),this._v("，用来强调这个特定规则是在其他所有loader规则之前或之后。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("语法检测是使用"),s("code",[this._v("enforce")]),this._v("的一个好例子。这是因为构建除了语法检测这件事儿之外，应该在它没有做任何其他的事之前，就应该失败（如果入到遇到错误）。使用 "),s("code",[this._v('enforce: "post"')]),this._v(" 意味着你要对所有源代码执行loader操作。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Conditions")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  enforce"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"pre"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "post" too')]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Actions")]),t._v("\n  use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"eslint-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你小心地将声明与 "),s("code",[this._v("test")]),this._v(" 相关的其他loader串联起来，那么就有可能在不使用 "),s("code",[this._v("enforce")]),this._v("的情况下实现相同的效果。使用 "),s("code",[this._v("enforce")]),this._v(" 可以消除这样做的必要性，那么你就可以将loader拆分为更容易组合的部分。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"向loader传递参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向loader传递参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 向Loader传递参数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Conditions")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  include"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("PATHS")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Actions")]),t._v("\n  use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"babel-loader?presets[]=env"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("use")]),this._v(" 这种方式更容易让人接受：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Conditions")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  include"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("PATHS")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Actions")]),t._v("\n  use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"babel-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      presets"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"env"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你需要使用不止一个loader，你可以给 "),s("code",[this._v("use")]),this._v("设置一个数组：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  include"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("PATHS")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"babel-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        presets"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"env"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// Add more loaders here")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"用函数的形式配置use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用函数的形式配置use","aria-hidden":"true"}},[this._v("#")]),this._v(" 用函数的形式配置"),s("code",[this._v("use")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以在一个更高的层面上组合配置。webpack 允许你使用函数的形式扩展 "),s("code",[this._v("use")]),this._v(" ，来向配置中添加loader，参考例子如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// `resource` refers to the resource path matched.")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// `resourceQuery` contains possible query passed to it")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// `issuer` tells about match context path")]),t._v("\n  use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resource"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resourceQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" issuer "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// You have to return something falsy, object, or a")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v('// string (i.e., "style-loader") from here.')]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// Returning an array fails! Nest rules instead.")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("env "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"development"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// css-loader first")]),t._v("\n          rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// style-loader after")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"内联的基本定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联的基本定义","aria-hidden":"true"}},[this._v("#")]),this._v(" 内联的基本定义")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Process foo.png through url-loader and other")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// possible matches.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"url-loader!./foo.png"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Override possible higher level match completely")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"!!url-loader!./bar.png"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    app"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"babel-loader!./app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"可使用的匹配文件方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可使用的匹配文件方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 可使用的匹配文件方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("test")]),this._v(" 与 "),s("code",[this._v("include")]),this._v(" 或 "),s("code",[this._v("exclude")]),this._v("结合在一起形成约束匹配，这是最常见的文件匹配方法。它们接受如下所列的数据类型：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("test")]),t._v(" - RegExp, string, function, object, array。")]),a("li",[a("code",[t._v("include")]),t._v(" - 同上。")]),a("li",[a("code",[t._v("exclude")]),t._v(" - 同上，它和 "),a("code",[t._v("include")]),t._v(" 的目的相反。")]),a("li",[a("code",[t._v("resource: /inline/")]),t._v(" - 匹配资源的路径。如： "),a("code",[t._v("/path/foo.inline.js")]),t._v("，"),a("code",[t._v("/path/bar.png?inline")]),t._v("。")]),a("li",[a("code",[t._v("issuer: /bar.js/")]),t._v(" - 从一个已经匹配的资源中，查找匹配。如：在 "),a("code",[t._v("/path/bar.js")]),t._v(" 中的 "),a("code",[t._v("/path/foo.png")]),t._v(" 的匹配。")]),a("li",[a("code",[t._v("resourcePath: /inline/")]),t._v(" - 匹配一个没有查询条件的资源路径。如： "),a("code",[t._v("/path/foo.inline.png")]),t._v("。")]),a("li",[a("code",[t._v("resourceQuery: /inline/")]),t._v(" - 匹配一个带有查询条件的资源。如： "),a("code",[t._v("/path/foo.png?inline")]),t._v("。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("not")]),t._v(" - 匹配 "),a("code",[t._v("test")]),t._v(" 可接受的值")]),a("li",[a("code",[t._v("and")]),t._v(" - 数组类型")]),a("li",[a("code",[t._v("or")]),t._v(" - 数组类型")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-resourcequery-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-resourcequery-选项","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 "),s("code",[this._v("resourceQuery")]),this._v(" 选项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("oneOf")]),this._v(" 为webpack开启了路由的功能，可以为不同的资源指定特定的loader：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.png$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  oneOf"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      resourceQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/inline/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"url-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      resourceQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/external/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"file-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你想要将context嵌入到文件名中，你可以用 "),s("code",[this._v("resourcePath")]),this._v(" 代替 "),s("code",[this._v("resourceQuery")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-issuer-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-issuer-选项","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 "),s("code",[this._v("issuer")]),this._v(" 选项")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      issuer"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("也可以混合 "),s("code",[this._v("issuer")]),this._v(" 和 "),s("code",[this._v("not")]),this._v(" 使用：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// CSS imported from other modules is added to the DOM")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      issuer"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" not"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.css$/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// Apply css-loader against CSS imports to return CSS")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"loader的工作机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader的工作机制","aria-hidden":"true"}},[this._v("#")]),this._v(" Loader的工作机制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("虽然Webpack提供了多种方式配置loaders，但在webpack4.x中会用 "),s("code",[this._v("use")]),this._v(" 就足够了。另外注意loader的顺序，它是常见问题的来源。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Loaders")]),t._v(" 允许你来决定应该发生什么，当webpack的模块解析机制遇到一个文件时。")]),a("li",[t._v("一个模块定义由两部分组成， 匹配的条件（"),a("strong",[t._v("conditions")]),t._v("）和 匹配成功后应该做什么（"),a("strong",[t._v("actions")]),t._v(" ）。")]),a("li",[t._v("Webpack 2 引入了 "),a("code",[t._v("use")]),t._v(" 字段。它将 "),a("code",[t._v("loader")]),t._v(" 和 "),a("code",[t._v("loaders")]),t._v(" 字段放入了一个结构中。")]),a("li",[t._v("Webpack 4 提供了多种匹配方式来改变loader的行为。 到loader匹配完成后，你可以用 "),a("strong",[t._v("resource query")]),t._v(" 根据不同的路由使用特定的loader。")])])}],!1,null,null,null);e.options.__file="01_loader_definitions.md";s.default=e.exports}}]);