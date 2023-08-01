import { Repository } from 'typeorm';
import { Professor } from '../entitys/professor.entity';

export class ProfessorRepository extends Repository<Professor> {
    async createProfessor(data: Partial<Professor>): Promise<Professor> {
        console.log(data)
        const professor = this.create(data);
        return this.save(professor);
    }
}