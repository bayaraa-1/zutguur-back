import { PartialType } from '@nestjs/mapped-types';
import { CreateLocomotiveDto } from './create-locomotive.dto';

export class UpdateLocomotiveDto extends PartialType(CreateLocomotiveDto) {}
