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
import { UserDataStorageService } from 'src/app/shared/user-data-storage.services';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: number;
  userForm: FormGroup;
  isEdit = false;

  isFormEditLoad: boolean = false;
  isSubmitted = false;
  
  constructor(private userDataStorageService: UserDataStorageService
    , private userService: UserService, private router: Router, private route: ActivatedRoute, ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.isEdit = params['id'] !== undefined;
        this.initData();
      }
    );
  }

  private initData() {
    const emptyString = '';

    if (this.isEdit) {
      this.userDataStorageService.getUser(this.id).subscribe(
        (response: Response) => {
          const user = response.json();
          this.initForm(user.id, user.userName, user.email, user.firstName, user.lastName);
          this.isFormEditLoad = true;
        }
      )

    } else {
      this.initForm(emptyString, emptyString, emptyString, emptyString, emptyString);
    }

  }

  initForm(id: string, userName: string, email: string, firstName: string, lastName: string) {
    this.userForm = new FormGroup({
      'id': new FormControl(id),
      'userName': new FormControl(userName, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.userForm === undefined) return;
    if (!this.isEdit) {
      this.userDataStorageService.insertUser(this.userForm.value).subscribe(
        (response: Response) => {
          this.userDataStorageService.getUsers();
          this.router.navigate(['/users/list']);
        }
      );
    } else {
      console.log("update");
      this.userDataStorageService.updateUser(this.userForm.value).subscribe(
        (response: Response) => {
          this.userDataStorageService.getUsers();
          this.router.navigate(['/users/list']);
        }
      );
    }
  }

  onBack() {
    this.router.navigate(['/users/list']);
  }
}
