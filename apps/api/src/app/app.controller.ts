import { Controller, Get,  Res, Param } from '@nestjs/common';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('data')
  getQuizData() {
    return {
      category: 'Rock',
      imgUrl: 'images/1.PNG',
      fullImgUrl: 'http://localhost:3333/api/images/1.PNG'
    }
  }
  @Get('images/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res) {
      return res.sendFile(join(process.cwd(), 'apps/api/public/images/' + imagename));
  }
}
