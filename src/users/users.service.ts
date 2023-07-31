import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
    getUsers(): any {
        return [];
    }

    create(user: CreateUserDto) {

    }
}