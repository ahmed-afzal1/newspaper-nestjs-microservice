import {
  Body,
  Controller,
  Get,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { GeneralsettingService } from './generalsetting.service';
import { JwtAuthGuard } from '@app/common';
import { ContentDto } from './dto/content.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('generalsettings')
export class GeneralsettingController {
  constructor(private readonly generalsettingService: GeneralsettingService) {}

  @Get()
  async index() {
    return 'okk';
  }

  @Put('content/update')
  @UseGuards(JwtAuthGuard)
  async update(@Body() contentDto: ContentDto) {
    return await this.generalsettingService.contentUpdate(contentDto);
  }

  @Put('update/favicon')
  @UseInterceptors(FileInterceptor('favicon'))
  async uploadLogo(@UploadedFile() favicon: Express.Multer.File) {
    return this.generalsettingService.uploadFavicon(favicon);
  }
}
