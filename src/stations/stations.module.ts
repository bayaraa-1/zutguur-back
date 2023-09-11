import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { StationsController } from './stations.controller';
import { StationsService } from './stations.service';

@Module({
  controllers: [StationsController],
  providers: [StationsService, PrismaService],
})
export class StationsModule {}
