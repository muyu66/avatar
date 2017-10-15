import { Controller, Get, Post, Body } from '@nestjs/common';
import { BaseController } from '../base.controller';
import * as Service from '../../services';
import * as Instance from '../../models/instance';

@Controller('shoes')
export class ShoeController extends BaseController {

    constructor(
        private readonly ShoeService: Service.ShoeService,
        private readonly UserFootService: Service.UserFootService,
    ) { super(); }

    @Get()
    async index() {
        return await this.UserFootService.findAll({
            userId: await this.getUserId(),
        });
    }

    @Post()
    async store( @Body() params: Instance.Shoe) {
        const shoe = await this.ShoeService.create(params);

        await this.UserFootService.create({
            userId: await this.getUserId(),
            shoeId: shoe.id,
        } as Instance.UserFoot);
    }

}