import {Controller, Get, Render} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor() {
    }

    @Get()
    @Render('index')
    index() {
        return {layout: false};
    }
}
