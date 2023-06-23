import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>
  ) {}


  createNotification(notification:Notification):Observable<Notification>{
    
    return from(this.notificationRepository.save(notification));
}

findAll(): Observable<Notification[]>
{
    return from(this.notificationRepository.find());
}

}

