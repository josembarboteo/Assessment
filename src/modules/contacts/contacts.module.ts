import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact } from './contact';
import { ContactSchema } from './contact.schema';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Contact.name, schema: ContactSchema }],
      'contacts',
    ),
  ],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
