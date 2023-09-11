import { Controller, Get, Param } from '@nestjs/common';
import { ZasRunService } from './zas-run.service';

@Controller('zas-run')
export class ZasRunController {
  constructor(private readonly zasRunService: ZasRunService) {}

  @Get(':locomotiveId')
  find(@Param('locomotiveId') locomotiveId: string) {
    return this.zasRunService.find(+locomotiveId);
  }
}
