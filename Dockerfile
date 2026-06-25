FROM node:20.19.4 AS build-stage

WORKDIR /app

# 设置 npm 镜像源（加速）
RUN npm config set registry https://registry.npmmirror.com

# 只复制依赖文件（利用缓存）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目代码
COPY . .

# 执行构建
RUN npm run build:prod
RUN chmod -R 755 /app/dist

## -- stage: dist => nginx --
FROM nginx:1.30.0

ENV TZ=Asia/Shanghai

COPY --from=build-stage /app/dist /usr/share/nginx/html/dist
COPY --from=build-stage /app/nginx/default_prod.conf /etc/nginx/conf.d/default.conf
#COPY  /admin/demo.36line.top.crt /etc/nginx/conf.d/cert/demo.36line.top.crt
#COPY  /admin/demo.36line.top.key /etc/nginx/conf.d/cert/demo.36line.top.key

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]