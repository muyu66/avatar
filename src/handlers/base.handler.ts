import * as _ from 'lodash';

export class BaseHandler {

    public getScore(...scores: number[]) {
        return _.sum(scores) / scores.length;
    }

    public getBill() {

    }

}