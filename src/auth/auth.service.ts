import { expires_in } from './constants';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtTokenService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findOne(email, password);
    if (user) {
      const jwt = await this.jwtTokenService.sign(user);
      return {
        ...user,
        access_token: jwt,
        expires_in,
      };
    } else {
      throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
    }
  }
}
