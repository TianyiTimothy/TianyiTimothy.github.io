# 用vue写一个简版TODOLIST



## 过程

### 功能分析

显示，添加，删除和修改，经典CRUD~

前端

用bootstrap粗略的做一下

![1588411755653](C:\Users\41604\AppData\Roaming\Typora\typora-user-images\1588411755653.png)

想要尽量的减少用户点击的次数~

只放了增删改的按钮，点击文本就可以修改了~

ADD按钮旁边是input框，用户可能不知道能直接点击，所以在ADD那可以加一个“如果右边的input为空的话，将focus转移到input上”的处理。

代码如下..第一个li是head，最后一个是add的，中间省掉了两个li，节约空间~

记得页面要引用bootstrap哦~

```html
<div class="container">
    <div class="todo">
        <ul class="list-group">
            <li class="list-group-item list-group-item-primary text-center font-weight-bold">
                TODO-LIST
            </li>
            <li class="list-group-item text-center">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-warning" type="button">EDIT</button>
                        <button class="btn btn-outline-danger" type="button">DELETE</button>
                    </div>
                    <input type="text" class="form-control" value="水博客">
                </div>
            </li>
            <li class="list-group-item text-center">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-success" type="button">ADD</button>
                    </div>
                    <input type="text" class="form-control" value="">
                </div>
            </li>
        </ul>
    </div>
</div>
```

### 套入Vue

首先html在刚才有的东西外面套一个

```html
  <div id="app">
```

然后写JavaScript来创建Vue的实例。

里面先放一个数组用来存所有的TODO

给增加、删除和修改都创建好函数，并且让刚才的li用v-for来生成。

JavaScript代码如下

```javascript
const app = new Vue({
    el: '#app',
    data: {
        todos: ["水博客","学习Vue","找工作"]
    },
    methods: {
        add(){

        },
        edi(){

        },
        del(){

        }
    },
});
```

HTML部分如下，修改了的部分加了注释。

```html
<!-- v-for遍历数组 -->
<li class="list-group-item text-center" v-for="todo in todos">
    <div class="input-group">
        <div class="input-group-prepend">
            <!-- 绑定了函数 -->
            <button class="btn btn-outline-warning" type="button" @click="edi()">EDIT</button>
            <button class="btn btn-outline-danger" type="button" @click="del()">DELETE</button>
        </div>
        <!-- v-bind了这个value -->
        <input type="text" class="form-control" :value="todo">
    </div>
</li>
<li class="list-group-item text-center">
    <div class="input-group">
        <div class="input-group-prepend">
            <!-- 绑定了函数 -->
            <button class="btn btn-outline-success" type="button" @click="add()">ADD</button>
        </div>
        <input type="text" class="form-control" value="">
    </div>
</li>
```

### 增加 add

先来处理add方法，比较简单。

注意现在的数据每次重开/刷新页面都会变成初始化的数据，这个我们最后再来处理8~先设想用户不刷新页面。

那么add方法就是往数组里插入一个新的，用户输入的值。

首先给add方法对应的那个input增加了v-model属性，这样可以比较优雅的获得其value。

```html
<!-- 使用v-model双向绑定 -->
<input type="text" class="form-control" v-model="newTodo">
```

既然使用了v-model，就需要有对应的变量。我们往data里添加这个变量。

```javascript
const app = new Vue({
      el: '#app',
      data: {
        todos: ["水博客","学习Vue","找工作"],
        newTodo: ""
      }
});
```

data里有了newTodo这个变量以后，在add里取值就优雅了很多。代码如下

```javascript
add(){
    // 用户输入的值: this.newTodo
    // 将其插入数组
    this.todos.push(this.newTodo);
    // 清空input
    this.newTodo = "";
}
```
现在就已经可以添加新的todo进入数组了，但是还有两个问题：

1. 在没有输入任何东西的情况下，数据也会加入到数组中
2. 用户可能并不知道需要先修改input的value再点击addButton

但是没有关系！这两个问题我们一起解决了~





## 尾巴

1. 我要更努力。