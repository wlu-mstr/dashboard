import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import * as AppUtil from '../../util/app.util';
import {Observable} from 'rxjs';


@Injectable()
export class LayoutService {

  constructor(private http: Http) {
  }

  layout(): Observable<Response> {
    return this.http.get(AppUtil.BACKEND_API_ROOT_URL + '/layout').map(() => {
      console.log('退出成功');
      console.error('退出成功');
    }).catch((error: Response) => {
      return Observable.throw('退出失败');
    });
  }

}
