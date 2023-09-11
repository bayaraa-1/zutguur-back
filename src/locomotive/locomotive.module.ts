import { Module } from '@nestjs/common';
import { LocomotiveService } from './locomotive.service';
import { LocomotiveController } from './locomotive.controller';
import { PrismaService } from './../services/prisma.service';
@Module({
  controllers: [LocomotiveController],
  providers: [LocomotiveService, PrismaService],
})
export class LocomotiveModule {}
