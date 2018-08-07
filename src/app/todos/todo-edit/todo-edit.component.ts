import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Task } from 'src/app/model/task.model';
import { TodoEditService } from 'src/app/todos/todo-edit/todo-edit.service';

import { DataStorageService } from 'src/app/shared/data-storage.services';
import { Response } from '@angular/http/src/static_response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {


  todoForm: FormGroup;
  constructor(private todoEditService: TodoEditService, private dataStorageService: DataStorageService,
    private router: Router) { }
  tasks: Task[];
  ngOnInit() {
    this.initForm();
  }

  taskList: Task[] = [];


  initForm() {
    let name = '';
    let todoTasks = new FormArray([]);
    this.todoForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'tasksList': todoTasks
    });
  }

  addTasks() {
    console.log("Add Task");
    const task: Task = new Task();
    this.todoEditService.addTaskRow(task)
  }

  onSubmit() {
    let currentTodo = this.todoForm.value;
    let tasks = this.getTasksBelong();
    currentTodo.tasksList = tasks;
    this.dataStorageService.insertToDoList(currentTodo).subscribe(
      (response: Response) => {
        this.resetTasksList();
        this.router.navigate(["todos/list"]);
      }
    );
  }

  getTasksBelong() {
    return this.todoEditService.getTasks();
  }

  resetTasksList() {
    this.todoEditService.setTasks([]);
  }
}
