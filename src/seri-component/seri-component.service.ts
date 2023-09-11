import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreateSeriComponentDto } from './dto/create-seri-component.dto';
import { UpdateSeriComponentDto } from './dto/update-seri-component.dto';

@Injectable()
export class SeriComponentService {
  constructor(private prisma: PrismaService) {}

  create(createSeriComponentDto: CreateSeriComponentDto) {
    return this.prisma.seriComponent.create({
      data: createSeriComponentDto,
    });
  }

  findAll() {
    return this.prisma.seriComponent.findMany({
      where: { status: 'InUse' },
    });
  }

  findOne(id: number) {
    return this.prisma.seriComponent.findFirst({
      where: { id },
    });
  }

  update(id: number, updateSeriComponentDto: UpdateSeriComponentDto) {
    return this.prisma.seriComponent.update({
      where: { id },
      data: updateSeriComponentDto,
    });
  }

  remove(id: number) {
    return this.prisma.seriComponent.update({
      where: { id },
      data: { status: 'Deleted' },
    });
  }
}
