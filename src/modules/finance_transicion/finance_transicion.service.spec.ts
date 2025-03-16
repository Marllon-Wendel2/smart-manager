import { Test, TestingModule } from '@nestjs/testing';
import { FinanceTransicionService } from './finance_transicion.service';

describe('FinanceTransicionService', () => {
  let service: FinanceTransicionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceTransicionService],
    }).compile();

    service = module.get<FinanceTransicionService>(FinanceTransicionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
