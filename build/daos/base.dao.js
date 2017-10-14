"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class BaseDao {
    constructor(models) {
        if (models) {
            this.models = models;
        }
        else {
            this.models = new models_1.Model();
        }
    }
}
exports.BaseDao = BaseDao;
//# sourceMappingURL=base.dao.js.map