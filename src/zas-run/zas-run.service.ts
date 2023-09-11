import { PrismaService } from 'src/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ZasRunService {
  constructor(private dataSource: DataSource, private prisma: PrismaService) {}

  async find(locomotiveId: number) {
    const locomotive = await this.prisma.locomotive.findFirst({
      where: {
        id: locomotiveId,
      },
      select: {
        Seri: {
          select: {
            name: true,
          },
        },
        number: true,
        sects: true,
      },
    });
    console.log(locomotive);
    if (locomotive) {
      return this.dataSource.query(
        `select dansdepo, sericode, seriname, zutnumber, repid, repshname, replastdate, runkm, begrun, freeze from zasrun where seriname=n'${
          locomotive.sects === 'A' ? '1' : '2'
        }${locomotive.Seri.name}' and zutnumber=${locomotive.number}`,
      );
    }
  }
}
