"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const base_dao_1 = require("../base.dao");
let UserFootDao = class UserFootDao extends base_dao_1.BaseDao {
    create(user_foot) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_foot.save();
        });
    }
    findAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.models.UserFoot.findAll({
                where: params,
            });
        });
    }
};
UserFootDao = __decorate([
    common_1.Component()
], UserFootDao);
exports.UserFootDao = UserFootDao;
//# sourceMappingURL=user.foot.dao.js.map