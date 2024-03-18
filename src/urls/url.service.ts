import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Url, UrlDocument } from "./url.model";
import puppeteer from "puppeteer";
import mongoose from "mongoose";
import * as cheerio from "cheerio";

@Injectable()
export class UrlService {
  constructor(
    @InjectModel("Url") private readonly urlModel: mongoose.Model<UrlDocument>
  ) {}

  async getAll(): Promise<Url[]> {
    return await this.urlModel.find().sort({ createdAt: -1 }); // Sort by newest first
  }

  async getData(url: string): Promise<Url | null> {
    return await this.urlModel.findOne({ url });
  }

  async scrapeUrl(url: string): Promise<Url | null> {
    const browser = await puppeteer.launch({
      executablePath: process.env.CHROME_BIN || undefined,
      args: [
        "--no-sandbox",
        "--headless",
        "--disable-gpu",
        "--disable-dev-shm-usage",
      ],
    });

    const page = await browser.newPage();

    try {
      await page.goto(url);
      const pageTitle = await page.title();
      const pageContent = await page.content();
      const bodyHTML = await page.evaluate(
        () => document.getElementById("tab-main")?.innerHTML
      );
      const $ = cheerio.load(bodyHTML || "");
      const imgElements = $(".link .content.thumb img");
      const textElements = $(".link .link-content h2");
      let text = "";
      if (textElements.length > 0) {
        text = textElements.first().text() ?? "";
      }
      let img = "";
      if (imgElements.length > 0) {
        img = imgElements[0].attributes[0].value ?? "";
      }
      const scrapedUrl = new this.urlModel({
        url,
        title: pageTitle,
        img,
        text,
        content: pageContent,
        createdAt: new Date(),
      });
      await scrapedUrl.save();

      return scrapedUrl;
    } catch (error) {
      console.error(`Error scraping URL: ${url}`, error);
      return null;
    } finally {
      await browser.close();
    }
  }
}
