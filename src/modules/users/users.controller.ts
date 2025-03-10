import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  CreateUserPipe,
  UpdateUserDto,
} from './dto/user-dto.dto';
import { Authority } from 'src/common/enum/authority.enum';
import { AuthGuard, Roles } from 'src/common/guards/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(Authority.ADMIN, Authority.SUPER_ADMIN)
  createNewUser(@Body(CreateUserPipe) createUserDto: CreateUserDto) {
    return this.usersService.createNewUser(createUserDto);
  }

  @Get()
  @Roles(Authority.ADMIN, Authority.SUPER_ADMIN)
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  @Roles(Authority.ADMIN, Authority.SUPER_ADMIN)
  findUserById(@Param('id') id: string) {
    return this.usersService.findUserById(+id);
  }

  @Patch(':id')
  @Roles(Authority.ADMIN, Authority.SUPER_ADMIN)
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  @Roles(Authority.ADMIN, Authority.SUPER_ADMIN)
  remove(@Param('id') id: string) {
    return this.usersService.deleteUserById(+id);
  }
}
