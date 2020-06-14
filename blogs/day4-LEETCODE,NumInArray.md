# leetcode面试题56 - I. 数组中数字出现的次数

#### 题目来源这里[面试题56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

我把题目复制到这里来~

**一个整型数组 `nums` 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。**

**示例 1：**

**输入：nums = [4,1,4,6]**
**输出：[1,6] 或 [6,1]**

**示例 2：**

**输入：nums = [1,2,10,4,1,4,3,3]**
**输出：[2,10] 或 [10,2]**

## 一句话总结

灵活运用位运算解答

## 过程

### 前情提要

今天鱼了...睡前写道题吧...

## 重点

话不多说直接看代码吧~

注释写的超详细~

```javascript
// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。
        // 要求时间复杂度是O(n)，空间复杂度是O(1)。
        let input = [1, 2, 10, 4, 1, 3, 4, 3];
        // output : [2,10] or [10,2]

        function getSingle(input) {
            // 时间复杂度是O(n), 就不能嵌套循环
            // 空间复杂度是O(1)，所以不能搞一个新的数组什么的
            // 下面两个是output
            let num1 = 0;
            let num2 = 0;
            // temp是目标数字的异或值
            let temp = 0;
            input.forEach(item => {
                /* 已知a^a=0, 遍历数组以后^出来的这个temp就是两个目标数字的^(异或)
                以上面的input举例，这波循环的具体运算过程如下：
                00000001(1) ^ 00000010(2) -> 00000011(3)
                00000011(3) ^ 00001010(10) -> 00001001(9)
                00001001(9) ^ 00000100(4) -> 00001101(13)
                00001101(13) ^ 00000001(1) -> 00001100(12)
                00001100(12) ^ 00000100(4) -> 00001000(8)
                00001000(8) ^ 00000011(3) -> 00001011(11)
                00001011(11) ^ 00000011(3) -> 00001000(8)
                */
                temp ^= item;
            });
            /* 因为有两个单独的数字，接下来需要将input分为两组。那么怎么分组呢？
            异或：如果一个是1一个是0，则结果是1，否则是0
            上面的temp是这两个数字的异或，也就是说：
            00000010(2) ^ 00001010(10) = 00001000(8)
            两个数字异或出来的结果为1的位，数字一定不一样。所以就拿这一位来做分组的凭据就好
            */

            // 分组凭据(找出不一样的第一位数)
            let mark = temp ^ (temp & (temp - 1));
            /* 运算过程：
            首先括号里面temp&(temp-1)
            00001000(8) - 00000001(1) -> 00000111(7)
            00001000(8) & 00000111(7) -> 00000000(0)
            再跟外面的temp进行异或运算
            00001000(8) ^ 00000000(0) -> 00001000(8)

            这个例子好像怪怪的，因为8本来就只有一位数字是1。
            换一个例子试试，假如temp是由10(00001010)和13(00001101)异或出来的7(00000111)
            00000111(7) - 00000001(1) -> 00000110(6)
            00000111(7) & 00000110(6) -> 00000001(1)
            再跟外面的temp进行异或运算
            00000111(7) ^ 00000001(1) -> 00000001(1)
            看，出来的还是第一位不一样的数字~
            */

            /* 现在有了mark，可以区分了。
            我们知道了mark是两个目标数字的[第一位不一样的数字]
            下面再遍历一次，用mark来把目标数字分到不同的组，组间进行异或。
            组A包括所有出现了两次并且第四位为1的数字+只出现了一次并且第四位为1的数字，
            让他们进行异或，就能求出来单独的那个数字了。
            组B同理。
            */
            input.forEach((item) => {
                if ((mark & item) === 0) {
                    // 和00001000进行与运算，为0的一定是xxxx0xxx，即第四位为0的数字
                    num1 ^= item;
                } else {
                    // 那么这里一定是xxxx1xxx
                    num2 ^= item;
                }
            });
            return [num1,num2];
        }
        console.log(getSingle(input));

```



## 尾巴

1. **复杂度**

   昨天看了看复杂度的计算~

   上面的代码**时间复杂度**应该是3+n+1+n+1 = 2n+5 也就是 O(n)

   **空间复杂度**新的变量都只是单层的<-(不太确定应该怎么叫)，所以是O(1)

2. 我得开始找工作了...哎...
3. 安利一篇博文[你所忽略的js隐式转换](https://juejin.im/post/5a7172d9f265da3e3245cbca)