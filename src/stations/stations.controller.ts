import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StationsService } from './stations.service';
import { CreateStationsDto } from './dto/create-stations.dto';
import { UpdateStationsDto } from './dto/update-stations.dto';

@Controller('stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Post()
  create(@Body() createStationsDto: CreateStationsDto) {
    return this.stationsService.create(createStationsDto);
  }

  @Get()
  findAll() {
    return this.stationsService.findAll();
  }

  @Patch(':stationCode')
  update(
    @Param('stationCode') stationCode: number,
    @Body() updateStationsDto: UpdateStationsDto,
  ) {
    return this.stationsService.update(+stationCode, updateStationsDto);
  }
}
