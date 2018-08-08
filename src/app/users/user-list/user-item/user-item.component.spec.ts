import { TestBed, ComponentFixture } from "@angular/core/testing";
import { UserItemComponent } from "src/app/users/user-list/user-item/user-item.component";
import { UserDetailComponent } from "src/app/users/user-detail/user-detail.component";
import { By } from "@angular/platform-browser";
import { User } from "src/app/model/user.model";
import { SharedModule } from "src/app/shared/shared.module";



describe('UserItemComponent', () => {
    let fixture: ComponentFixture<UserItemComponent>;
    let comp: UserItemComponent;
    let el1: HTMLElement;
    let el2: HTMLElement;
    let expectedUser: User;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UserItemComponent],
        })
        fixture = TestBed.createComponent(UserItemComponent);
        comp = fixture.componentInstance;
        el1 = fixture.debugElement.query(By.css('h6')).nativeElement;

        
        el2 = fixture.debugElement.query(By.css('p')).nativeElement;
        expectedUser = {userName: 'vu_leenguyen', email: 'vuleenguyen.92@gmail.com', 
        firstName: 'Vu', lastName: 'Le', id : 1};
        
        comp.user = expectedUser;
        fixture.detectChanges();
    })

    it('should have username and email value in UI', () => { 
        expect(el1.textContent).toEqual("vu_leenguyen");
        expect(el2.textContent).toEqual("vuleenguyen.92@gmail.com");
    });

})