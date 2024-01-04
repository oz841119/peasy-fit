import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop({ default: null })
  email: string
  @Prop({ default: null })
  line_id: string
  @Prop({ default: null })
  facebook_id: string
  @Prop({ default: null })
  google_id: string
}

export const UserSchema = SchemaFactory.createForClass(User);