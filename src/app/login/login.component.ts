import { Component, OnInit } from '@angular/core';
import { RouterService } from '../tasks/router.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string | undefined;

  constructor(readonly loginService: LoginService, readonly routerService: RouterService) {}

  ngOnInit(): void {
    this.userName = this.loginService.getUserName();
  }

  login() {
    this.loginService.login(this.userName!);
    this.routerService.toTasksPage();
  }
}
