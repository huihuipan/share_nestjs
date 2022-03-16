import { NestFactory } from '@nestjs/core';

// AppModule 是项目的根模块
import { AppModule } from './app.module';

// 这里是使用 express 作为底层库，使用其它库可以选择
// 不同的底层库可以提供与之配套的生态，如这里使用 express，则可以使用 express 的依赖
import { NestExpressApplication } from '@nestjs/platform-express'

// 引用全局守卫
import { GlobalGuard } from './guards/global.guard';

// 引入全局拦截器
import { GlobalInterceptor } from './interceptors/global.interceptor';

// 引入全局管道
import { GlobalPipe } from './pipes/global.pipe';

// 引入全局函数式中间件
import { globalFun } from './middlewares/globalfun.middleware';

// 引入全局过滤器
import { GlobalFilter } from './filters/global.filter';

// bootstrap 是引导的意思
async function bootstrap() {
  // 这里创建了一个 nest 的实例
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 使用全局中间件
  app.use(globalFun)

  // 使用全局守卫
  app.useGlobalGuards(new GlobalGuard())

  // 使用全局拦截器
  app.useGlobalInterceptors(new GlobalInterceptor)

  // 使用全局管道
  app.useGlobalPipes(new GlobalPipe())

  // 使用全局过滤器
  app.useGlobalFilters(new GlobalFilter())

  // 在 3000 端口启动
  await app.listen(3000);
}
bootstrap(); // 引导程序启动
