import {Component, OnInit, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {CreateImageService} from './create-image.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.scss'],
  providers: [CreateImageService]
})
export class CreateImageComponent implements OnInit,AfterViewInit {
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


  constructor(private createImageService: CreateImageService, private router: Router,@Inject('help') private helpService) {
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

  //提交表单，构建新镜像
  onSubmit(){
    this.createImageService.createImg({}).subscribe((res: any) =>{
      if(res.code === "0"){
        alert("构建新镜像成功");
      }else{
        alert("构建新镜像失败");
      }
    });
  }
}
