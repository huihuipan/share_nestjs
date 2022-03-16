import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class RouterPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('路由管道')
    return value;
  }
}
