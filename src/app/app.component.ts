import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: string = "data";
  save() {
    console.log("Data:", this.data);
  }
  title = 'test-angular-testing';
  switch: boolean = true;
  clicked() {
    this.switch = !this.switch;
  }
}
