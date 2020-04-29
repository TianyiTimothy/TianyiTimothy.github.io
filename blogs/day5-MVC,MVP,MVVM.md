# 对常见软件架构MVC,MVP和MVVM的浅显理解

## 前情提要

学过ASP.NET, DJango, 和VueJS，然后我还去查询了一些[关于MVP的文章](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)~

## 过程

### ASP.NET - MVC

MVC就是Model, View和Controller

我们写ASP.NET的过程

1. 先把Model写好了，然后通过entity framework根据Model生成数据库。
2. 填充Controller，每一个Controller的函数对应至少一个View的页面，Controller类似于一个Route。
3. 完善View的布局。

通信方式是酱紫的：M->V->C->M->...

`Model` 将数据传递到 `View` 中展示

用户在 `View` 中的操作传送到 `Controller` 中运行相应代码

`Controller` 运行的代码将改变 `Model` 的结果

### DJANGO - MTV 其实也是MVC

MTV是`Model`, `Template`(MVC中的View)和`View`(MVC中的Controller)

通信方式就是M->T->V->M...

### VueJS - MVVM

MVVM是`Model` `View` `ViewModel`

`Model`还是跟数据挂钩，`View`还是跟视图挂钩

`ViewModel`则是二者之间的桥梁。

在MVVM中，M和V并不直接进行通信，而是要通过VM。

通信方式是这样的：View<=>ViewModel<=>Model

### MVP

MVP(P是Presenter)跟MVVM很接近，唯一的区别根据[上面提到的那篇文章](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)，在于"MVVM用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。"。那么MVP就是没有双向绑定的MVVM，也就是说`View`发生变动的时候需要进行一次通信，传输给`Presenter`。

## 尾巴

1. 害，理解的太浅了，还需要更努力才行！
2. 明天要早起去买菜，准备7点半起，那么现在差不多该睡了...
3. 今天稍微复习了一下Vue，明天开始看XCSF推荐的做自己的UI系列了~