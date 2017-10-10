import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { LoginRequest  } from './model/login.request';
import { Router } from '@angular/router';
import * as AppUtil from '../util/app.util';


@Component({
  templateUrl: 'login.component.html',
  styleUrls:['login.component.scss'],
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
      username: username,
      userpasswd: password
    };

    localStorage.setItem('User', JSON.stringify(this.loginRequest));

    //写死用户名和密码
    // if(this.loginRequest.username === 'admin' && this.loginRequest.userpasswd === 'admin'){
    //   this.router.navigate(['/content']);
    // }else{
    //   alert('用户名或密码错误');
    // }
    this.loginService.login(this.loginRequest).subscribe( (res: any) => {
      if(res.code === 0){
        this.router.navigate(['/content']);
        localStorage.setItem('token', JSON.stringify(res.detail));
      }else{
        alert(res.detail);
      }
    });
  }

}
