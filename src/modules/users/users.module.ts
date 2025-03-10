import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PasswordManager } from 'src/common/utils/PasswordManager';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PasswordManager],
  imports: [PrismaModule, AuthModule],
})
export class UsersModule {}
