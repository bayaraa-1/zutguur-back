import { Module } from '@nestjs/common';
import { DepoService } from './depo.service';
import { DepoController } from './depo.controller';
import { PrismaService } from './../services/prisma.service';

@Module({
  controllers: [DepoController],
  providers: [DepoService, PrismaService],
})
export class DepoModule {}
