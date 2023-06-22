// user.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@Controller('users')
export class UsersController{

 constructor(private readonly userService: UserService){}  
 
@Post()
create(@Body() user:User): Observable<User>
{
  return this.userService.createUser(user);
} 

 @Get()
 findAll():Observable<User[]>
 {
    return this.userService.findAll();
 }

 @Patch(':id')
 update(@Param('id') id: number, @Body() users:User):Observable<UpdateResult>
 {
    return this.userService.updateUser(id,users);
 }

@Delete(':id')
delete(@Param('id') id: number):Observable<DeleteResult>
{
    return this.userService.deleteUser(id);
}

}