import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/users/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  id: number;

  constructor(private userService: UserService, private route: ActivatedRoute
  ,private router: Router) { 

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.userService.getUser(+params['id']);
      }
    );
  }

}
