import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/users/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';
import { Http, Response } from '@angular/http';
import { UserDataStorageService } from 'src/app/shared/user-data-storage.services';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  id: number;
  isDataAvailable: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute
    , private router: Router, private userDataStorageService: UserDataStorageService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.userDataStorageService.getUser(this.id).subscribe(
          (response: Response) => {
            const user: User = response.json();
            this.user = user;
            this.isDataAvailable = true;
          }
        );
      }
    );
  }

  onEdit() {
    let toPlace = '/users/' + this.id + '/edit';
    this.router.navigate([toPlace]);
  }

  onRemove() {
    this.userDataStorageService.removeUser(this.user).subscribe(
      (response: Response) => {
        this.userDataStorageService.getUsers();
        this.router.navigate(['/users/list']);
      }
    );
  }
}
