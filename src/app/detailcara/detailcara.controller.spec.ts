import { Test, TestingModule } from '@nestjs/testing';
import { DetailcaraController } from './detailcara.controller';

describe('DetailcaraController', () => {
  let controller: DetailcaraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailcaraController],
    }).compile();

    controller = module.get<DetailcaraController>(DetailcaraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
