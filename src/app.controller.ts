import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(): Promise<string> {
    const urls = await this.appService.getAllUrls();
    return urls.join(', '); // Assuming the getAllUrls() method returns an array of strings, we can join them with a comma separator
  }

  @Post('scrape-url')
  async scrapeUrl(@Body() body: { url: string }) {
    const { url } = body;
    const scrapedData = await this.appService.scrapeUrl(url);
    return { success: true, data: scrapedData };
  }
}
