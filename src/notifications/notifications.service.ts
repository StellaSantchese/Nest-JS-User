import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}


  createUser(user:Notification):Observable<Notification>{
    
    return from(this.notificationRepository.save(user));
}

findAll(): Observable<Notification[]>
{
    return from(this.notificationRepository.find());
}



}

