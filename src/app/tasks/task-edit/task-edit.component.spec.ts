import { UserService } from "src/app/users/user.service";
import { User } from "src/app/model/user.model";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { UserEditComponent } from "src/app/users/user-edit/user-edit.component";
import { FormsModule, FormGroup, FormControl } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { DataStorageService } from "src/app/shared/data-storage.services";
import { HttpModule } from "@angular/http";
import { TaskService } from "src/app/tasks/task.service";
import { TodoService } from "src/app/todos/todo.service";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { DebugElement } from "@angular/core/src/debug/debug_node";
import { By } from "@angular/platform-browser";
import { TaskEditComponent } from "src/app/tasks/task-edit/task-edit.component";
import { Task } from "src/app/model/task.model";

class MockUserService {

    users: User[] = [
        {
            userName: 'vu_leenguyen', firstName: 'vu', lastName: 'le',
            email: 'vuleenguyen.92@gmail.com', id: 1
        },
    ];
};

describe('TaskEditComponent', () => {
    let fixture: ComponentFixture<TaskEditComponent>;
    let comp: TaskEditComponent;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TaskEditComponent],
            providers: [UserService,
                DataStorageService, TaskService, TodoService],
            imports: [FormsModule, SharedModule, HttpModule, RouterTestingModule]
        })
    });

    it('should set submitted to true', async(() => {
        fixture = TestBed.createComponent(TaskEditComponent);
        comp = fixture.componentInstance;
        comp.onSubmit();
        expect(comp.isSubmitted).toBeTruthy();
    }));

    it('form should be invalid', async(() => {
        fixture = TestBed.createComponent(TaskEditComponent);
        comp = fixture.componentInstance;
        comp.initForm(null, null, null, null, null);
        expect(comp.taskForm.invalid).toBeTruthy();
    }));

    it('form should be valid', async(() => {
        fixture = TestBed.createComponent(TaskEditComponent);
        comp = fixture.componentInstance;
        comp.initForm(1, "Fix code smell", "vu_leenguyen", "This is bug", "notstart");
        expect(comp.taskForm.valid).toBeTruthy();
    }));    
})

