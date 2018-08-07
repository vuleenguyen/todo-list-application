import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { TodoService } from 'src/app/todos/todo.service';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { Router } from '@angular/router';
import { TodoList } from 'src/app/model/todo.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  displayedColumns = ['id', 'name'];
  dataSource: MatTableDataSource<TodoList>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  todos: TodoList[] = [];
  selectedRowIndex: number = -1;
  isRowSelected = true;

  constructor(private todoService: TodoService, private dataStorageService: DataStorageService,
    private router: Router) { }

  ngOnInit() {
    if (this.todos.length == 0) {
      this.loadData();
    }

    this.todoService.todoChanged.subscribe(
      (todos: TodoList[]) => {
        this.todos = todos;
        this.dataSource = new MatTableDataSource(todos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  loadData() {
    this.dataStorageService.getTodos();
  }

  ngAfterViewInit() {
  }

  showTasksWithSelectedRow(data: any) {
    const todo: TodoList = data;
    this.selectedRowIndex = todo.id;
    this.todoService.setTasks(todo.tasksList);
    this.isRowSelected = false;
  }

  onDeleteTodo() {
    if (this.selectedRowIndex <= 0) return;
    this.dataStorageService.deleteTodoList(this.selectedRowIndex).subscribe(
      (response: Response) => {
        this.dataStorageService.getTodos();
      }
    );
  }

  onNewTodo() {
    this.dataStorageService.getUsers();
    this.router.navigate(['todos/new']);
  }

}
