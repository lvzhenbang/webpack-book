(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{208:function(e,t,r){"use strict";r.r(t);var a=r(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack"),r("OutboundLink")],1),e._v(" 简化Web开发通过解决一个基本的问题: 打包。 它处理各种静态资源，例如JavaScript, CSS, 和 HTML，然后把它们成一种浏览器能运行的代码格式。 由于做的好，减少了web开发带来的大量痛苦。")]),r("p",[e._v("由于它的配置驱动实现方式，所以不是一个容易学习的工具, 但是它拥有难以置信的强大力量。 这篇指导的目的是你在开始使用webpack的时候起到帮助作用，然后拥有超越基础的能力。")]),e._m(1),r("p",[e._v("Web浏览器被设计用来执行 HTML, CSS, 和 JavaScript。随着项目规模的增长，跟踪和配置所有这些形的文件变得太复杂，没有帮助将变得无法管理。Webpack就是为了解决这些问题而设计的。 项目管理的复杂性是Web开发的基本问题之一，那么解决这个问题的帮助将显而意见。")]),r("p",[e._v("Webpack不仅仅是一个有用的打包工具，还集成了很多工具。任务运行工具（Task runners）, 像Grunt和Gulp这样的高级工具。问题是你需要手写工作流，但Webpack将这些问题推给了打包工具，这是一个明显的进步。")]),r("p",[e._v("{pagebreak}")]),e._m(2),e._m(3),r("p",[e._v("webpack为你完成所有的预处理工作，然后根据你定义的配置和你写的代码生成打包文件。这种声明方式是通用的但学习起来很难。")]),r("p",[e._v("当你理解了webpack的工作原理后，它将变成一个你工作中不可或缺的工具。这本书的目的就是为了初始化你的学习曲线，甚至让你更进一步。")]),e._m(4),r("p",[e._v("这本书完善了"),r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack官方文档"),r("OutboundLink")],1),e._v("。这本书可以看作它的伴侣。")]),r("p",[e._v("本书教你写用于开发和生产目的可组合的webpack配置。本书所涵盖的高级技术可以让你最大限度地使用webpack4.x。")]),r("p",[e._v("{pagebreak}")]),e._m(5),r("p",[e._v("本书开发解释webpack是什么。之后，你会发现很多章节从不同的角度讲解webpack。在阅读这些章节时，你将形成你自己的webpack配置，同时掌握基本的技术。")]),r("p",[e._v("这本书分为以下几部分:")]),e._m(6),r("p",[e._v("最后，有一个结束章节简短的概括了本书的主要观点。它包含一个技术清单，可以让你有条不紊的完成项目。")]),r("p",[e._v("The appendices at the end of the book cover secondary topics and sometimes dig deeper into the main ones.根据你的兴趣，你可以不按照顺序去访问它们。")]),e._m(7),e._m(8),r("p",[e._v("你需要有基本的 JavaScript, Node, 和 npm知识。如果你知道一些webpack知识，那将更好。通过读这本书，你将加深对这些工具的理解。")]),r("p",[e._v("如果你对webapck不太了解，可以考虑仔细阅读前面的部分。你也可以挑选哪些你认为值得阅读的部分；反之，略读（跳读）并选择你认为有价值的技术。")]),r("p",[e._v("如果你已经很了解webpack，那么在这本书中还有一些东西适合你，略读以下，看看是否学到了新技术，尤其要阅读各章节的结尾部分和各章节的总结。")]),e._m(9),r("p",[e._v("鉴于这本书由于创新的速度而获得了相当数量的维护和改进，因此有了一个版本化计划。 每个新版本的发行说明都保存在 "),r("a",{attrs:{href:"https://survivejs.com/blog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("博客"),r("OutboundLink")],1),e._v("上。你可以用GitHub "),r("em",[e._v("compare")]),e._v(" 工具达成这个目标。 例如:")]),e._m(10),r("p",[e._v("页面显示了在给定版本范围内提交到项目的个人提交。你可以看到书中那些改变的线条.")]),e._m(11),e._m(12),r("p",[e._v("如果你遇到麻烦，或者对某些内容有问题，有下面几种选择可选：")]),r("ul",[r("li",[e._v("通过 "),r("a",{attrs:{href:"https://github.com/survivejs/webpack-book/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Issue Tracker"),r("OutboundLink")],1),e._v(" 联系我。")]),r("li",[e._v("加入我的 "),r("a",{attrs:{href:"https://gitter.im/survivejs/webpack",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitter聊天室"),r("OutboundLink")],1),e._v("。")]),e._m(13),r("li",[e._v("在 "),r("a",{attrs:{href:"https://github.com/survivejs/ama/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("SurviveJS AmA"),r("OutboundLink")],1),e._v(" 向我提问任何问题。")])]),e._m(14),e._m(15),r("p",[e._v("You can find more related material from the following sources:")]),r("ul",[r("li",[e._v("Join the "),r("a",{attrs:{href:"https://eepurl.com/bth1v5",target:"_blank",rel:"noopener noreferrer"}},[e._v("mailing list"),r("OutboundLink")],1),e._v(" for occasional updates.")]),r("li",[e._v("Follow "),r("a",{attrs:{href:"https://twitter.com/survivejs",target:"_blank",rel:"noopener noreferrer"}},[e._v("@survivejs"),r("OutboundLink")],1),e._v(" on Twitter.")]),r("li",[e._v("Subscribe to the "),r("a",{attrs:{href:"https://survivejs.com/atom.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog RSS"),r("OutboundLink")],1),e._v(" to get access interviews and more.")]),r("li",[e._v("Subscribe to the "),r("a",{attrs:{href:"https://www.youtube.com/channel/UCvUR-BJcbrhmRQZEEr4_bnw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Youtube channel"),r("OutboundLink")],1),e._v(".")]),r("li",[e._v("Check out "),r("a",{attrs:{href:"https://presentations.survivejs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SurviveJS related presentation slides"),r("OutboundLink")],1),e._v(".")])]),e._m(16),r("p",[e._v("Big thanks to "),r("a",{attrs:{href:"http://www.christianalfoni.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Christian Alfoni"),r("OutboundLink")],1),e._v(" for helping me craft the first version of this book. This is what inspired the entire SurviveJS effort. The version you see now is a complete rewrite.")]),r("p",[e._v("This book wouldn’t be half as good as it's without patient editing and feedback by my editors "),r("a",{attrs:{href:"https://github.com/Foxandxss",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jesús Rodríguez"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/sapegin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Artem Sapegin"),r("OutboundLink")],1),e._v(", and "),r("a",{attrs:{href:"https://github.com/Undistraction",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pedr Browne"),r("OutboundLink")],1),e._v(". Thank you.")]),r("p",[e._v('This book wouldn’t have been possible without the original "SurviveJS - Webpack and React" effort. Anyone who contributed to it deserves my thanks. You can check that book for more accurate attributions.')]),r("p",[e._v('Thanks to Mike "Pomax" Kamermans, Cesar Andreu, Dan Palmer, Viktor Jančík, Tom Byrer, Christian Hettlage, David A. Lee, Alexandar Castaneda, Marcel Olszewski, Steve Schwartz, Chris Sanders, Charles Ju, Aditya Bhardwaj, Rasheed Bustamam, José Menor, Ben Gale, Jake Goulding, Andrew Ferk, gabo, Giang Nguyen, @Coaxial, @khronic, Henrik Raitasola, Gavin Orland, David Riccitelli, Stephen Wright, Majky Bašista, Gunnari Auvinen, Jón Levy, Alexander Zaytsev, Richard Muller, Ava Mallory (Fiverr), Sun Zheng’an, Nancy (Fiverr), Aluan Haddad, Steve Mao, Craig McKenna, Tobias Koppers, Stefan Frede, Vladimir Grenaderov, Scott Thompson, Rafael De Leon, Gil Forcada Codinachs, Jason Aller, @pikeshawn, Stephan Klinger, Daniel Carral, Nick Yianilos, Stephen Bolton, Felipe Reis, Rodolfo Rodriguez, Vicky Koblinski, Pyotr Ermishkin, Ken Gregory, Dmitry Kaminski, John Darryl Pelingo, Brian Cui, @st-sloth, Nathan Klatt, Muhamadamin Ibragimov, Kema Akpala, Roberto Fuentes, Eric Johnson, Luca Poldelmengo, Giovanni Iembo, Dmitry Anderson , Douglas Cerna, and many others who have contributed direct feedback for this book!')])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"webpack是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack是什么")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"webpack如何改变现状"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack如何改变现状","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack如何改变现状")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Webpack takes another route. It allows you to treat your project as a dependency graph。通过标准的 "),t("code",[this._v("require")]),this._v(" 或 "),t("code",[this._v("import")]),this._v(" 语法，你可以在你的项目中的 "),t("em",[this._v("index.js")]),this._v(" 文件中添加你需要的依赖。你也可以通过同样的方式引入你的样式文件和其他静态资源（assets）。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"你会学到什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你会学到什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 你会学到什么")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"该书是如何组织的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#该书是如何组织的","aria-hidden":"true"}},[this._v("#")]),this._v(" 该书是如何组织的")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("strong",[e._v("Developing")]),e._v(" 让你用webpack启动和运行项目。这一部分介绍诸如浏览器自动刷新的一些特性，以及解释如何合成你的配置并让它保持可维护性。")]),r("li",[r("strong",[e._v("Styling")]),e._v(" 侧重样式的相关主题。你将学习如何使用webpack加载样式，以及介绍如何配置来自动添加不同浏览器厂商支持的样式前缀。")]),r("li",[r("strong",[e._v("Loading")]),e._v(" 详细介绍webpack加载起的意义，并向你展示如何加载静态资源，如：images, fonts, 和 JavaScript。")]),r("li",[r("strong",[e._v("Building")]),e._v(" 介绍source-map， 并讲解打包和代码分离的思想。你将学会如何整理你的生产模式配置。")]),r("li",[r("strong",[e._v("Optimizing")]),e._v(" 将你的的构建提升到生产质量级别，然后进行一系列小的调整使最终打包文件变得更小，你将学会如何调整来提升webpack性能。")]),r("li",[r("strong",[e._v("Output")]),e._v(" 讲解webpack输出的相关技术。与名字无关，webpack不仅用于web。webpack可是实现多页面的配置， 并学习服务端渲染的思想ssr（Server Side Rendering）。")]),r("li",[r("strong",[e._v("Techniques")]),e._v(" 讲解技术思想，如：动态加载，web workers, 国际化（i118），部署你的项目, 以及webpack添加npm依赖.")]),r("li",[r("strong",[e._v("Extending")]),e._v(" 展示如何用加载器（loader）和插件（plugins）扩展webpack。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("书的结尾附录了 "),t("em",[this._v("Troubleshooting")]),this._v(" 章节介绍webpack报给你一个错误时，你该做什么。它讲述的是一个过程, 使你明白该做什么，以及如何调试这个问题。当你有疑问，你可以翻阅书的附录。如果你不确定一个术语及其含义，你可以查阅本书最后的 "),t("em",[this._v("词汇表")]),this._v(" 。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"谁适合读这本书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谁适合读这本书","aria-hidden":"true"}},[this._v("#")]),this._v(" 谁适合读这本书")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"书的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#书的版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 书的版本")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("https://github.com/survivejs/webpack-book/compare/v2.1.7...v2.4.6\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("本书的当前版本号为 "),t("strong",[this._v("2.4.6")]),this._v(" 。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"获取支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取支持","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取支持")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("在 "),t("a",{attrs:{href:"mailto:info@survivejs.com"}},[this._v("info@survivejs.com")]),this._v("上给我发送电子邮件。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("如果你在Stack Overflow上发送一个问题，添加一个 "),t("strong",[this._v("survivejs")]),this._v(" 标签。在 Twitter上，添加一个hash标签（"),t("strong",[this._v("#survivejs")]),this._v("）为同一个目的。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"其他资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他资料")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"致谢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#致谢","aria-hidden":"true"}},[this._v("#")]),this._v(" 致谢")])}],!1,null,null,null);i.options.__file="03_introduction.md";t.default=i.exports}}]);