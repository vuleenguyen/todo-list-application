var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
var appRoutes = [
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                UserItemComponent
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map