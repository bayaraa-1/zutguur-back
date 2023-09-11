import { PartialType } from '@nestjs/mapped-types';
import { CreateStationsDto } from './create-stations.dto';

export class UpdateStationsDto extends PartialType(CreateStationsDto) {}
