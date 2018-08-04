import { Task } from "src/app/model/task.model";
import { Subject } from "rxjs/internal/Subject";

export class TaskService {
    taskChanged = new Subject<Task[]>();
    private tasks: Task[] = [];

    setTasks(tasks: Task[]) {
        this.tasks = tasks;
        this.taskChanged.next(tasks.slice());
    }

    getTasks() {
        return this.tasks;
    }
}