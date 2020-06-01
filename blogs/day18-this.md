# 浅显理解JavaScript中的this

## 前言

付费的网课，第一节课说，js中的this搞清楚了再来上这个课。我想了想我好像真的没有搞清楚。那就来看看this到底是怎么一回事8。

## 中心

### 1.this指向调用函数的最近一级对象

```javascript
function func(){
    var age = 18;
    console.log(this.age); // undefined
    console.log(this); // Window
}
func();
```

this指向了window。



```javascript
var obj = {
    age: 18,
    fn: function () {
        console.log(this.age);  // 18
        console.log(this); // {age:18, fn: f}
    }
}
obj.fn();
```

this指向了obj。



```javascript
var obj = {
    age: 18,
    fn: function () {
        console.log(this.age);  // undefined
        console.log(this); // window
    }
}
var a = obj.fn;
```

this指向了window。



strict时有所不同

```javascript
"use strict"
function func() {
    var age = 18;
    // console.log(this.age); // undefined
    console.log(this); // {age: 18, fn: ƒ}
}
func();
```



## 尾巴

1. 