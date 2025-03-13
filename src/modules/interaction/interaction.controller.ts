import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InteractionService } from './interaction.service';
import {
  InteractionDto,
  InteractionPipe,
  UpdateInteractionDto,
} from './dto/interaction.dto';

@Controller('interaction')
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}

  @Post()
  registerInteraction(@Body(InteractionPipe) interactionDto: InteractionDto) {
    return this.interactionService.registerInteraction(interactionDto);
  }

  @Get()
  getAllInteraction() {
    return this.interactionService.getAllInteraction();
  }

  @Get(':id')
  findInterectionById(@Param('id') id: string) {
    return this.interactionService.findInterectionById(+id);
  }

  @Patch(':id')
  updateInteraction(
    @Param('id') id: string,
    @Body() updateInteractionDto: UpdateInteractionDto,
  ) {
    return this.interactionService.updateInteraction(+id, updateInteractionDto);
  }

  @Delete(':id')
  deleteInteractionById(@Param('id') id: string) {
    return this.interactionService.deleteInteractionById(+id);
  }
}
