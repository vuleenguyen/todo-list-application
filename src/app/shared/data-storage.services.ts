import {Http, Response} from '@angular/http';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/users/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private userService: UserService){}

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
}