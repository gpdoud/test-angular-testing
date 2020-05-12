import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let pTag: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
      // uncomment the next line to have ng do auto change detection
      //,providers: [ { provide: ComponentFixtureAutoDetect, useValue: true } ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    pTag = fixture.nativeElement.querySelector("p");
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  it("has default <p> element", () => {
    fixture.detectChanges();
    expect(pTag.textContent).toContain("home works!");
  });

  it("has a new <p> element", () => {
    pTag.textContent = "Home Component";
    fixture.detectChanges();
    expect(pTag.textContent).toContain("Home Component");
  });

});
