import { NgModule } from "@angular/core";
import { UsersComponent } from "src/app/users/users.component";
import { UserListComponent } from "src/app/users/user-list/user-list.component";
import { UserItemComponent } from "src/app/users/user-list/user-item/user-item.component";
import { UserDetailComponent } from "src/app/users/user-detail/user-detail.component";
import { UserEditComponent } from "src/app/users/user-edit/user-edit.component";
import { UsersRoutingModule } from "src/app/users/users-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        UsersComponent,
        UserListComponent,
        UserItemComponent,
        UserDetailComponent,
        UserEditComponent,
    ],
    imports: [
        UsersRoutingModule,
        SharedModule,
    ]
})
export class UsersModule {

}