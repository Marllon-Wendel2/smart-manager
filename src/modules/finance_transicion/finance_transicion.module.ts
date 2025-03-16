import { Module } from '@nestjs/common';
import { FinanceTransicionService } from './finance_transicion.service';
import { FinanceTransicionController } from './finance_transicion.controller';

@Module({
  controllers: [FinanceTransicionController],
  providers: [FinanceTransicionService],
})
export class FinanceTransicionModule {}
