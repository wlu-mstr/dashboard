import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as AppUtil from '../../../util/app.util';
import { SellerResponse } from '../model/response/seller.response';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class CreateImageService {

  constructor(private http: Http, private authHttp: AuthHttp) { }

  getList(query: any): Observable<any[]>{
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this.http.get(AppUtil.BACKEND_API_ROOT_URL + '/report/wholeCount'+query).map((res: Response) => {
      console.log(res.json() as any[]);
      return res.json().data;
    }).catch((error: Response) => {
      return Observable.throw('获取列表失败');
    });
  }

  //构建新镜像
  createImg(json: any): Observable<Response>{
    const headers = new Headers();
    headers.set('Content-Type','multipart/form-data')
    return this.authHttp.post(AppUtil.BACKEND_API_ROOT_URL + '/dashboard/imagecentre/myimages/newimage/build',json,{
      headers:headers
    }).map((res: Response) => {
      return res.json();
    }).catch((error: Response) => {
      alert('构建新镜像失败');
      return Observable.throw('构建新镜像失败');
    })
  } 
}
