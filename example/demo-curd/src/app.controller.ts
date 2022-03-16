import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // AOP 装饰器模式，表示这是一个控制器
export class AppController {
  constructor(
    // IoC 控制反转
    private readonly appService: AppService
  ) {}

  @Get() // AOP 表示这是一个 get 方法
  getHello(): string {
    return this.appService.getHello();  // 调用服务的 getHello 方法
  }
}


/**
 * @Controller
 * @Get
 * 这两种写法在 ts 中是装饰器模式的一种写法，
 * 在 js 中大概类似于高价函数，如我们常用的 debounce 方法
 */

/**
 * IoC 控制反转是一种让代码解耦的方式，
 * ioc是指让生成类的方式由传统方式（new）反过来，
 * 就是程序员不调用new,需要类的时候由框架注入（di）
 */