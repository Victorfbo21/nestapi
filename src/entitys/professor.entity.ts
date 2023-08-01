import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Professor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    documento: string;

    @Column({ nullable: true })
    ano_entrada: number;

    @Column({ nullable: true })
    graduacao: string;
}