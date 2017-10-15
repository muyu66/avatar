import { Component } from '@nestjs/common';
import { BaseDao } from '../base.dao';
import * as Instance from '../../models/instance';

@Component()
export class ShoeDao extends BaseDao {

    async create(shoe: Instance.Shoe) {
        const model = await this.models.Shoe.create(shoe);
        return model;
    }

    async findAll(params) {
        return this.models.Shoe.findAll({
            where: params,
        });
    }
}