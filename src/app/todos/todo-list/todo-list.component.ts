import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/todos/todo.service';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  displayedColumns = ['id', 'name'];
  dataSource: MatTableDataSource<Todo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  todos : Todo[] = [];
  
  constructor(private todoService: TodoService, private dataStorageService: DataStorageService,
  private router: Router) { }

  ngOnInit() {
    if (this.todos.length == 0) {
      this.loadData();
    }

    this.todoService.todoChanged.subscribe(
      (todos: Todo[]) => {
        console.log("load done");
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
    console.log(data);
    const todo: Todo = data;
    this.todoService.setTasks(todo.tasksList);
  }

  onNewTodo() {
    this.router.navigate(['todos/new']);
  }

}
