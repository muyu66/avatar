import { Module } from '@nestjs/common';
import * as Controller from '../controllers';
import * as Service from '../services';
import * as Dao from '../daos';

@Module({
    controllers: [],
    components: [Service.UserFootService, Dao.UserFootDao],
})
export class UserFootModule { }