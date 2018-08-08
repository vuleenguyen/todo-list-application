import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/tasks/task.service';
import { Task } from 'src/app/model/task.model';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';
import { User } from 'src/app/model/user.model';
import { Response } from '@angular/http/src/static_response';
import { UserDetailComponent } from 'src/app/users/user-detail/user-detail.component';
import { UserDataStorageService } from 'src/app/shared/user-data-storage.services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService, private dataStorageService: DataStorageService,
    private userDataStorageService: UserDataStorageService,
    private router: Router, private userService: UserService) { }

  selectedUserObj: User;
  selectedStatus = null;

  emptyUser: User;
  users: User[] = [];
  statuses: any;

  ngOnInit() {
    console.log("get All Tasks");
    this.tasks = this.taskService.getTasks();
    this.initData();
  }

  initData() {
    this.statuses = Task.TaskStatus;
    let isExistNotCompleteStatus = false;
    for (let i = 0; i < this.statuses.length; i++) {
      if (this.statuses[i].name === "notcompleted") {
        isExistNotCompleteStatus = true;
        break;
      }
    }
    console.log("initdata");
    if (!isExistNotCompleteStatus) {
      this.statuses.push({ id: 4, name: "notcompleted" });
    }

    if (this.tasks.length == 0) {
      this.loadTasks();
    }

    if (this.users.length == 0) {
      this.loadUsers();
    }

    this.taskService.taskChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }
    );

    this.userService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
  }

  loadTasks() {
    this.dataStorageService.getTasks();
  }

  loadUsers() {
    this.userDataStorageService.getUsers();
  }

  onNewTask() {
    this.router.navigate(['/tasks/new'])
  }

  onEdit(event, item) {
    this.router.navigate(['/tasks/' + item.id + '/edit']);
  }

  onRemove(event, item) {
    this.dataStorageService.deleteTask(item.id).subscribe(
      (response: Response) => {
        this.dataStorageService.getTasks();
      }
    );
  }

  onChangeUser(newUser: User) {
    this.selectedUserObj = newUser;
    if (this.selectedStatus === null || this.selectedStatus === undefined) {
      if (this.selectedUserObj === undefined) this.dataStorageService.getTasks();
      else this.dataStorageService.getTasksByUser(this.selectedUserObj);
    } else {
      this.dataStorageService.getTasksByUserAndStatus(this.selectedUserObj, this.selectedStatus.name);
    }
  }

  onChangeStatus(status: any) {
    this.selectedStatus = status;
    if (this.selectedUserObj === null || this.selectedUserObj === undefined) {
      this.dataStorageService.getTasksByStatus(this.selectedStatus.name);
    } else {
      this.dataStorageService.getTasksByUserAndStatus(this.selectedUserObj, this.selectedStatus.name);
    }
  }
}
