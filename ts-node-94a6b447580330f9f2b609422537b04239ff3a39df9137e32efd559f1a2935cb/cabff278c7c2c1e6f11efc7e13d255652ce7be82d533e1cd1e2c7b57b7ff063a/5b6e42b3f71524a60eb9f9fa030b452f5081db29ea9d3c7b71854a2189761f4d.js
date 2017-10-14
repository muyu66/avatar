"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const Controller = require("../controllers");
const Service = require("../services");
const Dao = require("../daos");
let ShoeModule = class ShoeModule {
};
ShoeModule = __decorate([
    common_1.Module({
        controllers: [Controller.ShoeController],
        components: [Service.ShoeService, Dao.ShoeDao],
    })
], ShoeModule);
exports.ShoeModule = ShoeModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21udC9jL1dlYi9hdmF0YXIvc3JjL21vZHVsZXMvc2hvZS5tb2R1bGUudHMiLCJzb3VyY2VzIjpbIi9tbnQvYy9XZWIvYXZhdGFyL3NyYy9tb2R1bGVzL3Nob2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLDZDQUE2QztBQUM3Qyx1Q0FBdUM7QUFDdkMsK0JBQStCO0FBTS9CLElBQWEsVUFBVSxHQUF2QjtDQUEyQixDQUFBO0FBQWQsVUFBVTtJQUp0QixlQUFNLENBQUM7UUFDSixXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ3hDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQztLQUNqRCxDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzJztcbmltcG9ydCAqIGFzIFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0ICogYXMgRGFvIGZyb20gJy4uL2Rhb3MnO1xuXG5ATW9kdWxlKHtcbiAgICBjb250cm9sbGVyczogW0NvbnRyb2xsZXIuU2hvZUNvbnRyb2xsZXJdLFxuICAgIGNvbXBvbmVudHM6IFtTZXJ2aWNlLlNob2VTZXJ2aWNlLCBEYW8uU2hvZURhb10sXG59KVxuZXhwb3J0IGNsYXNzIFNob2VNb2R1bGUgeyB9Il19