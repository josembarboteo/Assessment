import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { UpdateContactsRequestDto } from './update.contacts.request.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Post(':userId')
  updatUserContacts(@Param() params, @Body() post: UpdateContactsRequestDto) {
    const modifiedBody = post.contacts.map((contact) => {
      return { ...contact, userId: params.userId };
    });

    return this.contactsService.updateUsersContacts(
      params.userId,
      modifiedBody,
    );
  }

  @Get(':userId')
  getContactsForUser(@Param() params) {
    return this.contactsService.getContactsFromUserId(params.userId);
  }
}
