# github pages部署react-app的简易步骤

这两天学习了react的基础，做了一个[小项目](https://tianyitimothy.github.io/covid_tracker/)。

## 过程

现在你有一个create-react-app创建的react项目

```bash
npm create-react-app
```

想要部署到github pages上。

#### 修改package.json

```json
{
  "name": "your_proj_name",
  "version": "0.1.0",
  "private": true,
  "homepage": "./",
  ...
},
"scripts": {
        ...
  + "predeploy": "npm run build" , 
  + "deploy": "gh-pages -d build"
},
```

homepage是"./"而不是项目的github page url

#### 提交代码到github

```bash
git push ...
```

#### 安装gh-pages

```bash
npm install gh-pages --save-dev
```

#### 部署

```bash
npm run deploy
```

#### 设置

会发现在项目repository的branch里多了一个gh-pages分支，这个就是部署在github pages的代码了。

## 尾巴

1. 母上生病了，这两天照顾她就没有学习（除了这个react小网页），我感觉好罪恶啊。