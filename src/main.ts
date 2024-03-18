import { NestFactory } from "@nestjs/core";
import { UrlModule } from "./urls/url.module";

async function bootstrap() {
  const app = await NestFactory.create(UrlModule, { abortOnError: false });
  await app.listen(3000);
}
bootstrap();
