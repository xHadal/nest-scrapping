import { Schema } from 'mongoose';

export const UrlSchema = new Schema({
  scrapedUrl: String,
  pageTitle: String,
  pageContent: String,
  imageUrl: String,
  otherInfo: String,
});

/* 

export type UrlDocument = HydratedDocument<Url>;

@Schema()
export class UrlS {
  @Prop()
  scrapedUrl: string;

  @Prop()
  pageTitle: string;

  @Prop()
  pageContent: string;

  @Prop()
  imageUrl: string;

  @Prop()
  otherInfo: string;
}

export const UrlSchema = SchemaFactory.createForClass(UrlS); */
