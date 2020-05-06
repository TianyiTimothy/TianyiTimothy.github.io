# JavaScript解答罗志祥多人运动题

今天看到一题[罗志祥的多人运动](<http://leetcode-solution.cn/everyday/347>)笑死了，赶紧来解答一下子~

点上面链接可以看原题，里面还有C++的解法~(但我tmd看不懂)

顺便推荐star一下[LeetCode题解](https://github.com/azl397985856/leetcode)~

我把题目复制到这里来~

**已知小猪每晚都要约好几个女生到酒店房间。每个女生 i 与小猪约好的时间由 [si , ei］表示，其中 si 表示女生进入房间的时间， ei 表示女生离开房间的时间。由于小猪心胸开阔，思想开明，不同女生可以同时存在于小猪的房间。请计算出小猪最多同时在做几人的「多人运动」。**

**Input ： [ [0 , 30] , [5 , 10], [15, 20] ] **

**OutPut ：最多同时有两个女生的「三人运动」**

## 一句话总结

求出每个时间刻度有几人在场即可。

## 过程

### 前情提要

今天突然想看一下three.js，但是跟着文档走没遇到什么问题，所以就来做题吧~

## 重点

话不多说(已经说了很多了)直接看代码吧~

注释写的超详细~

```javascript
// 首先输入的是一个二维数组
let input = [[0, 30], [5, 10], [15, 20]];
function getPigTime(input) {
    // 新数组，用来记录每个人在猪猪房里的每个时间点
    let newArr = new Array();

    // 遍历input
    input.forEach((item) => {
        // 遍历input里每个妹子的时间
        for (let i = item[0]; i <= item[1]; i++) {

            // 每个存在的时间点，人物数量+1，每个尚未计算的时间点，赋给新数组一个初始值1
            newArr[i] ? (newArr[i]++) : (newArr[i] = 1);
        }
    });

    // 新数组中最大的数字就是同一时间多人在线的人物数量。注意这里小猪不算人
    return Math.max(...newArr);
}
console.log(getPigTime(input));
```



## 尾巴

1. 生成item[0]到item[1]的连续整数数组:

```javascript
input.forEach( (item)=> {
                // 转换成数组
                newArr.push(Array.from(new Array(item[1] + 1).keys()).slice(item[0]));
                /* 解释上面的狗屎代码：
                    new Array(item[1]+1).keys()是一个array iterator
                    外面套上Array.from()就生成一个item[1]个元素的从0到item[1]的数组
                    再接上slice(item[0])切掉从0到item[0]的数字后就剩下从item[0]开始到item[1]结束的数组了
                    然后把这个数组push到newArr里面，以便forEach结束后继续用...
                */
}
```

2. 我发现复杂度忘得差不多了，明天看看吧。

3. 话说上面的代码第一个循环参考了大佬的，我自己写的没这么简化~