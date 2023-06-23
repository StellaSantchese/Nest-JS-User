import { Injectable } from "@nestjs/common";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { Notification } from "src/notifications/entities/notification.entity";
import { NotificationsService } from "src/notifications/notifications.service";
import { User } from "src/users/entities/user.entity";





@Injectable()
export class NotificationSubscribers{

  constructor(
    
    private readonly notificationService: NotificationsService,
    private readonly eventEmitter: EventEmitter2,
  ){}
    date=new Date()


  @OnEvent('user.save')
  handleUserCreateEvent(payloadUser:User){
    console.log('utilisateur cree:',payloadUser);
    const no: Notification={
      hour: this.date.getHours(),
      minute: this.date.getMinutes(),
      message: payloadUser.prenom + 'created',
      user: payloadUser,
      id: null,
      
    };
    this.notificationService.createNotification(no)
}
    
@OnEvent('user.updated')
handleUserUpdateEvent(payloadUser: User) {
  console.log('Utilisateur mis à jour:', payloadUser);

  const no : Notification = {
    hour: this.date.getHours(),
    minute: this.date.getMinutes(),
    message: payloadUser.prenom +'a été mis à jour',
    user: payloadUser,
    id: null,
    
  };

  // Ajoutez ici la logique pour envoyer la notification
  this.notificationService.createNotification(no);
}


      
@OnEvent('user.deleted')
handleUserDeleteEvent(payloadUser: User) {
  console.log('Utilisateur supprimé:', payloadUser);

  const no: Notification = {
    hour: this.date.getHours(),
    minute: this.date.getMinutes(),
    message: payloadUser.prenom +  'a été supprimé',
    user: payloadUser,
    id: null,
    
  };

  // Ajoutez ici la logique pour envoyer la notification
  this.notificationService.createNotification(no);
}

  }

    


