import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Task } from 'src/app/model/task.model';
import { User } from 'src/app/model/user.model';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { UserService } from 'src/app/users/user.service';
import { TodoEditService } from 'src/app/todos/todo-edit/todo-edit.service';

@Component({
  selector: 'app-todo-task-edit',
  templateUrl: './todo-task-edit.component.html',
  styleUrls: ['./todo-task-edit.component.css']
})
export class TodoTaskEditComponent implements OnInit {

  displayedColumns = ['name', 'description', 'status', 'assigned to'];
  tasks: Task[] = [];
  taskStatuses = Task.TaskStatus;
  users: User[];
  dataSource = null;

  constructor(private dataStorageService: DataStorageService, private userService: UserService,
    private todoEditService: TodoEditService) {
  }

  ngOnInit(): void {
    console.log("todo-task-edit");
    this.loadRow();
    this.loadUserData();
  }

  loadRow() {
    this.todoEditService.taskChanged.subscribe(
      (task: Task) => {
        console.log("add Task");
        this.tasks.push(new Task());
        this.dataSource = new MatTableDataSource(this.tasks);
        this.todoEditService.setTasks(this.tasks);
      }
    );
  }

  loadUserData() {
    if (this.users === undefined || this.users.length == 0) this.dataStorageService.getUsers();

    this.userService.usersChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
  }
}


