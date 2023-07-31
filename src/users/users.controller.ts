import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Put, BadRequestException } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) { }

    @Get('list')
    findAll() {
        return this.UsersService.getUsers();
    }

    @Put('insert')
    create(@Body() user: CreateUserDto) {
        if (!user.name || !user.email) throw new BadRequestException("Email e senha faltando...");
        return this.UsersService.create(user);
    }

}


