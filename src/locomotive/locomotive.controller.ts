import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocomotiveService } from './locomotive.service';
import { CreateLocomotiveDto } from './dto/create-locomotive.dto';
import { UpdateLocomotiveDto } from './dto/update-locomotive.dto';

@Controller('locomotive')
export class LocomotiveController {
  constructor(private readonly locomotiveService: LocomotiveService) {}

  @Post()
  create(@Body() createLocomotiveDto: CreateLocomotiveDto) {
    return this.locomotiveService.create(createLocomotiveDto);
  }

  @Get()
  findAll() {
    return this.locomotiveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locomotiveService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocomotiveDto: UpdateLocomotiveDto,
  ) {
    return this.locomotiveService.update(+id, updateLocomotiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locomotiveService.remove(+id);
  }
}
