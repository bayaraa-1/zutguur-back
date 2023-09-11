import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from '../services/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}
  saltOrRounds = 10;

  async create(createUsersDto: CreateUsersDto): Promise<User> {
    const hashedPassword: string = await bcrypt.hash(
      createUsersDto.password,
      this.saltOrRounds,
    );
    const code = (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);
    const user = await this.prisma.user.create({
      data: {
        email: createUsersDto.email,
        password: hashedPassword,
        code,
        codeDate: new Date().toISOString(),
      },
    });
    await this.mailService.sendUserConfirmation(user);
    return user;
  }

  async findOne(email: string, password: string): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        delete user.password;
        return user;
      }
    }
  }
}
