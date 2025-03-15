import { ZodValidationPipe } from 'src/common/pipes/zod-validation-pipe';
import { number, z } from 'zod';

export const CreateStockDto = z.object({
  type_moviment: z.string(),
  product_id: z.number().int(),
  qtd: number(),
});

export type CreateStockDto = z.infer<typeof CreateStockDto>;
export const CreateStockPupe = new ZodValidationPipe(CreateStockDto);

export const UpdateStockDto = CreateStockDto.partial();
export type UpdateStockDto = z.infer<typeof UpdateStockDto>;
export const UpdateStockPiper = new ZodValidationPipe(UpdateStockDto);
