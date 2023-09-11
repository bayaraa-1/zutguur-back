import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { SeriRepairController } from './seri-repair.controller';
import { SeriRepairService } from './seri-repair.service';

@Module({
  controllers: [SeriRepairController],
  providers: [SeriRepairService, PrismaService],
})
export class SeriRepairModule {}
