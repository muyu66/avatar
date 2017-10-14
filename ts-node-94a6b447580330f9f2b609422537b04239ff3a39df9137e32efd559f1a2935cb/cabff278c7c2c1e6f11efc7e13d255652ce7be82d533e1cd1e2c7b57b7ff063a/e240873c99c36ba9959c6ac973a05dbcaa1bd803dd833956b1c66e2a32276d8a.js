"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
const base_service_1 = require("../base.service");
const Dao = require("../../daos");
let UserFootService = class UserFootService extends base_service_1.BaseService {
    constructor(UserFootDao) {
        super();
        this.UserFootDao = UserFootDao;
    }
    create(user_foot) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.UserFootDao.create(user_foot);
        });
    }
    findAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.UserFootDao.findAll({
                where: params,
            });
        });
    }
};
UserFootService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [Dao.UserFootDao])
], UserFootService);
exports.UserFootService = UserFootService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21udC9jL1dlYi9hdmF0YXIvc3JjL3NlcnZpY2VzL3VzZXJzL3VzZXIuZm9vdC5zZXJ2aWNlLnRzIiwic291cmNlcyI6WyIvbW50L2MvV2ViL2F2YXRhci9zcmMvc2VydmljZXMvdXNlcnMvdXNlci5mb290LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQyxrREFBOEM7QUFDOUMsa0NBQWtDO0FBSWxDLElBQWEsZUFBZSxHQUE1QixxQkFBNkIsU0FBUSwwQkFBVztJQUU1QyxZQUNxQixXQUE0QjtRQUM3QyxLQUFLLEVBQUUsQ0FBQztRQURTLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUNwQyxDQUFDO0lBRVIsTUFBTSxDQUFDLFNBQTRCOztZQUNyQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsTUFBTTs7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUM1QixLQUFLLEVBQUUsTUFBTTthQUNoQixDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Q0FFSixDQUFBO0FBaEJZLGVBQWU7SUFEM0Isa0JBQVMsRUFBRTtxQ0FJMEIsR0FBRyxDQUFDLFdBQVc7R0FIeEMsZUFBZSxDQWdCM0I7QUFoQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4uL2Jhc2Uuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBEYW8gZnJvbSAnLi4vLi4vZGFvcyc7XG5pbXBvcnQgKiBhcyBJbnN0YW5jZSBmcm9tICcuLi8uLi9tb2RlbHMvaW5zdGFuY2UnO1xuXG5AQ29tcG9uZW50KClcbmV4cG9ydCBjbGFzcyBVc2VyRm9vdFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBVc2VyRm9vdERhbzogRGFvLlVzZXJGb290RGFvLFxuICAgICkgeyBzdXBlcigpOyB9XG5cbiAgICBhc3luYyBjcmVhdGUodXNlcl9mb290OiBJbnN0YW5jZS5Vc2VyRm9vdCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5Vc2VyRm9vdERhby5jcmVhdGUodXNlcl9mb290KTtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kQWxsKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy5Vc2VyRm9vdERhby5maW5kQWxsKHtcbiAgICAgICAgICAgIHdoZXJlOiBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxufSJdfQ==