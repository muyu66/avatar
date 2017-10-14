import { Component } from '@nestjs/common';
import { BaseDao } from '../base.dao';
import * as Instance from '../../models/instance';

@Component()
export class UserFootDao extends BaseDao {

    async create(user_foot: Instance.UserFoot) {
        return user_foot.save();
    }

    async findAll(params) {
        return this.models.UserFoot.findAll({
            where: params,
        });
    }
}