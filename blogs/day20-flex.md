# Flex布局

[TOC]



## 前言

Flex布局用的很多。

最低需求是IE10。

## 中心

### 1.基本概念

#### Flex Container 

开启了Flex布局的元素叫做Flex Container。

#### Flex Item

Flex Container里面第一层子元素就是Flex Item。

#### main和cross

Flex布局中有主轴和副轴，主轴叫main axis，主轴的长度较main size，主轴的起始位置和终止位置分别是main start和main end。

副轴相关词就把main替换成cross。

### 2.开启Flex布局

修改需要flex布局元素的display，值可以是inline-flex;也可以是flex;。

inline-flex;和flex;分别定义的是行内块元素和块元素。

### 3.flex-container相关属性

#### flex-direction

决定了主轴的方向。

默认值：

​	row: 主轴左到右横向布局

可选值：

​	row-reverse: 主轴从右到左横向布局

​	column: 主轴从上到下纵向布局

​	column-reverse: 主轴从下到上纵向布局

#### justify-content

决定了flex-item对于主轴的对齐方式

默认值：

​	flex-start: 跟main start对齐

可选值：

​	flex-end: 跟main end对齐

​	center: 居中

​	space-between: 跟main start和main end对齐，flex-item之间等间距

​	space-evenly: 将main start和main end也看成一个item，item之间等间距

​	space-around: flex-item等间距，跟main start和main end的距离是item之间间距的一半

#### align-items

决定了flex-item对于副轴的对齐方式

默认值：

​	auto: 使flex-item在副轴方向填充整个flex-container

可选值：

​	stretch: 同normal

​	flex-start: 跟cross start对齐

​	flex-end: 跟cross end对齐

​	center: 跟副轴的中间点对齐

​	baseline: 跟基线对齐

#### flex-wrap

决定了在flex-item总长度大于flex-container的时候换不换行

默认值：

​	nowrap: 不换行

可选值：

​	wrap: 超过后换行

​	wrap-reverse: 超过后换行，行数从后往前

#### flex-flow

是flex-wrap加flex-direction的shorthand属性。

#### align-content

决定flex-item在副轴的对齐方式，类似justify-content。

### 4.flex-item相关属性

#### order

决定flex-item排序顺序，值是数字。类似于z-index，但是值越小越前面。

#### align-self

可以让flex-item跳出父元素规定的align-items。

#### flex-grow

这个类似bootstrap里的col-xx-1，就是将此flex-item的flex-grow除以总数得出width的百分比。

总数的最小值为1，也就是说如果所有flex-item的flex-grow总数不为1，将分不满一行/列。

#### flex-shrink

决定了收缩度，值为收缩比例。当flex-item的长度超过了flex-container在main axis的size时启用。

总数大于1时，收缩度=收缩比例 x 超出量/总收缩比例。

总数小于1时，收缩度=item数 x 收缩比例 x 超出量/总收缩比例。

默认值：1

#### flex-basis

类似于宽度，优先级更大。

#### flex

是flex-grow加flex-shrink加flex-basis的shorthand属性。

