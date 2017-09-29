import { Component, OnInit,Inject } from '@angular/core';
import { PhoneDetailsService } from './service/phone-details.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.scss'],
  providers:[PhoneDetailsService]
})
export class PhoneDetailsComponent implements OnInit {

  objs: any = [];
  alertMessage: string;
  alertType: string;
  //查询条件
  startTime:Date;
  endTime:Date;
  manualFlag:string = '';
  incomeNumber:string = '';
  serviceType:string = '';
  totalItems: number = 1;
  currentPage: number = 1;
  //判定alert输入值变化
  alertNumber = 1;
  //蒙层显隐
  showModal = false;

  query: any;
  zh:any;
  constructor(private phoneDetailsService:PhoneDetailsService,@Inject('help') private helpService) { }

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


  //获取列表
  getSellerList() {
    this.showModal = true;
    this.query = {
      startTime: this.helpService._dateFormatNoSe("yyyy-MM-dd hh:mm:ss",this.startTime),
      endTime: this.helpService._dateFormatNoSe("yyyy-MM-dd hh:mm:ss",this.endTime),
      manualFlag:this.manualFlag,
      incomeNumber:this.incomeNumber,
      serviceType:this.serviceType,
      pageSize:10,
      pageNumber:this.currentPage
    };
    if(this.query.startTime.length > 0 && this.query.endTime.length > 0){
      const queryString = this.helpService._queryObjToString(this.query);
      console.log('query:' + queryString);
      this.phoneDetailsService.getList(queryString).subscribe((result) => {
        this.showModal = false;
        if(result.code == '200'){
          this.objs = result.data;
          this.currentPage = result.pageNumber;
          this.totalItems = result.totalCount
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


  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.currentPage = event.page;
    this.getSellerList();
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
      this.phoneDetailsService.downloadTabel(queryString).subscribe((result) => {
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
