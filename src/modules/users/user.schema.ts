import { SchemaFactory } from '@nestjs/mongoose';
import { User } from './user';

export const UserSchema = SchemaFactory.createForClass(User);
