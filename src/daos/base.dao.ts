import { Model } from '../models';

export class BaseDao {

    public models: Model;

    constructor(models: Model) {
        if (models) {
            this.models = models;
        } else {
            this.models = new Model();
        }
    }

}