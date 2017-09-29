/**
 * Created by liujf on 2017/5/27.
 */
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export  class CanActivateGuard implements  CanActivate{
  constructor(private router: Router){}

  canActivate(){
    if (localStorage.getItem('User')){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
