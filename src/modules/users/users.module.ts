import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PasswordManager } from 'src/common/utils/PasswordManager';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PasswordManager],
  imports: [PrismaModule],
})
export class UsersModule {}
