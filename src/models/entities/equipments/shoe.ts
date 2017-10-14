import { Bool, ModelConfig, Season, Color } from '../../../interfaces/type';
import * as Sequelize from 'sequelize';
import { IBase } from '../base';

export interface IShoe extends IBase {
    id?: number;
    marketDate?: Date;
    name?: string;
    material?: string;
    /**
     * 鞋跟高
     *
     * @type {number}
     * @memberof IShoe
     */
    heelHeight?: number;
    /**
     * 品牌
     *
     * @type {string}
     * @memberof IShoe
     */
    logo?: string;
    /**
     * 鞋头款式
     *
     * @type {string}
     * @memberof IShoe
     */
    toeStyle?: string;
    style?: string;
    /**
     * 季节
     *
     * @type {Season}
     * @memberof IShoe
     */
    season?: Season;
    colors?: Color[] | string;
}

export const Shoe = {
    id: {
        type: Sequelize.INTEGER(16),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: Sequelize.STRING(100),
    },
    marketDate: {
        type: Sequelize.DATEONLY,
        field: 'martet_date',
    },
    heelHeight: {
        type: Sequelize.INTEGER(2),
        field: 'heel_height',
    },
    logo: {
        type: Sequelize.STRING(100),
    },
    toeStyle: {
        type: Sequelize.STRING(100),
        field: 'toe_style',
    },
    style: {
        type: Sequelize.STRING(100),
    },
    season: {
        type: Sequelize.INTEGER(1),
    },
    colors: {
        type: Sequelize.TEXT(),
    },
};
export const ShoeConfig: ModelConfig = {
    freezeTableName: true,
    tableName: 'shoe',
    timestamps: true,
    underscored: true,
    hooks: {
        afterFind: (shoes: IShoe | IShoe[]) => {
            if (Array.isArray(shoes)) {
                for (const shoe of shoes) {
                    shoe.colors = shoe.colors ? JSON.parse(shoe.colors as string) : undefined;
                }
            } else {
                const shoe = shoes;
                shoe.colors = shoe.colors ? JSON.parse(shoe.colors as string) : shoe.colors;
            }
        },
        beforeCreate: (shoe: IShoe) => {
            shoe.colors = typeof shoe.colors === 'string' ? shoe.colors : JSON.stringify(shoe.colors);
        },
        beforeBulkCreate: (shoes: IShoe[]) => {
            for (const shoe of shoes) {
                shoe.colors = typeof shoe.colors === 'string' ? shoe.colors : JSON.stringify(shoe.colors);
            }
        },
        beforeUpdate: (shoe: IShoe) => {
            shoe.colors = typeof shoe.colors === 'string' ? shoe.colors : JSON.stringify(shoe.colors);
        },
        beforeBulkUpdate: (shoes: IShoe[]) => {
            for (const shoe of shoes) {
                shoe.colors = typeof shoe.colors === 'string' ? shoe.colors : JSON.stringify(shoe.colors);
            }
        },
    },
};