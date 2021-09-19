import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(protected route: Router) { }

  ngOnInit(): void {
  }

  onLogin(username:string, password:string){
    sessionStorage.setItem("username", "true")
    this.route.navigate(['../vehicle'])
  }

}
