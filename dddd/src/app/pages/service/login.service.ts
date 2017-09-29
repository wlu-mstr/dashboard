import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import * as AppUtils from '../../util/app.util';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  address: string;
  constructor(private http: Http) {
    // console.log('正在运行loginService构造函数');
  }

  login(loginRequest): Observable<Response>{
    return this.http.post(AppUtils.BACKEND_API_ROOT_URL + 'auth/console/login', loginRequest).map((res: Response) => {
        // console.log('登录成功');
        return res;
    }).catch((error: Response) => {
        return Observable.throw('登录失败');
    });
  }


}
