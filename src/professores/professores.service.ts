
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from '../entitys/professor.entity';

@Injectable()
export class ProfessoresService {
    constructor(
        @InjectRepository(Professor)
        private professoresRepository: Repository<Professor>,
    ) { }

    async createProfessor(data: Professor): Promise<Professor> {
        return this.professoresRepository.create(data);
    }
}