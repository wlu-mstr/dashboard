import { Component, OnInit } from '@angular/core';

import { SysMonitorService } from './sys-monitor.service';

@Component({
  selector: 'sys-monitor',
  templateUrl: './sys-monitor.component.html',
  styleUrls: ['./sys-monitor.component.scss'],
  providers: [SysMonitorService]
})
export class SysMonitorComponent implements OnInit {

  public p1Chart = {};
  public p2Chart = {};
  public p3Chart = {};
  public pie4Chart = {};
  public line5Chart = {};
  public line6Chart = {};
  public line7Chart = {};
  public bar8Chart = {};
  public line9Chart = {};
  public bar10Chart = {};

  public hasP1Chart: boolean;
  public hasP2Chart: boolean;
  public hasP3Chart: boolean;
  public hasPie4Chart: boolean;
  public hasLine5Chart: boolean;
  public hasLine6Chart:boolean;
  public hasLine7Chart: boolean;
  public hasBar8Chart: boolean;
  public hasLine9Chart:boolean;
  public hasBar10Chart: boolean;

  constructor(public sysMonitorService: SysMonitorService) {
  }


  ngOnInit() {

    this.hasP1Chart = false;
    this.hasP2Chart = false;
    this.hasP3Chart = false;
    this.hasPie4Chart = false;
    this.hasLine5Chart = false;
    this.hasLine6Chart = false;
    this.hasLine7Chart = false;
    this.hasBar8Chart = false;
    this.hasLine9Chart = false;
    this.hasBar10Chart = false;

    let param = {
      company_account: 'test2017',
      login_name: 'test2017',
      password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'
    };
    let _this = this;

    this.sysMonitorService.login(param).subscribe(
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

  refresh()
  {
    console.log('aaa')

    this.sysMonitorService.getUserInfo({}).subscribe(
        res => {
          let result =  res.retbody.getUserInfo;
        this.hasP1Chart = true;
        this.hasP2Chart = true;
        this.hasP3Chart = true;
        this.hasPie4Chart = true;
        this.hasLine5Chart = true;
        this.hasLine6Chart = true;


        let userQty = result.userQty;
        let activeUser = result.activeUser;
        let RegisteredUser = result.RegisteredUser;
        this.p1Chart = {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          /*lineStyle: {
           color: 'rgba(255, 255, 255, 0.3)'
           },*/
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(0,0 ,0 ,0 )'
              }
            }
          },
          //backgroundColor: '#404a59',
          title: {
            text: 'Online User',
            subtext: userQty[0],
            left: 120,
            //center: ['60%', '55%'],
            top: 'center',
            subtextStyle: {
              fontSize: [15],
              color: ['#FAFAFA '],

            },
            textStyle: {
              fontSize: [7],
              color: ['#FAFAFA '],
              fontWeight: ['lighter'],
            },
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            position: [10, 10],
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            //data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series: [
            {
              name: 'User',
              type: 'pie',
              radius: '50%',
              center: ['27%', '55%'],
              //left: 'left',
              data: [

                {
                  value: userQty[0],
                  name: 'Online User',
                  tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                  },
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  //selected: true,
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      color: ['#3398DB'],
                      //color:['#3398DB','#C3C3DB'],

                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                },
                {
                  value: userQty[1],
                  name: 'Downline User',
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  tooltip: {
                    trigger: 'item',
                    position: [10, 10],
                    formatter: "{b} : {c} ({d}%)"
                  },
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      //color:['#3398DB'],
                      color: ['#696969'],
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]


        };
        this.p2Chart = {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          /*lineStyle: {
           color: 'rgba(255, 255, 255, 0.3)'
           },*/
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(0,0 ,0 ,0 )'
              }
            }
          },
          //backgroundColor: '#404a59',
          title: {
            text: 'Active User',
            subtext: userQty[2],
            left: 120,
            top: 'center',
            //bottom:['550%'],
            /* padding: [
             5,  // 上
             10, // 右
             155,  // 下
             10, // 左
             ],*/
            subtextStyle: {
              fontSize: [15],
              color: ['#FAFAFA '],

            },
            textStyle: {
              fontSize: [7],
              color: ['#FAFAFA '],
              fontWeight: ['lighter'],
            },
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            position: [7, 10],
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            //data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series: [
            {
              name: 'User',
              type: 'pie',
              radius: '50%',
              center: ['27%', '55%'],
              //center: ['15%', '50%'],
              //left: 'left',
              data: [
                {
                  value: userQty[2],
                  name: 'Active User',
                  tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                  },
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  //selected: true,
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      color: ['#3398DB'],
                      //color:['#3398DB','#C3C3DB'],

                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                },
                {
                  value: userQty[3],
                  name: 'Unactive User',
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  tooltip: {
                    trigger: 'item',
                    position: [10, 10],
                    formatter: "{b} : {c} ({d}%)"
                  },
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      //color:['#3398DB'],
                      color: ['#696969'],
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ],
              itemStyle: {


                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        this.p3Chart = {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          /*lineStyle: {
           color: 'rgba(255, 255, 255, 0.3)'
           },*/
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(0,0 ,0 ,0 )'
              }
            }
          },
          //backgroundColor: '#404a59',
          title: {
            text: 'Register User',
            subtext: userQty[4],
            left: 120,
            top: 'center',
            /* padding: [
             5,  // 上
             10, // 右
             155,  // 下
             10, // 左
             ],*/
            subtextStyle: {
              fontSize: [15],
              color: ['#FAFAFA '],

            },
            textStyle: {
              fontSize: [7],
              color: ['#FAFAFA '],
              fontWeight: ['lighter'],
            },
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            //position: ['50%', '50%'],
            position: [10, 10],
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            //data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series: [
            {
              name: 'User',
              type: 'pie',
              radius: '50%',
              center: ['27%', '55%'],
              //center: ['15%', '50%'],
              //left: 'left',
              data: [
                //{value: 335, name: ''},
                //{value: 310, name: ''},
                //{value: 234, name: ''},
                {
                  value: userQty[4],
                  name: 'Register User',
                  tooltip: {
                    trigger: 'item',
                    position: [10, 10],
                    formatter: "{b} : {c} ({d}%)"
                  },
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  selected: true,
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      color: ['#3398DB'],
                      //color:['#3398DB','#C3C3DB'],

                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                },
                {
                  value: 0,
                  name: 'Other User',
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  tooltip: {
                    position: [20, 10],
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                  },
                  itemStyle: {
                    normal: {
                      // 设置扇形的颜色
                      //color:['#3398DB'],
                      color: ['#696969'],
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ],
              itemStyle: {


                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        var data = result.location;
        var geoCoordMap = {
          '海门': [121.15, 31.89],
          '鄂尔多斯': [109.781327, 39.608266],
          '招远': [120.38, 37.35],
          '舟山': [122.207216, 29.985295],
          '齐齐哈尔': [123.97, 47.33],
          '盐城': [120.13, 33.38],
          '赤峰': [118.87, 42.28],
          '青岛': [120.33, 36.07],
          '乳山': [121.52, 36.89],
          '金昌': [102.188043, 38.520089],
          '泉州': [118.58, 24.93],
          '莱西': [120.53, 36.86],
          '日照': [119.46, 35.42],
          '胶南': [119.97, 35.88],
          '南通': [121.05, 32.08],
          '拉萨': [91.11, 29.97],
          '云浮': [112.02, 22.93],
          '梅州': [116.1, 24.55],
          '文登': [122.05, 37.2],
          '上海': [121.48, 31.22],
          '攀枝花': [101.718637, 26.582347],
          '威海': [122.1, 37.5],
          '承德': [117.93, 40.97],
          '厦门': [118.1, 24.46],
          '汕尾': [115.375279, 22.786211],
          '潮州': [116.63, 23.68],
          '丹东': [124.37, 40.13],
          '太仓': [121.1, 31.45],
          '曲靖': [103.79, 25.51],
          '烟台': [121.39, 37.52],
          '福州': [119.3, 26.08],
          '瓦房店': [121.979603, 39.627114],
          '即墨': [120.45, 36.38],
          '抚顺': [123.97, 41.97],
          '玉溪': [102.52, 24.35],
          '张家口': [114.87, 40.82],
          '阳泉': [113.57, 37.85],
          '莱州': [119.942327, 37.177017],
          '湖州': [120.1, 30.86],
          '汕头': [116.69, 23.39],
          '昆山': [120.95, 31.39],
          '宁波': [121.56, 29.86],
          '湛江': [110.359377, 21.270708],
          '揭阳': [116.35, 23.55],
          '荣成': [122.41, 37.16],
          '连云港': [119.16, 34.59],
          '葫芦岛': [120.836932, 40.711052],
          '常熟': [120.74, 31.64],
          '东莞': [113.75, 23.04],
          '河源': [114.68, 23.73],
          '淮安': [119.15, 33.5],
          '泰州': [119.9, 32.49],
          '南宁': [108.33, 22.84],
          '营口': [122.18, 40.65],
          '惠州': [114.4, 23.09],
          '江阴': [120.26, 31.91],
          '蓬莱': [120.75, 37.8],
          '韶关': [113.62, 24.84],
          '嘉峪关': [98.289152, 39.77313],
          '广州': [113.23, 23.16],
          '延安': [109.47, 36.6],
          '太原': [112.53, 37.87],
          '清远': [113.01, 23.7],
          '中山': [113.38, 22.52],
          '昆明': [102.73, 25.04],
          '寿光': [118.73, 36.86],
          '盘锦': [122.070714, 41.119997],
          '长治': [113.08, 36.18],
          '深圳': [114.07, 22.62],
          '珠海': [113.52, 22.3],
          '宿迁': [118.3, 33.96],
          '咸阳': [108.72, 34.36],
          '铜川': [109.11, 35.09],
          '平度': [119.97, 36.77],
          '佛山': [113.11, 23.05],
          '海口': [110.35, 20.02],
          '江门': [113.06, 22.61],
          '章丘': [117.53, 36.72],
          '肇庆': [112.44, 23.05],
          '大连': [121.62, 38.92],
          '临汾': [111.5, 36.08],
          '吴江': [120.63, 31.16],
          '石嘴山': [106.39, 39.04],
          '沈阳': [123.38, 41.8],
          '苏州': [120.62, 31.32],
          '茂名': [110.88, 21.68],
          '嘉兴': [120.76, 30.77],
          '长春': [125.35, 43.88],
          '胶州': [120.03336, 36.264622],
          '银川': [106.27, 38.47],
          '张家港': [120.555821, 31.875428],
          '三门峡': [111.19, 34.76],
          '锦州': [121.15, 41.13],
          '南昌': [115.89, 28.68],
          '柳州': [109.4, 24.33],
          '三亚': [109.511909, 18.252847],
          '自贡': [104.778442, 29.33903],
          '吉林': [126.57, 43.87],
          '阳江': [111.95, 21.85],
          '泸州': [105.39, 28.91],
          '西宁': [101.74, 36.56],
          '宜宾': [104.56, 29.77],
          '呼和浩特': [111.65, 40.82],
          '成都': [104.06, 30.67],
          '大同': [113.3, 40.12],
          '镇江': [119.44, 32.2],
          '桂林': [110.28, 25.29],
          '张家界': [110.479191, 29.117096],
          '宜兴': [119.82, 31.36],
          '北海': [109.12, 21.49],
          '西安': [108.95, 34.27],
          '金坛': [119.56, 31.74],
          '东营': [118.49, 37.46],
          '牡丹江': [129.58, 44.6],
          '遵义': [106.9, 27.7],
          '绍兴': [120.58, 30.01],
          '扬州': [119.42, 32.39],
          '常州': [119.95, 31.79],
          '潍坊': [119.1, 36.62],
          '重庆': [106.54, 29.59],
          '台州': [121.420757, 28.656386],
          '南京': [118.78, 32.04],
          '滨州': [118.03, 37.36],
          '贵阳': [106.71, 26.57],
          '无锡': [120.29, 31.59],
          '本溪': [123.73, 41.3],
          '克拉玛依': [84.77, 45.59],
          '渭南': [109.5, 34.52],
          '马鞍山': [118.48, 31.56],
          '宝鸡': [107.15, 34.38],
          '焦作': [113.21, 35.24],
          '句容': [119.16, 31.95],
          '北京': [116.46, 39.92],
          '徐州': [117.2, 34.26],
          '衡水': [115.72, 37.72],
          '包头': [110, 40.58],
          '绵阳': [104.73, 31.48],
          '乌鲁木齐': [87.68, 43.77],
          '枣庄': [117.57, 34.86],
          '杭州': [120.19, 30.26],
          '淄博': [118.05, 36.78],
          '鞍山': [122.85, 41.12],
          '溧阳': [119.48, 31.43],
          '库尔勒': [86.06, 41.68],
          '安阳': [114.35, 36.1],
          '开封': [114.35, 34.79],
          '济南': [117, 36.65],
          '德阳': [104.37, 31.13],
          '温州': [120.65, 28.01],
          '九江': [115.97, 29.71],
          '邯郸': [114.47, 36.6],
          '临安': [119.72, 30.23],
          '兰州': [103.73, 36.03],
          '沧州': [116.83, 38.33],
          '临沂': [118.35, 35.05],
          '南充': [106.110698, 30.837793],
          '天津': [117.2, 39.13],
          '富阳': [119.95, 30.07],
          '泰安': [117.13, 36.18],
          '诸暨': [120.23, 29.71],
          '郑州': [113.65, 34.76],
          '哈尔滨': [126.63, 45.75],
          '聊城': [115.97, 36.45],
          '芜湖': [118.38, 31.33],
          '唐山': [118.02, 39.63],
          '平顶山': [113.29, 33.75],
          '邢台': [114.48, 37.05],
          '德州': [116.29, 37.45],
          '济宁': [116.59, 35.38],
          '荆州': [112.239741, 30.335165],
          '宜昌': [111.3, 30.7],
          '义乌': [120.06, 29.32],
          '丽水': [119.92, 28.45],
          '洛阳': [112.44, 34.7],
          '秦皇岛': [119.57, 39.95],
          '株洲': [113.16, 27.83],
          '石家庄': [114.48, 38.03],
          '莱芜': [117.67, 36.19],
          '常德': [111.69, 29.05],
          '保定': [115.48, 38.85],
          '湘潭': [112.91, 27.87],
          '金华': [119.64, 29.12],
          '岳阳': [113.09, 29.37],
          '长沙': [113, 28.21],
          '衢州': [118.88, 28.97],
          '廊坊': [116.7, 39.53],
          '菏泽': [115.480656, 35.23375],
          '合肥': [117.27, 31.86],
          '武汉': [114.31, 30.52],
          '大庆': [125.03, 46.58]
        };

        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };

        var option = {
          //backgroundColor: '#404a59',
          title: {
            text: '',
            subtext: '',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series: [
            {
              name: '',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: convertData(data),
              symbolSize: function (val) {
                return val[2] / 10;
              },
              label: {
                normal: {
                  //formatter: '{b}',
                  formatter: function (params) {
                    return params.name + '\n' +
                      params.value[2];
                  },
                  /*formatter: ['{b}',
                   '{c}'
                   ].join('\n'),*/
                  position: 'center',
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#ddb926'
                }
              }
            }
          ]
        };
        this.pie4Chart = option;
        var arr1 = [];
        activeUser.forEach(function(item){
          arr1.push({data: item.data})
        })
        this.line5Chart = {
          title: {
            text: '',
            subtext: '',
            x: "center"
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            //data:arr1

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
              //data: [0, 1, 15, 13, 12, 13, 10,123,100,99,66,199]
              data: activeUser
            }

          ]
        };

        this.line6Chart = {
          title: {
            text: '',
            subtext: '',
            x: "center"
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,

            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
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
              //data: [0, 1, 15, 13, 12, 13, 10,123,100,99,66,199]
              data: RegisteredUser
            }

          ]
        };
      },
        error => {
        console.log('22222');
        console.log(error);
      }
    );

    this.sysMonitorService.getTradeOrderInfo({}).subscribe(
        res => {
        let result =  res.retbody.getTradeOrderInfo;
        this.hasLine7Chart = true;
        this.hasBar8Chart = true;
        this.hasLine9Chart = true;
        this.hasBar10Chart = true;

        let trade = result.trade;
        let tradetop = result.tradeTop;
        let total = result.trade.tradeTop[0].total;
        let total_price = result.trade.tradeTop[0].total_price;
        let order = result.order.orderTop[0].total;
        let total_num = result.order.orderTop[0].total_num;
        var appusage_data = [
          {
            name: total[4].percent + " " + total[4].value,
            value: total[4].value
          }, {
            name: total[3].percent + " " + total[3].value,
            value: total[3].value
          }, {
            name: total[2].percent + " " + total[4].value,
            value: total[2].value
          }, {
            name: total[1].percent + " " + total[4].value,
            value: total[1].value
          }, {
            name: total[0].percent + " " + total[0].value,
            value: total[0].value
          }
        ];
        var option1 = {
          "title": {
            "text": total_price,
            "textStyle": {
              "color": "#FFFFFF",
              "fontWeight": "bold",
              "fontSize": 30
            },
            "top": "4%",
            "left": 'center'
          },
          "tooltip": {
            "trigger": "axis",
            "axisPointer": { // 坐标轴指示器，坐标轴触发有效
              "type": "shadow" // 默认为直线，可选为："line" | "shadow"
            }
          },
          "grid": {
            "left": "3%",
            "right": "10%",
            "bottom": "3%",
            "containLabel": true
          },
          "yAxis": [{
            "type": "category",
            "data": ["Top5" + " " + total[4].name, "Top4" + " " + total[3].name, "Top3" + " " + total[2].name, "Top2" + " " + total[1].name, "Top1" + " " + total[0].name],
            "axisLine": {
              "show": false
            },
            "axisTick": {
              "show": false,
              "alignWithLabel": true
            },
            "axisLabel": {
              "textStyle": {
                "color": "#ffb069"
              }
            }
          }],
          "xAxis": [{
            "type": "value",
            "axisLine": {
              "show": false
            },
            "axisTick": {
              "show": false
            },
            "axisLabel": {
              "show": false
            },
            "splitLine": {
              "show": false
            }
          }],

          "series": [{
            "name": "应用使用率",
            "type": "bar",
            "data": appusage_data,
            "barCategoryGap": "35%",
            "label": {
              "normal": {
                "show": true,
                "position": "right",
                "formatter": function (params) {
                  return params.data.name;
                },
                "textStyle": {
                  //"color": "#bcbfff"
                  "color": "#bcbfff" //color of value
                }
              }
            },
            "itemStyle": {
              "normal": {
                "color": "rgba(241,89,79,0.50)"
              }
            }
          }]
        };
        this.bar8Chart = option1;
        var appusage_data10 = [
          {
            name: order[4].percent + " " + order[4].value,
            value: order[4].value
          }, {
            name: order[3].percent + " " + order[3].value,
            value: order[3].value
          }, {
            name: order[2].percent + " " + order[4].value,
            value: order[2].value
          }, {
            name: order[1].percent + " " + order[4].value,
            value: order[1].value
          }, {
            name: order[0].percent + " " + order[0].value,
            value: order[0].value
          }
        ];
        //10-dishizhangtu
        var option10 = {
          "title": {
            "text": total_num,
            "textStyle": {
              "color": "#FFFFFF",
              "fontWeight": "bold",
              "fontSize": 30
            },
            "top": "4%",
            "left": 'center'
          },
          "tooltip": {
            "trigger": "axis",
            "axisPointer": { // 坐标轴指示器，坐标轴触发有效
              "type": "shadow" // 默认为直线，可选为："line" | "shadow"
            }
          },
          "grid": {
            "left": "3%",
            "right": "10%",
            "bottom": "3%",
            "containLabel": true
          },
          "yAxis": [{
            "type": "category",
            "data": ["Top5" + " " + order[4].name, "Top4" + " " + order[3].name, "Top3" + " " + order[2].name, "Top2" + " " + order[1].name, "Top1" + " " + order[0].name],
            "axisLine": {
              "show": false
            },
            "axisTick": {
              "show": false,
              "alignWithLabel": true
            },
            "axisLabel": {
              "textStyle": {
                "color": "#ffb069"
              }
            }
          }],
          "xAxis": [{
            "type": "value",
            "axisLine": {
              "show": false
            },
            "axisTick": {
              "show": false
            },
            "axisLabel": {
              "show": false
            },
            "splitLine": {
              "show": false
            }
          }],

          "series": [{
            "name": "应用使用率",
            "type": "bar",
            "data": appusage_data10,
            "barCategoryGap": "35%",
            "label": {
              "normal": {
                "show": true,
                "position": "right",
                "formatter": function (params) {
                  return params.data.name;
                },
                "textStyle": {
                  //"color": "#bcbfff"
                  "color": "#bcbfff" //color of value
                }
              }
            },
            "itemStyle": {
              "normal": {
                "color": "rgba(241,89,79,0.50)"
              }
            }
          }]
        };
        this.bar10Chart = option10;
        /* this.line5Chart = {
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
         //data: [0, 1, 15, 13, 12, 13, 10,123,100,99,66,199]
         data:activeUser
         }

         ]
         };
         this.line6Chart= {
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
         //data: [0, 1, 15, 13, 12, 13, 10,123,100,99,66,199]
         data:RegisteredUser
         }

         ]
         };*/
        this.line7Chart = {
          title: {
            text: 'Today',
            subtext: trade.tradeToday,
            //bottom:['550%'],
            /* padding: [
             5,  // 上
             10, // 右
             155,  // 下
             10, // 左
             ],*/
            subtextStyle: {
              fontSize: [20],
              color: ['#FAFAFA '],

            },
            textStyle: {
              fontSize: [10],
              color: ['#FAFAFA '],
              fontWeight: ['lighter'],
            },
            x: 'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
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
              //data: [0, 0, 0, 0, 0, 1, 1,12,10,9,6,9]
              data: trade.tradeNums
            }

          ]
        };
        this.line9Chart = {
          title: {
            text: 'Today',
            subtext: result.order.orderToday,
            //subtext:trade.tradeToday,
            //bottom:['550%'],
            /* padding: [
             5,  // 上
             10, // 右
             155,  // 下
             10, // 左
             ],*/
            subtextStyle: {
              fontSize: [20],
              color: ['#FAFAFA '],

            },
            textStyle: {
              fontSize: [10],
              color: ['#FAFAFA '],
              fontWeight: ['lighter'],
            },
            x: 'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
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
              //data: [0, 0, 0, 0, 0, 1, 1,12,10,9,6,9]
              //data:order.orderNums
              data: result.order.orderNums
            }

          ]
        }


      },
        error => {
        console.log('22222');
        console.log(error);
      }
    );

  }
}

