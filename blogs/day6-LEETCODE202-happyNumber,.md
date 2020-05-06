# leetcode每日题202. 快乐数

#### 题目来源这里[快乐数](https://leetcode-cn.com/problems/happy-number/)

我把题目复制到这里来~

**编写一个算法来判断一个数 n 是不是快乐数。**

**「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。**

**如果 n 是快乐数就返回 True ；不是，则返回 False 。**

示例：

输入：19
输出：true
解释：
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

## 一句话总结

灵活运用位运算解答

## 过程

### 前情提要

今天一直在看Vue...于是又来睡前用LeetCode水博客了...

可以直接跳到下面的大佬方法。我的方法不够帅。

## 重点

### 分析题目

1. 首先肯定要把传入的数字每一位数拆出来，可以用string的split方法

```javascript
n.toString().split(""); // 返回数组，如n=1234，则返回['1','2','3','4']
```

2. 对每一位数进行平方，然后加起来形成新的数字

```javascript
let sum=0;
arr.forEach((num)=>{
    sum += num*num;
});
// forEach结束后的sum就是新的数字了
```

3. 但是这样占据的空间多，并且也还是用到了循环，不好不好。换种写法来拆数字，不存到新的数组里，直接遍历拿出sum

```javascript
let sum=0;
for(let i of n.toString()){
    sum+=i*i;
}
```

但是难点主要在于，如果他不是快乐数，如何界定这个终止的点。不是快乐数的情况下直接用while true的话肯定会导致死循环。这种时候就很尴尬，肯定要换个思路，怎么判断他**不是**快乐数。

其实思路很简单，只要这个数字在遍历的过程中值成为1之前**重复**了，他就一定不是快乐数。为什么？因为快乐数最终导向一定是1，而重复了的数字一定会再次重复，他就一定不会到1。

掏出我的答案

```javascript
var isHappy = function (n) {
    let sumArr = [];
    let numStr = n.toString();
    while (true) {
        // 每位平方的和
        let sum = 0;
        for (let i of numStr) {
            sum += i * i;
        }
        console.log(sum);

        // 如果是1
        if (sum === 1) {
            return true;
        }
        // 数字是否重复
        if (sumArr.includes(sum)) {
            // 重复了说明不快乐
            return false;
        } else {
            // 还没重复就加入记录
            sumArr.push(sum);
            // 将之前的sum存一下
            numStr = sum.toString();
        }
    }
};
```

做是做出来了，但是呢：

执行用时 :152 ms, 在所有 JavaScript 提交中击败了5.28%的用户

内存消耗 :39.8 MB, 在所有 JavaScript 提交中击败了20.00%的用户

### 剪枝

首先用set代替array，具体查看[这篇文章-使用 JavaScript 的 Set 集合提升你代码的性能](https://zhuanlan.zhihu.com/p/62178971)

代码是酱紫的

```java
// 定义
let sumSet = new Set();
// 循环里面添加
sumSet.add(sum);
```

然后return false可以移动到外面，这样每次循环少进行一次判断。代码是酱紫的

```javascript
// return false移动到外面
while(!sumSet.has(n)){
    ...
}
return false;
```

去掉numStr，直接用n存储，减少空间占用

```javascript
let sumSet = new Set();
// let numStr = n.toString(); 删掉
while (!sumSet.has(n)) {
    // 每位平方的和
    let sum = 0;
    for (let i of n.toString()) {
        sum += i * i;
    }
    console.log(sum);
    // 如果是1
    if (sum === 1) {
        return true;
    }
    // 加入记录
    sumSet.add(n);
    // numStr = sum.toString();删掉
    n = sum; //新增
}
return false;
```

执行用时 :84 ms, 在所有 JavaScript 提交中击败了34.62%的用户

内存消耗 :35.8 MB, 在所有 JavaScript 提交中击败了20.00%的用户

剪了剪复杂度没变化，所以没啥区别~

下面分析大佬的代码~

#### 大佬方法1

大佬发现快乐数其实是固定的那几个数，于是大佬选择hard code 100以内的快乐数：

```javascript
const list = new Set([1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100]);
// 把大于100的转换回100
while(n>100){
    n=...
}
return list.has(n);
```

执行用时 :64 ms, 在所有 JavaScript 提交中击败了96.53%的用户

内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了80.00%的用户

#### 大佬方法2

快慢指针！因为一定会重复，分两个指针，慢的一次走一步，快的走两步，要不最后快的是1，要不最后快的等于慢的。

看代码吧我说的不清楚！！

```javascript
var isHappy = function (n) {
    // slow 在第一步
    let slow = sum(n);
    // fast 在第二步
    let fast = sum(slow);
    while(slow != fast && fast != 1){
        // slow往前走一步
        slow = sum(slow)
        // fast往前走两步
        fast = sum(sum(fast))
    }
    return fast === 1
    
    // 求每位平方的和
    function sum(n){
        let sum=0;
        for(let i of n.toString()){
            sum += i*i;
        }
        return sum;
    }
};
```

执行用时 :84 ms, 在所有 JavaScript 提交中击败了34.62%的用户

内存消耗 :36.4 MB, 在所有 JavaScript 提交中击败了20.00%的用户

帅是帅，慢也是慢。还是方法1牛逼。

  

## 尾巴

1. 我还不够努力，我还太菜了，我要加倍努力！
