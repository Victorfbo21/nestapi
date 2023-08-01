
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProfessoresService } from './professores.service';
import { Professor } from 'src/entitys/professor.entity';

@Controller('professores')
export class ProfessoresController {
    constructor(private professoresService: ProfessoresService) { }

    @Post('insert')
    async createProfessor(@Body() data: Professor) {
        return this.professoresService.createProfessor(data);
    }

    @Get('list')
    async listProfessores() {
        return this.professoresService.list();
    }

}