import { BaseHandler } from './base.handler';
import { Common } from '../interfaces';
import * as _ from 'lodash';

export class AlgorithmHandler extends BaseHandler {

    public chunkMapAll(...all) {
        let result = [];
        const argumentsx = arguments;
        aaa(argumentsx, 1, argumentsx[0]);

        // 递归组合
        function aaa(argumentsx, index, first) {
            for (const i2 of ddd(first, argumentsx[index])) {
                if (index + 2 === argumentsx.length) {
                    result = _.concat(result, ddd(i2, argumentsx[index + 1]));
                }
                if (index + 2 > argumentsx.length) {
                    result = _.concat(result, i2);
                }

                aaa(argumentsx, index + 1, i2);
            }
        }

        // 数据组合
        function ddd(a, b) {
            const m = [];
            for (const item of a) {
                let z = _.map(b, c1 => _.concat(item, c1));
                m.push(z);
            }
            return m;
        }

        return _(result).flattenDeep().chunk(arguments.length).value();
    }

    /**
     * 对一个数组, 进行交叉遍历
     *
     * @param {any[]} a
     * @returns
     * @memberof AlgorithmHandler
     */
    public crossMap(a: any[]) {
        function wrap(item1, item2) {
            return [item1, item2];
        }

        let result = [];
        const b = _.clone(a);
        for (const item of a) {
            b.shift();
            for (const item2 of b) {
                result.push(wrap(item, item2));
            }
        }

        return result;
    }

}

