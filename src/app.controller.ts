import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Welcome')
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* startting route or welcome page */
  @Get()
  @ApiOkResponse({ description: 'Response get successfully' })
  getHello(): string {
    return this.appService.getHello();
  }
}
