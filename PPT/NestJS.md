---
marp: true
theme: default
paginate: true
header: <h1 class="header"><img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" />NestJS 介绍</h1>
footer: <div class="footer"></div>
---


<style>
/* 全局样式 */
section::after {
  content: attr(data-marpit-pagination) ' / ' attr(data-marpit-pagination-total);
  font-weight: bold;
  color: #fff;
}
.footer {
  position: absolute;
  right: -1880px;
  bottom: -720px;
  background: #ed1543;
  width: 1280px;
  height: 720px;
  transform: rotate(-40deg);
}
.header {
  position: absolute;
  right: -1200px;
  display: flex;
  align-items: center;
  color: #ed1543;
}
.header img{
  width: 50px;
  margin-right: 16px;
}

</style>

<style scoped>
/* section { position: relative; font-size: 40px; padding: 40px; background: #ed1543; }
section::after{ color: #fff; }
* { color: #fff; } */
.header, .footer{display: none;}
*{ color: #fff; }
.logo {
  background: none;
  width: 100px;
  margin-right: 16px;
}
.title {
  display: flex;
  align-items: center;
  font-size: 60px
}
</style>
![bg](https://d33wubrfki0l68.cloudfront.net/b48d3f70dffd76bf3152ad04e2cbb1261ef589c9/header.1af6756a.png)


<h1 class="title">
  <img class="logo" src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" />
  NestJS 分享
</h1>

<p style="color:#fff;">!Next 这是 React 栈的 SSR 技术</p>
<p style="color:#fff;">!Nuxt 这是 Vue 栈的 SSR 技术</p>
<p style="color:#fff;">Nest 这是一个服务端框架</p>

---

## 前言

通过这个分享，希望能了解这些：
- Nest 的基础知识
- TypeScript 的一些使用方式
- AOP 概念
- IoC/DI 概念
- 作为前端人在另一个技术领域的理解（展开讨论）
- 服务端项目和前端项目的一些异同（展开讨论）

---

## 基调

- NodeJS 服务端渲染
- NodeJS 服务端技术简介
- NestJS 介绍

---

## NodeJS 服务端主流框架

- [Express](https://expressjs.com/) nodejs 服务端力作
- [Koa](https://koa.bootcss.com/) Express原班人马第二力作(使用async/await)
- [Fastify](https://www.fastify.io/) 快如闪电！(官方描述：Fastify 最多可以处理每秒 3 万次的请求)

- [Egg](https://www.eggjs.org/) 阿里出品，基于Koa封装
- [Midway](https://midwayjs.org/) 阿里出品，基于Egg
- [NestJS](https://nestjs.com/) NodeJS 版本的 Spring，核心库可选 express / fastify
  
...

---

## NestJS 特点（中文文档描述）

- 完美支持 Typescript 
- 面向 AOP 编程 
- 支持 Typeorm
- 高并发，异步非阻塞 IO
- Node.js 版的 spring
- 构建微服务应用

---

## NestJS 介绍

- 搭建服务 
- 模块、控制器、服务
- AOP
- IoC、DI
- 请求过程

---

## 模块结构

![模块结构](./modules.png)

---

## NestJS 中的一些概念

- 中间件（使用 Express 时，中间件与 Express 中间件一致）
- 守卫（通常用作权限控制类）
- 拦截器（主要是错误拦截，程序报错时可以以一个友好的方式返回）
- 管道（数据转换、数据验证）
- 异常过滤器（程序报错时可以以一个友好的方式返回）

---

## 中间件

- 执行任何代码。
- 对请求和响应对象进行更改。
- 结束请求-响应周期。
- 调用堆栈中的下一个中间件函数。
- 如果当前的中间件函数没有结束请求-响应周期, 它必须调用 next() 将控制传递给下一个中间件函数。否则, 请求将被挂起。

---

## 守卫

- 鉴权

---

## 拦截器

- 在函数执行之前/之后绑定额外的逻辑
- 转换从函数返回的结果
- 转换从函数抛出的异常
- 扩展基本函数行为
- 根据所选条件完全重写函数 (例如, 缓存目的)

---

## 管道

- 转换：管道将输入数据转换为所需的数据输出
- 验证：对输入数据进行验证，如果验证成功继续传递; 验证失败则抛出异常;

---

## 异常过滤器

- 负责处理整个应用程序中的所有抛出的异常。当捕获到未处理的异常时，最终用户将收到友好的响应。

---

## 接口请求过程

函数式全局中间件 - 开始
全局中间件 - 开始
模块中间件 - 开始
全局守卫
模块中间件 - 结束
全局中间件 - 结束
函数式全局中间件 - 结束
控制器守卫
路由守卫
全局拦截器
控制器拦截器
路由拦截器
控制器
服务
路由过滤器(如果有错误的话)

---

## 总结

- 学习 TypeScript 语法
- 学习一些服务端的知识
- 了解服务端和前端之间的区别（关注点、性能、稳定性）

---

<style scoped>
* {color: #fff;}
.header, .footer { display: none;}
</style>
![bg](https://d33wubrfki0l68.cloudfront.net/2e87d126358935e3c9984030c481fc79197e3daa/support.b363d5ad.png)
<h2 style="padding-bottom: 300px; padding-left: 650px;font-size: 100px;">Thanks！</h2>