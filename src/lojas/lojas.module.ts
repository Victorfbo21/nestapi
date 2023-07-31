import { Module } from '@nestjs/common'
import { LojasController } from './lojas.controller';
import { LojasServices } from './lojas.service';

@Module({
    imports: [],
    providers: [LojasServices],
    controllers: [LojasController],
})
export class LojasModule { }