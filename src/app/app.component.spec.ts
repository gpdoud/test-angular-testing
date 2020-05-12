import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { identifierModuleUrl } from '@angular/compiler';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have 'test-angular-testing' in title", () => {
    const comp = new AppComponent();
    expect(comp.title).toBe("test-angular-testing");
  });

  it('should have an <h1> tag with "AppComponent"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('AppComponent');
  });

  it("should test clickMe() and switch value", () => {
    const comp = new AppComponent();
    // switch should start as true
    expect(comp.switch).toBe(true, "starts as true");
    // clicked() should switch to false;
    comp.clicked();
    expect(comp.switch).toBe(false, "changes to false");
    // clicked() should switch back to true;
    comp.clicked();
    expect(comp.switch).toBe(true, "changes back to true");
  });

  it("should have something in data", () => {
    const comp = new AppComponent();
    expect(comp.data).toBe("data");
    comp.data = "ABC";
    expect(comp.data).toBe("ABC");
  });

});
