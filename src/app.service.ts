import { Injectable } from '@nestjs/common';
import { UrlService } from './urls/url.service';
@Injectable()
export class AppService {
  constructor(private readonly urlService: UrlService) {}

  // Use UrlService methods to interact with URLs
  async getAllUrls(): Promise<unknown[]> {
    return await this.urlService.getAll();
  }

  async scrapeUrl(url: string): Promise<any | null> {
    return await this.urlService.scrapeUrl(url);
  }
}
