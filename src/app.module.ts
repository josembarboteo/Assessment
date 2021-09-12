import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:assessment@mongodb/users?authSource=admin',
      {
        connectionName: 'users',
      },
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
