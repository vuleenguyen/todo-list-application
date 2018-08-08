import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.services';
import { UserDataStorageService } from 'src/app/shared/user-data-storage.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, 
    private userDataStorageService: UserDataStorageService) { }

  ngOnInit() {
  }

  onFetchUser() {
    this.userDataStorageService.getUsers();
  }

  onFetchTask() {
    this.userDataStorageService.getUsers();
    this.dataStorageService.getTasks();
  }

  onFetchTodo() {
    this.dataStorageService.getTodos();
  }
}
