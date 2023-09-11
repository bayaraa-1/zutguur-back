import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ComponentHistoryController } from './component-history.controller';
import { ComponentHistoryService } from './component-history.service';

@Module({
  controllers: [ComponentHistoryController],
  providers: [ComponentHistoryService, PrismaService],
})
export class ComponentHistoryModule {}
