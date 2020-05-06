# leetcode每日题98. 验证二叉搜索树

#### 题目来源这里[验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)

[二叉搜索树详细定义](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9) 

我把题目复制到这里来~

**给定一个二叉树，判断其是否是一个有效的二叉搜索树。**

**假设一个二叉搜索树具有如下特征：**

**节点的左子树只包含小于当前节点的数。**
**节点的右子树只包含大于当前节点的数。**
**所有左子树和右子树自身必须也是二叉搜索树。**
**示例 1:**

**输入:**
    **2**
   **/ \**
  **1   3**
**输出: true**
**示例 2:**

**输入:**
    **5**
   **/ \**
  **1   4**
     **/ \**
    **3   6**
**输出: false**
**解释: 输入为: [5,1,4,null,null,3,6]。**
     **根节点的值为 5 ，但是其右子节点值为 4 。**

## 过程

#### 思路

遍历二叉树，每次遍历弄清楚判断条件就行了。先看[遍历二叉树的各种方法](https://blog.csdn.net/My_Jobs/article/details/43451187)，因为是判断左边的节点小于右边的节点，用中序比较好理解。代码如下，详细的在注释。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 如果只有一个节点，则是二叉搜索树
    if(root && root.right == null && root.left == null){
        return true;
    }
    // 存略过的节点，等下好按顺序取
    var tmpStack = [];
    // 当前节点，从顶开始
    var curNode = root;
    // 上一个节点
    var lastNode = null;
    while(curNode != null || tmpStack.length != 0){
        // 中序遍历：从最左边开始
        while(curNode != null){
            // 不是最左？那么存到tmpStack里等下再用
            tmpStack.push(curNode);
            // 当前节点的左节点，加上本while循环判断他左边是不是空
            curNode = curNode.left;
        }
        // 取到空值了才会到这里，所以要把最后一个存入的不为空的结点值取出来
        curNode = tmpStack.pop();
        // 比大小
        if(lastNode!==null && curNode.val <= lastNode){
            return false;
        }
        // 当前结点记录为上一结点，用于下次比较
        lastNode = curNode.val;
        // 往右找
        curNode = curNode.right;
    }
    return true;
};
```



## 尾巴

1. 想起来学数据结构的时候就二叉树学的最好了，今天的题爱了爱了
2. 今天去了一趟医院，耽误了我的学习时间！！
3. 一开始想用python写来着，发现语法忘记了好多....就还是继续JavaScript了~