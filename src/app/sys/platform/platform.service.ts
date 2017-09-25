import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import * as Const from '../../config/const';

@Injectable()
export class PlatformService {
  constructor(public http: Http) { }

  public getInfo(json: any):Observable<any>{

    return this.http.post(Const.BACKEND_API_ROOT_URL + '/admin/dashboard/getPlatformInfo',{})
      .map((res: Response) => {
        return res.json();
      });
  }
}
