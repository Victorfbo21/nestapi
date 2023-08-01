import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Put, BadRequestException } from '@nestjs/common';
import { User } from 'src/entitys/user.entity';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) { }

    @Put('insert')
    create(@Body() aluno: User) {
        if (!aluno.name || !aluno.email) throw new BadRequestException("Email e senha faltando...");
        return this.UsersService.createUser(aluno);
    }

}


