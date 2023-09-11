import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocomotiveSeriService } from './locomotive-seri.service';
import { CreateLocomotiveSeriDto } from './dto/create-locomotive-seri.dto';
import { UpdateLocomotiveSeriDto } from './dto/update-locomotive-seri.dto';

@Controller('locomotive-seri')
export class LocomotiveSeriController {
  constructor(private readonly locomotiveSeriService: LocomotiveSeriService) {}

  @Post()
  create(@Body() createLocomotiveSeriDto: CreateLocomotiveSeriDto) {
    return this.locomotiveSeriService.create(createLocomotiveSeriDto);
  }

  @Get()
  findAll() {
    return this.locomotiveSeriService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locomotiveSeriService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocomotiveSeriDto: UpdateLocomotiveSeriDto,
  ) {
    return this.locomotiveSeriService.update(+id, updateLocomotiveSeriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locomotiveSeriService.remove(+id);
  }
}
