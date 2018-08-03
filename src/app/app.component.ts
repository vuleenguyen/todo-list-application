import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app-client';
  allowNewServer = false;
  name = "Vu";
  serverCreated = false;
  serverName = '';
  addNewServer() {
    this.serverCreated = true;
   
  }

  onInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
