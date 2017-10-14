"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const Service = require("../services");
const Dao = require("../daos");
let UserFootModule = class UserFootModule {
};
UserFootModule = __decorate([
    common_1.Module({
        controllers: [],
        components: [Service.UserFootService, Dao.UserFootDao],
    })
], UserFootModule);
exports.UserFootModule = UserFootModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21udC9jL1dlYi9hdmF0YXIvc3JjL21vZHVsZXMvdXNlci5mb290Lm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL21udC9jL1dlYi9hdmF0YXIvc3JjL21vZHVsZXMvdXNlci5mb290Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUF3QztBQUV4Qyx1Q0FBdUM7QUFDdkMsK0JBQStCO0FBTS9CLElBQWEsY0FBYyxHQUEzQjtDQUErQixDQUFBO0FBQWxCLGNBQWM7SUFKMUIsZUFBTSxDQUFDO1FBQ0osV0FBVyxFQUFFLEVBQUU7UUFDZixVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUM7S0FDekQsQ0FBQztHQUNXLGNBQWMsQ0FBSTtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCAqIGFzIENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMnO1xuaW1wb3J0ICogYXMgU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgKiBhcyBEYW8gZnJvbSAnLi4vZGFvcyc7XG5cbkBNb2R1bGUoe1xuICAgIGNvbnRyb2xsZXJzOiBbXSxcbiAgICBjb21wb25lbnRzOiBbU2VydmljZS5Vc2VyRm9vdFNlcnZpY2UsIERhby5Vc2VyRm9vdERhb10sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJGb290TW9kdWxlIHsgfSJdfQ==