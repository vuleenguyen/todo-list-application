import { Http, Response } from '@angular/http';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/users/user.service';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/tasks/task.service';

import { TodoService } from 'src/app/todos/todo.service';
import { TodoList } from 'src/app/model/todo.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private taskService: TaskService,
        private todoService: TodoService) {
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

    deleteTask(taskId: number) {
        console.log("jksjkdsajk");
        return this.http.delete('http://localhost:8080/tasks/' + taskId);
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

    

    getTodos() {
        console.log("totdo");
        this.http.get("http://localhost:8080/todolists")
            .subscribe(
            (response: Response) => {
                const todos: TodoList[] = response.json();
                this.todoService.setTodos(todos);
            }
            );
    }

    insertToDoList(todoList: TodoList) {
        return this.http.post("http://localhost:8080/todolists", todoList);
    }

    deleteTodoList(id: number) {
        return this.http.delete("http://localhost:8080/todolists/" + id);
    }
}