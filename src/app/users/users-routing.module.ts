import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { UsersComponent } from "src/app/users/users.component";
import { UserListComponent } from "src/app/users/user-list/user-list.component";
import { UserDetailComponent } from "src/app/users/user-detail/user-detail.component";
import { UserEditComponent } from "src/app/users/user-edit/user-edit.component";
import { RouterModule } from "@angular/router";

const appRoutes: Routes = [{
    path: 'users', component: UsersComponent, children: [
        { path: '', redirectTo: '/users/list', pathMatch: 'full' },
        {
            path: 'list', component: UserListComponent, children: [
                { path: ':id', component: UserDetailComponent },
            ]
        },
        { path: 'new', component: UserEditComponent },

        { path: ':id/edit', component: UserEditComponent },
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})
export class UsersRoutingModule {

}