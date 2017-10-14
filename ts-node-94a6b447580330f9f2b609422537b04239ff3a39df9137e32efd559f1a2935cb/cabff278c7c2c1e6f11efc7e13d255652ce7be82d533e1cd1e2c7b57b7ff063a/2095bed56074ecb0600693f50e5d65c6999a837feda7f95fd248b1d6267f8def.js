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
let ShoeService = class ShoeService extends base_service_1.BaseService {
    constructor(ShoeDao) {
        super();
        this.ShoeDao = ShoeDao;
    }
    create(shoe) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ShoeDao.create(shoe);
        });
    }
    findAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ShoeDao.findAll({
                where: params,
            });
        });
    }
};
ShoeService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [Dao.ShoeDao])
], ShoeService);
exports.ShoeService = ShoeService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21udC9jL1dlYi9hdmF0YXIvc3JjL3NlcnZpY2VzL2VxdWlwbWVudHMvc2hvZS5zZXJ2aWNlLnRzIiwic291cmNlcyI6WyIvbW50L2MvV2ViL2F2YXRhci9zcmMvc2VydmljZXMvZXF1aXBtZW50cy9zaG9lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQyxrREFBOEM7QUFDOUMsa0NBQWtDO0FBSWxDLElBQWEsV0FBVyxHQUF4QixpQkFBeUIsU0FBUSwwQkFBVztJQUV4QyxZQUNxQixPQUFvQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQURTLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDNUIsQ0FBQztJQUVSLE1BQU0sQ0FBQyxJQUFtQjs7WUFDNUIsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLE1BQU07O1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDeEIsS0FBSyxFQUFFLE1BQU07YUFDaEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBRUosQ0FBQTtBQWhCWSxXQUFXO0lBRHZCLGtCQUFTLEVBQUU7cUNBSXNCLEdBQUcsQ0FBQyxPQUFPO0dBSGhDLFdBQVcsQ0FnQnZCO0FBaEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgRGFvIGZyb20gJy4uLy4uL2Rhb3MnO1xuaW1wb3J0ICogYXMgSW5zdGFuY2UgZnJvbSAnLi4vLi4vbW9kZWxzL2luc3RhbmNlJztcblxuQENvbXBvbmVudCgpXG5leHBvcnQgY2xhc3MgU2hvZVNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBTaG9lRGFvOiBEYW8uU2hvZURhbyxcbiAgICApIHsgc3VwZXIoKTsgfVxuXG4gICAgYXN5bmMgY3JlYXRlKHNob2U6IEluc3RhbmNlLlNob2UpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuU2hvZURhby5jcmVhdGUoc2hvZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZEFsbChwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuU2hvZURhby5maW5kQWxsKHtcbiAgICAgICAgICAgIHdoZXJlOiBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxufSJdfQ==