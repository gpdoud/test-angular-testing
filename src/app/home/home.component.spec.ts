import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let pTag: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ FormsModule ]
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

  it("has default <p> contents 'home works!'", () => {
    fixture.detectChanges();
    expect(pTag.textContent).toContain("home works!");
  });

  it("has a new <p> content to 'Home Component'", () => {
    pTag.textContent = "Home Component";
    fixture.detectChanges();
    expect(pTag.textContent).toContain("Home Component");
  });

  it("input should contain 'ABC' then changed to 'XYZ'", () => {
    const hostElement = fixture.nativeElement;
    const inputCtrl: HTMLInputElement = hostElement.querySelector("#inp"); // be sure it is an HTMLInputElement
    fixture.detectChanges();
    expect(component.content).toBe("ABC"); // check for ABC
    inputCtrl.value = "XYZ"; // change input ctrl to XYZ
    inputCtrl.dispatchEvent(new InputEvent("input")); // fire an input event
    fixture.detectChanges();
    expect(component.content).toBe("XYZ");
  });

});
