# raspbian
树莓派命令集
the tools of raspbian

安装
install
```
sudo npm install raspbian -g
```

寻找树莓派的ip地址：
find raspbian ip:
```
raspbian -find
```
扫描本网段的所有端口
scan all ports:
```
raspbian -scan
```
扫描开启该端口的所有ip
scan all ip from port:
```
raspbian -scan 80
```

扫描某ip下的所有端口
scan ip:
```
raspbian -scan 192.168.1.1
```
扫描某ip下的指定端口
scan ip is open port?:
```
raspbian -scan 192.168.1.1 80
```