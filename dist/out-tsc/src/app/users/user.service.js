import { Subject } from "rxjs/internal/Subject";
var UserService = /** @class */ (function () {
    function UserService() {
        this.usersChanged = new Subject();
        this.users = [];
    }
    UserService.prototype.setUsers = function (users) {
        this.users = users;
        this.usersChanged.next(this.users.slice());
    };
    UserService.prototype.getUsers = function () {
        return this.users.slice();
    };
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map