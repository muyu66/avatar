export namespace Type {

    export type Bool = 0 | 1;

    /**
     * 0 春季
     * 1 夏季
     * ... 以此类推
     */
    export type Season = 0 | 1 | 2 | 3;

    export interface ModelConfig {
        freezeTableName: boolean;
        tableName: string;
        timestamps: boolean;
        underscored: boolean;
        hooks?: { [functino_name: string]: (...obejct) => void };
    }

}