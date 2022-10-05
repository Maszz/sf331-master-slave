import { Injectable } from '@nestjs/common';
import { PrismaPrimaryService } from './prisma/prisma-primary.service';
import { PrismaSecondaryService } from './prisma/prisma-secondary.service';
import { Cat, Prisma } from '@prisma/client';
import { CreateCatDto } from './dto/cat.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly prismaPrimary: PrismaPrimaryService,
    private readonly prismaSecondary: PrismaSecondaryService,
  ) {}
  getHello(): string {
    return 'Hello World!123';
  }
  // use Primary Instance for write operation
  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = await this.prismaPrimary.cat.create({
      data: createCatDto,
    });
    return createdCat;
  }
  // use secondary for read operation
  async findAll(): Promise<Cat[]> {
    // return this.catModel.find().exec();
    const cats = await this.prismaSecondary.cat.findMany({});
    return cats;
  }
}
