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
  ,private router: Router, private route: ActivatedRoute, private taskService: TaskService) { }
  isDataAvailable = false;
  isEditMode: boolean = false;
  id: number;
  editTask: Task;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.isEditMode = params['id'] !== undefined;
        this.initForm();
      }
    );
    
  }

  private initForm() {
    
    this.statuses = Task.TaskStatus;
    let name = '';
    let description = '';
    let assignedUser = '';
    if (this.isEditMode) {
      

    } else {
      this.dataStorageService.getUsersFromTask().subscribe(
        (response: Response) => {
          const users: User[] = response.json();
          this.users = users;
          this.taskForm = new FormGroup({
            'name': new FormControl(name, Validators.required),
            'assignedUser': new FormControl(this.users[0].userName),
            'description': new FormControl(description, Validators.required),
            'status': new FormControl("inprogress")
          });
          this.isDataAvailable = true;
        }
      );
      
    }

  }

  onSubmit() {
    if (!this.isEditMode) {
      const task: Task = this.taskForm.value;
      const id = this.getId(task.assignedUser);
      task.assignedUserId = id;
      console.log(task);
      this.dataStorageService.insertTask(task).subscribe(
        (response: Response) => {
          this.dataStorageService.getTasks();
          this.router.navigate(['tasks/list']);
        }
      );
    }
  }

  getId(name: string) {
    for(let user of this.users) {
      if (user.userName === name) return user.id;
    }
  }

}
