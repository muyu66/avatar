import { Component } from '@nestjs/common';
import { BaseService } from '../base.service';
import * as Dao from '../../daos';
import * as Instance from '../../models/instance';

@Component()
export class ShoeService extends BaseService {

    constructor(
        private readonly ShoeDao: Dao.ShoeDao,
    ) { super(); }

    async create(shoe: Instance.Shoe) {
        return await this.ShoeDao.create(shoe);
    }

    async findAll(params) {
        return this.ShoeDao.findAll({
            where: params,
        });
    }

}