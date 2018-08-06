import { Subject } from "rxjs";
import { Todo } from "src/app/model/todo.model";

export class TodoService {
    
    todoChanged = new Subject<Todo[]>();
    private todos: Todo[] = [];

    setTodos(todos: Todo[]) {
        this.todos = todos;
        this.todoChanged.next(todos.slice());
    }

    getTodos() {
        return this.todos;
    }
}