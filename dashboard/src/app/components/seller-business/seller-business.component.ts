import {Component, OnInit, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {SellerBussinessService} from './service/seller-bussiness.service';
import {Router} from '@angular/router';
import { StoreService } from './service/store.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-seller-business',
  templateUrl: './seller-business.component.html',
  styleUrls: ['./seller-business.component.scss'],
  providers: [SellerBussinessService, StoreService]
})
export class SellerBusinessComponent implements OnInit,AfterViewInit {
  // @ViewChild('status') status;
  objs: any = [];
  alertMessage: string;
  alertType: string;
  applyStatus = '';
  startTime:Date;
  endTime:Date;
  //判定alert输入值变化
  alertNumber = 1;
  //蒙层显隐
  showModal = false;

  query: any;

  zh: any;


  constructor(private sellerBussinessService: SellerBussinessService, private router: Router, private storeService: StoreService,@Inject('help') private helpService) {
  }

  ngOnInit() {
    this.zh = {
      firstDayOfWeek: 0,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["日","一","二","三","四","五","六"],
      monthNames: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "er月","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    };
  }


  ngAfterViewInit(){
    // $(this.status.nativeElement).addClass('active');
  }



  //获取列表
  getSellerList() {
    this.showModal = true
    this.query = {
      startTime: this.helpService._dateFormatNoSe("yyyy-MM-dd hh:mm:ss",this.startTime),
      endTime: this.helpService._dateFormatNoSe("yyyy-MM-dd hh:mm:ss",this.endTime)
    };
    if(this.query.startTime.length > 0 && this.query.endTime.length > 0){
      const queryString = this.helpService._queryObjToString(this.query);
      console.log('query:' + queryString);
      this.sellerBussinessService.getList(queryString).subscribe((sellerList) => {
        this.showModal = false;
        this.objs = sellerList;
      }, (error) => {
        this.showModal = false;
        this.alertNumber++;
        this.alertMessage = error;
        this.alertType = 'danger';
      });
    }else{
      this.showModal = false;
      this.alertNumber++;
      this.alertMessage = '查询时间为必填项';
      this.alertType = 'danger';
    }

  }

  //下载表格
  downloadTable() {
    this.showModal = true
    this.query = {
      startTime: this.helpService._dateFormatNoSe("yyyy-MM-dd hh:mm:ss",this.startTime),
      endTime: this.helpService._dateFormatNoSe("yyyy-MM-dd hh:mm:ss",this.endTime)
    };
    if(this.query.startTime.length > 0 && this.query.endTime.length > 0){
      const queryString = this.helpService._queryObjToString(this.query);
      console.log('query:' + queryString);
      this.sellerBussinessService.downloadTabel(queryString).subscribe((result) => {
        this.showModal = false;
        if(result.code != 200){
          this.alertNumber++;
          this.alertMessage = result.msg;
          this.alertType = 'danger';
        }
      }, (error) => {
        this.showModal = false;
        this.alertNumber++;
        this.alertMessage = error;
        this.alertType = 'danger';
      });
    }else{
      this.showModal = false;
      this.alertNumber++;
      this.alertMessage = '查询时间为必填项';
      this.alertType = 'danger';
    }
  }
}
