import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { UsersComponent } from "src/app/users/users.component";
import { TasksComponent } from "src/app/tasks/tasks.component";
import { TodosComponent } from "src/app/todos/todos.component";
import { AboutComponent } from "src/app/core/about/about.component";
import { ContactComponent } from "src/app/core/contact/contact.component";
import { HomeComponent } from "src/app/core/home/home.component";
import { RouterModule } from "@angular/router";
import { UserDetailComponent } from "src/app/users/user-detail/user-detail.component";

const appRoutes: Routes = [
    {
      path: 'users', component: UsersComponent, children: [
          {path: ':id', component: UserDetailComponent}
      ]
    },
    {
      path: 'tasks', component: TasksComponent
    },
    {
      path: 'todos', component: TodosComponent
    }, 
    {
      path: 'about', component: AboutComponent  
    }, 
    {
      path: 'contact', component: ContactComponent
    },
    {
      path: '', component: HomeComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}