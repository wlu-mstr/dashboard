/**
 * Created by liujf on 2017/5/27.
 */
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../../pages/service/login.service';

@Injectable()
export class CanActivateGuard implements  CanActivate{
  constructor(private router: Router, private loginService: LoginService){}

  canActivate(){
    if (this.loginService.loggedIn()){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
