import { Subject } from "rxjs";

import { Task } from "src/app/model/task.model";
import { TodoList } from "src/app/model/todo.model";

export class TodoService {

    todoChanged = new Subject<TodoList[]>();
    private todos: TodoList[] = [];
    taskChanged = new Subject<Task[]>();
    private tasks: Task[] = [];

    setTodos(todos: TodoList[]) {
        this.todos = todos;
        this.todoChanged.next(todos.slice());
    }

    setTasks(tasks: Task[]) {
        this.tasks = tasks;
        this.taskChanged.next(tasks.slice());
    }

    getTodos() {
        return this.todos;
    }

    getTasks() {
        return this.tasks;
    }
}