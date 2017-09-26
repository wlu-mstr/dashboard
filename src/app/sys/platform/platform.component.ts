import { Component, OnInit } from '@angular/core';

import { PlatformService } from './platform.service';

@Component({
  selector: 'platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
  providers: [PlatformService]
})
export class PlatformComponent implements OnInit {

    public chart1 = {};
    public chart2 = {};
    public chart3 = {};
    public chart4 = {};
    public host: any;
    public hostCur:any;
    public hostTotal:any;
    public hostPercent:any;
    public cpu:any;
    public cpuCur:any;
    public cpuTotal:any;
    public cpuPercent:any;
    public memory:any;
    public memoryCur:any;
    public memoryTotal:any;
    public memoryPercent:any;
    public pv:any;

    public pageVisit: string;
    public dataVolumn: string;
    public hasPieChart: boolean;
    public hasBarChart: boolean;
    public hasLineChart: boolean;

    constructor(public platformService: PlatformService) {
    }


  ngOnInit() {

      this.hasPieChart = false;
      this.hasBarChart = false;
      this.hasLineChart = false;

    let param = {
      company_account: 'test2017',
      login_name: 'test2017',
      password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'
    };
    let _this = this;

    this.platformService.login(param).subscribe(
        res => {
        _this.refresh();
        setInterval(function () {
          _this.refresh();
        }, 1000 * 60 * 60);
      },
        error => {
        console.log(error);
      }
    );

  }

  refresh(){
    this.platformService.getPlatformInfo({}).subscribe(
        res => {

        let result =  res.retbody.getPlatformInfo;

        this.hasPieChart = true;
        this.hasBarChart = true;
        this.hasLineChart = true;

        this.host = result.host;
        this.hostCur = result.host.cur;
        this.hostTotal = result.host.total;
        this.hostPercent = result.host.percent;
        this.cpu = result.cpu;
        this.cpuCur = result.cpu.cur;
        this.cpuTotal = result.cpu.total;
        this.cpuPercent = result.cpu.percent;
        this.memory = result.memory;
        this.memoryCur = result.memory.cur;
        this.memoryTotal = result.memory.total;
        this.memoryPercent = result.memory.percent;
        this.pageVisit = result.pv.today;
        this.dataVolumn = result.dataVolumn;

        let option1 = {
          series: [{
            type: 'liquidFill',
            data: [this.host.cur/this.host.total]
          }]
        };
        this.chart1 = option1;

        let option2 = {
          series: [{
            type: 'liquidFill',
            data: [this.cpu.cur/this.cpu.total]
          }]
        };
        this.chart2 = option2;

        let option3 = {
          series: [{
            type: 'liquidFill',
            data: [this.memory.cur/this.memory.total]
          }]
        };
        this.chart3 = option3;


        this.chart4 = {
          title: {
            text: '',
            subtext: '',
            x:"center"
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} 次'
            }
          },
          series: [
            {
              name: '访问量',
              type: 'line',
              data: [11, 11, 15, 13, 12, 13, 10,123,100,99,66,199]
            }

          ]
        };

      },
        error => {
        console.log('22222');
        console.log(error); }
    );
  }
}
