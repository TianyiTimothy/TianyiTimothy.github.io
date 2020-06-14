# day27-ubuntu+apache2生成SSL配置HTTPS

一开始弄了个self-created的证书，但是浏览器报不安全了。于是用https://certbot.eff.org/的证书。

## 创建+安装证书

https://certbot.eff.org/lets-encrypt/ubuntubionic-apache

直接跟他的步骤来，第四步的时候选上面的certbot --apache，让他帮你配置

## redirect问题解决

```bash
vim /etc/apache2/sites-enabled/000-default-le-ssl.conf
```

在这个文件中将下面的redirect注释或者删掉。

因为这个已经是HTTPS的路径配置了，他又redirect到新的HTTPS网页，特定条件下就会造成redirect了。

## 重启apache

```bash
systemctl restart apache2
```

然后就可以去测试了~