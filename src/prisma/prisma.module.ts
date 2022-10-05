import { Module } from '@nestjs/common';
import { PrismaSecondaryService } from './prisma-secondary.service';
import { PrismaPrimaryService } from './prisma-primary.service';
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaPrimaryService, PrismaSecondaryService],
  exports: [PrismaPrimaryService, PrismaSecondaryService],
})
export class PrismaModule {}
