import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeriComponentService } from './seri-component.service';
import { CreateSeriComponentDto } from './dto/create-seri-component.dto';
import { UpdateSeriComponentDto } from './dto/update-seri-component.dto';

@Controller('seri-component')
export class SeriComponentController {
  constructor(private readonly seriComponentService: SeriComponentService) {}

  @Post()
  create(@Body() createSeriComponentDto: CreateSeriComponentDto) {
    return this.seriComponentService.create(createSeriComponentDto);
  }

  @Get()
  findAll() {
    return this.seriComponentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriComponentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSeriComponentDto: UpdateSeriComponentDto,
  ) {
    return this.seriComponentService.update(+id, updateSeriComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriComponentService.remove(+id);
  }
}
