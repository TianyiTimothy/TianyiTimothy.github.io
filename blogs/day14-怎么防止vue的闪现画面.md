# 小项目中怎么防止Vue的闪现画面

## 一句话总结

HTML: 元素加上v-cloak

CSS: [v-cloak]{display: none}

## 过程

页面刚加载的时候胡子语法会显示出来。

v-cloak是VueJS小型项目中提升用户体验简单且重要的方法。

### 用法

HTML中在你需要组织闪现的标签上加上v-cloak

```html
<div id="app">
    <nav>blabla</nav>
    <main v-cloak>{{text}}</main>
</div>
```

CSS中给v-cloak设定样式，这个样式是只有【在vue实例编译结束前】应用的样式。

```css
[v-cloak]{
    display: none;
}
```

### 原理

我没读完源码，但是v-cloak的原理我大概理解一点：

首先是CSS选择器，用[target]选择的是“带有 target 属性所有元素。”。可以[点这里复习选择器](https://www.w3school.com.cn/cssref/css_selectors.asp)。

那么[v-cloak]选择出来的就是所有带有v-cloak属性的元素了。

实例初始化完成之后，VueJS中会把Vue中特有的attribute去掉。在实例初始化完成之前，上面写的main的HTML代码实际是这样的：

```html
<main id="main" class="row" v-cloak="">
```

然后加上CSS，就把所有带有v-cloak的元素都display: block了。



其实不止是v-cloak，你可以用v-if来试试，CSS里使用[v-if]{display:none}，效果看起来是一样的。和v-cloak一样，v-if也是在实例编译完之后去掉。

#### 源码

然后我刚才去读了一下源码，大概是这一段，感兴趣的大佬可以去搜搜读读理解理解。

```javascript
if (isRealElement) {
    // mounting to a real element
    // check if this is server-rendered content and if we can perform
    // a successful hydration.
    if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
        oldVnode.removeAttribute(SSR_ATTR);
        hydrating = true;
    }
}
```



具体操作看[官方API](https://github.com/hakimel/reveal.js/#api)，我这里就教一教怎么导入，然后举点简单的例子。

## 尾巴

1. 每次水博客都怕自己理解错了，希望我能尽快成长吧。
2. 看看我的[DEMO](https://tianyitimothy.github.io/)(可能过段时间就换别的东西了~)