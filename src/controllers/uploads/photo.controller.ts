import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { BaseController } from '../base.controller';
import * as Service from '../../services';
import * as Instance from '../../models/instance';

@Controller('photos')
export class PhotoController extends BaseController {

    constructor(
        private readonly PhotoService: Service.PhotoService,
    ) { super(); }

    @Post()
    async store( @Req() req) {
        const params = {
            bucket: '',
            hash: req.files[0].path,
        };
        const photo = await this.PhotoService.create(params as Instance.Photo);
        return photo;
    }

}