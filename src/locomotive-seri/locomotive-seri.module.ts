import { Module } from '@nestjs/common';
import { LocomotiveSeriService } from './locomotive-seri.service';
import { LocomotiveSeriController } from './locomotive-seri.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [LocomotiveSeriController],
  providers: [LocomotiveSeriService, PrismaService],
})
export class LocomotiveSeriModule {}
