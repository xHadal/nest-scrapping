import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UrlDocument = Url & Document;

@Schema()
export class Url {
  @Prop({ required: true })
  url: string;

  @Prop()
  title: string;

  @Prop()
  img: string;

  @Prop()
  text: string;

  @Prop()
  content: string;

  @Prop()
  createdAt: Date;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
