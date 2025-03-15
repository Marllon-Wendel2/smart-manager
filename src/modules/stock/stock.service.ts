import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateStockDto, UpdateStockDto } from './dto/stock.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ERROR_MESSAGE } from 'src/utils/erros/erros-messages';

@Injectable()
export class StockService {
  constructor(private readonly prismaService: PrismaService) {}

  async createMovimentStock(createStockDto: CreateStockDto) {
    const data = {
      type_moviment: createStockDto.type_moviment,
      qtd: createStockDto.qtd,
      date_moviment: new Date(),
      product_id: createStockDto.product_id,
    };

    try {
      await this.prismaService.movementStock.create({ data });
    } catch (error) {
      throw new InternalServerErrorException(ERROR_MESSAGE.ERROR_INTERNAL);
    }
  }

  async findAllMoviment() {
    try {
      return await this.prismaService.movementStock.findMany();
    } catch (error) {
      throw new InternalServerErrorException(ERROR_MESSAGE.ERROR_INTERNAL);
    }
  }

  async findMovimentByProductId(productId: number) {
    try {
      const result = await this.prismaService.movementStock.findMany({
        where: { product_id: productId },
      });

      if (result.length === 0) {
        throw new Error(ERROR_MESSAGE.NOT_FOUND_EXCEPCTION);
      }

      return result;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(ERROR_MESSAGE.ERROR_INTERNAL);
    }
  }

  // update(id: number, updateStockDto: UpdateStockDto) {
  //   return `This action updates a #${id} stock`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} stock`;
  // }
}
