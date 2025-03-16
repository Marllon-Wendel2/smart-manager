import { ZodValidationPipe } from 'src/common/pipes/zod-validation-pipe';
import { z } from 'zod';

export const CreateFinancialTransactionDto = z.object({
  type: z.string(),
  description: z.string(),
  value: z.number(),
});

export type CreateFinancialTransactionDto = z.infer<
  typeof CreateFinancialTransactionDto
>;
export const CreateFinancialTransactionPipe = new ZodValidationPipe(
  CreateFinancialTransactionDto,
);

export const UpdateFinancialTransactionDto =
  CreateFinancialTransactionDto.partial();
export type UpdateFinancialTransactionDto = z.infer<
  typeof UpdateFinancialTransactionDto
>;
export const UpdateFinancialTransactionPipe = new ZodValidationPipe(
  UpdateFinancialTransactionDto,
);
