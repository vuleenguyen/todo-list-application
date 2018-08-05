import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms/src/directives/validators';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { Response } from '@angular/http/src/static_response';
import { error } from '@angular/compiler/src/util';
import { User } from 'src/app/model/user.model';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/users/user.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: number;
  userForm: FormGroup;
  isEdit = false;

  constructor(private route: ActivatedRoute,
    private router: Router, private dataStorageService : DataStorageService
    , private userService: UserService, private zone:NgZone) { 
}

  ngOnInit() {
    console.log("userEit");
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.isEdit = params['id'] !== undefined;
        this.initForm();
      }
    );
  }

  private initForm() {
    let userName = '';
    let email = '';
    let firstName = '';
    let lastName = '';
    let id = '';

    if (this.isEdit) {
      this.dataStorageService.getUser(this.id).subscribe(
        (response: Response)=> {
          console.log("ehhehehe");
          const user = response.json();
          id = user.id;
          userName = user.userName;
          email = user.email;
          firstName = user.firstName;
          lastName = user.lastName;
          this.userForm = new FormGroup({
            'id' : new FormControl(id),
            'userName' : new FormControl(userName, Validators.required),
            'email' : new FormControl(email, Validators.required),
            'firstName' : new FormControl(firstName, Validators.required),
            'lastName' : new FormControl(lastName, Validators.required),
          })
        }
      )

    } else {
      this.userForm = new FormGroup({
        'id' : new FormControl(id),
        'userName' : new FormControl(userName, Validators.required),
        'email' : new FormControl(email, [Validators.required, Validators.email]),
        'firstName' : new FormControl(firstName, Validators.required),
        'lastName' : new FormControl(lastName, Validators.required),
      })
    }

    
  }

  onSubmit() {
    console.log("ajaja");
    console.log(this.userForm.value);
    if (!this.isEdit) {
      this.dataStorageService.insertUser(this.userForm.value).subscribe(
        (response: Response) => {
          this.dataStorageService.getUsers();
         this.router.navigate(['/users/list']);
        }, (error) => {
        }
      );
    } else {
      console.log("update");
      this.dataStorageService.updateUser(this.userForm.value).subscribe(
        (response: Response) => {
          this.dataStorageService.getUsers();
          this.router.navigate(['/users/list']);
        }
      );
    }
    
  }
}
