import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestChildService {

  about(): Observable<string> {
    return of("aboutChild");
  }  

  constructor() { }
}
