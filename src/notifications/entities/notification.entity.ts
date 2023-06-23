import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Notification { 
    
  @PrimaryGeneratedColumn()
  id: null;

  @Column()
  hour: number;

  @Column()
  minute: number;

  @Column()
  message: string;


  @ManyToMany(() => User, user => user.notifications)
  user: User;
}
