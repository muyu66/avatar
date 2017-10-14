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
let ShoeDao = class ShoeDao extends base_dao_1.BaseDao {
    create(shoe) {
        return __awaiter(this, void 0, void 0, function* () {
            return shoe.save();
        });
    }
    findAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.models.Shoe.findAll({
                where: params,
            });
        });
    }
};
ShoeDao = __decorate([
    common_1.Component()
], ShoeDao);
exports.ShoeDao = ShoeDao;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21udC9jL1dlYi9hdmF0YXIvc3JjL2Rhb3MvZXF1aXBtZW50cy9zaG9lLmRhby50cyIsInNvdXJjZXMiOlsiL21udC9jL1dlYi9hdmF0YXIvc3JjL2Rhb3MvZXF1aXBtZW50cy9zaG9lLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLDBDQUFzQztBQUl0QyxJQUFhLE9BQU8sR0FBcEIsYUFBcUIsU0FBUSxrQkFBTztJQUUxQixNQUFNLENBQUMsSUFBbUI7O1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLE1BQU07O1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzVCLEtBQUssRUFBRSxNQUFNO2FBQ2hCLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUNKLENBQUE7QUFYWSxPQUFPO0lBRG5CLGtCQUFTLEVBQUU7R0FDQyxPQUFPLENBV25CO0FBWFksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBCYXNlRGFvIH0gZnJvbSAnLi4vYmFzZS5kYW8nO1xuaW1wb3J0ICogYXMgSW5zdGFuY2UgZnJvbSAnLi4vLi4vbW9kZWxzL2luc3RhbmNlJztcblxuQENvbXBvbmVudCgpXG5leHBvcnQgY2xhc3MgU2hvZURhbyBleHRlbmRzIEJhc2VEYW8ge1xuXG4gICAgYXN5bmMgY3JlYXRlKHNob2U6IEluc3RhbmNlLlNob2UpIHtcbiAgICAgICAgcmV0dXJuIHNob2Uuc2F2ZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRBbGwocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVscy5TaG9lLmZpbmRBbGwoe1xuICAgICAgICAgICAgd2hlcmU6IHBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==