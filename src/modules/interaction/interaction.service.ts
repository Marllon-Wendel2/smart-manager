import { Injectable } from '@nestjs/common';
import { InteractionDto, UpdateInteractionDto } from './dto/interaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InteractionService {
  constructor(private readonly primasService: PrismaService) {}

  async registerInteraction(interactionDto: InteractionDto) {
    const data = {
      name: interactionDto.name,
      email: interactionDto.email,
      phone: interactionDto.phone,
      type: interactionDto.type,
      clientSupplierId: interactionDto.clientSupplierId,
      created_at: new Date(),
    };
    return await this.primasService.interaction.create({ data });
  }

  async getAllInteraction() {
    const result = await this.primasService.interaction.findMany();

    if (result.length <= 0) {
      throw new Error('Não foi encontrado nenhuma interação');
    }

    return result;
  }

  async findInterectionById(id: number) {
    const result = await this.primasService.interaction.findFirst({
      where: { id },
    });
  }

  async getAllInteractionByClientId(clientId: number) {
    const result = await this.primasService.interaction.findMany({
      where: { clientSupplierId: clientId },
    });

    if (result.length <= 0) {
      throw new Error('Não foi encontrado nenhuma interação');
    }

    return result;
  }

  async updateInteraction(
    id: number,
    updateInteractionDto: UpdateInteractionDto,
  ) {
    const data = {
      name: updateInteractionDto.name,
      email: updateInteractionDto.email,
      phone: updateInteractionDto.phone,
      type: updateInteractionDto.type,
      clientSupplierId: updateInteractionDto.clientSupplierId,
      updated_at: new Date(),
    };
    return await this.primasService.interaction.update({ where: { id }, data });
  }

  async deleteInteractionById(id: number) {
    await this.primasService.interaction.delete({ where: { id } });
  }
}
