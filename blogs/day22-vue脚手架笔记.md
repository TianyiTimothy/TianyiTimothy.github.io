# Webpack中集成VueJS

## 中心

### 1.用npm安装

```bash
npm install -g @vue/cli
```

### 2.安装webpack并保存到开发阶段依赖

```bash
npm install webpack --save-dev
```

### 3.安装vue并保存到生产阶段依赖

```bash
npm install vue --save
```

### 4.配置webpack入口到webpack.config.js中

```javascript
module.exports = {
    entry: "./src/js/main.js",
    output: {
        // path需要是绝对路径，使用上面require拿过来的path
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
}
```

主要是看entry，便于接下来添加vue的依赖。

#### 5.main.js中导入Vue

```javascript
import Vue from 'vue'
```

这里要注意Vue的大小写

### 6.愉快的使用vue

但是会有报错：

You are using the runtime-only build of Vue where the template compiler is not available.

这是因为刚才安装的Vue其实是runtime-only的，而我们需要的则是runtime-compiler版本的。

这里解决方案有两个

### 7.1在webpack.config.js中更改resolve

```javascript
module.exports = {
    entry: ...,
    output: {...},
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    }
}
```

把默认runtime-only的vueJS换成含有compiler的vueJS

### 7.2根据官网提示和webpack版本更改mode选项或者是plugins

[此步骤官网直达链接](https://cn.vuejs.org/v2/guide/deployment.html#webpack)

### 8.小问题解决

找不到#app的提示，是因为把js放在了div的前面。