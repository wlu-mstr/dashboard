import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { LoginRequest  } from './model/login.request';
import { Router } from '@angular/router';
import * as AppUtil from '../util/app.util';


@Component({
  templateUrl: 'login.component.html',
  providers: [LoginService]
})
export class LoginComponent {
  showModal: boolean;
  loginRequest: LoginRequest;
  constructor(private loginService: LoginService, private router: Router) { }


  login(username, password){
    console.log(username + '<<<' + password);
    console.log();
    this.loginRequest = {
      userName: username,
      password: password
    };

    localStorage.setItem('User', JSON.stringify(this.loginRequest));
    // this.showModal = true;
    // this.loginService.login(this.loginRequest).subscribe((res) => {
    //   this.showModal = false;
    //   this.router.navigate(['/content']);
    // }, (error) => {
    //   this.showModal = false;
    //   this.router.navigate(['/content']);
    //   // alert('登录失败');
    // });

    //写死用户名和密码
    if(this.loginRequest.userName === 'admin' && this.loginRequest.password === 'admin'){
      this.router.navigate(['/content']);
    }else{
      alert('用户名或密码错误');
    }
  }

}
