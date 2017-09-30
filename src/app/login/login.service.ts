import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as Const from '../config/const';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
    // console.log('正在运行loginService构造函数');
  }

  public login(json: any):Observable<any>{
    return this.http.post(Const.BACKEND_API_ROOT_URL + '/reg/employee/login',json)
      .map((res: Response) => {
        return res.json();
      });
  }

}
