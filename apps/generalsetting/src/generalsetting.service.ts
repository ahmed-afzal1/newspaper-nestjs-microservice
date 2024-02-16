import { Injectable } from '@nestjs/common';
import { GeneralSettingRepository } from './generalsetting.repository';
import { ContentDto } from './dto/content.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class GeneralsettingService {
  constructor(
    private readonly generalSettingRepository: GeneralSettingRepository,
  ) {}

  async contentUpdate(contentDto: ContentDto) {
    const id = 1;
    const query = { id };
    const update = contentDto;

    return this.generalSettingRepository.findOneAndUpdate(query, update);
  }

  async uploadLogo(logo: Express.Multer.File) {
    try {
      const id = 1;
      const query = { id };
      const generalSetting = await this.generalSettingRepository.findOne(query);

      const uploadDir = path.join(__dirname, '..', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      if (generalSetting && generalSetting?.logo !== null) {
        const previousLogoPath = path.join(uploadDir, generalSetting?.logo);
        if (fs.existsSync(previousLogoPath)) {
          fs.unlinkSync(previousLogoPath);
        }
      }

      const originalFileName = logo.originalname;
      const uniqueFileName = this.generateUniqueFileName(originalFileName);

      const filePath = path.join(uploadDir, uniqueFileName);
      fs.writeFileSync(filePath, logo.buffer);

      return await this.generalSettingRepository.findOneAndUpdate(
        query,
        { logo: uniqueFileName }, // Assuming logo is the field to update
      );
    } catch (error) {
      console.error('Error uploading logo:', error);
      throw error;
    }
  }

  async uploadFavicon(favicon: Express.Multer.File) {
    try {
      const id = 1;
      const query = { id };
      const generalSetting = await this.generalSettingRepository.findOne(query);

      const uploadDir = path.join(__dirname, '..', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      if (generalSetting && generalSetting?.favicon !== null) {
        const previousFaviconPath = path.join(
          uploadDir,
          generalSetting?.favicon,
        );
        if (fs.existsSync(previousFaviconPath)) {
          fs.unlinkSync(previousFaviconPath);
        }
      }

      const originalFileName = favicon.originalname;
      const uniqueFileName = this.generateUniqueFileName(originalFileName);

      const filePath = path.join(uploadDir, uniqueFileName);
      fs.writeFileSync(filePath, favicon.buffer);

      return await this.generalSettingRepository.findOneAndUpdate(
        query,
        { favicon: uniqueFileName }, // Assuming logo is the field to update
      );
    } catch (error) {
      console.error('Error uploading favicon:', error);
      throw error;
    }
  }

  generateUniqueFileName(originalFileName: string): string {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileExtension = path.extname(originalFileName);

    return `${timestamp}-${randomString}${fileExtension}`;
  }
}
