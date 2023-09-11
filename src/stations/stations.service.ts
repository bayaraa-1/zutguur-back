import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreateStationsDto } from './dto/create-stations.dto';
import { UpdateStationsDto } from './dto/update-stations.dto';

@Injectable()
export class StationsService {
  constructor(private prisma: PrismaService) {}

  create(createStationsDto: CreateStationsDto) {
    return this.prisma.stations.create({
      data: createStationsDto,
    });
  }

  findAll() {
    return this.prisma.stations.findMany();
  }

  findOne(stationCode: number) {
    return this.prisma.stations.findFirst({
      where: { stationCode },
    });
  }

  update(stationCode: number, updateStationDto: UpdateStationsDto) {
    return this.prisma.stations.update({
      where: { stationCode },
      data: updateStationDto,
    });
  }
}
