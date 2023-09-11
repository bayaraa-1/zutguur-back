import { PartialType } from '@nestjs/mapped-types';
import { CreateLocomotiveSeriDto } from './create-locomotive-seri.dto';

export class UpdateLocomotiveSeriDto extends PartialType(
  CreateLocomotiveSeriDto,
) {}
