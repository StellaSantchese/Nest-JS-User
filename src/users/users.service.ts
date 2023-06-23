// user.service.ts
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
//import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
//import { UserCreatedEvent } from 'src/events/user-created.event';
//import { NotificationsService } from 'src/notifications/notifications.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()

export class UserService{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    //private readonly notificationsService: NotificationsService,
    private readonly eventEmitter: EventEmitter2,
    ){}

createUser(user:User):Observable<User>{
    this.eventEmitter.emit('user.save',User);
    return from(this.userRepository.save(user));
}

findAll(): Observable<User[]>
{
    return from(this.userRepository.find());
}

updateUser(id:number, user:User):Observable<UpdateResult>
{
    this.eventEmitter.emit('user.updated', User);
    return from(this.userRepository.update(id,user));
}

deleteUser(id:number):Observable<DeleteResult>
{
    this.eventEmitter.emit('user.deleted', id);
    return from(this.userRepository.delete(id));
}

}