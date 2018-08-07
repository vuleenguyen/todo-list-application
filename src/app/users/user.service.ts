import { User } from "src/app/model/user.model";
import { Subject } from "rxjs/internal/Subject";

export class UserService {
    usersChanged = new Subject<User[]>();
    private users: User[] = [];


    setUsers(users: User[]) {
        this.users = users;
        this.usersChanged.next(this.users.slice());
    }

    getUsers() {
        return this.users.slice();
    }

}