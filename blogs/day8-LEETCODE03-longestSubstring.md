# leetcode每日题3. 无重复字符的最长子串

#### 题目来源这里[无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

我把题目复制到这里来~

**给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。**

**示例 1:**

**输入: "abcabcbb"**
**输出: 3** 
**解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。**
**示例 2:**

**输入: "bbbbb"**
**输出: 1**
**解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。**
**示例 3:**

**输入: "pwwkew"**
**输出: 3**
**解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。**
     **请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。**

## 一句话总结

双指针

## 过程

#### 分析题目

字符重复了以后需要回到上一个重复点重新遍历

可以这么做：两个循环分别用左右指针，每次右指针将剩余遍历一遍，左指针往右移一格。



掏出我的答案，注释比较详细就不用解读了，反正也不是啥好算法

```javascript
var lengthOfLongestSubstring = function (s) {
    // set集合存储字符用于比较
    let cSet = new Set();
    // 记录
    let count=0;
    let maxCount=0;
    // 右指针
    let rk = 0;
    // 长度
    let n = s.length;
    let rn = s.length;

    for(let i=0;i<n;i++){
        // 删掉最左的字符，右指针回到最左，重新使用右指针遍历
        if(i>0){
            s=s.substr(1);
            rn = s.length;
        }
        rk=0;
        cSet=new Set();

        // 右指针遍历，条件为set集合中不包含当前字符
        while(!cSet.has(s[rk])&&rk<rn){
            // 加进set集合中
            cSet.add(s[rk]);
            // console.log(s[rk]);
            count++;
            rk++;
        }
        // 右指针本次循环是否为最长子字符集
        maxCount = maxCount < count ? count : maxCount;
        count=0;
        // 如果剩余长度不如maxCount，可以提前终止
        if(n<=maxCount){
            break;
        }
        // console.log("----------");

    }

    return maxCount;

};
```

做是做出来了，但是呢：

执行用时 :296 ms, 在所有 JavaScript 提交中击败了18.61%的用户

内存消耗 :41.9 MB, 在所有 JavaScript 提交中击败了27.40%的用户



还是看大佬的代码8~

#### 大佬方法1

大佬用变量(叫left，是当前无重复字串的起始下标)来实现右指针的效果，省略了一次循环..

```javascript
var lengthOfLongestSubstring = function(str) {
 if (!str.length) return 0
    let tmpStr = ''   // 每次循环找到的不含重复字符的子字符串
    let maxStrLen = 0   // 最大不含重复字符的子字符串的长度
    let len = str.length   
    let left = 0  // 不含重复字符的子字符串的左游标
    for (let i = 0; i < len; i++) {
        if (tmpStr.indexOf(str[i]) !== -1) {
            left += (str.slice(left, i).indexOf(str[i]) + 1)
            continue
        }
        tmpStr = str.slice(left, i + 1)
        maxStrLen = Math.max(maxStrLen, tmpStr.length)
    }
    return maxStrLen
};
```

其中

```javascript
left += (str.slice(left, i).indexOf(str[i]) + 1)
```

是把起始下标移到重复的那个字符的后一位。

比如ababc，在到第二个a的时候，tmpStr="ab"，str[i]为a，就会进入if，更新left。

每次循环中都会通过当前left更新tmpStr最短子字符串，并且通过它得到最大子字符串长度。



## 尾巴

1. 大佬们都好厉害，我要更努力才能找到工作。