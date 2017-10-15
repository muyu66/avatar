import { Bool, ModelConfig } from '../../../interfaces/type';
import * as Dict from '../../../interfaces/dict';
import * as Sequelize from 'sequelize';
import { IBase } from '../base';

export interface IUserFoot extends IBase {
    id?: number;
    userId?: number;
    shoeId?: number;
    /**
     * 尺码们
     *
     * @type {number[]}
     * @memberof IUserFoot
     */
    shoeSize?: number[] | string;
    /**
     * 是否不能使用
     * 因为 需要洗或者晒干或者准备洗, 导致不能穿着
     *
     * @type {number}
     * @memberof IUserFoot
     */
    useState?: number;
}

export const UserFoot = {
    id: {
        type: Sequelize.INTEGER(16),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    userId: {
        type: Sequelize.INTEGER(16),
        field: 'user_id',
    },
    shoeId: {
        type: Sequelize.INTEGER(16),
        field: 'shoe_id',
    },
    shoeSize: {
        type: Sequelize.TEXT(),
        field: 'shoe_size',
    },
    useState: {
        type: Sequelize.INTEGER(1),
        field: 'use_state',
        defaultValue: Dict.USE_STATE.闲置,
    },
};
export const UserFootConfig: ModelConfig = {
    freezeTableName: true,
    tableName: 'user_foot',
    timestamps: true,
    underscored: true,
    hooks: {
        afterFind: (user_foots: IUserFoot | IUserFoot[]) => {
            if (Array.isArray(user_foots)) {
                for (const user_foot of user_foots) {
                    user_foot.shoeSize = user_foot.shoeSize ? JSON.parse(user_foot.shoeSize as string) : undefined;
                }
            } else {
                const user_foot = user_foots;
                user_foot.shoeSize = user_foot.shoeSize ? JSON.parse(user_foot.shoeSize as string) : user_foot.shoeSize;
            }
        },
        beforeCreate: (user_foot: IUserFoot) => {
            user_foot.shoeSize = typeof user_foot.shoeSize === 'string' ? user_foot.shoeSize : JSON.stringify(user_foot.shoeSize);
        },
        beforeBulkCreate: (user_foots: IUserFoot[]) => {
            for (const user_foot of user_foots) {
                user_foot.shoeSize = typeof user_foot.shoeSize === 'string' ? user_foot.shoeSize : JSON.stringify(user_foot.shoeSize);
            }
        },
        beforeUpdate: (user_foot: IUserFoot) => {
            user_foot.shoeSize = typeof user_foot.shoeSize === 'string' ? user_foot.shoeSize : JSON.stringify(user_foot.shoeSize);
        },
        beforeBulkUpdate: (user_foots: IUserFoot[]) => {
            for (const user_foot of user_foots) {
                user_foot.shoeSize = typeof user_foot.shoeSize === 'string' ? user_foot.shoeSize : JSON.stringify(user_foot.shoeSize);
            }
        },
    },
};