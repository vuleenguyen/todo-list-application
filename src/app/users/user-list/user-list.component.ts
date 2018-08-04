import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/users/user.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { OnDestroy, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router , NavigationStart} from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscription: Subscription;
  constructor(private userService: UserService, private dataStorageService: DataStorageService, 
    private router: Router,
    private route: ActivatedRoute) {
  
  }

  ngOnInit() {
  
    this.users = this.userService.getUsers();
    if (this.users.length == 0) {
      this.loadUsers();
    }
    this.subscription = this.userService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
        console.log("saklklkla");
      }
    )
  }

  loadUsers() {
    this.dataStorageService.getUsers();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewUser() {
    console.log("click new");
    this.router.navigate(['/users/new']);
  }

}
