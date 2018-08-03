var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user.model';
var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", User)
    ], UserItemComponent.prototype, "user", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], UserItemComponent.prototype, "indexItem", void 0);
    UserItemComponent = __decorate([
        Component({
            selector: 'app-user-item',
            templateUrl: './user-item.component.html',
            styleUrls: ['./user-item.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());
export { UserItemComponent };
//# sourceMappingURL=user-item.component.js.map