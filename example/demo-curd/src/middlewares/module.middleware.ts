import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ModuleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('模块中间件 - 开始')
    next();
    console.log('模块中间件 - 结束')
  }
}
