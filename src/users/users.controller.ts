import { Controller, Get, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  @Get('test')
  name() {
    return 'AA';
  }
}
