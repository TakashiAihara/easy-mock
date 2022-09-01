import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('*')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(@Req() request: Request): string {
    console.log(this.appService.get(request.url));
    return this.appService.get(request.url);
  }

  @Post()
  set(@Body() obj: object, @Req() request: Request): void {
    console.log(JSON.stringify(obj));
    console.log(request.url);
    return this.appService.set(request.url, obj);
  }
}
