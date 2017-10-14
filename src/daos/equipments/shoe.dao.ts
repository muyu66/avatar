import { Component } from '@nestjs/common';
import { BaseDao } from '../base.dao';
import * as Instance from '../../models/instance';

@Component()
export class ShoeDao extends BaseDao {

    async create(shoe: Instance.Shoe) {
        return shoe.save();
    }

    async findAll(params) {
        return this.models.Shoe.findAll({
            where: params,
        });
    }
}