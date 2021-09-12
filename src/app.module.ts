import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { ContactsModule } from './modules/contacts/contacts.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:assessment@mongodb/users?authSource=admin',
      {
        connectionName: 'users',
      },
    ),
    MongooseModule.forRoot(
      'mongodb://root:assessment@mongodb/contacts?authSource=admin',
      {
        connectionName: 'contacts',
      },
    ),
    UsersModule,
    ContactsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
