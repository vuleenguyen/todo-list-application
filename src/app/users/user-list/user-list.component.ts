import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/users/user.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscription: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.subscription = this.userService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
