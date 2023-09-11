import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeriRepairService } from './seri-repair.service';
import { CreateSeriRepairDto } from './dto/create-seri-repair.dto';
import { UpdateSeriRepairDto } from './dto/update-seri-repair.dto';

@Controller('seri-repair')
export class SeriRepairController {
  constructor(private readonly seriRepairService: SeriRepairService) {}

  @Post()
  create(@Body() createSeriRepairDto: CreateSeriRepairDto) {
    return this.seriRepairService.create(createSeriRepairDto);
  }

  @Get()
  findAll() {
    return this.seriRepairService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSeriRepairDto: UpdateSeriRepairDto,
  ) {
    return this.seriRepairService.update(+id, updateSeriRepairDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriRepairService.remove(+id);
  }
}
