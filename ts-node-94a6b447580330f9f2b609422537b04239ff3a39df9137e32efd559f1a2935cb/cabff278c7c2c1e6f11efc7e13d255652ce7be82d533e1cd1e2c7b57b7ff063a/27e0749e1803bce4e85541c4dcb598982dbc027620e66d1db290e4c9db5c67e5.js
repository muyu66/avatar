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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL21udC9jL1dlYi9hdmF0YXIvc3JjL2Rhb3MvYmFzZS5kYW8udHMiLCJzb3VyY2VzIjpbIi9tbnQvYy9XZWIvYXZhdGFyL3NyYy9kYW9zL2Jhc2UuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtDO0FBRWxDO0lBSUksWUFBWSxNQUFhO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBSyxFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7Q0FFSjtBQVpELDBCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQmFzZURhbyB7XG5cbiAgICBwdWJsaWMgbW9kZWxzOiBNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGVsczogTW9kZWwpIHtcbiAgICAgICAgaWYgKG1vZGVscykge1xuICAgICAgICAgICAgdGhpcy5tb2RlbHMgPSBtb2RlbHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVscyA9IG5ldyBNb2RlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19