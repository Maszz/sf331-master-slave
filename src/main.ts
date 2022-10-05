import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaPrimaryService } from './prisma/prisma-primary.service';
import { PrismaSecondaryService } from './prisma/prisma-secondary.service';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaPrimaryService = app.get(PrismaPrimaryService);
  const prismaSecondaryService = app.get(PrismaSecondaryService);

  await prismaPrimaryService.enableShutdownHooks(app);
  await prismaSecondaryService.enableShutdownHooks(app);

  await app.listen(3001);
}
bootstrap();
