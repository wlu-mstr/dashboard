import {Injectable} from '@angular/core';

@Injectable()
export class StoreService {

  constructor(){}

  private data: any = {};

  public set(key: any, data: any) {
    this.data[key] = data;
  }

  public get(key: any) {
    if (this.data.hasOwnProperty(key)) {
      return this.data[key];
    } else {
      return false;
    }
  }
}
