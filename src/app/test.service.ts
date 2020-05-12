import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestChildService } from './test-child.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  about: string = "about";
  test(): string {
    return "test";
  }
  testAsync(): Observable<string> {
    return of("test");
  }

  constructor(private childSvc: TestChildService) { }

  testChildAsync(): Observable<string> {
    return this.childSvc.about();
  }
}
