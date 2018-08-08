import { UserListComponent } from "src/app/users/user-list/user-list.component";
import { User } from "src/app/model/user.model";
import { TestBed, async, inject, fakeAsync } from "@angular/core/testing";
import { UserService } from "src/app/users/user.service";
import { DataStorageService } from "src/app/shared/data-storage.services";
import { Http } from "@angular/http/src/http";
import { HttpModule } from "@angular/http";
import { TaskService } from "src/app/tasks/task.service";
import { TodoService } from "src/app/todos/todo.service";
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { CommonModule, Location } from "@angular/common";
import { tick } from "@angular/core/testing";
import { UsersRoutingModule } from "src/app/users/users-routing.module";
import { UserDetailComponent } from "src/app/users/user-detail/user-detail.component";



beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            UserListComponent,
            { provide: UserService, useClass: MockUserService },
            { provide: DataStorageService, useClass: MockDataStorageService }, TaskService, TodoService, Location
        ], imports: [
            HttpModule, RouterTestingModule
        ]
    }).compileComponents();

});

it('should create component successfully', async(inject([UserService, DataStorageService], (service) => {
    let comp = TestBed.get(UserListComponent);
    let userService = TestBed.get(UserService);
    console.log(userService);
})));

it('should users not have values after construction', async(inject([UserService, DataStorageService], (service) => {
    let comp = TestBed.get(UserListComponent);
    expect(comp.users.length).toEqual(0);
})));

it('should users have values from UserService after ngOnInit', async(inject([UserService, DataStorageService], (service) => {
    let comp = TestBed.get(UserListComponent);
    comp.ngOnInit();
    expect(comp.users.length).toEqual(1);
    expect(comp.users[0].userName).toEqual("vu_leenguyen");
})));

class MockUserService {

    users: User[] = [
        {
            userName: 'vu_leenguyen', firstName: 'vu', lastName: 'le',
            email: 'vuleenguyen.92@gmail.com', id: 1
        },
    ];

    usersChanged = new Subject<User[]>();

    getUsers() {
        return this.users;
    }

    setUsers(users: User[]) {
        this.usersChanged.next(users.slice());
        this.users = users;
    }
};

class MockDataStorageService {

    users: User[] = [
        {
            userName: 'mshoraki', firstName: 'Mohsen', lastName: 'Shoraki',
            email: 'mohsen.shoraki89@gmail.com', id: 2
        },
    ];

    userService;

    setUserService(userService: UserService) {
        this.userService = userService;
    }

    getUsers() {
        this.userService.setUsers(this.users);
    }
}
