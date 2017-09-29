import { Component, OnInit } from '@angular/core';

import { PlatformService } from './platform.service';

declare var echarts;

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
    let _self = this;

    this.platformService.getPlatformInfo({}).subscribe(
        res => {
        res = res.retbody.getPlatformInfo;
        this.hasPieChart = true;
        this.hasBarChart = true;
        this.hasLineChart = true;

        this.host = res.host;
        this.hostCur = res.host.usage;
        this.hostTotal = res.host.total;
        this.hostPercent = res.host.percent;
        this.cpu = res.CPU;
        this.cpuCur = res.CPU.usage;
        this.cpuTotal = res.CPU.total;
        this.cpuPercent = res.CPU.percent;
        this.memory = res.Memory;
        this.memoryCur = res.Memory.usage;
        this.memoryTotal = res.Memory.total;
        this.memoryPercent = res.Memory.percent;
        this.pageVisit = res.pv.today;
        this.dataVolumn = res.DataVolume;


        let option1 = {
          series: [{
            type: 'liquidFill',
            label: {
              normal: {
                color:'#000000',
                fontSize: 30
              }
            },
            data: [{
              value: this.toPoint(this.hostPercent),
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#D1E9FA'
                  }, {
                    offset: 1,
                    color: '#1792E5'
                  }])
                }
              }
            }],
            outline: {
              show: false
            }
          }],

        };
        this.chart1 = option1;

        let option2 = {
          series: [{
            type: 'liquidFill',
            label: {
              normal: {
                color:'#000000',
                fontSize: 30
              }
            },
            data: [{
              value: this.toPoint(this.cpuPercent),
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#D1E9FA'
                  }, {
                    offset: 1,
                    color: '#1792E5'
                  }])
                }
              }
            }],
            outline: {
              show: false
            }
          }],
        };
        this.chart2 = option2;

        let option3 = {
          series: [{
            type: 'liquidFill',
            label: {
              normal: {
                color:'#000000',
                fontSize: 30
              }
            },
            data: [{
              value: this.toPoint(this.memoryPercent),
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#D1E9FA'
                  }, {
                    offset: 1,
                    color: '#1792E5'
                  }])
                }
              }
            }],
            outline: {
              show: false
            },
          }],

        };
        this.chart3 = option3;

        let orderNums = res.pv.lastMonth;
        var orderxAxis = [];
        var orderSeries = [];
        orderNums.forEach(function(item){
          orderSeries.push(item.value.split("'").join(""));
          var date = _self.platformService.monthInEn(item.date);
          orderxAxis.push(date);
        });

        this.chart4 = {
          grid:{
            left:"5%",
            top:"20%",
            height:"50%"
          },
          title: {
            text: '',
            subtext: '',
            x:"center"
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            axisLabel: {color: '#808080'},
            axisLine: {show: false},
            axisTick: {show: false},
            nameTextStyle: {
              //color:'#fff',
            },
            /*axisLabel: {
             interval: 0,
             rotate: 30
             },*/
            type: 'category',
            boundaryGap: false,
            data: orderxAxis
            //data:arr3
          },

          yAxis : [
            {
              axisLine: {show: false},
              axisTick: {show: false},
              type : 'value',
              //name : '%',
              axisLabel : {
                formatter: '{value}',
                textStyle: {
                  color: '#808080'
                }
              }
            }
          ],
          series: [
            {
              name: 'Page Visit',
              type: 'line',
              lineStyle:{
                normal:{
                  color:'#8bc9f2'
                }
              },
              data: orderSeries,
              symbol: 'none'
            }

          ]
        };
      },
        error => {
        console.log(error); }
    );
  }

  // 百分数转成小数
  toPoint(percent){
      var str=percent.replace("%","");
      str= str/100;
      return str;
  }
}
