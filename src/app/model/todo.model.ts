import { Task } from "src/app/model/task.model";

export class Todo {
    id: number;
    name: string;
    tasksList: Task[];

    public Todo(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}