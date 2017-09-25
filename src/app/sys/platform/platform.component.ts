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

      this.platformService.getInfo({}).subscribe(
              res => {
                  this.hasPieChart = true;
                  this.hasBarChart = true;
                  this.hasLineChart = true;

                this.host = res.host;
                this.hostCur = res.host.cur;
                this.hostTotal = res.host.total;
                this.hostPercent = res.host.percent;
                this.cpu = res.cpu;
                this.cpuCur = res.cpu.cur;
                this.cpuTotal = res.cpu.total;
                this.cpuPercent = res.cpu.percent;
                this.memory = res.memory;
                this.memoryCur = res.memory.cur;
                this.memoryTotal = res.memory.total;
                this.memoryPercent = res.memory.percent;
                this.pageVisit = res.pv.today;
                this.dataVolumn = res.dataVolumn;

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
