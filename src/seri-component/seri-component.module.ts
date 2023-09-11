import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { SeriComponentController } from './seri-component.controller';
import { SeriComponentService } from './seri-component.service';

@Module({
  controllers: [SeriComponentController],
  providers: [SeriComponentService, PrismaService],
})
export class SeriComponentModule {}
