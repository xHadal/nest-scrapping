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

  @Get('url-data')
  async getData(@Body() body: { url: string }): Promise<{ data: Url | null }> {
    const { url } = body;
    const urlData = await this.appService.getData(url);
    return { data: urlData };
  }

  @Post('scrape-url')
  async scrapeUrl(
    @Body() body: { url: string },
  ): Promise<{ success: boolean; data: Url | null }> {
    const { url } = body;
    const scrapedData = await this.appService.scrapeUrl(url);
    return { success: !!scrapedData, data: scrapedData };
  }
}
