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

    getUser(id: number) {
        for(let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == id) return this.users[i];
        }
        return null;
    }
}