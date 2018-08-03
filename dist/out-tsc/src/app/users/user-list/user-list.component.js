var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from 'src/app/users/user.service';
var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.userService.getUsers();
        this.subscription = this.userService.usersChanged.subscribe(function (users) {
            _this.users = users;
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UserListComponent = __decorate([
        Component({
            selector: 'app-user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.css']
        }),
        __metadata("design:paramtypes", [UserService])
    ], UserListComponent);
    return UserListComponent;
}());
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map