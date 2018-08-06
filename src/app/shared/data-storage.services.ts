import {Http, Response} from '@angular/http';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/users/user.service';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/tasks/task.service';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/todos/todo.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private userService: UserService, 
        private taskService: TaskService,
        private todoService: TodoService){}

    getUsers() {
        this.http.get("http://localhost:8080/users")
            .subscribe(
                (response: Response) => {
                    
                    const users: User[] = response.json();
                    console.log(users);
                    this.userService.setUsers(users);
                }
            );
    }

    getUser(id: number) {
        return this.http.get("http://localhost:8080/users/" + id);
    }

    insertUser(user: User) {
        return this.http.post('http://localhost:8080/users', user);
    }

    updateUser(user: User) {
        return this.http.put("http://localhost:8080/users/" + user.id, user);
    }

    removeUser(user: User) {
        return this.http.delete("http://localhost:8080/users/" + user.id);
    }

    getTasks() {
        this.http.get("http://localhost:8080/tasks")
        .subscribe(
            (response: Response) => {
                const tasks: Task[] = response.json();
                this.taskService.setTasks(tasks);
            }
        );
    }

    insertTask(task: Task) {
        return this.http.post('http://localhost:8080/tasks/add/users/' + task.assignedUserId, task);
    }

    updateTask(task: Task) {
        return this.http.put('http://localhost:8080/tasks/update/users/' + task.assignedUserId, task);
    }

    getUsersFromTask() {
        return this.http.get("http://localhost:8080/users");
    }

    getTask(id: number) {
        return this.http.get("http://localhost:8080/tasks/update/" + id);
    }

    getTasksByStatus(status: string) {
        this.http.get("http://localhost:8080/tasks/" + status)
        .subscribe(
            (response: Response) => {
                const tasks: Task[] = response.json();
                this.taskService.setTasks(tasks);
            }
        );
    }

    getTasksByUser(user: User) {
        this.http.get("http://localhost:8080/tasks/users/" + user.id)
        .subscribe(
            (response: Response) => {
                const tasks: Task[] = response.json();
                this.taskService.setTasks(tasks);
            }
        );
    }

    getTasksByUserAndStatus(user: User, status: string) {
        this.http.get("http://localhost:8080/tasks/user?userId=" + user.id + "&status=" + status)
        .subscribe(
            (response: Response) => {
                const tasks: Task[] = response.json();
                this.taskService.setTasks(tasks);
            }
        );
    }

    getUsersWithPaging(page: number) {
        return this.http.get("http://localhost:8080/users/page?page=" + page);
    }

    getUsersWithPagingInit(page: number) {
        this.http.get("http://localhost:8080/users/page?page=" + page)
            .subscribe(
                (response: Response) => {
                    
                    const users: User[] = response.json();
                    console.log(users);
                    this.userService.setUsers(users);
                }
            );
    }

    getTodos() {
        console.log("totdo");
        this.http.get("http://localhost:8080/todolists")
        .subscribe(
            (response: Response) => {
                const todos: Todo[] = response.json();
                this.todoService.setTodos(todos);
            }
        );
    }
}