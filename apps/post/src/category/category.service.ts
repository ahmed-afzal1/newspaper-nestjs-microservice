import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { Category } from './entity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async findAll() {
    return await this.categoryRepository.find({});
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const category = new Category(createCategoryDto);

    return this.categoryRepository.create(category);
  }

  async edit(id: string) {
    return this.categoryRepository.findOne({ id: Number(id) });
  }

  async find(id: number): Promise<Category> {
    return this.categoryRepository.findOne({ id: Number(id) });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.findOneAndUpdate({ id }, updateCategoryDto);
  }

  async destroy(id: number) {
    return this.categoryRepository.findOneAndDelete({ id });
  }
}
