import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HttpModule } from '@angular/http';
import { UserService } from 'src/app/users/user.service';
import { DataStorageService } from 'src/app/shared/data-storage.services';

const appRoutes: Routes = [
  {
    path: 'users', component: UsersComponent
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
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    UsersComponent,
    TasksComponent,
    TodosComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
