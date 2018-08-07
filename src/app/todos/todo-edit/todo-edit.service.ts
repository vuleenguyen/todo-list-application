import { Task } from "src/app/model/task.model";
import { Subject } from "rxjs/internal/Subject";

export class TodoEditService {
    taskChanged = new Subject<Task>();
    tasksChanged = new Subject<Task[]>();
    tasks: Task[];

    addTaskRow(task: Task) {
        this.taskChanged.next(task);
    }

    setTasks(tasks: Task[]) {
        this.tasks = tasks;
        this.tasksChanged.next(tasks.slice());
    }

    getTasks() {
        return this.tasks;
    }
}