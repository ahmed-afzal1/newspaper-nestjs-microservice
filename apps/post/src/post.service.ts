import { Injectable } from '@nestjs/common';
import { Post } from './entity/post.entity';
import { CreateArticlePostDto } from './dto/create-article-post.dto';
import { PostRepository } from './post.repository';
import { CategoryService } from './category/category.service';
import { UpdateArticlePostDto } from './dto/update-article-post.dto';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly categoryService: CategoryService,
  ) {}

  async findAll() {
    return await this.postRepository.find({});
  }

  async articleStore(createArticlePostDto: CreateArticlePostDto) {
    const { category_id } = createArticlePostDto;
    const category = await this.categoryService.find(category_id);

    const post = new Post({
      ...createArticlePostDto,
      category,
    });

    return await this.postRepository.create(post);
  }

  async edit(id: number) {
    return await this.postRepository.findOne({
      id,
      category: true,
    });
  }

  async articleUpdate(id: number, updateArticlePostDto: UpdateArticlePostDto) {
    const { category_id } = updateArticlePostDto;
    const category = await this.categoryService.find(category_id);

    const updatedData = {
      ...updateArticlePostDto,
      category,
    };

    delete updatedData.category_id;
    return await this.postRepository.findOneAndUpdate({ id }, updatedData);
  }

  async delete(id: number) {
    return await this.postRepository.findOneAndDelete({ id });
  }
}
