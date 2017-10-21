import { Component } from '@nestjs/common';
import { BaseDao } from '../base.dao';
import * as Instance from '../../models/instance';

@Component()
export class PhotoDao extends BaseDao {

    async create(photo: Instance.Photo) {
        const model = await this.models.Photo.create(photo);
        return model;
    }

    async findOneById(id: number) {
        return this.models.Shoe.findById(id);
    }

}