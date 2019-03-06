# pc-meituan

> My supreme Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


### Koa2 的安装
- koa-generator  安装
- npm install -g koa-generator
- 安装一个 koa2 项目
- koa2 -e 项目名称  -e: 表示模板使用 ejs 

## 终端命令 
- mkdir 文件夹名，---- 创建一个文件夹
- touch 文件名， ---- 创建一个文件
- rm -rf 目录名字 删除文件夹
- rm -f 文件名 强制删除一个文件
- curl http://localhost:3000/json  发起json 请求

- pv 文件，创建一个中间件，中间件的使用方式
- m1, m2, m3 测试中间件的使用顺序，每次访问，都会重新请求所有的中间件
  - 使用顺序 根据 use 引用的顺序
  - 从控制台中打印的数据来看，start 顺序使用 m1 - m2 - m3 的顺序，但结束顺序是 m3 - m2 - m1 (next函数之后)，所以，在项目实战中，如果我们在 m1 中声明了一个东西，防止其它中间件修改掉，可以在 next 函数后重新复制
- 如果不执行 next

- routers koa2 路由， prefix --》可以加统一的路由前缀

- mongod 启动 mongodb 数据库
- curl -d '内容' 地址 ---> 在终端模拟，发送一个 post 命令，curl 

### 安装 redis  brew install redis
- 启动redis   redis-server

- 安装两个中间件
  - koa-generic-session  -> 处理操作 redis
  - koa-redis

- 查看 redis 存储内容
  - 终端中输入 redis-cli
  - keys * 查看 redis 存储的所有的 key 值
  - get key值内容  --》查看 key 值存储的内容

- redis 一般用作两个场景 1. 结合 session 去用 2. 自己操作 redis 读写

## Nuxt.js  纳斯特
- 支持 vue SSR 的一种框架
- 安装
  - vue init nuxt-community/koa-template nuxt-learn 或者用 nuxt 官网推荐安装


## SSR 原理，1. 服务器端把编译好的内容返回 2.把异步获取的数据扔给浏览器端 asyncData
  - asyncData 用来处理组件的数据
  - fetch 用来处理 vuex 的数据

nodemon - 热更新

## 页面上都是使用的 ES6， 因为是 node 方式，不支持 import/export 引入/，解决方式用 babel
  - 安装 npm i babel-preset-es2015
  - 新建 .babelrc 文件 
  - package.json 加入 --exec babel-node 命令

  - 安装 less  npm install less less-loader --save

## nust 目录结构
#### assets 
- 资源目录，用于组织未编译的静态资源如 LESS、SASS 或 JavaScript

#### components
- 组件目录，用于组织应用的 vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。

#### layouts
- 布局目录 layouts 用于组织应用的布局组件。`改目录名为Nuxt.js保留的，不可更改`

#### middleware
- 中间件目录，用于存放应用的中间件

#### pages 
- 页面目录，用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。`改目录名为Nuxt.js保留的，不可更改`

#### plugins 
- 插件目录，用于组织那些需要在跟 vue.js 应用，实例化之前需要运行的 JavaScript 插件。

#### static
- 静态文件目录，用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。
- 例: /static/robots.txt 映射至 /robots.txt `改目录名为Nuxt.js保留的，不可更改`

#### Store 
- store 目录用于组织应用的 Vuex 状态树文件。Nuxt.js 框架集成了 Vuex 状态树的相关功能配置，在 store 目录中创建一个 index.js 文件可激活这些配置。`改目录名为Nuxt.js保留的，不可更改`

#### nuxt.config.js 
- 文件用于组织 Nuxt.js 应用的个性化配置，以便覆盖默认配置。 `改目录名为Nuxt.js保留的，不可更改`

#### package.json 
- 文件用于描述应用的依赖关系和对外暴露的脚步接口。 `改目录名为Nuxt.js保留的，不可更改`


