import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './user';
import { UserSchema } from './user.schema';
import { UsersController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'users',
    ),
  ],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
