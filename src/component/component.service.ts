import { PrismaService } from 'src/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';

@Injectable()
export class ComponentService {
  constructor(private prisma: PrismaService) {}

  create(createComponentDto: CreateComponentDto) {
    return this.prisma.component.create({
      data: createComponentDto,
    });
  }

  findAll() {
    return this.prisma.component.findMany({
      where: { status: 'InUse' },
      select: {
        id: true,
        name: true,
        number: true,
        seriComponentId: true,
        SeriComponent: {
          select: {
            nameMn: true,
          },
        },
        useDate: true,
        actedDate: true,
        runKm: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.component.findFirst({
      where: { id },
    });
  }

  update(id: number, updateComponentDto: UpdateComponentDto) {
    return this.prisma.component.update({
      where: { id },
      data: updateComponentDto,
    });
  }

  remove(id: number) {
    return this.prisma.component.update({
      where: { id },
      data: { status: 'Deleted' },
    });
  }
}
