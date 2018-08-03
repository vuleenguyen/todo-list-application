import { last } from "@angular/router/src/utils/collection";

export class User {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    id: number;

    constructor(firstName: string, lastName: string, email: string, username:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
    }
}