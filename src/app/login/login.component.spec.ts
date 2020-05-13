import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { User } from '../user.class';
import { of } from 'rxjs';
import { UserService } from '../user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    let user = { id: 1, name: 'sa', username: 'sa', password: 'sa' }
    const userService = jasmine.createSpyObj('UserService', ['login']);
    let usr = userService.login.and.returnValue( of(user) );
    
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ { provide: UserService, useValue: userService } ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login successfully', () => {
    fixture.detectChanges();
    expect(component.user.id).toBe(0);
  });

});
