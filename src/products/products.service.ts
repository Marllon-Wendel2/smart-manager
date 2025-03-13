import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}
  async creatNewProduct(createProductDto: CreateProductDto) {
    const data = {
      name: createProductDto.name,
      value: createProductDto.value,
    };

    await this.prismaService.product.create({ data });
  }

  async findAllProducts() {
    const result = await this.prismaService.product.findMany();

    if (result.length === 0) {
      throw new Error('Não foi encontrado nenhum produto.');
    }

    return result;
  }

  async findProdctById(id: number) {
    const result = await this.prismaService.product.findFirst({
      where: { id },
    });

    if (!result) {
      throw new Error('Não foi encontrado nenhum produto.');
    }

    return result;
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    const data = {
      name: updateProductDto.name,
      value: updateProductDto.value,
    };

    await this.prismaService.product.update({
      where: { id },
      data,
    });
  }

  async deleteProductById(id: number) {
    await this.prismaService.product.delete({ where: { id } });
  }
}
