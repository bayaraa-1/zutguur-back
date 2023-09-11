import { PartialType } from '@nestjs/mapped-types';
import { CreateComponentHistoryDto } from './create-component-history.dto';

export class UpdateComponentHistoryDto extends PartialType(
  CreateComponentHistoryDto,
) {}
