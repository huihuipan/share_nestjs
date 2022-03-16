import { NextFunction } from "express";


export function globalFun(req: Request, res: Response, next: NextFunction) {
  console.log('函数式全局中间件 - 开始')
  next();
  console.log('函数式全局中间件 - 结束')
};