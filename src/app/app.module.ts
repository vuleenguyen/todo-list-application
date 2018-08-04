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
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ReactiveFormsModule } from "@angular/forms";


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
    UserListComponent,
    UserItemComponent,
    UserDetailComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [UserService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
