import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { TasksComponent } from './tasks/tasks.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { HttpModule } from '@angular/http';
import { UserService } from 'src/app/users/user.service';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskService } from 'src/app/tasks/task.service';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoTaskListComponent } from './todos/todo-task-list/todo-task-list.component';
import { TodoService } from 'src/app/todos/todo.service';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';
import { TodoMainComponent } from './todos/todo-main/todo-main.component';
import { TodoTaskEditComponent } from './todos/todo-edit/todo-task-edit/todo-task-edit.component';
import { TodoEditService } from 'src/app/todos/todo-edit/todo-edit.service';
import { UsersModule } from 'src/app/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TasksComponent,
    TodosComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TaskListComponent,
    TaskEditComponent,
    TodoListComponent,
    TodoTaskListComponent,
    TodoEditComponent,
    TodoMainComponent,
    TodoTaskEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UsersModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [UserService, TaskService, TodoService, TodoEditService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
