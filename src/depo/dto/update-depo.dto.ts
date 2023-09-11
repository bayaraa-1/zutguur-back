import { PartialType } from '@nestjs/mapped-types';
import { CreateDepoDto } from './create-depo.dto';

export class UpdateDepoDto extends PartialType(CreateDepoDto) {}
