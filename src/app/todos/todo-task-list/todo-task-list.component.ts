import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TodoService } from 'src/app/todos/todo.service';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-todo-task-list',
  templateUrl: './todo-task-list.component.html',
  styleUrls: ['./todo-task-list.component.css']
})
export class TodoTaskListComponent implements OnInit {


  displayedColumns = ['id', 'Name', 'Description', 'Status', 'Assigned User'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.taskChanged.subscribe(
      (tasks: Task[]) => {
        console.log("task change");
        this.tasks = tasks
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}


