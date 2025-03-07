import { ZodValidationPipe } from 'src/common/pipes/zod-validation-pipe';
import { z } from 'zod';

export const LoginDto = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
});

export type LoginDto = z.infer<typeof LoginDto>;
export const LoginPipe = new ZodValidationPipe(LoginDto);
