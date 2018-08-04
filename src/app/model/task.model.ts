import { User } from "src/app/model/user.model";

export class Task {
    id: number;
    name: string;
    description: string;
    status: string;
    assignedUserId: number;
    assignedUserName: string;
    assignedUser: User;

    public static TaskStatus: any = [
        {id: 1, name: "notstarted"},
        {id: 2, name: "inprogress"},
        {id: 3, name: "complete"}
    ]
}