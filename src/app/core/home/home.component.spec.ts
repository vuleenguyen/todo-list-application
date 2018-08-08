import { HomeComponent } from "src/app/core/home/home.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

let component: HomeComponent;
let fixture:   ComponentFixture<HomeComponent>;
let h1:        HTMLElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ HomeComponent ],
  });
  
});

it('should display welcome content', () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toEqual("Welcome To My Application");
  });