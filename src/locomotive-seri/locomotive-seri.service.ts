import { Injectable } from '@nestjs/common';
import { CreateLocomotiveSeriDto } from './dto/create-locomotive-seri.dto';
import { UpdateLocomotiveSeriDto } from './dto/update-locomotive-seri.dto';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class LocomotiveSeriService {
  constructor(private prisma: PrismaService) {}

  create(createLocomotiveSeriDto: CreateLocomotiveSeriDto) {
    return this.prisma.locomotiveSeri.create({
      data: createLocomotiveSeriDto,
    });
  }

  findAll() {
    return this.prisma.locomotiveSeri.findMany({
      where: {
        status: 'InUse',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.locomotiveSeri.findFirst({
      where: { id },
    });
  }

  update(id: number, updateLocomotiveSeriDto: UpdateLocomotiveSeriDto) {
    return this.prisma.locomotiveSeri.update({
      where: { id },
      data: updateLocomotiveSeriDto,
    });
  }

  remove(id: number) {
    return this.prisma.locomotiveSeri.update({
      where: { id },
      data: { status: 'Deleted' },
    });
  }
}
