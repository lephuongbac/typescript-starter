import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class UsersService {
  constructor(private schedulerRegistry: SchedulerRegistry) {
    this.schedulerRegistry = schedulerRegistry;
  }
  private readonly logger = new Logger(UsersService.name);

  @Cron(CronExpression.EVERY_DAY_AT_9AM)
  handleCron() {
    this.logger.debug('Called when the current second is ' + new Date());
  }
}
