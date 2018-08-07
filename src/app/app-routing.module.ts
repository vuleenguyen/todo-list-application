import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { TasksComponent } from "src/app/tasks/tasks.component";
import { TodosComponent } from "src/app/todos/todos.component";
import { AboutComponent } from "src/app/core/about/about.component";
import { ContactComponent } from "src/app/core/contact/contact.component";
import { HomeComponent } from "src/app/core/home/home.component";
import { RouterModule } from "@angular/router";
import { TaskListComponent } from "src/app/tasks/task-list/task-list.component";
import { TaskEditComponent } from "src/app/tasks/task-edit/task-edit.component";
import { TodoMainComponent } from "src/app/todos/todo-main/todo-main.component";
import { TodoEditComponent } from "src/app/todos/todo-edit/todo-edit.component";


const appRoutes: Routes = [
  {
    path: 'users', loadChildren: './users/users.module#UsersModule', 
  },
  {
    path: 'tasks', component: TasksComponent, children: [
      { path: '', redirectTo: '/tasks/list', pathMatch: 'full' },
      { path: 'list', component: TaskListComponent },
      { path: 'new', component: TaskEditComponent },
      { path: ':id/edit', component: TaskEditComponent }
    ]
  },
  {
    path: 'todos', component: TodosComponent, children: [
      { path: '', redirectTo: '/todos/list', pathMatch: 'full' },
      { path: 'list', component: TodoMainComponent },
      { path: 'new', component: TodoEditComponent }
    ]
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