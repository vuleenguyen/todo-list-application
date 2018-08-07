import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Task } from 'src/app/model/task.model';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { UserService } from 'src/app/users/user.service';
import { Response } from '@angular/http/src/static_response';
import { User } from 'src/app/model/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { TaskService } from 'src/app/tasks/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  taskForm: FormGroup;
  statuses: any;
  users: User[];
  constructor(private dataStorageService: DataStorageService, private userService: UserService
    , private router: Router, private route: ActivatedRoute, private taskService: TaskService) { }
  isDataAvailable = false;
  isEditMode: boolean = false;
  id: number;
  editTask: Task;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.isEditMode = params['id'] !== undefined;
        this.initData();
      }
    );
  }

  private initData() {
    this.statuses = Task.TaskStatus;
    if (this.isEditMode) {
      this.dataStorageService.getTask(this.id).subscribe(
        (response: Response) => {
          const task: Task = response.json();
          this.dataStorageService.getUsersFromTask().subscribe(
            (response: Response) => {
              const users: User[] = response.json();
              this.users = users;
              this.initForm(this.id, task.name, task.assignedUser === null ? null : task.assignedUser.userName
                , task.description, task.status);
              this.isDataAvailable = true;
            }
          );
        }
      )
    } else {
      this.dataStorageService.getUsersFromTask().subscribe(
        (response: Response) => {
          const users: User[] = response.json();
          this.users = users;
          this.initForm(this.id, '', null, '', "inprogress");
          this.isDataAvailable = true;
        }
      );
    }
  }

  initForm(id: number, name: string, assignedUserName: string, description: string, status: string) {
    this.taskForm = new FormGroup({
      'id': new FormControl(id),
      'name': new FormControl(name, Validators.required),
      'assignedUserName': new FormControl(assignedUserName),
      'description': new FormControl(description, Validators.required),
      'status': new FormControl(status)
    });
  }

  onSubmit() {
    const task: Task = this.taskForm.value;
    const id = this.getId(task.assignedUserName);
    task.assignedUserId = id;
    if (!this.isEditMode) {
      this.dataStorageService.insertTask(task).subscribe(
        (response: Response) => {
          this.dataStorageService.getTasks();
          this.router.navigate(['tasks/list']);
        }
      );
    } else {
      this.dataStorageService.updateTask(task).subscribe(
        (response: Response) => {
          this.dataStorageService.getTasks();
          this.router.navigate(['tasks/list']);
        }
      )
    }
  }

  getId(name: string) {
    for (let user of this.users) {
      if (user.userName === name) return user.id;
    }
  }

  onBack() {
    this.router.navigate(['tasks/list']);
  }

}
