import { TestBed } from "@angular/core/testing";
import { UsersComponent } from "src/app/users/users.component";

import { UsersRoutingModule } from "src/app/users/users-routing.module";
import { RouterTestingModule } from '@angular/router/testing';
import { UserListComponent } from "src/app/users/user-list/user-list.component";
import { UserService } from "src/app/users/user.service";
import { SharedModule } from "src/app/shared/shared.module";
import { UsersModule } from "src/app/users/users.module";
import { UserItemComponent } from "src/app/users/user-list/user-item/user-item.component";

describe('Component: User', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UsersComponent, 
                UserListComponent,
                UserItemComponent
            ],
            imports: [
                RouterTestingModule,
                SharedModule
            ]
        });
    })

    it('should create the user', () => {
        let fixture = TestBed.createComponent(UsersComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});