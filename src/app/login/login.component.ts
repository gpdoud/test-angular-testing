import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private usrSvc: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.usrSvc.login(this.user).subscribe(
      (res: User | null) => {
        this.user = res;
      }
    );
  }

}
