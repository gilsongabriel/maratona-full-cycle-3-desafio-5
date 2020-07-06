import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MaratonaController} from './maratona/maratona.controller';
import {MaratonaService} from './maratona/maratona.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Maratona} from "./maratona/maratona.entity";
import {join} from 'path';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: join(__dirname, '..', 'data', 'db.sqlite'),
            entities: [Maratona],
            logging: true
        }),
        TypeOrmModule.forFeature([Maratona])
    ],
    controllers: [AppController, MaratonaController],
    providers: [AppService, MaratonaService],
})
export class AppModule {
}
