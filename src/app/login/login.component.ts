import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksPath } from '../app-routing.module';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string | undefined;

  constructor(readonly loginService: LoginService, readonly router: Router) {}

  ngOnInit(): void {
    this.userName = this.loginService.getUserName();
  }

  login() {
    this.loginService.login(this.userName!);
    this.router.navigateByUrl(TasksPath);
  }
}
