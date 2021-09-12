import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Contact {
  @Prop()
  userId: string;

  @Prop()
  contactName: string;

  @Prop()
  phone: string;
}
