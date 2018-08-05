import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onFetchUser() {
    this.dataStorageService.getUsers();
  }

  onFetchTask() {
    this.dataStorageService.getUsers();
    this.dataStorageService.getTasks();
  }
}
