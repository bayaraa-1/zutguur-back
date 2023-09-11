import { CreateUsersDto } from './dto/create-users.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { User } from '@prisma/client';
import { Public } from 'src/auth/public.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Public()
  async create(@Body() createUsersDto: CreateUsersDto): Promise<User> {
    return this.usersService.create(createUsersDto);
  }
}
