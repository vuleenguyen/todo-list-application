import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/todos/todo.service';

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
  todos : Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.todoChanged.subscribe(
      (todos: Todo[]) => {
        this.todos = todos; 
        this.dataSource = new MatTableDataSource(todos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  ngAfterViewInit() {
    
  }

}
