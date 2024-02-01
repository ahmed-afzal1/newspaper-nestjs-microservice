import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { JwtAuthGuard } from '@app/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/categories')
  @UseGuards(JwtAuthGuard)
  async all() {
    return await this.categoryService.findAll();
  }

  @Post('/category/create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }

  @Get('/category/edit/:id')
  @UseGuards(JwtAuthGuard)
  async edit(@Param('id') id: string) {
    return this.categoryService.edit(id);
  }

  @Put('/category/update/:id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete('/category/delete/:id')
  @UseGuards(JwtAuthGuard)
  async destroy(@Param('id') id: string) {
    return this.categoryService.destroy(+id);
  }
}
