"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const Modules = require("./");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        modules: [Modules.ShoeModule, Modules.UserFootModule],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21udC9jL1dlYi9hdmF0YXIvc3JjL21vZHVsZXMvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL21udC9jL1dlYi9hdmF0YXIvc3JjL21vZHVsZXMvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUF3QztBQUN4Qyw4QkFBOEI7QUFLOUIsSUFBYSxpQkFBaUIsR0FBOUI7Q0FBa0MsQ0FBQTtBQUFyQixpQkFBaUI7SUFIN0IsZUFBTSxDQUFDO1FBQ0osT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDO0tBQ3hELENBQUM7R0FDVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBNb2R1bGVzIGZyb20gJy4vJztcblxuQE1vZHVsZSh7XG4gICAgbW9kdWxlczogW01vZHVsZXMuU2hvZU1vZHVsZSwgTW9kdWxlcy5Vc2VyRm9vdE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uTW9kdWxlIHsgfSJdfQ==