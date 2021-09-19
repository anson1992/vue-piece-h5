# vue-piece-h5：移动端Vue3脚手架

### 描述
```
有序、开箱即用、开关式配置、脚手架打包、加载优化
```

### 技术语言
```
Vue3.2、webpack5、vant、Typescript、Pretter、Eslint、Vuex、Axios
```

### 分支管理：开发/发布/缺陷分离模型

|  环境  | 分支  | 标识  | 打包命令  |
| ------------ | ------------ | ------------ | ------------ |
| 开发  | development  | development  |  npm run serve  |
| 测试  | development-fix  | development-fix  |  npm run build-dev-fix  |
| 预发布  | release  |  release |  npm run build-release  |
| 生产  | production  | production  |  npm run build  |

### Vue 优化方案
#### 禁用js和css的预加载

在vue.config.js中，链式调用配置chainWebpack

```
 config.plugins.delete('preload')
 config.plugins.delete('prefetch')
```


------------

后续开发同事，请严格补充完善文档：赠人玫瑰，手有余香；

相关问题和优化建议，请提 **issue**，第一时间跟进解决；

项目开发请使用 **master** 分支
