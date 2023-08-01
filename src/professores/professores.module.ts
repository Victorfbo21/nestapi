import { Module } from '@nestjs/common'
import { ProfessoresService } from './professores.service';
import { ProfessoresController } from './professores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorRepository } from './professores.repository';
import { Professor } from 'src/entitys/professor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Professor])],
    providers: [ProfessoresService],
    controllers: [ProfessoresController],
})
export class ProfessorModule { }