import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreateSeriRepairDto } from './dto/create-seri-repair.dto';
import { UpdateSeriRepairDto } from './dto/update-seri-repair.dto';

@Injectable()
export class SeriRepairService {
  constructor(private prisma: PrismaService) {}

  create(createSeriRepairDto: CreateSeriRepairDto) {
    return this.prisma.seriRepair.create({ data: createSeriRepairDto });
  }

  findAll() {
    return this.prisma.seriRepair.findMany({
      where: { status: 'InUse' },
      select: {
        id: true,
        locomotiveSeri: true,
        LocomotiveSeri: {
          select: {
            name: true,
          },
        },
        repairNumber: true,
        repairName: true,
        shortName: true,
        respondent: true,
        repairRate: true,
        stopMinute: true,
        priority: true,
        runBoolean: true,
        repairType: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.seriRepair.findFirst({
      where: { id },
    });
  }

  update(id: number, updateSeriRepairDto: UpdateSeriRepairDto) {
    return this.prisma.seriRepair.update({
      where: { id },
      data: updateSeriRepairDto,
    });
  }

  remove(id: number) {
    return this.prisma.seriRepair.update({
      where: { id },
      data: { status: 'Deleted' },
    });
  }
}
