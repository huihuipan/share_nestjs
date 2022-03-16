/**
 * 根模块
 */

import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

// 引入根控制器
import { AppController } from './app.controller';

// 引入根服务
import { AppService } from './app.service';

// 引入子模块
import { PersonModule } from './modules/person/person.module';

// 全局中间件
import { GlobalMiddleware } from './middlewares/global.middleware';
import { TestModule } from './modules/test/test.module';

@Module({
  imports: [PersonModule, TestModule], // 引入其他模块
  controllers: [AppController], // 根控制器
  providers: [AppService], // 根服务
})
export class AppModule implements NestModule {

  // 使用全局中间件
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GlobalMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL})
  }
}
