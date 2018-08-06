import { Subject } from "rxjs";
import { Todo } from "src/app/model/todo.model";
import { Task } from "src/app/model/task.model";

export class TodoService {
    
    todoChanged = new Subject<Todo[]>();
    private todos: Todo[] = [];
    taskChanged = new Subject<Task[]>();
    private tasks: Task[]= [];

    setTodos(todos: Todo[]) {
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