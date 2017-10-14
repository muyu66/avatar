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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21udC9jL1dlYi9hdmF0YXIvc3JjL2Rhb3MvdXNlcnMvdXNlci5mb290LmRhby50cyIsInNvdXJjZXMiOlsiL21udC9jL1dlYi9hdmF0YXIvc3JjL2Rhb3MvdXNlcnMvdXNlci5mb290LmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLDBDQUFzQztBQUl0QyxJQUFhLFdBQVcsR0FBeEIsaUJBQXlCLFNBQVEsa0JBQU87SUFFOUIsTUFBTSxDQUFDLFNBQTRCOztZQUNyQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxNQUFNOztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNoQyxLQUFLLEVBQUUsTUFBTTthQUNoQixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Q0FDSixDQUFBO0FBWFksV0FBVztJQUR2QixrQkFBUyxFQUFFO0dBQ0MsV0FBVyxDQVd2QjtBQVhZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQmFzZURhbyB9IGZyb20gJy4uL2Jhc2UuZGFvJztcbmltcG9ydCAqIGFzIEluc3RhbmNlIGZyb20gJy4uLy4uL21vZGVscy9pbnN0YW5jZSc7XG5cbkBDb21wb25lbnQoKVxuZXhwb3J0IGNsYXNzIFVzZXJGb290RGFvIGV4dGVuZHMgQmFzZURhbyB7XG5cbiAgICBhc3luYyBjcmVhdGUodXNlcl9mb290OiBJbnN0YW5jZS5Vc2VyRm9vdCkge1xuICAgICAgICByZXR1cm4gdXNlcl9mb290LnNhdmUoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kQWxsKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbHMuVXNlckZvb3QuZmluZEFsbCh7XG4gICAgICAgICAgICB3aGVyZTogcGFyYW1zLFxuICAgICAgICB9KTtcbiAgICB9XG59Il19