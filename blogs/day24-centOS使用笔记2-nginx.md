# CentOS小笔记

## 阿里云设置

阿里云新实例默认不开80443端口，需要手动设置开一下：

安全组-快速创建规则-端口号80/443-0.0.0.0/0

## nginx安装及部署

### 安装

```bash
yum install nginx
```

### 启动

先检查状态

```bash
service nginx status
```

发现没有在运行，log如下

Jun 06 07:35:50 iZrj9a0cmfrfi5kkpfmao4Z systemd[1]: Starting The nginx HTTP and reverse proxy server...
Jun 06 07:35:50 iZrj9a0cmfrfi5kkpfmao4Z nginx[22218]: nginx: [emerg] unknown directive "erver" in /etc/nginx/conf.d/default.conf:1
Jun 06 07:35:50 iZrj9a0cmfrfi5kkpfmao4Z nginx[22218]: nginx: configuration file /etc/nginx/nginx.conf test failed
Jun 06 07:35:50 iZrj9a0cmfrfi5kkpfmao4Z systemd[1]: nginx.service: control process exited, code=exited status=1
Jun 06 07:35:50 iZrj9a0cmfrfi5kkpfmao4Z systemd[1]: Failed to start The nginx HTTP and reverse proxy server.
Jun 06 07:35:50 iZrj9a0cmfrfi5kkpfmao4Z systemd[1]: Unit nginx.service entered failed state.
Jun 06 07:35:50 iZrj9a0cmfrfi5kkpfmao4Z systemd[1]: nginx.service failed.
Jun 06 07:41:07 iZrj9a0cmfrfi5kkpfmao4Z systemd[1]: Unit nginx.service cannot be reloaded because it is inactive.

好，很奇葩， 我刚装的就能出错。去报错的地方看看：

```bash
vim /etc/nginx/conf.d/default.conf
```

打开发现第一行的server少了个s，成了erver。加上s以后:wq保存退出。

### 启动

```bash
nginx
```

启动完毕，通过ip可以直接访问了~

