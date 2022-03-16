import { Catch, Controller, ForbiddenException, Get, HttpException, HttpStatus, UseFilters, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { getDefaultSettings } from 'http2';
import { debounce } from 'rxjs';
import { ModuleFilter } from 'src/filters/module.filter';
import { RouterFilter } from 'src/filters/router.filter';
import { ControllerGuard } from 'src/guards/controller.guard';
import { RouterGuard } from 'src/guards/router.guard';
import { ControllerInterceptor } from 'src/interceptors/controller.interceptor';
import { RouterInterceptor } from 'src/interceptors/router.interceptor';
import { ControllerPipe } from 'src/pipes/controller.pipe';
import { RouterPipe } from 'src/pipes/router.pipe';
import { TestService } from './test.service';

// @UseFilters(new ModuleFilter()) // 控制器过滤器
@UsePipes(new ControllerPipe()) // 控制器管道
@UseInterceptors(ControllerInterceptor) // 控制器拦截器
@UseGuards(ControllerGuard) // 控制器守卫
@Controller('/test')
export class TestController {

  constructor(
    private testService: TestService
  ) {}
 
  @UsePipes(new RouterPipe()) // 路由管道
  @UseInterceptors(RouterInterceptor) // 路由拦截器
  @UseGuards(new RouterGuard()) // 路由守卫
  @Get('/get')
  get() {
    console.log('控制器')
    return this.testService.get()
  }

  @Get('/error')
  // @UseFilters(new RouterFilter()) // 路由过滤器
  @UsePipes(new RouterPipe()) // 路由管道
  @UseInterceptors(RouterInterceptor) // 路由拦截器
  @UseGuards(new RouterGuard()) // 路由守卫
  error() {
    console.log('控制器')
    this.testService.error()
  }
}