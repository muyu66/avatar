import { Component } from '@nestjs/common';
import { BaseService } from '../base.service';
import * as Dao from '../../daos';
import * as Instance from '../../models/instance';

@Component()
export class PhotoService extends BaseService {

    constructor(
        private readonly PhotoDao: Dao.PhotoDao,
    ) { super(); }

    async create(photo: Instance.Photo) {
        return await this.PhotoDao.create(photo);
    }

    async findOneById(id: number) {
        return this.PhotoDao.findOneById(id);
    }

}