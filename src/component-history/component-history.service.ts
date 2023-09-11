import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';
import { CreateComponentHistoryDto } from './dto/create-component-history.dto';
import { UpdateComponentHistoryDto } from './dto/update-component-history.dto';

@Injectable()
export class ComponentHistoryService {
  constructor(private prisma: PrismaService) {}

  create(user: User, createComponentHistoryDto: CreateComponentHistoryDto) {
    return this.prisma.componentHistory.create({
      data: {
        ...createComponentHistoryDto,
        userInsertedId: user.id,
      },
    });
  }

  select = {
    id: true,
    componentId: true,
    Component: {
      select: {
        number: true,
        name: true,
      },
    },
    locomotiveId: true,
    Locomotive: {
      select: {
        number: true,
        Seri: {
          select: {
            name: true,
          },
        },
      },
    },
    seriRepairId: true,
    SeriRepair: {
      select: {
        shortName: true,
      },
    },
    depoId: true,
    Depo: {
      select: {
        name: true,
      },
    },
    componentDate: true,
    runKm: true,
    type: true,
    reason: true,
  };

  all() {
    return this.prisma.componentHistory.findMany({
      where: {
        status: 'InUse',
      },
      select: this.select,
    });
  }

  findByComponent(componentId: number) {
    return this.prisma.componentHistory.findMany({
      where: {
        componentId,
        status: 'InUse',
      },
      select: this.select,
    });
  }

  findByLocomotive(locomotiveId: number) {
    return this.prisma.componentHistory.findMany({
      where: {
        locomotiveId,
        status: 'InUse',
      },
      select: this.select,
    });
  }

  findOne(id: number) {
    return this.prisma.componentHistory.findFirst({
      where: { id },
    });
  }

  update(id: number, updateComponentHistoryDto: UpdateComponentHistoryDto) {
    return this.prisma.componentHistory.update({
      where: { id },
      data: updateComponentHistoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.componentHistory.update({
      where: { id },
      data: { status: 'Deleted' },
    });
  }
}
