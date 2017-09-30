import { Injectable } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Subject } from '../../../../../../node_modules/rxjs/Subject';
import { Http, Response } from '@angular/http';
import * as Const from '../../../config/const';

@Injectable()
export class LoadBalanceService {
  constructor(public http: Http) { }

  public getPlatformInfo(json: any):Observable<any>{

    return this.http.post(Const.BACKEND_API_ROOT_URL + '/wholesale_dashboard/getPlatformInfo',{})
      .map((res: Response) => {
        return res.json();
      });
  }

}
