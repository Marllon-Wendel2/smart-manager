import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user-dto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { create } from 'domain';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async createNewUser(createUserDto: CreateUserDto) {
    try {
      const data = {
        name: createUserDto.name,
        email: createUserDto.email,
        hashPassword: createUserDto.hashPassword,
        type: createUserDto.type,
      };
      return await this.prismaService.user.create({
        data,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllUsers() {
    try {
      return await this.prismaService.user.findMany();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findUserById(id: number) {
    try {
      const result = await this.prismaService.user.findFirst({
        where: { id },
      });

      if (!result) {
        throw new Error('User not found');
      }

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    await this.findUserById(id);

    const data = {
      name: updateUserDto.name,
      email: updateUserDto.email,
      hashPassword: updateUserDto.hashPassword,
      type: updateUserDto.type,
      updated_at: new Date(),
    };
    try {
      return await this.prismaService.user.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUserById(id: number) {
    await this.findUserById(id);

    try {
      return await this.prismaService.user.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
