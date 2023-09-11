import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ComponentHistoryModule } from './component-history/component-history.module';
import { ComponentModule } from './component/component.module';
import { DepoModule } from './depo/depo.module';
import { LocomotiveSeriModule } from './locomotive-seri/locomotive-seri.module';
import { LocomotiveModule } from './locomotive/locomotive.module';
import { MailModule } from './mail/mail.module';
import { SeriComponentModule } from './seri-component/seri-component.module';
import { SeriRepairModule } from './seri-repair/seri-repair.module';
import { PrismaService } from './services/prisma.service';
import { StationsModule } from './stations/stations.module';
import { UsersModule } from './users/users.module';
import { ZasRunModule } from './zas-run/zas-run.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MailModule,
    DepoModule,
    LocomotiveModule,
    LocomotiveSeriModule,
    SeriComponentModule,
    ComponentModule,
    ComponentHistoryModule,
    SeriRepairModule,
    StationsModule,
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: process.env.ORACLE_HOST,
      port: parseInt(process.env.ORACLE_PORT),
      serviceName: process.env.ORACLE_SERVICE_NAME,
      username: process.env.ORACLE_USER_NAME,
      password: process.env.ORACLE_PASSWORD,
      database: process.env.ORACLE_DATABASE,
      entities: ['src/zas-run/entities/zas-run.entity.ts'],
      synchronize: true,
    }),
    ZasRunModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
