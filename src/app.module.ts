import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlModule } from './urls/url.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/urls'),
    UrlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
