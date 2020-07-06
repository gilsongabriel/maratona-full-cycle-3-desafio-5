import {Controller, Get, Render} from '@nestjs/common';
import {MaratonaService} from "./maratona.service";
import {Maratona} from "./maratona.entity";
var moment = require('moment');

@Controller('maratona')
export class MaratonaController {
    constructor(private readonly maratonaService: MaratonaService) {
    }

    @Get('api')
    async api(): Promise<Maratona[]> {
        let lives = await this.maratonaService.getMaratona();

        if (lives.length > 1) {
            lives = MaratonaController.sortById(lives);

            lives.filter(live => {
                live.data = this.formatDate(live.data, 'L');
            });
        }

        return lives;
    }

    @Get()
    @Render('live_list')
    async index() {
        let lives = await this.maratonaService.getMaratona();

        if (lives.length > 1) {
            lives = MaratonaController.sortById(lives);

            lives.filter(live => {
                live.data = this.formatDate(live.data, 'L');
            });
        }

        return {layout: false, lives};
    }

    private static sortById(lives: Maratona[]) {
        lives = lives.sort((n1, n2) => {
            if (n1.id > n2.id) {
                return 1;
            }

            if (n1.id < n2.id) {
                return -1;
            }

            return 0;
        });
        return lives;
    }

    public formatDate(date, format) {
        return moment(date).format(format);
    }
}