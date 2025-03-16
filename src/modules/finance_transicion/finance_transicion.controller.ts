import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FinanceTransicionService } from './finance_transicion.service';
import type {
  CreateFinancialTransactionDto,
  UpdateFinancialTransactionDto,
} from './dto/finance_transicion.dto';

@Controller('finance-transicion')
export class FinanceTransicionController {
  constructor(
    private readonly financeTransicionService: FinanceTransicionService,
  ) {}

  @Post()
  recordFinancialTransaction(
    @Body() createFinanceTransicionDto: CreateFinancialTransactionDto,
  ) {
    return this.financeTransicionService.recordFinancialTransaction(
      createFinanceTransicionDto,
    );
  }

  @Get()
  findAllFinancialMoviment() {
    return this.financeTransicionService.findAllFinancialMoviment();
  }

  @Get(':id')
  findFinancialTransicion(@Param('id') id: string) {
    return this.financeTransicionService.findFinancialTransicion(+id);
  }
}
