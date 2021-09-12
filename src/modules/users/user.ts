import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  phone: string;
}
