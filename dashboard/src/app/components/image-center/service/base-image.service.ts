import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as AppUtil from '../../../util/app.util';
@Injectable()
export class BaseImageService {

  constructor(private http:Http) { }

  getList(query: any): Observable<any>{
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this.http.get(AppUtil.BACKEND_API_ROOT_URL + '/report/callDetail'+query).map((res: Response) => {
      console.log(res.json() as any[]);
      return res.json();
    }).catch((error: Response) => {
      return Observable.throw('获取列失败');
    });
  }

  downloadTabel(query: any): Observable<any> {
    return this.http.get(AppUtil.BACKEND_API_ROOT_URL + '/export/exportCallDetail'+query).map((res: Response) => {
    }).catch((error: Response) => {
      return Observable.throw('下载失败');
    });
  }

  createImage(json: string): Observable<any> {
    return this.http.post(AppUtil.BACKEND_API_ROOT_URL + '/' , json).map((res: Response) => {
      return res;
    }).catch((error: Response )=> {
      return Observable.throw('构建新镜像失败')
    });
  }
}
