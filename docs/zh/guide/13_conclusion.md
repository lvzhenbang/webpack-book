# 总结

正如本书所展示的，webpack是一个多功能的工具。为了更容易地回顾内容和技术，请浏览下面的列表。


## 一般列表

* **Source maps** 允许你在开发的过程中在浏览器中调试代码。如果你捕获了输出，它们还可以在生产使用期间提供更高质量的堆栈跟踪。*Source maps* 这章深入讲解了这个主题。
* 为了保持你的构建快速，考虑到优化。*Performance* 这章介绍了实现这个目的的各种策略。
* 为了保持你的配置的可维护性，请考虑合成它。由于webpack配置是JavaScript代码，所以可以通过多种方式进行安排。*Composing Configuration* 这章讲解了这个主题。
* webpack的引入依赖包的方式可自定义。*Consuming Packages* 这章讲了了与此相关的技术。
* 有时你不得不扩展webpack。*loader的扩展* 和 *plugins的扩展* 这两章介绍了如何实现。你还可以在webpack的配置定义之上工作，并实现你自己的抽象，使之适合你的目的。

## 开发列表

* 要在开发过程中充分利用webpack，请使用 *webpack-dev-server* (WDS)。你还可以找到可以在开发期间附加到节点服务器的中间件。*浏览器自动刷新* 这章详细地讲解了WDS。
* Webpack实现 **热模块替换** (HMR)。它允许你在应用程序运行时替换模块，而无需强制浏览器刷新。*热交换* 附录详细介绍了这个主题。

## 生产列表

### 样式

* Webpack 默认内联样式到JavaScript中。为了避免这种情况，可以使用`MiniCssExtractPlugin` 或等效解决方案将CSS分离到`*.css` 类型的文件中。*分离CSS*这章介绍了如何实现。
* 为了减少编写的CSS数量，请考虑 **Autoprefixing** 。*Autoprefixing* 这章讲解了如何实现。
* 基于静态分析可以清除未使用的CSS样式。*Eliminating Unused CSS* 这章讲解了这种技术的基本思想。

### 静态资源

* 通过webpack加载图片时，优化它们，这样用户下载的东西就少了。*Loading Images* 这章展示了如何做到这一点。
* 根据你需要支持的浏览器，只加载你需要的字体。*Loading Fonts* 这章讲解了这个主题。
* 缩小你的源文件可以确保浏览器减少客户端下载的负载。*Minifying* 这章展示了如何做到这一点。

### 缓存

* 要从客户端缓存中获益，请将vendor相关信息从应用程序中分离出来，单独打包。这样做的话，在理想的情况下，客户端下载的东西就少了。*Bundle split* 这章讲解了这个主题。*添加哈希到文件名* 这章展示了如何在此基础上实现缓存失效。
* 使用webpack的 **代码分割** 功能来按需加载代码。这种技术是手动触发的，你不需要立即加载所有代码，而是逻辑触发(如：单击用户界面元素)之后，将其推入。*代码分割* 这章详细介绍了这种技术。*动态加载* 这章展示了如何处理更高级的场景。
* 将hash添加到文件名中，如：*将散列添加到文件名中* 这一章节中所述，这样可以从缓存中获益，并分离一个manifest以进一步改进解决方案，如：*分离清单* 章节所述。

### 优化

* 使用ES2015模块定义来做 **tree shaking**。它允许webpack通过静态分析来清除未使用的代码路径。关于它的技术思想，请参阅 *Tree Shaking* 这一章。
* 设置特定的应用程序的环境变量，在生产模式下进行编译。你可以用这种方法实现特性标签。请参阅 *Environment Variables* 这章来阐述该技术。
* 分析构建的统计数据，以了解需要改进的内容。*Build Analysis* 这一章展示了如何用多个可用的工具来做这件事。
* 将一部分计算推给了 Web Workers。*Web Workers* 这一章介绍了如何实现这一点。

### 输出

* 清理并将关于构建的信息附加到结果中。*Tidying Up* 这一章展示了如何做到这一点。

## 总结

Webpack允许你使用很多不同的技术来拼接你的构建。它支持本书 *output* 部分中讲解的多种输出格式。与名字无关，它不只是用于Web。虽然大多数人用它做Web开发，但它能做的远不止于此。