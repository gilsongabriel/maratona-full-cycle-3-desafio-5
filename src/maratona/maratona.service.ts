import {Injectable} from '@nestjs/common';
import {Maratona} from "./maratona.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class MaratonaService {
    constructor(
        @InjectRepository(Maratona)
        private readonly maratonaRepo: Repository<Maratona>) {
    }

    getMaratona(): Promise<Maratona[]> {
        return this.maratonaRepo.find();
    }
}
