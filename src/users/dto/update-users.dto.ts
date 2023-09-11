import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './create-users.dto';

export class UpdateUsers11Dto extends PartialType(CreateUsersDto) {}
