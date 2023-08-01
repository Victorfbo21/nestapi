
import { Controller, Post, Body } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { Professor } from 'src/entitys/professor.entity';

@Controller('professores')
export class ProfessoresController {
    constructor(private professoresService: ProfessoresService) { }

    @Post('insert')
    async createProfessor(@Body() data: Professor) {
        return this.professoresService.createProfessor(data);
    }
}