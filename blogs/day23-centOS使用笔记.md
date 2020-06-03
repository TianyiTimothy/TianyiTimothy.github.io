# CentOS小笔记

## 连接github

### 安装Git

```bash
$ yum install git
```



### 生成密钥

```bash
$ ssh-keygen -t rsa -C “xxx@xxx.xxx”
```

最后填的是email，执行后会有一个id_rsa.pub在.ssh下生成



### 添加密钥

网页登录github，在settings里找到SSH And GPG Keys然后选择New SSH key

打开id_rsa.pub并复制里面的内容

```bash
cd xxx/.ssh
vim id_rsa.pub
```

粘贴到github网页刚才打开的New SSH Key其中的key文本框中。title我填的是myaliyun



### 测试

在命令行中输入

```bash
$ ssh git@github.com
```


会出现如下询问：

Are you sure you want to continue connecting (yes/no)?
输入yes后回车，如果出现

Hi xxx! You’ve successfully authenticated, but GitHub does not provide shell accessConnection to github.com close



### 使用

比如我要把代码下载下来，就直接进入存放的位置然后clone

```bash
$ cd xx
git clone www.github.com/yourlink/yourwork
```



## nginx部署项目

