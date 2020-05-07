# 如何用网页播放幻灯片-RevealJS

## 一句话总结

看[官方API](https://github.com/hakimel/reveal.js/#api)。(

## 过程

### 前情提要

用RevealJS改了一下[我的github的网页](https://tianyitimothy.github.io/)。最开始知道RevealJS是老师上课用到了我觉得很酷，就去搜了他的源码(按`F12`)。

具体操作看[官方API](https://github.com/hakimel/reveal.js/#api)，我这里就教一教怎么导入，然后举点简单的例子。

#### CSS

首先你需要[导入css文件](https://cdnjs.com/libraries/reveal.js/)。

**reset.css** 是用来确保不同浏览器下显示效果都是想要的效果。其实就是把margin，padding，border都设置成了0。顺便还定义了HTML5新增的那些标签。

**reveal.css** 是reveal的基础CSS，必须导入。

**theme/xx.css** 是主题CSS，可以复制一个然后自己改改，或者直接改官方提供的SCSS然后转CSS，就成自己的主题拉~ 

```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/reveal.css">
<link rel="stylesheet" href="css/knight.css">
```



#### JavaScript

首先要导入reveal.js

```html
<script src="js/reveal.js"></script>
```

然后在自己的script里初始化一下reveal。可选参数请看[官方API](https://github.com/hakimel/reveal.js/#api)

```javascript
Reveal.initialize({
    xx: xxx,
});
```



#### HTML

最外层是一个div.reveal

接着是div.slides

再里面的section标签就是你要展现的每一页了。

```html
<div class="reveal">
    <div class="slides">
        <section>Slide 1</section>
        <section>
        	<section>Slide 2</section>
        	<section>Slide 3</section>
        </section>
        <section>Slide 4</section>
    </div>
</div>
```

横向的slide就单独一个section标签，纵向的slide就section标签里面再包含一个section标签。

建议第一页里面带一个h1标签，其他页里面标题用h2标签。

## 尾巴

1. 每天水博客真是太花时间了~ 不过进步是有的~
2. 看看我的[DEMO](https://tianyitimothy.github.io/)(可能过段时间就换别的东西了~)