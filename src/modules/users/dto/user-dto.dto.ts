import { ZodValidationPipe } from 'src/common/pipes/zod-validation-pipe';
import { z } from 'zod';

export const CreateUserDto = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  type: z.string().min(1, { message: 'Type is required' }).optional(),
});

export type CreateUserDto = z.infer<typeof CreateUserDto>;
export const CreateUserPipe = new ZodValidationPipe(CreateUserDto);

export const UpdateUserDto = CreateUserDto.partial();
export type UpdateUserDto = z.infer<typeof UpdateUserDto>;
export const UpdateUserPipe = new ZodValidationPipe(UpdateUserDto);
