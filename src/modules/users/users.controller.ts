import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './create.user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  async addUser(@Body() post: CreateUserDto): Promise<unknown> {
    return this.usersService.createUser(post);
  }

  @Get()
  getUsers(): Promise<unknown[]> {
    return this.usersService.findAll();
  }
}
