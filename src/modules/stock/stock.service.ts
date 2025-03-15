import { Injectable } from '@nestjs/common';
import { CreateStockDto, UpdateStockDto } from './dto/stock.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    } catch (error) {}
  }

  async findAllMoviment() {
    try {
      return await this.prismaService.movementStock.findMany();
    } catch (error) {}
  }

  async findMovimentByProductId(productId: number) {
    try {
      const result = await this.prismaService.movementStock.findMany({
        where: { product_id: productId },
      });
    } catch (error) {}
  }

  // update(id: number, updateStockDto: UpdateStockDto) {
  //   return `This action updates a #${id} stock`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} stock`;
  // }
}
