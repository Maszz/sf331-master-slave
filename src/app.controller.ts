import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/cat.dto';
import { Cat } from '@prisma/client';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cat')
  async findAll(): Promise<any[]> {
    return this.appService.findAll();
  }

  @Post('cat')
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.appService.create(createCatDto);
  }
}
