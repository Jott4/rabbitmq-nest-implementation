import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event';

@Controller()
export class AppController {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  getHello() {
    this.client.emit('message_printed', new Message('Hello World')).subscribe({
      next: (value) => console.log('succ', value),
      error: (err) => console.log('err', err),
    });

    return 'Hello World printed';
  }
}
