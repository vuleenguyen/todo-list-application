import { Task } from "src/app/model/task.model";

export class TodoList {
    id: number;
    name: string;
    tasksList: Task[];

    public TodoList(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}