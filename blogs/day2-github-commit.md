# GitHub怎么改刚刚push的commit message

## 一句话总结

先git rebase把指针放到提交前，接着git commit --amend改commit message，最后再push回去

```shell
git rebase -i HEAD~5 #显示近5次提交，可以改成别的数字
```

然后会出来一个vim里面有近5次提交的commit message。按i变成insert模式后把你需要的那次commit前面的pick改成edit，然后按esc退出insert模式，:w保存:q退出。

## 过程

### 前情提要

今天又通宵了，commit的时候拼错了一个单词，让我想起来小学的时候写作业写到很晚写错了 一个“及”字...

在这个时候我是需要改commit的，但是我已经push了...(都是因为我太困了)

btw如果没push的话可以用

```shell
# git commit --amend
```

这行代码会打开你最新的一次commit，然后你可以编辑你的注释内容。

但我已经提交了，怎么办涅？

### 重点

先回到提交前

``` shell
git rebase -i HEAD~1 #显示上次提交，可以改成别的数字来显示近n次提交
```

然后会出来一个vim里面有上提交的commit message。按i变成insert模式后把你需要的那次commit前面的pick改成edit，然后按esc退出insert模式，:w保存:q退出。冒号别忘了敲哟。[来康康更多vim指令](https://blog.codepen.io/2014/02/21/vim-key-bindings/)~

这时候就能修改刚才的commit了，用

```shell
 git commit --amend #修改commit
```

然后又会出来一个vim，可以看到第一行就是刚提交的有问题的commit message。还是按i进入insert模式，把commit message改成想要的，然后:wq保存+退出。

改完了就使用

```shell
git rebase --continue #更新这条rebase
```

到这里就完事了，接下来再push一遍就可以覆盖掉上一次的commit了~

### 尾巴

可能会需要merge，但这次只是改commit message其实没有东西变化了，pull一下再push就好啦~

