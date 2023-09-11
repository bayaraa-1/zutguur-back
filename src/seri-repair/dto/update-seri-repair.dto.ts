import { PartialType } from '@nestjs/mapped-types';
import { CreateSeriRepairDto } from './create-seri-repair.dto';

export class UpdateSeriRepairDto extends PartialType(CreateSeriRepairDto) {}
