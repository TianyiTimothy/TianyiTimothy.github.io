# 使用webpack搭建本地服务器

webpack提供了一个可选的本地开发服务器，这个本地服务器基于nodeJS搭建，内部使用expressJS框架，可以实现修改代码后浏览器自动刷新效果。

## 步骤

### 1.npm安装webpack和webpack-dev-server

```bash
npm install webpack --save-dev
npm install webpack-dev-server --save-dev
```

这里没有指定版本号。

当下最新是    "webpack-dev-server": "^3.11.0",    "webpack": "^4.43.0"

### 2.配置webpack.config.js

```javascript
module.exports={
  [...],
  devServer: {
    contentBase: './dist',
    inline: true, // 是否实时监听
  }
}
```

### 3.配置package.json

```json
  "scripts": {
    "dev": "webpack-dev-server -open"
  },
```

如果还没有package.json的话，可以先用npm init初始化一个。

-open是直接打开localhost

### 4.执行

```bash
npm run dev
```

