import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Request } from '@nestjs/common/decorators';
import { ComponentHistoryService } from './component-history.service';
import { CreateComponentHistoryDto } from './dto/create-component-history.dto';
import { UpdateComponentHistoryDto } from './dto/update-component-history.dto';

@Controller('component-history')
export class ComponentHistoryController {
  constructor(
    private readonly componentHistoryService: ComponentHistoryService,
  ) {}

  @Post()
  create(
    @Request() request,
    @Body() createComponentHistoryDto: CreateComponentHistoryDto,
  ) {
    return this.componentHistoryService.create(
      request.user,
      createComponentHistoryDto,
    );
  }

  @Get()
  all() {
    return this.componentHistoryService.all();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentHistoryService.findOne(+id);
  }

  @Get('by-component/:id')
  findByComponent(@Param('id') id: string) {
    return this.componentHistoryService.findByComponent(+id);
  }

  @Get('by-locomotive/:id')
  findByLocomotive(@Param('id') id: string) {
    return this.componentHistoryService.findByLocomotive(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComponentHistoryDto: UpdateComponentHistoryDto,
  ) {
    return this.componentHistoryService.update(+id, updateComponentHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentHistoryService.remove(+id);
  }
}
