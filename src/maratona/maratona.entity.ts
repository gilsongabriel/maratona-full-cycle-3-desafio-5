import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Maratona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    tutor: string;

    @Column()
    url: string;

    @Column({name: 'date'})
    data: String;
}