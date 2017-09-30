import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import * as Const from '../../config/const';

@Injectable()
export class SysMonitorService {
  constructor(public http: Http) { }

  public getUserInfo(json: any):Observable<any>{

    return this.http.post(Const.BACKEND_API_ROOT_URL + '/wholesale_dashboard/getUserInfo',{})
      .map((res: Response) => {
        return res.json();
      });
  }

  public getTradeOrderInfo(json: any):Observable<any>{

    return this.http.post(Const.BACKEND_API_ROOT_URL + '/wholesale_dashboard/getTradeOrderInfo',{})
      .map((res: Response) => {
        return res.json();
      });
  }

  public login(json: any):Observable<any>{

    return this.http.post(Const.BACKEND_API_ROOT_URL + '/reg/employee/login',json)
      .map((res: Response) => {
        return res.json();
      });
  }

  public getMonthKey(idx: number):String{
    let monthKey = 'total';
    switch(idx){
      case 0:
        monthKey = 'total';
        break;
      case 1:
        monthKey = '1month';
        break;
      case 2:
        monthKey = '3month';
        break;
      case 3:
        monthKey = '6month';
        break;
      default:
        monthKey = 'total';
    }
    return monthKey;
  }
  public monthInEn(timestamp: Date){
    let date = new Date(Number(timestamp));
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    return months[date.getMonth()] + '' + date.getDate();
  }
}
