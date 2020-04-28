# 怎么在GitHub的README.md放图片

[TOC]

## 一句话总结

用相对路径，图片也需要上传到GitHub。

## 过程

今天改README的时候想说放点图片上去，结果放了以后是这个样子的

![readmepic1](C:\Users\41604\Desktop\Tianyi\img\day1\readmepic1.png)

这是因为图片的路径写的是绝对路径“C:\Users\xx\xx.png”

但是想要让图片在GitHub上正常显示的话，需要先把图片push到GitHub上，然后使用README.md的相对路径链接图片，比如我的目录是这样的：

/imgFolder

/css

/includes

README.md

然后README.md里的图片路径就应该是"imgFolder/xx/png"(假设你图片放在了imgFolder的话)

改完了以后执行git add README.md的时候，Git会把里面用到的图片一起提交上去。

## 事后



![readmepic2](C:\Users\41604\Desktop\Tianyi\img\day1\readmepic2.png)