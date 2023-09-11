import { Module } from '@nestjs/common';
import { ComponentService } from './component.service';
import { ComponentController } from './component.controller';
import { PrismaService } from './../services/prisma.service';

@Module({
  controllers: [ComponentController],
  providers: [ComponentService, PrismaService],
})
export class ComponentModule {}
