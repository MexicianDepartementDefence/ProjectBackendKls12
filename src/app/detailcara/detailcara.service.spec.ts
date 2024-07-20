import { Test, TestingModule } from '@nestjs/testing';
import { DetailcaraService } from './detailcara.service';

describe('DetailcaraService', () => {
  let service: DetailcaraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailcaraService],
    }).compile();

    service = module.get<DetailcaraService>(DetailcaraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
