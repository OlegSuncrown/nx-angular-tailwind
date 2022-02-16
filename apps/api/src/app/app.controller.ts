import { Controller, Get, Response, Param } from '@nestjs/common';
import { join } from 'path';
import { data } from './data'
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
    return data;
  }

  @Get('images/:name')
  getImage(@Param('name') name, @Response() res) {
    return res.sendFile(join(process.cwd(), 'apps/api/public/images/' + name));
  }

  @Get('audio/:title')
  getAudio(@Param('title') title, @Response() res) {
    return res.sendFile(join(process.cwd(), 'apps/api/public/audio/' + title));
  }

  // @Get('images/:imagename')
  // getFile(@Param('imagename') imagename, @Response({ passthrough: true }) res): StreamableFile {
  //   const file = createReadStream(join(process.cwd(), 'apps/api/public/images/' + imagename));
  //   res.set({
  //     'Content-Disposition': `inline; filename=test.PNG`,
  //     'Content-Type': 'image'
  //   });
  //   return new StreamableFile(file);
  // }
}
