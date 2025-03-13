import { ZodValidationPipe } from 'src/common/pipes/zod-validation-pipe';
import { z } from 'zod';

export const CreateProductDto = z.object({
  name: z.string().min(1, { message: 'Nome do produto é obrigatório' }),
  value: z.coerce
    .number()
    .positive()
    .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
      message: 'Deve ter até 2 casas decimais',
    }),
});

export type CreateProductDto = z.infer<typeof CreateProductDto>;
export const CreateProductPipe = new ZodValidationPipe(CreateProductDto);

export const UpdateProductDto = CreateProductDto.partial();
export type UpdateProductDto = z.infer<typeof UpdateProductDto>;
export const ProductUpdatePipe = new ZodValidationPipe(CreateProductDto);
