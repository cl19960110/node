# RMVP 架构实现

# 创建私钥和公钥

- 命令行输入
  openssl //进入创建
  genrsa -out ras_private_key.pem 2048 //创建私钥
  rsa -in ras_private_key.pem -pubout -out ras_public_key.pem //根据私钥创建公钥
