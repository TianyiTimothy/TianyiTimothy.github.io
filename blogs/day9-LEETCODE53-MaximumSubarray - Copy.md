# leetcode每日题53. 最大子序和

#### 题目来源这里[最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

我把题目复制到这里来~

**给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。**

**示例:**

**输入: [-2,1,-3,4,-1,2,1,-5,4],**
**输出: 6**
**解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。**
**进阶:**

**如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。**

## 过程

#### 分析题目

我的思路：选出所有连续子数组

掏出我的答案，注释比较详细就不用解读了，只是解决了问题，但是这个算法......

把调试的console.log也留着了，可以看出每次循环都在干啥

```javascript
var maxSubArray = function (nums) {
    // 思路：双指针选出所有连续子数组，比较和
    let rk; // 右指针
    let len = nums.length; // 数组长度
    let max; // 最大和
    let temp; // 当前和
    for (let i = 0; i < len; i++) {
        rk = i; // 右指针
        temp = nums[i]; // 清空当前和，设为当前循环第一个数
        max = max > temp ? max : temp;
        // console.log("i:" + i);
        while (rk < len - 1) {
            rk += 1; // 跳过第一个数，从第二个开始。（第一个存在temp中）
            temp += nums[rk];
            max = max > temp ? max : temp;
            // console.log("temp: "+ temp);
            // console.log(rk);
            // console.log("-----------------");
        }
    }
    return max;
};
```

执行用时 :276 ms, 在所有 JavaScript 提交中击败了5.96%的用户

内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户

真糟糕..



还是看大佬的代码8~

#### [大佬方法1-动态规划](https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/)

思路很简单，遍历到i的时候，如果前面的数组的最大子数组和是负数的话，可以直接舍弃掉，取nums[i]就行了。

看下面代码，sum就是这个“i之前最大子数组的和”，如果它大于0，则加上num就是“i+1之前最大子数组的和”；如果它小于0，则num本身就是“i+1之前最大子数组的和”。

```javascript
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
        if(sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};
```

#### [官方解法1-分治算法](https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/)

点击↑跳转看官方题解...

```javascript
function Status(l, r, m, i) {
    this.lSum = l;
    this.rSum = r;
    this.mSum = m;
    this.iSum = i;
}

const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
    if (l === r) return new Status(a[l], a[l], a[l], a[l]);
    const m = (l + r) >> 1;
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
}

var maxSubArray = function(nums) {
    return getInfo(nums, 0, nums.length - 1).mSum;
};
```



## 尾巴

1. 我的算法实力不够，先打好基础再进修那些难的吧~
2. 听说[写todolist可以用来掌握一门语言](http://todomvc.com/)...我准备自己写一个vue的...
3. 今天有同学跟我聊天说最近工作很忙，我说你居然这么快就找到工作了啊，她说是的TimHortons现在好多顾客...疫情这么严重的情况下，加拿大人胆子真大...