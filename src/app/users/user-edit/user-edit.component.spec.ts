import { UserService } from "src/app/users/user.service";
import { User } from "src/app/model/user.model";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { UserEditComponent } from "src/app/users/user-edit/user-edit.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { DataStorageService } from "src/app/shared/data-storage.services";
import { HttpModule } from "@angular/http";
import { TaskService } from "src/app/tasks/task.service";
import { TodoService } from "src/app/todos/todo.service";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { DebugElement } from "@angular/core/src/debug/debug_node";
import { By } from "@angular/platform-browser";

class MockUserService {

    users: User[] = [
        {
            userName: 'vu_leenguyen', firstName: 'vu', lastName: 'le',
            email: 'vuleenguyen.92@gmail.com', id: 1
        },
    ];
};

describe('UserEditComponent', () => {
    let fixture: ComponentFixture<UserEditComponent>;
    let comp: UserEditComponent;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UserEditComponent],
            providers: [{ provide: UserService, useValue: MockUserService },
                DataStorageService, TaskService, TodoService],
            imports: [FormsModule, SharedModule, HttpModule, RouterTestingModule]
        })
    });

    it('should set submitted to true', async(() => {
        fixture = TestBed.createComponent(UserEditComponent);
        comp = fixture.componentInstance;
        comp.onSubmit();
        expect(comp.isSubmitted).toBeTruthy();
    }));

    it('should call onSubmit method', async(() => {
        fixture = TestBed.createComponent(UserEditComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
        spyOn(comp, 'onSubmit');
        el = fixture.debugElement.query(By.css('button.btn.btn-primary')).nativeElement;
        el.click();
        expect(comp.onSubmit).toHaveBeenCalledTimes(0);
    }));

    it('form should be invalid because having empty datas', async(()=> {
        comp = fixture.componentInstance;
        comp.userForm.controls['userName'].setValue('');
        comp.userForm.controls['email'].setValue('');
        comp.userForm.controls['firstName'].setValue('');
        comp.userForm.controls['lastName'].setValue('');
        expect(comp.userForm.valid).toBeFalsy();
    }))

    it('form should be invalid because email not valid', async(() => {
        comp = fixture.componentInstance;
        comp.userForm.controls['userName'].setValue('vu_leenguyen');
        comp.userForm.controls['email'].setValue('vule');
        comp.userForm.controls['firstName'].setValue('Hoan Vu');
        comp.userForm.controls['lastName'].setValue('Le');
        expect(comp.userForm.invalid).toBeTruthy();
    }));

    it('form should be valid because email valid', async(() => {
        comp = fixture.componentInstance;
        comp.userForm.controls['userName'].setValue("vu_leenguyen");
        comp.userForm.controls['email'].setValue('vuleenguyen.92@gmail.com');
        comp.userForm.controls['firstName'].setValue('Hoan Vu');
        comp.userForm.controls['lastName'].setValue('Le');
        expect(comp.userForm.valid).toBeTruthy();
    }));

})

