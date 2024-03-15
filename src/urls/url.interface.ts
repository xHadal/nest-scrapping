import { Document } from 'mongoose';

export interface Url extends Document {
  scrapedUrl: string;
  pageTitle?: string;
  pageContent?: string;
  imageUrl?: string;
  otherInfo?: string;
}
