import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login-dto.dto';
import { UsersService } from '../users/users.service';
import { PasswordManager } from 'src/common/utils/PasswordManager';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly passwordManager: PasswordManager,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findUserByEmail(loginDto.email);

    if (!user) {
      throw new Error('User not found');
    }

    const isValidPassword = await this.passwordManager.verifyPassword(
      user.hashPassword,
      loginDto.password,
    );

    if (!isValidPassword) {
      throw new Error('Invalid password');
    } else {
      const token = await this.generateToken({ id: user.id });
      return { token };
    }
  }

  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
