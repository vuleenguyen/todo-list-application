import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/users/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  id: number;
  isDataAvailable: boolean = false;

  @ViewChild('userDetail', {read: ViewContainerRef}) userDetail: ViewContainerRef;

  constructor(private userService: UserService, private route: ActivatedRoute
      ,private router: Router, private dataStorageService: DataStorageService) { 
        console.log("constructor");
  }

  ngOnInit() {
    console.log("userDetail");
    this.route.params.subscribe(
      
      (params: Params) => {
        this.id = +params['id'];
        this.dataStorageService.getUser(this.id).subscribe(
          (response: Response) => {
              const user: User = response.json();
              console.log(user);
              this.user = user;
              this.isDataAvailable = true;
          }
        );
      }
    );
  }

  onEdit() {
    let toPlace = '/users/' +  this.id + '/edit';
    this.router.navigate([toPlace]);
  }

  onRemove() {
    this.dataStorageService.removeUser(this.user).subscribe(
      (response : Response) => {
          this.dataStorageService.getUsers();
          this.router.navigate(['/users/list']);
      }
    );
  }
}
