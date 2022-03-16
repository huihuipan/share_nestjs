import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

// 执行任何代码。
// 对请求和响应对象进行更改。
// 结束请求-响应周期。
// 调用堆栈中的下一个中间件函数。
// 如果当前的中间件函数没有结束请求-响应周期, 它必须调用 next() 将控制传递给下一个中间件函数。否则, 请求将被挂起。

@Injectable()
export class GlobalMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('全局中间件 - 开始');
    next();
    console.log('全局中间件 - 结束')
  }

}
