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
const base_controller_1 = require("../base.controller");
const Service = require("../../services");
const Instance = require("../../models/instance");
let ShoeController = class ShoeController extends base_controller_1.BaseController {
    constructor(ShoeService, UserFootService) {
        super();
        this.ShoeService = ShoeService;
        this.UserFootService = UserFootService;
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.UserFootService.findAll({
                userId: yield this.getUserId(),
            });
        });
    }
    store(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const shoe = yield this.ShoeService.create(params);
            yield this.UserFootService.create({
                userId: yield this.getUserId(),
                shoeId: shoe.id,
            });
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShoeController.prototype, "index", null);
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoeController.prototype, "store", null);
ShoeController = __decorate([
    common_1.Controller('shoes'),
    __metadata("design:paramtypes", [Service.ShoeService, Service.UserFootService])
], ShoeController);
exports.ShoeController = ShoeController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21udC9jL1dlYi9hdmF0YXIvc3JjL2NvbnRyb2xsZXJzL2VxdWlwbWVudHMvc2hvZS5jb250cm9sbGVyLnRzIiwic291cmNlcyI6WyIvbW50L2MvV2ViL2F2YXRhci9zcmMvY29udHJvbGxlcnMvZXF1aXBtZW50cy9zaG9lLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF1RDtBQUN2RCx3REFBb0Q7QUFDcEQsMENBQTBDO0FBQzFDLGtEQUFrRDtBQUdsRCxJQUFhLGNBQWMsR0FBM0Isb0JBQTRCLFNBQVEsZ0NBQWM7SUFFOUMsWUFDcUIsV0FBZ0MsRUFDaEMsZUFBd0M7UUFDekQsS0FBSyxFQUFFLENBQUM7UUFGUyxnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQXlCO0lBQ2hELENBQUM7SUFHUixLQUFLOztZQUNQLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxNQUFNLEVBQUUsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFO2FBQ2pDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQUdLLEtBQUssQ0FBQyxNQUFxQjs7WUFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVuRCxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2dCQUM5QixNQUFNLEVBQUUsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7YUFDRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0NBRUosQ0FBQTtBQWhCRztJQURDLFlBQUcsRUFBRTs7OzsyQ0FLTDtBQUdEO0lBREMsYUFBSSxFQUFFOzs7OzJDQVFOO0FBdEJRLGNBQWM7SUFEMUIsbUJBQVUsQ0FBQyxPQUFPLENBQUM7cUNBSWtCLE9BQU8sQ0FBQyxXQUFXLEVBQ2YsT0FBTyxDQUFDLGVBQWU7R0FKcEQsY0FBYyxDQXdCMUI7QUF4Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBvc3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gJy4uL2Jhc2UuY29udHJvbGxlcic7XG5pbXBvcnQgKiBhcyBTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCAqIGFzIEluc3RhbmNlIGZyb20gJy4uLy4uL21vZGVscy9pbnN0YW5jZSc7XG5cbkBDb250cm9sbGVyKCdzaG9lcycpXG5leHBvcnQgY2xhc3MgU2hvZUNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBTaG9lU2VydmljZTogU2VydmljZS5TaG9lU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBVc2VyRm9vdFNlcnZpY2U6IFNlcnZpY2UuVXNlckZvb3RTZXJ2aWNlLFxuICAgICkgeyBzdXBlcigpOyB9XG5cbiAgICBAR2V0KClcbiAgICBhc3luYyBpbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuVXNlckZvb3RTZXJ2aWNlLmZpbmRBbGwoe1xuICAgICAgICAgICAgdXNlcklkOiBhd2FpdCB0aGlzLmdldFVzZXJJZCgpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBAUG9zdCgpXG4gICAgYXN5bmMgc3RvcmUocGFyYW1zOiBJbnN0YW5jZS5TaG9lKSB7XG4gICAgICAgIGNvbnN0IHNob2UgPSBhd2FpdCB0aGlzLlNob2VTZXJ2aWNlLmNyZWF0ZShwYXJhbXMpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuVXNlckZvb3RTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgICAgICAgICB1c2VySWQ6IGF3YWl0IHRoaXMuZ2V0VXNlcklkKCksXG4gICAgICAgICAgICBzaG9lSWQ6IHNob2UuaWQsXG4gICAgICAgIH0gYXMgSW5zdGFuY2UuVXNlckZvb3QpO1xuICAgIH1cblxufSJdfQ==