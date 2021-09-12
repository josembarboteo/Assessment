import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './contact';
import { ContactDto } from './contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}

  async updateUsersContacts(
    userId: string,
    contacts: ContactDto[],
  ): Promise<unknown> {
    const bulkOps = contacts.map((contact: ContactDto) => ({
      updateOne: {
        filter: { userId: userId, phone: contact.phone },
        update: contact,
        upsert: true,
      },
    }));

    return this.contactModel.bulkWrite(bulkOps);
  }

  async getContactsFromUserId(userId: string): Promise<Contact[]> {
    return this.contactModel.find().where('userId').equals(userId).exec();
  }

  async getContactsFromTowUsersIds(
    userId1: string,
    userId2: string,
  ): Promise<Contact[]> {
    const contactsUseer1 = await this.getContactsFromUserId(userId1);
    const contactsUseer2 = await this.getContactsFromUserId(userId2);
    return contactsUseer1.filter((contact) =>
      contactsUseer2.filter((contact2) => contact2.phone === contact.phone),
    );
  }
}
