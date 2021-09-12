import { SchemaFactory } from '@nestjs/mongoose';
import { Contact } from './contact';

export const ContactSchema = SchemaFactory.createForClass(Contact);
