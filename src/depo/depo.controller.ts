import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepoService } from './depo.service';
import { CreateDepoDto } from './dto/create-depo.dto';
import { UpdateDepoDto } from './dto/update-depo.dto';

@Controller('depo')
export class DepoController {
  constructor(private readonly depoService: DepoService) {}

  @Post()
  create(@Body() createDepoDto: CreateDepoDto) {
    return this.depoService.create(createDepoDto);
  }

  @Get()
  findAll() {
    return this.depoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepoDto: UpdateDepoDto) {
    return this.depoService.update(+id, updateDepoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depoService.remove(+id);
  }
}
