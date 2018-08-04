import { User } from "src/app/model/user.model";

export class Task {
    id: number;
    name: string;
    description: string;
    status: string;
    assignedUserId: number;
    assignedUser: string;

    public static TaskStatus: any = [
        {id: 1, name: "notstarted"},
        {id: 2, name: "inprogress"},
        {id: 3, name: "complete"}
    ]
}