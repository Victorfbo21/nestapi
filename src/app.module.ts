import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessoresController } from './professores/professores.controller';
import { ProfessoresService } from './professores/professores.service';
import { Professor } from './entitys/professor.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: parseInt(`${process.env.DB_PORT}`),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
      options: {
        trustServerCertificate: true,
      }
    }),
    TypeOrmModule.forFeature([Professor])
  ],
  controllers: [AppController, ProfessoresController],
  providers: [AppService, ProfessoresService],
})
export class AppModule { }
