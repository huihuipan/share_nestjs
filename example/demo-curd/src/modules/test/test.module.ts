import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { ModuleMiddleware } from 'src/middlewares/module.middleware';

@Module({
  providers: [TestService],
  controllers: [TestController]
})
export class TestModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ModuleMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL})
  }
}
