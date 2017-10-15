import { Component } from '@nestjs/common';
import { BaseDao } from '../base.dao';
import * as Instance from '../../models/instance';

@Component()
export class UserFootDao extends BaseDao {

    async create(user_foot: Instance.UserFoot) {
        const model = await this.models.UserFoot.create(user_foot);
        return model;
    }

    async findAll(params) {
        return this.models.UserFoot.findAll({
            where: params,
        });
    }
}