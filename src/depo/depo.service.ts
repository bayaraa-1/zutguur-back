import { Injectable } from '@nestjs/common';
import { CreateDepoDto } from './dto/create-depo.dto';
import { UpdateDepoDto } from './dto/update-depo.dto';
import { PrismaService } from '../services/prisma.service';
import { DepoType, Stations } from '@prisma/client';

@Injectable()
export class DepoService {
  constructor(private prisma: PrismaService) {}

  async create(createDepoDto: CreateDepoDto) {
    let type: DepoType = 'Main';
    if (createDepoDto.mainId) {
      type = 'Sub';
    }
    return this.prisma.depo.create({
      data: {
        ...createDepoDto,
        type,
      },
    });
  }

  findAll() {
    return this.prisma.depo.findMany({
      where: {
        status: 'InUse',
      },
      select: {
        id: true,
        name: true,
        shortName: true,
        stationId: true,
        Stations: {
          select: {
            stationCode: true,
            stationName: true,
          },
        },
        bossName: true,
        type: true,
        mainId: true,
        Main: {
          select: {
            name: true,
            shortName: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.depo.findFirst({
      where: { id },
    });
  }

  update(id: number, updateDepoDto: UpdateDepoDto) {
    return this.prisma.depo.update({
      where: { id },
      data: updateDepoDto,
    });
  }

  remove(id: number) {
    return this.prisma.depo.update({
      where: { id },
      data: { status: 'Deleted' },
    });
  }
}
