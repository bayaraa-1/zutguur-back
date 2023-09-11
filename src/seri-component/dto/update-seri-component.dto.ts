import { PartialType } from '@nestjs/mapped-types';
import { CreateSeriComponentDto } from './create-seri-component.dto';

export class UpdateSeriComponentDto extends PartialType(
  CreateSeriComponentDto,
) {}
