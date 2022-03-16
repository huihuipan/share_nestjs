import { Injectable } from '@nestjs/common';

@Injectable() // DI 让这个服务类具有 “注入的功能”
export class AppService {
  getHello(): string {
    return 'Hello World!'; // 返回一个 Hell World
  }
}
