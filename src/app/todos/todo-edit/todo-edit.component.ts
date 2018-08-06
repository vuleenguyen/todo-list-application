import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Task } from 'src/app/model/task.model';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todoForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  taskList: Task[] = [];

  
  addTasks() {
    (<FormArray>this.todoForm.get('tasksList')).push(
      new FormGroup({
        'name': new FormControl(name, Validators.required),
        'assignedUserName': new FormControl(null),
        'description': new FormControl("", Validators.required),
        'status': new FormControl("inprogress")
      })
    );
  }

  initForm() {
    let name = '';
    let todoTasks = new FormArray([]);
    this.todoForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'tasksList': todoTasks
    });
  }
}
