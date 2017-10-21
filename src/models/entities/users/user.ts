import { Type } from '../../../interfaces';
import * as Sequelize from 'sequelize';
import { IBase } from '../base';

export interface IUser extends IBase {
    id?: number;
    name?: string;
    /**
     * 性别 0女 1男
     *
     * @type {Bool}
     * @memberof IUser
     */
    gender?: Type.Bool;
    /**
     * 身高
     * 单位: 厘米
     *
     * @type {number}
     * @memberof IUser
     */
    height?: number;
    /**
     * 体重
     * 单位: 斤
     *
     * @type {number}
     * @memberof IUser
     */
    weight?: number;
}

export const User = {
    id: {
        type: Sequelize.INTEGER(16),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1,
        allowNull: false,
    },
};
export const UserConfig: Type.ModelConfig = {
    freezeTableName: true,
    tableName: 'user',
    timestamps: true,
    underscored: true,
};