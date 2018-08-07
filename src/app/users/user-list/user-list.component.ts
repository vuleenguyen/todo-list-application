import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/users/user.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { OnDestroy, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, NavigationStart } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';



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

  infiniteScroll: any;

  pageNumber = 0;
  ngOnInit() {
    this.users = this.userService.getUsers();
    if (this.users.length == 0) {
      this.loadUsers();
    }
    this.subscription = this.userService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
        this.pageNumber++;
      }
    )
  }

  loadUsers() {
    // this.dataStorageService.getUsersWithPagingInit(this.pageNumber);
    this.dataStorageService.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewUser() {
    console.log("click new");
    this.router.navigate(['/users/new']);
  }

  loadMore(event) {
    console.log('scrolled!!' + event);
    // this.dataStorageService.getUsersWithPaging(this.pageNumber).subscribe(
    //   (response: Response) => {
    //     const users: User[] = response.json();
    //     for(let i = 0; i < users.length; i++) this.users.push(users[i]);
    //     this.pageNumber++;
    //   }
    // );
    // console.log(this.infiniteScroll);
  }
}
