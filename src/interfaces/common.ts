export namespace Common {

    export interface Color {
        name: string;
        r: number;
        g: number;
        b: number;
        a?: number;
        per?: number;
    }

    /**
     * 用来给 装备 进行计算的数据
     *
     * @export
     * @interface EquipmentCalcData
     */
    export interface EquipmentCalcData {
        equipmentId: number;
        color: Common.Color[];
    }

}