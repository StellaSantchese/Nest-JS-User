import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NotificationService } from './notifications.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  controllers: [NotificationsController, ],
  providers: [NotificationService]
})
export class NotificationsModule {}
