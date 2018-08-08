import { Injectable } from "@angular/core";
import { UserService } from "src/app/users/user.service";
import { Http, Response } from "@angular/http";
import { User } from "src/app/model/user.model";

@Injectable()
export class UserDataStorageService {

    constructor(private http: Http, private userService: UserService) {

    }

    getUsers() {
        this.http.get("http://localhost:8080/users")
            .subscribe(
            (response: Response) => {
                const users: User[] = response.json();
                console.log(users);
                this.userService.setUsers(users);
            }
            );
    }

    getUser(id: number) {
        return this.http.get("http://localhost:8080/users/" + id);
    }

    insertUser(user: User) {
        return this.http.post('http://localhost:8080/users', user);
    }

    updateUser(user: User) {
        return this.http.put("http://localhost:8080/users/" + user.id, user);
    }

    removeUser(user: User) {
        return this.http.delete("http://localhost:8080/users/" + user.id);
    }

    getUsersWithPaging(page: number) {
        return this.http.get("http://localhost:8080/users/page?page=" + page);
    }

    getUsersWithPagingInit(page: number) {
        this.http.get("http://localhost:8080/users/page?page=" + page)
            .subscribe(
            (response: Response) => {

                const users: User[] = response.json();
                console.log(users);
                this.userService.setUsers(users);
            }
            );
    }
}