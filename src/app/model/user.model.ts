import { last } from "@angular/router/src/utils/collection";

export class User {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    id: number;

    constructor(firstName: string, lastName: string, email: string, userName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
    }
}