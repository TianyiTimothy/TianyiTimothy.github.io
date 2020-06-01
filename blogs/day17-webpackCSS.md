# 使用webpack.loader处理CSS

## 什么是loader

loader是webpack中一个核心概念，原本webpack是处理js代码的，但是业务有时会需要将scss转换为css之类的。这时原有的webpack功能已经不够了，可以给webpack扩展对应的loader。

## 使用loader

       1. 在js中引用css

```js
require("./css/my.css");
```

此时直接跑webpack会针对css文件提示 “You may need an appropriate loader to handle this file type.”

2. 通过npm安装loader

```bash
npm install --save-dev css-loader
npm install --save-dev style-loader
```

3. 在webpack.config.js中的module关键字下进行配置

```javascript
module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }
    ]
}
```

4. 使用webpack进行处理

```bash
webpack
```



## 解读

css-loader负责将css文件加载，style-loader负责将样式加到DOM元素上。

顺序不能错，先用的是css-loader，但是由于webpack是先从后面那个开始处理，所以先用的要放在后面。

## 尾巴

1. 下学期说要选一个框架自己学，就搞laravel吧~