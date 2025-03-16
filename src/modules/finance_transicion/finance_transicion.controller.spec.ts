import { Test, TestingModule } from '@nestjs/testing';
import { FinanceTransicionController } from './finance_transicion.controller';
import { FinanceTransicionService } from './finance_transicion.service';

describe('FinanceTransicionController', () => {
  let controller: FinanceTransicionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinanceTransicionController],
      providers: [FinanceTransicionService],
    }).compile();

    controller = module.get<FinanceTransicionController>(FinanceTransicionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
