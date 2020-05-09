# leetcode每日题98. 验证二叉搜索树

#### 题目来源这里[Sqrt(x)](https://leetcode-cn.com/problems/sqrtx/)

**我把题目复制到这里来~**

**实现 int sqrt(int x) 函数。**

**计算并返回 x 的平方根，其中 x 是非负整数。**

**由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。**

**示例 1:**

**输入: 4**
**输出: 2**

**示例 2:**

**输入: 8**
**输出: 2**
**说明: 8 的平方根是 2.82842...,** 
     **由于返回类型是整数，小数部分将被舍去。**

## 过程

#### 思路

这是一道数学题...怎么求平方根呢？[看这里](https://en.wikipedia.org/wiki/Integer_square_root#Using_only_integer_division)

![{x}_{{k+1}}={\frac  {1}{2}}\left(x_{k}+{\frac  {n}{x_{k}}}\right),\quad k\geq 0,\quad x_{0}>0.](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c5fdaf147463d73eb69b6a9d85d97b2e1d9a6ce)

接着用代码实现它就好了。

是说k趋近于无穷的时候，x<sub>k+1</sub>就趋近于根号n。

看代码里的注释来理解~详细~

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(n) {
    // 小于2的平方根就是他自己的向下取整
    if(n<2){return Math.floor(n);}
    // sqrt是平方数，从n开始往中间靠拢
    let sqrt = n;
    // mid也是平方数，从1开始往中间靠拢
    let mid = n/sqrt;
    // while循环中，sqrt从n开始往平方数靠拢，mid从1开始往平方数靠拢。当sqrt不再比mid大的时候，说明已经靠的最拢了，这时候向下取整就是平方数了。
    while(sqrt>mid){
        mid=n/sqrt;
        sqrt=Math.floor((sqrt+mid)/2);
    }
    return sqrt;
};
```



## 尾巴

1. 今天水博客水的好早，嘿嘿