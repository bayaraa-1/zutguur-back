import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreateLocomotiveDto } from './dto/create-locomotive.dto';
import { UpdateLocomotiveDto } from './dto/update-locomotive.dto';
@Injectable()
export class LocomotiveService {
  constructor(private prisma: PrismaService) {}

  async create(createLocomotiveDto: CreateLocomotiveDto) {
    return this.prisma.locomotive.create({
      data: createLocomotiveDto,
    });
  }

  findAll() {
    return this.prisma.locomotive.findMany({
      where: { status: 'InUse' },
      select: {
        id: true,
        seriId: true,
        Seri: {
          select: {
            name: true,
          },
        },
        number: true,
        depoId: true,
        Depo: {
          select: {
            name: true,
          },
        },
        sects: true,
        befRunKm: true,
        useDate: true,
        outDate: true,
        LocomotiveRun: true,
        ComponentHistory: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.locomotive.findFirst({
      where: { id },
      select: {
        id: true,
        seriId: true,
        Seri: {
          select: {
            name: true,
          },
        },
        number: true,
        depoId: true,
        Depo: {
          select: {
            name: true,
          },
        },
        sects: true,
        befRunKm: true,
        useDate: true,
        outDate: true,
        LocomotiveRun: true,
        ComponentHistory: true,
      },
    });
  }

  update(id: number, updateLocomotiveDto: UpdateLocomotiveDto) {
    return this.prisma.locomotive.update({
      where: { id },
      data: updateLocomotiveDto,
    });
  }

  remove(id: number) {
    return this.prisma.locomotive.update({
      where: { id },
      data: { status: 'Deleted' },
    });
  }
}
