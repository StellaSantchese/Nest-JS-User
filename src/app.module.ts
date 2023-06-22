import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './users/config/typeorm.config';
import { UserService } from './users/users.service';
import { User } from './users/entities/user.entity';
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationSubscribers } from './events/notification.subscribers';
import { EventEmitterModule } from '@nestjs/event-emitter';


@Module({
  imports: [UsersModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot(typeOrmConfig),
    NotificationsModule, NotificationSubscribers,EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService,UserService],
})
export class AppModule {}
