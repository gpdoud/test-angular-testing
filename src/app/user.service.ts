import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.class';

let users: User[] = [
  { id: 1, name: 'sa', username: 'sa', password: 'sa' },
  { id: 2, name: 'rv', username: 'rv', password: 'rv' },
  { id: 3, name: 'us', username: 'us', password: 'us' }
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(user: User): Observable<User> {
    users.forEach(u => {
      if(u.username === user.username && u.password === user.password)
        return of(u);
    });
    return of(null);
  }
  list(): Observable<User[]> {
    return of(users);
  }
  get(id): Observable<User> {
    return of(users[id-1]);
  }
}
