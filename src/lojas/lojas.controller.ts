import { LojasServices } from './lojas.service';
import { Body, Controller, Get, Put, BadRequestException } from '@nestjs/common';
import { CreateLojaDto } from './dtos/create-loja-dto';

@Controller('lojas')
export class LojasController {
    constructor(private LojasServices: LojasServices) { }

    @Put('insert')
    create(@Body() loja: CreateLojaDto) {
        return this.LojasServices.create(loja);
    }

}


