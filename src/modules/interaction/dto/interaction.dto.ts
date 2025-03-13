import { z } from 'zod';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation-pipe';

export const InteractionDto = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone number is required' }),
  type: z.string().min(1, { message: 'Type is required' }),
  clientSupplierId: z.coerce
    .number()
    .int({ message: 'clientSupplierId must be an integer' }),
});

export type InteractionDto = z.infer<typeof InteractionDto>;
export const InteractionPipe = new ZodValidationPipe(InteractionDto);

export const UpdateInteractionDto = InteractionDto.partial();
export type UpdateInteractionDto = z.infer<typeof UpdateInteractionDto>;
export const UpdateInteractionPipe = new ZodValidationPipe(
  UpdateInteractionDto,
);
