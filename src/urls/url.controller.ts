import { Controller, Get, Post, Body } from '@nestjs/common';
import { UrlService } from './url.service';
import { Url } from './url.model';
@Controller()
export class UrlController {
  constructor(private readonly appService: UrlService) {}
  @Get()
  async getAll(): Promise<Url[]> {
    return this.appService.getAll();
  }

  @Post('scrape-url')
  async scrapeUrl(@Body() body: { url: string }) {
    const { url } = body;
    const scrapedData = await this.appService.scrapeUrl(url);
    return { success: true, data: scrapedData };
  }
}
