import { Component } from '@nestjs/common';
import { BaseService } from '../base.service';
import * as Dao from '../../daos';
import * as Instance from '../../models/instance';
import * as Handler from '../../handlers';

@Component()
export class UserFootService extends BaseService {

    constructor(
        private readonly UserFootDao: Dao.UserFootDao,
    ) { super(); }

    async create(user_foot: Instance.UserFoot) {
        return await this.UserFootDao.create(user_foot);
    }

    async findAll(params) {
        const c = new Handler.ColorHandler();
        c.resolve(c.getTaskList());
        return this.UserFootDao.findAll(params);
    }

}