import { BaseHandler } from './base.handler';
import { Common, Type } from '../interfaces';
import { AlgorithmHandler } from './index';
import * as _ from 'lodash';

export class ColorHandler extends BaseHandler {

    private my_colors: { [body: string]: Common.EquipmentCalcData[] } = {
        upper_body: [
            {
                equipmentId: 1,
                color: [
                    {
                        name: '黑色',
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        per: 100,
                    },
                ]
            },
            {
                equipmentId: 2,
                color: [
                    {
                        name: '白色',
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 100,
                        per: 100,
                    },
                ]
            },
            {
                equipmentId: 3,
                color: [
                    {
                        name: '淡黄色',
                        r: 255,
                        g: 255,
                        b: 128,
                        a: 100,
                        per: 100,
                    }
                ]
            }
        ],
        lower_body: [
            {
                equipmentId: 4,
                color: [
                    {
                        name: '黑色',
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        per: 100,
                    },
                ]
            },
            {
                equipmentId: 5,
                color: [
                    {
                        name: '白色',
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 100,
                        per: 100,
                    },
                ]
            }
        ],
        foot: [
            {
                equipmentId: 6,
                color: [
                    {
                        name: '蓝色',
                        r: 19,
                        g: 41,
                        b: 174,
                        a: 100,
                        per: 80,
                    },
                    {
                        name: '白色',
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 100,
                        per: 20,
                    }
                ]
            },
            {
                equipmentId: 7,
                color: [
                    {
                        name: '黑色',
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        per: 80,
                    },
                    {
                        name: '白色',
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 100,
                        per: 20,
                    }
                ]
            }
        ]
    };

    protected gold_color = [];

    protected classic_colors: { [serie_name: string]: Common.Color[] } = {
        blackWhite: [
            {
                name: '黑色',
                r: 0,
                g: 0,
                b: 0,
                a: 0,
            },
            {
                name: '白色',
                r: 255,
                g: 255,
                b: 255,
                a: 100,
            },
        ]
    };

    private AlgorithmHandler: AlgorithmHandler;

    constructor() {
        super();
        this.AlgorithmHandler = new AlgorithmHandler();
    }

    public getTaskList() {
        const combinations = this.AlgorithmHandler.chunkMapAll(
            this.my_colors.upper_body,
            this.my_colors.lower_body,
            this.my_colors.foot,
        );
        return combinations as { [index: number]: any[] };
    }

    public resolve(combinations: { [index: number]: any[] }) {
        for (const index in combinations) {
            // 获取每种组合
            const combination = combinations[index];
            const colors_uniq = this.flatColor(combination);
            const score1 = this.checkColorCollision(colors_uniq);
            const score2 = this.checkClassicColor(colors_uniq);
            console.log(this.getScore(score1, score2));
        }
    }

    /**
     * 检查冷暖色
     *
     * @param {Common.Color[]} colors
     * @returns {number}
     * @memberof ColorHandler
     */
    public checkColdWarm(colors: Common.Color[]): number {
        return 100;
    }

    public flatColor(equipments: Common.EquipmentCalcData[], need_uniq: Type.Bool = 1) {
        const temp = _(equipments).map('color').flatMapDeep().value();
        return need_uniq === 1 ? _.uniqWith(temp, _.isEqual) : temp;
    }

    /**
     * 判断是否是相似的颜色
     *
     * @memberof ColorHandler
     */
    public isColorLike(source_color: Common.Color, target_color: Common.Color) {
        const source = (source_color.r + source_color.g + source_color.b) / 3 * source_color.a;
        const target = (target_color.r + target_color.g + target_color.b) / 3 * target_color.a;
        return Math.abs(source - target) <= 25.5;
    }

    /**
     * 检测经典配色方案
     *
     * @param {Common.Color[]} colors
     * @returns {number}
     * @memberof ColorHandler
     */
    public checkClassicColor(colors: Common.Color[]): number {
        // TODO: 准备合并
        // --------------------
        let length = colors.length;
        const crosses = this.AlgorithmHandler.crossMap(colors);

        for (const cross of crosses) {
            const is_like = this.isColorLike(cross[0], cross[1]);
            if (is_like) length--;
        }
        // --------------------

        let count = 0;

        for (const serie in this.classic_colors) {
            if (length !== this.classic_colors[serie].length) continue;

            const all = this.AlgorithmHandler.chunkMapAll(colors, this.classic_colors[serie]);

            let temp = [];

            _.each(all, (item: Common.Color[]) => {
                const is_like = this.isColorLike(item[0], item[1]);
                if (is_like) temp.push(item[1]);
            });

            if (temp.length === this.classic_colors[serie].length) count++;
        }

        const SCORE = [
            {
                count: 0,
                score: 0,
            }, {
                count: 1,
                score: 100,
            },
        ];
        const config = _(SCORE).filter((config) => config.count <= count).maxBy('score');

        return config.score;
    }

    /**
     * 检查颜色冲撞
     *
     * @param {Common.Color[]} colors
     * @memberof ColorHandler
     */
    public checkColorCollision(colors: Common.Color[]): number {
        let length = colors.length;
        const crosses = this.AlgorithmHandler.crossMap(colors);

        for (const cross of crosses) {
            const is_like = this.isColorLike(cross[0], cross[1]);
            if (is_like) length--;
        }

        // TODO: 评分表配置
        const SCORE = [
            {
                count: 0,
                score: 100,
            }, {
                count: 3,
                score: 100,
            }, {
                count: 4,
                score: 90,
            }, {
                count: 5,
                score: 50,
            }, {
                count: 6,
                score: 10,
            },
        ];
        const config = _(SCORE).filter((config) => config.count <= length).minBy('score');

        return config.score;
    }

}