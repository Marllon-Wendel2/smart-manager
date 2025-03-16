import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateFinancialTransactionDto,
  UpdateFinancialTransactionDto,
} from './dto/finance_transicion.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ERROR_MESSAGE } from 'src/utils/erros/erros-messages';

@Injectable()
export class FinanceTransicionService {
  constructor(private readonly prismaService: PrismaService) {}

  async recordFinancialTransaction(
    createFinancialTransactionDto: CreateFinancialTransactionDto,
  ) {
    const data = {
      type: createFinancialTransactionDto.type,
      description: createFinancialTransactionDto.description,
      value: createFinancialTransactionDto.value,
      date_transition: new Date(),
    };
    try {
      return await this.prismaService.financialTransaction.create({ data });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(ERROR_MESSAGE.ERROR_INTERNAL);
    }
  }

  async findAllFinancialMoviment() {
    try {
      const result = await this.prismaService.financialTransaction.findMany();

      if (result.length === 0)
        throw new Error(ERROR_MESSAGE.NOT_FOUND_EXCEPCTION);

      return result;
    } catch (error) {
      throw new InternalServerErrorException(ERROR_MESSAGE.ERROR_INTERNAL);
    }
  }

  async findFinancialTransicion(id: number) {
    try {
      const result = await this.prismaService.financialTransaction.findFirst({
        where: { id },
      });

      if (result) throw new Error(ERROR_MESSAGE.NOT_FOUND_EXCEPCTION);

      return result;
    } catch (error) {
      throw new InternalServerErrorException(ERROR_MESSAGE.ERROR_INTERNAL);
    }
  }
}
