import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto, UpdateStockDto } from './dto/stock.dto';
import { CreateProductPipe } from '../products/dto/product.dto';
import { UpdateInteractionPipe } from '../interaction/dto/interaction.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  createMovimentStock(@Body(CreateProductPipe) createStockDto: CreateStockDto) {
    return this.stockService.createMovimentStock(createStockDto);
  }

  @Get()
  findAllMoviment() {
    return this.stockService.findAllMoviment();
  }

  @Get(':id')
  findMovimentByProductId(@Param('id') id: string) {
    return this.stockService.findMovimentByProductId(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body(UpdateInteractionPipe) updateStockDto: UpdateStockDto,
  // ) {
  //   return this.stockService.update(+id, updateStockDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.stockService.remove(+id);
  // }
}
