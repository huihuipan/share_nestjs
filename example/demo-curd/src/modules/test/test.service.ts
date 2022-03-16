import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  get() {
    console.log('服务')
    return '服务'
  }

  error() {
    throw new Error('服务错误')
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
