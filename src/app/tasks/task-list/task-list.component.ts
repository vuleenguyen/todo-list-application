import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/tasks/task.service';
import { TagContentType } from '@angular/compiler';
import { Task } from 'src/app/model/task.model';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService, private dataStorageService: DataStorageService,
    private router : Router) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    if (this.tasks.length == 0) {
      this.loadTasks();
    }
    this.taskService.taskChanged.subscribe(
        (tasks: Task[])=> {
          this.tasks = tasks;
        }
    ); 
  }

  loadTasks() {
    this.dataStorageService.getTasks();
  }

  onNewTask() {
    this.router.navigate([
      '/tasks/new'
    ])
  }

  onEdit(event, item) {
    this.router.navigate(['/tasks/' + item.id + '/edit']);
  }
}
