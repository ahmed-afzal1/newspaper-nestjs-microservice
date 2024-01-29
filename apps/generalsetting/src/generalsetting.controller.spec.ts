import { Test, TestingModule } from '@nestjs/testing';
import { GeneralsettingController } from './generalsetting.controller';
import { GeneralsettingService } from './generalsetting.service';

describe('GeneralsettingController', () => {
  let generalsettingController: GeneralsettingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GeneralsettingController],
      providers: [GeneralsettingService],
    }).compile();

    generalsettingController = app.get<GeneralsettingController>(GeneralsettingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(generalsettingController.getHello()).toBe('Hello World!');
    });
  });
});
