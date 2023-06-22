import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notifications.service';
//import { Observable } from 'rxjs';
import { Notification } from './entities/notification.entity';
import { Observable } from 'rxjs';

// import { Notification } from './entities/notification.entity';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationService) {}
  
  @Get()
  findAll():Observable<Notification[]>
  {
     return this.notificationsService.findAll();
  }}

