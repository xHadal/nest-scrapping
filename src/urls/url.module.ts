import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlSchema } from './url.model';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Url', schema: UrlSchema }])],
  controllers: [UrlController],
  providers: [UrlService],
  exports: [UrlService], // Export UrlService if needed by other modules
})
export class UrlModule {}
