import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from 'src/services/prisma.service';
import { ZasRunController } from './zas-run.controller';
import { ZasRunService } from './zas-run.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [ZasRunController],
  providers: [ZasRunService, PrismaService],
  exports: [TypeOrmModule],
})
export class ZasRunModule {}
