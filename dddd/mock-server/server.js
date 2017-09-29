var express = require('express');
var app = express();
var port = 8080;

var cors = require('cors');
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/*', function (req, res, next) {
  res.header("authentication", "eyJhbGciOiJIUzI1NiJ9.eyJsLWxldiI6IkhtYWNTSEEyNTYiLCJpc3MiOiJjNjA0NGU4YS01ODQ0LTExZTYtODY2My1hMDk5OWIwOGE3N2IiLCJleHAiOjE0OTEwMzMxMDIsImp0aSI6ImUwNDcyNGJmLWU0ODAtNGVkZS1iY2IxLTM3NjY0ZWFhYmFmNiJ9.5VnZ4nRpqKv6NC2QfggkjetTm2zAVVj5zZkPteHjBrQ");
  next();
})

app.get('/api/showcase/resources/data/countries',function(req,res){
  var countries = [
    {
      id:1,
      name:'南京'
    },
    {
      id:2,
      name:'上海'
    }
  ];
  res.json(countries);
});


app.get('/api/flows/:id',function(req,res){
  this.tabItems = [
    {
      name:'seller详情',
      details:[
        {
          name:'商户名称',
          value:'国美'
        },
        {
          name:'地址',
          value:'江苏省南京市鼓楼区'
        },
        {
          name:'电话',
          value:'18795905345'
        }
      ]
    },
    {
      name:'job详情'
    },
    {
      name:'外部数据'
    }
  ];
  res.json(tabItems);
});

app.get('/api/flows',function(req,res){
  var flows = [
    {
      time:"2017-03-19 16:14:50",
      index:1,
      name:"开始申请",
      actions:
        [
          {
            seqNo:1,
            name:"手机登录"
          },
          {
            seqNo:2,
            name:"拍照"  //照片信息
          },
          {
            seqNo:3,
            name:"资料上传" //基本信息
          }
        ]
    },
    {
      time:"2017-03-19 16:21:07",
      index:2,
        name:"后台审核-预审",
      actions:
      [
        {
          seqNo:1,
          name:"人证一致"  //第三方数据源信息
        },
        {
          seqNo:2,
          name:"信用黑名单" //第三方数据源信息
        },
        {
          seqNo:3,
          name:"内部黑名单" //第三方数据源信息
        }
      ]
    },
	{
    time:"2017-03-19 16:21:27",
    index:3,
      name:"用户详情",
    actions:
    [
      {
        seqNo:1,
        name:"职业信息" //身份信息
      },
      {
        seqNo:2,
        name:"本人信息" //申请信息
      },
      {
        seqNo:3,
        name:"联系人信息" //社会关系
      },
      {
        seqNo:4,
        name:"社交帐号" //引用信息
      },
      {
        seqNo:5,
        name:"手机认证"
      }
    ]
  },
	{
    time:"2017-03-19 16:33:29",
    index:4,
      name:"后台审核-终审",
    actions:
    [
      {
        seqNo:1,
        name:"签单审核" //驻场签单
      },
      {
        seqNo:2,
        name:"QQjob审核" //人工job信息
      },
      {
        seqNo:3,
        name:"微信job审核"  //人工job信息
      },
      {
        seqNo:4,
        name:"医美job审核"  //医美专家job信息
      },
      {
        seqNo:4,
        name:"中介黑名单"
      },
      {
        seqNo:5,
        name:"交易监控审核"
      }
    ]
  },
	{
    time:"2017-03-19 16:39:50",
    index:5,
      name:"项目确认",
    actions:
    [
      {
        seqNo:1,
        name:"分期信息"  //基本信息
      },
      {
        seqNo:2,
        name:"手术同意书" //人工job信息
      },
      {
        seqNo:3,
        name:"储蓄卡"
      },
      {
        seqNo:4,
        name:"项目确认"
      }
    ]
  },
	{
    time:"2017-03-19 16:48:07",
    index:6,
      name:"客户放款",
    actions:
    [
      {
        seqNo:1,
        name:"完成放款"
      }
    ]
  }
  ];
  res.json(flows);
});

app.get('/api/orders/:type',function(req,res){
  var orders = [
    {
      "appId":"f2e7c495-56de-4509-9c85-56de989eb18b",
      "userAppId":"894a4497-7497-425d-91e4-848860446cd9",
      "name":"小明",
      "mobile":"20195765821",
      "items":[
        {
          "jobName":"CheckMedicalExpert",
          "jobDesc":"医美专家job",
          "times":[
            {
              "startTime":1495765899000,
              "endTime":null
            }
          ]
        },
        {
          "jobName":"CheckIdCardBackImg",
          "jobDesc":"检查身份证反面照",
          "times":[
            {
              "startTime":1495765889000,
              "endTime":null
            }
          ]
        },
        {
          "jobName":"CheckUserPhoto",
          "jobDesc":"检查现场照",
          "times":[
            {
              "startTime":1495765889000,
              "endTime":null
            }
          ]
        },
        {
          "jobName":"CheckIdCardFrontImg",
          "jobDesc":"检查身份证正面照",
          "times":[
            {
              "startTime":1495765889000,
              "endTime":null
            }
          ]
        },
        {
          "jobName":"CheckWeChatAvatar",
          "jobDesc":"微信头像校验",
          "times":[
            {
              "startTime":1495765924000,
              "endTime":null
            }
          ]
        }
      ]
    },
    {
      "appId":"d6b0bce3-2618-473e-b4b6-c89df773b1df",
      "userAppId":"e0a8fdc7-a6ef-4d10-8f41-0362dda440bb",
      "name":"王亚轩",
      "mobile":"18108093377",
      "items":[
        {
          "jobName":"CheckIdCardBackImg",
          "jobDesc":"检查身份证反面照",
          "times":[
            {
              "startTime":1495769783000,
              "endTime":null
            }
          ]
        },
        {
          "jobName":"CheckUserPhoto",
          "jobDesc":"检查现场照",
          "times":[
            {
              "startTime":1495769783000,
              "endTime":null
            }
          ]
        },
        {
          "jobName":"CheckIdCardFrontImg",
          "jobDesc":"检查身份证正面照",
          "times":[
            {
              "startTime":1495769783000,
              "endTime":null
            }
          ]
        }
      ]
    },
    {
      "appId":"5ed34199-f1b3-4183-a000-a6a3d283c9f6",
      "userAppId":"db21e6f6-93ff-4efd-bb66-1b2a5ab3a9fd",
      "name":"青丽君",
      "mobile":"13524237166",
      "items":[
        {
          "jobName":"CheckMedicalExpert",
          "jobDesc":"医美专家job",
          "times":[
            {
              "startTime":1495770788000,
              "endTime":1495770794000
            }
          ]
        },
        {
          "jobName":"CheckIdCardBackImg",
          "jobDesc":"检查身份证反面照",
          "times":[
            {
              "startTime":1495769272000,
              "endTime":1495770698000
            }
          ]
        },
        {
          "jobName":"CheckUserPhoto",
          "jobDesc":"检查现场照",
          "times":[
            {
              "startTime":1495769272000,
              "endTime":1495770737000
            }
          ]
        },
        {
          "jobName":"CheckIdCardFrontImg",
          "jobDesc":"检查身份证正面照",
          "times":[
            {
              "startTime":1495769272000,
              "endTime":1495770788000
            }
          ]
        }
      ]
    },
    {
      "appId":"9aa7be78-0282-48cb-b3fb-afa7c860b2bd",
      "userAppId":"25094bf2-cde0-4efa-881d-3d069aa5abc9",
      "name":"袁祥梦",
      "mobile":"15311455883",
      "items":[
        {
          "jobName":"CheckMedicalExpert",
          "jobDesc":"医美专家job",
          "times":[
            {
              "startTime":1495770814000,
              "endTime":1495782489000
            }
          ]
        },
        {
          "jobName":"CheckIdCardBackImg",
          "jobDesc":"检查身份证反面照",
          "times":[
            {
              "startTime":1495770083000,
              "endTime":1495770713000
            }
          ]
        },
        {
          "jobName":"CheckUserPhoto",
          "jobDesc":"检查现场照",
          "times":[
            {
              "startTime":1495770083000,
              "endTime":1495770751000
            }
          ]
        },
        {
          "jobName":"CheckIdCardFrontImg",
          "jobDesc":"检查身份证正面照",
          "times":[
            {
              "startTime":1495770083000,
              "endTime":1495770814000
            }
          ]
        }
      ]
    },
    {
      "appId":"3681ead2-9d17-4275-b9bb-7591a18d4d4c",
      "userAppId":"eb07391e-d4c7-4f29-b1e2-c14a803c0f27",
      "name":"张继明",
      "mobile":"18621529129",
      "items":[

      ]
    },
    {
      "appId":"f023895a-44fe-44e2-8c5c-06d745f1e85b",
      "userAppId":"8f6e97af-b447-4728-a357-333bf3a7d15d",
      "name":"宋宏杨",
      "mobile":"18516194367",
      "items":[
        {
          "jobName":"CheckIdCardBackImg",
          "jobDesc":"检查身份证反面照",
          "times":[
            {
              "startTime":1495782507000,
              "endTime":null
            }
          ]
        },
        {
          "jobName":"CheckUserPhoto",
          "jobDesc":"检查现场照",
          "times":[
            {
              "startTime":1495782507000,
              "endTime":null
            }
          ]
        },
        {
          "jobName":"CheckIdCardFrontImg",
          "jobDesc":"检查身份证正面照",
          "times":[
            {
              "startTime":1495782507000,
              "endTime":null
            }
          ]
        }
      ]
    }
  ];
  res.json(orders);
})



app.get('/api/console/productconfigs',function(req,res){
  var productConfigs = [
    {
      id:1,
      date1:'2017-01-05',
      date2:'2017-02-06',
      status:'正在审核',
      posCode:'posCode1',
      posName:'posName1'
    },
    {
      id:2,
      date1:'2017-01-05',
      date2:'2017-02-06',
      status:'正在审核',
      posCode:'posCode2',
      posName:'posName2'
    }
  ]
  res.json(productConfigs);
});

app.get('/api/province',function(req,res){

  var productConfigs = [
    {
      name:'江苏',
      code:'jiangsu'
    },
    {
      name:'上海',
      code:'shanghai'
    }
  ]
  res.json(productConfigs);
});
app.get('/api/city',function(req,res){
  console.log(req.query.ProID);

    var productConfigs = [
      {
        name:'南京',
        code:'nanjin'
      },
      {
        name:'上海市',
        code:'shanghaishi'
      }
    ]
    res.json(productConfigs);


});
app.get('/api/country',function(req,res){
  var productConfigs = [
    {
      code:'gulouqu',
      name:'鼓楼区'
    },
    {
     name:'建邺区',
      code:'jianyequ'
    }
  ]
  res.json(productConfigs);
});

app.get('/api/application/dashboard', function (req, res) {
  var appDashboard = [
    {
      appId: "3be14da9-f1b0-404b-a5fb-2a2c21e0b6d5",
      userAppId: "98a79e69-1e15-45a7-a9ae-6a108db15e3b",
      name: "李玲玲",
      mobile: "13809027033",
      items: [
        {
          jobName: "CheckMedicalExpert",
          jobDesc: "医美专家job",
          times: [
            {
              startTime: 1491028855000,
              endTime: 1491028937000
            }
          ]
        }, {
          jobName: "CheckIdCardBackImg",
          jobDesc: "检查身份证反面照",
          times: [
            {
              startTime: 1491015558000,
              endTime: 1491028855000
            }]
        }, {
          jobName: "CheckUserPhoto",
          jobDesc: "检查现场照",
          times: [
            {
              startTime: 1491015558000,
              endTime: 1491027187000
            }
          ]
        }, {
          jobName: "CheckIdCardFrontImg",
          jobDesc: "检查身份证正面照",
          times: [
            {
              startTime: 1491015558000,
              endTime: 1491027164000
            }
          ]
        }]
    }
  ];

  res.json(appDashboard);
});

app.get('/api/merchant/pos/business/count', function (req, res) {
  var posCnt = {
    count: 1
  }
  res.json(posCnt);
});

app.get('/api/merchant/pos/business/list', function (req, res) {
  var posList = [
    {
      id: "09c56e83-6e71-11e6-98a0-1051721b36c9",
      name: "测试医院",
      address: "陆家嘴软件园",
      status: 1
    }
  ];

  res.json(posList);
});

app.get('/api/merchant/dealer/count', function (req, res) {
  var delaerCnt = {
    count: 200
  };

  res.json(delaerCnt);
})

app.get('/api/merchant/dealer/list', function (req, res) {
  var dealerList = [
    {
      id: 69,
      userId: "3e76749c-dbb6-459f-9734-fdbae93e27f2",
      storeId: "09c56e83-6e71-11e6-98a0-1051721b36c9",
      idname: "段定川",
      idnumber: "122323232",
      mobile: "13817138643",
      valid: true, "name": "测试医院"
    }
  ];

  res.json(dealerList);
})

app.post('/api/authenticate', function (req, res) {
  var user = {
    id: 1,
    login: "admin",
    authorities: ["QueryAllUser", "QuerySingleUser"],
    roles: ["ADMIN"]
  };
  res.json(user);
});

app.get('/api/merchant/area/proviceArea', function (req, res) {
  var areas = [
    {
      code: 110000,
      parentCode: 0,
      depth: 1,
      name: "北京市"
    }
  ];

  res.json(areas);
})

app.get('/api/merchant/area/childAreas', function (req, res) {
  var areas = [
    {
      code: 110001,
      parentCode: 0,
      depth: 1,
      name: "市辖区"
    }
  ];

  res.json(areas);
})

app.get('/api/merchant/pos/:posId/marketing', function (req, res) {
  // res.json(null);
  res.json({
    attachment: "http://www.starproject.cn/images/page3-img.png"
  });
})

app.get('/api/merchant/pos/detail', function (req, res) {
  var posDetail = {
    "longitude": "121.52705173912062",
    "latitude": "31.22012781434967",
    "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
    "name": "测试医院",
    "address": "陆家嘴软件园",
    "province": {"code": 310000, "parentCode": 0, "depth": 1, "name": "上海市"},
    "city": {"code": 310100, "parentCode": 310000, "depth": 2, "name": "市辖区"},
    "district": {"code": 310115, "parentCode": 310100, "depth": 3, "name": "浦东新区"},
    "usePrepaidCard": 0,
    "bankCard": {
      "accountNumber": "97020158000006923",
      "mobile": "13701941089",
      "accountType": 0,
      "accountName": "上海秦苍信息科技有限公司",
      "bankName": "浦东发展银行",
      "depositBank": "大宁支行",
      "idnumber": "",
      "merchantName": null,
      "branchBank": "上海分行"
    },
    "artificialPerson": {
      "idName": "shiqi",
      "idNumber": "330203198910140014",
      "mobile": "15921647171",
      "userId": "629a948a-bdf5-11e6-b4cd-8038bc0f0573"
    },
    "financeChief": {"idName": "测试财务", "idNumber": "87654321", "mobile": "13000000001", "userId": null},
    "s1List": [{
      "idName": "高智宏",
      "idNumber": "125441233654747",
      "mobile": "14523654411",
      "userId": "141c5482-4637-4708-9d90-5b2550244fc1"
    }, {
      "idName": "ewrwrwerwe",
      "idNumber": "3242342",
      "mobile": "234234234",
      "userId": "ac62bbc0-2a6b-4f5d-8bc1-10aa63654985"
    }],
    "adminUser": {
      "userId": "629a948a-bdf5-11e6-b4cd-8038bc0f0573",
      "username": "admin",
      "password": "$2a$10$z91RzGESHLWfW3pX4cFoRe.L5bnE4wa9hH2qHj0P4H96S2dKn5gPi",
      "valid": true
    }
  };

  res.json(posDetail);
})

app.get('/api/merchant/pos/:posId/riskFactor', function (req, res) {
  var riskFactor = {
    "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
    "rating": "C+",
    "channel": 0,
    "channelDesc": null,
    "monthlyQuota": 10,
    "customerQuota": 50000.0
  };
  res.json(riskFactor);
})

app.get('/api/merchant/pos/:posId/dealer', function (req, res) {
  var dealerList = [{
    "id": 72,
    "userId": "040dfe5b-bca2-4de7-8e3f-4b350bb7f37f",
    "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
    "idname": "青丽君",
    "idnumber": "1231234123123",
    "mobile": "13524237166",
    "valid": true,
    "name": null
  }, {
    "id": 69,
    "userId": "3e76749c-dbb6-459f-9734-fdbae93e27f2",
    "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
    "idname": "段定川",
    "idnumber": "122323232",
    "mobile": "13817138643",
    "valid": true,
    "name": null
  }, {
    "id": 66,
    "userId": "d1674f68-6e40-4a0d-ba75-c59329fe54de",
    "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
    "idname": "王自力",
    "idnumber": "12314123123",
    "mobile": "18221395845",
    "valid": true,
    "name": null
  }, {
    "id": 64,
    "userId": "cac5d1ac-28a9-42b1-9f03-cddd35e2c24c",
    "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
    "idname": "王亚轩",
    "idnumber": "523412312412312",
    "mobile": "18108093377",
    "valid": true,
    "name": null
  }, {
    "id": 62,
    "userId": "c35d7209-0155-43e3-905e-976f19da27e7",
    "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
    "idname": "cyh",
    "idnumber": "11112312312",
    "mobile": "15000652765",
    "valid": true,
    "name": null
  }];

  res.json(dealerList);

})

app.get('/api/product/store/:posId', function (req, res) {
  res.send('23a82ef2-7588-11e6-b4cd-8038bc0f0573');
})

app.get('/api/product/:productId', function (req, res) {
  var product = {
    "product": {
      "id": 2,
      "uuid": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "name": "Sample产品JD",
      "prepaymentCharge": 0.010000,
      "overduePenalty": 0.000000,
      "overdueServiceFeeRate": 0.006000,
      "hesitateDays": 20,
      "cancelServiceFeeRate": 0.018000,
      "modifyServiceFee": 250,
      "modifyServiceFeeRate": 0.013500,
      "valid": 1,
      "deletedFlag": 0,
      "addedOn": 1473313825000,
      "modifiedOn": 1490844262000
    },
    "interests": [{
      "id": 37,
      "uuid": "2c867426-7599-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 3,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "interest": "0.000000",
      "fee": "0.006667",
      "startDate": 946656000000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 0,
      "addedOn": 1473321141000,
      "modifiedOn": 1487232416000
    }, {
      "id": 38,
      "uuid": "3140223c-7599-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 6,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "interest": "0.000000",
      "fee": "0.003333",
      "startDate": 946656000000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 0,
      "addedOn": 1473321149000,
      "modifiedOn": 1487218199000
    }, {
      "id": 39,
      "uuid": "36632504-7599-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 9,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "interest": "0.000000",
      "fee": "0.004444",
      "startDate": 946656000000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 0,
      "addedOn": 1473321158000,
      "modifiedOn": 1487218201000
    }, {
      "id": 40,
      "uuid": "39555e89-7599-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 12,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "interest": "0.000000",
      "fee": "0.003333",
      "startDate": 946656000000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 0,
      "addedOn": 1473321163000,
      "modifiedOn": 1487218202000
    }, {
      "id": 41,
      "uuid": "3c6018d9-7599-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 15,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "interest": "0.007500",
      "fee": "0.005000",
      "startDate": 946656000000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 0,
      "addedOn": 1473321168000,
      "modifiedOn": 1490275535000
    }, {
      "id": 42,
      "uuid": "3f51aec3-7599-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 18,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "interest": "0.000000",
      "fee": "0.004722",
      "startDate": 946656000000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 0,
      "addedOn": 1473321173000,
      "modifiedOn": 1487218206000
    }, {
      "id": 43,
      "uuid": "468a3276-7599-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 24,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "interest": "0.000000",
      "fee": "0.003542",
      "startDate": 946656000000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 1,
      "addedOn": 1473321185000,
      "modifiedOn": 1487218207000
    }, {
      "id": 80,
      "uuid": "5154dfbd-c223-4796-b23c-ed5e583bcb2c",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 6,
      "pricipalMin": 1000,
      "pricipalMax": 66666,
      "interest": "0.000000",
      "fee": "0.025000",
      "startDate": 1420041600000,
      "endDate": 2109081600000,
      "priority": 1,
      "deletedFlag": 0,
      "addedOn": 1478872404000,
      "modifiedOn": 1490845784000
    }, {
      "id": 90,
      "uuid": "5526f574-2e08-444c-89aa-40a47a692962",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 9,
      "pricipalMin": 1000,
      "pricipalMax": 100001,
      "interest": "0.010000",
      "fee": "0.000000",
      "startDate": 1486137600000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 0,
      "addedOn": 1486184311000,
      "modifiedOn": 1487218225000
    }, {
      "id": 91,
      "uuid": "82555d6b-d9e9-470d-9ee0-28a6676e9d1a",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 24,
      "pricipalMin": 1000,
      "pricipalMax": 100001,
      "interest": "0.000000",
      "fee": "0.000000",
      "startDate": 1486137600000,
      "endDate": 32503651200000,
      "priority": 10,
      "deletedFlag": 0,
      "addedOn": 1486184736000,
      "modifiedOn": 1487218226000
    }, {
      "id": 92,
      "uuid": "a33f476e-71ae-4d3c-9ced-dea2c8072345",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 18,
      "pricipalMin": 1000,
      "pricipalMax": 100001,
      "interest": "0.000000",
      "fee": "0.000000",
      "startDate": 1486137600000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 0,
      "addedOn": 1486187213000,
      "modifiedOn": 1487218227000
    }, {
      "id": 93,
      "uuid": "6fce267e-f5c7-45fb-a926-f35f345df495",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 3,
      "pricipalMin": 1000,
      "pricipalMax": 110001,
      "interest": "0.000000",
      "fee": "0.000000",
      "startDate": 1486137600000,
      "endDate": 32503651200000,
      "priority": 10,
      "deletedFlag": 0,
      "addedOn": 1486193606000,
      "modifiedOn": 1487232409000
    }, {
      "id": 103,
      "uuid": "8eaac1d4-45df-4165-a099-1d54778c5751",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 3,
      "pricipalMin": 3000,
      "pricipalMax": 100001,
      "interest": "0.000000",
      "fee": "0.000000",
      "startDate": 1487260800000,
      "endDate": 32503651200000,
      "priority": 0,
      "deletedFlag": 0,
      "addedOn": 1487304063000,
      "modifiedOn": null
    }],
    "discounts": [{
      "id": 12,
      "uuid": "320e6dea-7598-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 3,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "discount": "0.010000",
      "deletedFlag": 0,
      "addedOn": 1473320721000,
      "modifiedOn": 1487232423000
    }, {
      "id": 13,
      "uuid": "376220a5-7598-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 6,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "discount": "0.030000",
      "deletedFlag": 0,
      "addedOn": 1473320730000,
      "modifiedOn": 1486093342000
    }, {
      "id": 14,
      "uuid": "3b67fce5-7598-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 9,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "discount": "0.045000",
      "deletedFlag": 0,
      "addedOn": 1473320737000,
      "modifiedOn": 1486093342000
    }, {
      "id": 15,
      "uuid": "4b70aaf8-7598-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 12,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "discount": "0.050000",
      "deletedFlag": 0,
      "addedOn": 1473320764000,
      "modifiedOn": 1486093342000
    }, {
      "id": 16,
      "uuid": "4ea06954-7598-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 15,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "discount": "0.070000",
      "deletedFlag": 0,
      "addedOn": 1473320769000,
      "modifiedOn": 1486093342000
    }, {
      "id": 17,
      "uuid": "53550ae5-7598-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 18,
      "pricipalMin": 1000,
      "pricipalMax": 100000,
      "discount": "0.080000",
      "deletedFlag": 0,
      "addedOn": 1473320777000,
      "modifiedOn": 1486093342000
    }, {
      "id": 18,
      "uuid": "5d6d94da-7598-11e6-b4cd-8038bc0f0573",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 24,
      "pricipalMin": 2999,
      "pricipalMax": 100000,
      "discount": "0.080000",
      "deletedFlag": 0,
      "addedOn": 1473320794000,
      "modifiedOn": 1475039175000
    }, {
      "id": 59,
      "uuid": "8afbb666-9540-40bc-a8d8-6e92a8b2c2dd",
      "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
      "installmentMonth": 24,
      "pricipalMin": 222,
      "pricipalMax": 12345,
      "discount": "0.018000",
      "deletedFlag": 1,
      "addedOn": 1478872950000,
      "modifiedOn": 1479544597000
    }]
  };

  res.json(product);

})

app.get('/api/application/dashboard', function (req, res) {
  var dashboard = [{
    "appId": "9bb753e5-96ba-43cd-be49-e8883a702560",
    "userAppId": "c5e9f001-1af1-45b4-b308-2b1285936b84",
    "name": "赵华",
    "mobile": "13852866322",
    "items": [{
      "jobName": "CheckMedicalExpert",
      "jobDesc": "医美专家job",
      "times": [{"startTime": 1491363728000, "endTime": 1491363747000}]
    }, {
      "jobName": "CheckIdCardBackImg",
      "jobDesc": "检查身份证反面照",
      "times": [{"startTime": 1491363418000, "endTime": 1491363472000}, {
        "startTime": 1491363693000,
        "endTime": 1491363708000
      }]
    }, {
      "jobName": "CheckUserPhoto",
      "jobDesc": "检查现场照",
      "times": [{"startTime": 1491363418000, "endTime": 1491363486000}, {
        "startTime": 1491363688000,
        "endTime": 1491363715000
      }]
    }, {
      "jobName": "CheckIdCardFrontImg",
      "jobDesc": "检查身份证正面照",
      "times": [{"startTime": 1491363418000, "endTime": 1491363479000}, {
        "startTime": 1491363690000,
        "endTime": 1491363726000
      }]
    }, {
      "jobName": "CheckQQClmb",
      "jobDesc": "QQmanualJob",
      "times": [{"startTime": 1491363728000, "endTime": 1491363754000}]
    }]
  }, {
    "appId": "1cf41df8-366c-41ad-8e9b-469d542bf086",
    "userAppId": "f8127868-ed3d-4fc6-92e4-2f9eb705da0a",
    "name": "",
    "mobile": "11178323582",
    "items": [{
      "jobName": "CheckWeChatAvatar",
      "jobDesc": "微信头像校验",
      "times": [{"startTime": 1491378608000, "endTime": 1491379312000}]
    }]
  }, {
    "appId": "0e22bea0-62b0-47b9-8041-d2e568996113",
    "userAppId": "3b482169-666d-44fc-8e11-4c87b9c9416f",
    "name": "",
    "mobile": "11179795998",
    "items": [{
      "jobName": "CheckWeChatAvatar",
      "jobDesc": "微信头像校验",
      "times": [{"startTime": 1491379879000, "endTime": 1491381393000}]
    }]
  }, {
    "appId": "4ee4547a-1b53-4b0c-8dd0-90001ee08791",
    "userAppId": "7cf2c1cb-b648-46c7-9928-3dc1c7a8f2ef",
    "name": "",
    "mobile": "11180550085",
    "items": [{
      "jobName": "CheckWeChatAvatar",
      "jobDesc": "微信头像校验",
      "times": [{"startTime": 1491380902000, "endTime": 1491381398000}]
    }]
  }, {
    "appId": "a7ef1048-9883-498a-9e78-bd1c5bab962f",
    "userAppId": "88a22f78-02fa-4f2a-9c59-93570ae4b8ea",
    "name": "何席逊",
    "mobile": "11184447975",
    "items": [{
      "jobName": "CheckTransaction",
      "jobDesc": "交易监控审核",
      "times": [{"startTime": 1491385938000, "endTime": 1491385947000}]
    }, {
      "jobName": "CheckMedicalExpert",
      "jobDesc": "医美专家job",
      "times": [{"startTime": 1491385925000, "endTime": 1491385937000}]
    }, {
      "jobName": "CheckIdCardBackImg",
      "jobDesc": "检查身份证反面照",
      "times": [{"startTime": 1491384498000, "endTime": 1491385255000}]
    }, {
      "jobName": "CheckUserPhoto",
      "jobDesc": "检查现场照",
      "times": [{"startTime": 1491384498000, "endTime": 1491385221000}]
    }, {
      "jobName": "CheckIdCardFrontImg",
      "jobDesc": "检查身份证正面照",
      "times": [{"startTime": 1491384498000, "endTime": 1491385925000}]
    }, {
      "jobName": "CheckWeChatAvatar",
      "jobDesc": "微信头像校验",
      "times": [{"startTime": 1491384615000, "endTime": 1491384671000}]
    }, {
      "jobName": "CheckSurgeryAgreement",
      "jobDesc": "检查手术同意书",
      "times": [{"startTime": 1491385956000, "endTime": 1491385991000}]
    }]
  }, {
    "appId": "6ca83806-20b7-4079-b32c-07b9ea913b75",
    "userAppId": "65912b7f-c3be-4cc2-a914-6367b5cce1fa",
    "name": "",
    "mobile": "17100000009",
    "items": []
  }];

  res.json(dashboard);
})

app.get('/api/application/query', function (req, res) {
  var apps = [{
    "userId": "538B21E5-5E13-E711-B04C-D89D67298EA4",
    "appId": "4a3a692d-f276-4644-a9d3-e1159c5faa50",
    "userAppId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
    "name": "赵华",
    "idnumber": "410222198802141000",
    "mobile": "13938552122",
    "s1": "hp",
    "pos": "测试医院私",
    "principal": "3000.00",
    "periods": "6",
    "appStartTime": "2017-03-28",
    "appStatus": "申请完成"
  }, {
    "userId": "58225FD4-B019-E711-B04C-D89D67298EA4",
    "appId": "9bb753e5-96ba-43cd-be49-e8883a702560",
    "userAppId": "c5e9f001-1af1-45b4-b308-2b1285936b84",
    "name": "赵华",
    "idnumber": "410222000000000000",
    "mobile": "13852866322",
    "s1": "shiqi",
    "pos": "测试医院",
    "principal": "0.00",
    "periods": "0",
    "appStartTime": "2017-04-05",
    "appStatus": "申请中"
  }];

  res.json(apps);
})

app.get('/api/cooperation/booking/record/list', function (req, res) {
  var bookings = {
    "total": 149,
    "rows": [{
      "id": null,
      "bookId": "AP-79a80a805ec778f0174689a59781d608",
      "userName": "袁祥梦",
      "mobile": "15311455883",
      "idNo": "370282198710145120",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0201006", "0201002"],
      "bookStartTime": 1491375600000,
      "bookEndTime": 1491386400000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1491378866000,
      "financeProductId": null,
      "bookStatus": 10,
      "bookStatusDesc": "已成交",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "上眼睑下垂,埋线双眼皮",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-5a2880f213b958ea10a7f11ced6f641d",
      "userName": "袁祥梦",
      "mobile": "15311455883",
      "idNo": "370282198710145120",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101002", "0101003", "0101004", "0101007", "0101001", "0101006", "0101005", "0102002"],
      "bookStartTime": 1491094800000,
      "bookEndTime": 1491105600000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490952456000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "祛抬头纹,祛鱼尾纹,祛眉间川字纹,祛妊娠纹,眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹),祛眼角纹,祛法令纹,热玛吉",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-0a49b589ab42ad31da195e19872bedff",
      "userName": "袁祥梦",
      "mobile": "15311455883",
      "idNo": "370282198710145120",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "224f1890-5553-4945-a020-bec2a42af012",
      "categoryIds": ["0101001"],
      "bookStartTime": 1491267600000,
      "bookEndTime": 1491278400000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490950875000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "北京薇琳医疗美容医院有限公司",
      "surgeryProject": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-cb67c836bf7c0112a0eae160e9173761",
      "userName": "袁祥梦",
      "mobile": "15311455883",
      "idNo": "370282198710145120",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0502001", "0502005"],
      "bookStartTime": 1490943600000,
      "bookEndTime": 1490954400000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490947525000,
      "financeProductId": null,
      "bookStatus": 9,
      "bookStatusDesc": "已取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": "",
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "丰额头,丰下巴",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-7ef23bb4c930ae2dd8ddcee8a8b39f09",
      "userName": "袁祥梦",
      "mobile": "15311455883",
      "idNo": "370282198710145120",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0102003", "0101004"],
      "bookStartTime": 1490943600000,
      "bookEndTime": 1490954400000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490865831000,
      "financeProductId": null,
      "bookStatus": 9,
      "bookStatusDesc": "已取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": "",
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "深蓝射频,祛眉间川字纹",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-d70af84c70b7f22ee02666dc19f89047",
      "userName": "袁祥梦",
      "mobile": "15311455883",
      "idNo": "370282198710145120",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101001"],
      "bookStartTime": 1490835600000,
      "bookEndTime": 1490846400000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490844151000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": "星计划！！！",
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-d9359af122e33933eb8c7243fe7cb562",
      "userName": "袁祥梦",
      "mobile": "15311455883",
      "idNo": "370282198710145120",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0201002"],
      "bookStartTime": 1490835600000,
      "bookEndTime": 1490846400000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490842787000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "埋线双眼皮",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-af1fa874eef512ccd30951245418d5c7",
      "userName": "袁祥梦",
      "mobile": "15311455883",
      "idNo": "370282198710145120",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101001"],
      "bookStartTime": 1490857200000,
      "bookEndTime": 1490868000000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490841904000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-abd1730351f3eed1ce55113e256d8b95",
      "userName": "袁祥梦",
      "mobile": "15311455883",
      "idNo": "370282198710145120",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101001"],
      "bookStartTime": 1490835600000,
      "bookEndTime": 1490846400000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490841769000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-a92687b818867c0128c2b44a8dca71ae",
      "userName": "黄帅",
      "mobile": "13137738803",
      "idNo": "411425199111176015",
      "gender": 1,
      "deletedFlag": null,
      "genderDesc": "男",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101003"],
      "bookStartTime": 1490943600000,
      "bookEndTime": 1490954400000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490775692000,
      "financeProductId": null,
      "bookStatus": 10,
      "bookStatusDesc": "已成交",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "祛鱼尾纹",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-1348ed7a572b49c052ea945b2f760342",
      "userName": "刘志强",
      "mobile": "13913989225",
      "idNo": "342921198501240713",
      "gender": 1,
      "deletedFlag": null,
      "genderDesc": "男",
      "storeId": null,
      "categoryIds": [],
      "bookStartTime": null,
      "bookEndTime": null,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490607093000,
      "financeProductId": null,
      "bookStatus": 10,
      "bookStatusDesc": "已成交",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01002",
      "businessCodeDesc": "京东线下",
      "storeName": null,
      "surgeryProject": "",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "AP-ac253f298f168126fabe9b36f6f5b1f0",
      "userName": "刘志强",
      "mobile": "18782951842",
      "idNo": "342921198501240713",
      "gender": 1,
      "deletedFlag": null,
      "genderDesc": "男",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101001"],
      "bookStartTime": 1490922000000,
      "bookEndTime": 1490932800000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490599394000,
      "financeProductId": null,
      "bookStatus": 10,
      "bookStatusDesc": "已成交",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": "TEST1",
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "510007",
      "userName": "曾明",
      "mobile": "13465389022",
      "idNo": "489123198804232321",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0301001", "0301002"],
      "bookStartTime": 1490846400000,
      "bookEndTime": 1490857200000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490257770000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "假体丰胸,自体脂肪丰胸",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "510006",
      "userName": "曾明",
      "mobile": "13465389022",
      "idNo": "489123198804232321",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0301004", "0302005"],
      "bookStartTime": 1490846400000,
      "bookEndTime": 1490857200000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490257239000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "乳房下垂提升,黄金微雕吸脂瘦身",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "510001",
      "userName": "曾明",
      "mobile": "13465389022",
      "idNo": "489123198804232321",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "224f1890-5553-4945-a020-bec2a42af012",
      "categoryIds": ["0502002", "0502003", "0502008", "0601008"],
      "bookStartTime": 1490932800000,
      "bookEndTime": 1490943600000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490254188000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "北京薇琳医疗美容医院有限公司",
      "surgeryProject": "丰太阳穴,丰卧蚕,自体脂肪面部填充,鬓角移植",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "340040%20",
      "userName": "曾明",
      "mobile": "13465389022",
      "idNo": "489123198804232321",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101001"],
      "bookStartTime": 1490328000000,
      "bookEndTime": 1490338800000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490252376000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "340038",
      "userName": "曾明",
      "mobile": "13465389022",
      "idNo": "489123198804232321",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101001"],
      "bookStartTime": 1490328000000,
      "bookEndTime": 1490338800000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1490252296000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "330104",
      "userName": "曾明",
      "mobile": "13465389022",
      "idNo": "489123198804232321",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101003", "0201003", "0201002"],
      "bookStartTime": 1490155200000,
      "bookEndTime": 1490166000000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1489739692000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": "优质客户",
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "祛鱼尾纹,开眼角,埋线双眼皮",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "330103",
      "userName": "曾明",
      "mobile": "13465389022",
      "idNo": "489123198804232321",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0201002"],
      "bookStartTime": 1489734000000,
      "bookEndTime": 1489744800000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1489739416000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": null,
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "埋线双眼皮",
      "historicalOperation": null
    }, {
      "id": null,
      "bookId": "330102",
      "userName": "曾明",
      "mobile": "13465389022",
      "idNo": "489123198804232321",
      "gender": 2,
      "deletedFlag": null,
      "genderDesc": "女",
      "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
      "categoryIds": ["0101001"],
      "bookStartTime": 1489734000000,
      "bookEndTime": 1489744800000,
      "bookVisitStartTime": null,
      "bookVisitEndTime": null,
      "bookCreateDate": 1489739320000,
      "financeProductId": null,
      "bookStatus": 11,
      "bookStatusDesc": "用户主动取消",
      "merchantCode": "JDJR",
      "merchantCodeDesc": "京东",
      "note": "",
      "businessCode": "01001",
      "businessCodeDesc": "京东导流",
      "storeName": "测试医院",
      "surgeryProject": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)",
      "historicalOperation": null
    }]
  };

  res.json(bookings);
})

app.get('/api/cooperation/booking/detail', function (req, res) {
  var detail = {
    "id": 817,
    "bookId": "330102",
    "userName": "曾明",
    "mobile": "13465389022",
    "idNo": "489123198804232321",
    "gender": 2,
    "deletedFlag": 0,
    "genderDesc": "女",
    "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
    "categoryIds": ["0101001"],
    "bookStartTime": 1489734000000,
    "bookEndTime": 1489744800000,
    "bookVisitStartTime": null,
    "bookVisitEndTime": null,
    "bookCreateDate": 1489739320000,
    "financeProductId": 1,
    "bookStatus": 11,
    "bookStatusDesc": "用户主动取消",
    "merchantCode": "JDJR",
    "merchantCodeDesc": "京东",
    "note": "",
    "businessCode": "01001",
    "businessCodeDesc": "京东导流",
    "storeName": "测试医院",
    "surgeryProject": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)",
    "historicalOperation": [{
      "userId": "53b0e7bd-f7ec-11e6-bbab-8038bc0f0573",
      "bookId": "330102",
      "type": 2,
      "recordId": 74,
      "typeDesc": "确认预约",
      "addedOn": 1489739597000,
      "operation": {
        "note": "",
        "categoryIds": ["0101001"],
        "bookVisitStartTime": 0,
        "bookVisitEndTime": 0,
        "category": "眼部综合除皱(鱼尾纹+眶周细纹+下眼袋细纹)"
      }
    }]
  };

  res.json(detail);
})

app.get('/api/cooperation/settlement/record/list', function (req, res) {
  var records = {
    "total": 100,
    "rows": [{
      "beginDate": 1451577600000,
      "endDate": 1454169600000,
      "source": 0,
      "surgeryTotalNumber": 2,
      "surgeryTotalAmount": 20000.0,
      "userflowTotalFee": 2000.0,
      "sourceDesc": "全部"
    }, {
      "beginDate": 1454256000000,
      "endDate": 1456675200000,
      "source": 0,
      "surgeryTotalNumber": 2,
      "surgeryTotalAmount": 20000.0,
      "userflowTotalFee": 2000.0,
      "sourceDesc": "全部"
    }, {
      "beginDate": 1456761600000,
      "endDate": 1459353600000,
      "source": 0,
      "surgeryTotalNumber": 4,
      "surgeryTotalAmount": 40000.0,
      "userflowTotalFee": 4000.0,
      "sourceDesc": "全部"
    }, {
      "beginDate": 1459440000000,
      "endDate": 1461945600000,
      "source": 0,
      "surgeryTotalNumber": 2,
      "surgeryTotalAmount": 20000.0,
      "userflowTotalFee": 2000.0,
      "sourceDesc": "全部"
    }, {
      "beginDate": 1462032000000,
      "endDate": 1464624000000,
      "source": 0,
      "surgeryTotalNumber": 2,
      "surgeryTotalAmount": 30000.0,
      "userflowTotalFee": 3000.0,
      "sourceDesc": "全部"
    }]
  };

  res.json(records);
})

app.get('/api/merchant/pos/cooperation/list', function (req, res) {
  var list = [{
    "storeId": "09c56e83-6e71-11e6-98a0-1051721b36c9",
    "name": "测试医院",
    "address": "陆家嘴软件园",
    "introduction": "美莱（MYLIKE）品牌实力雄厚，足迹遍布北京、上海、广州、深圳、成都、杭州、昆明等多个城市，拥有29院连锁的品牌规模，以高品质的医美服务，赢得求美者口碑",
    "path": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/merchant/store/09c56e83-6e71-11e6-98a0-1051721b36c9/attachment/41fe7ccd-3402-4f3b-a345-45eb07e00cef?Expires=1491390309&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=7pulZjyn68T7c1fZMmxrjL8jXsM%3D",
    "hotItems": ["热卖项目", "热卖项目2", "玻尿酸功效", "玻尿酸功效", "玻尿酸功效"],
    "items": null,
    "doctors": null,
    "activities": null
  }, {
    "storeId": "224f1890-5553-4945-a020-bec2a42af012",
    "name": "北京薇琳医疗美容医院有限公司",
    "address": "北京市朝阳区东直门外大街12号",
    "introduction": "美莱（MYLIKE）品牌实力雄厚，足迹遍布北京、上海、广州、深圳、成都、杭州、昆明等多个城市，拥有29院连锁的品牌规模，以高品质的医美服务，赢得求美者口碑",
    "path": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/merchant/store/224f1890-5553-4945-a020-bec2a42af012/attachment/afcf7566-51a5-4319-9026-f08c7fc5260c?Expires=1491390309&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=PWPINvZSr3BqZaearYry7DnlYic%3D",
    "hotItems": ["玻尿酸功效"],
    "items": null,
    "doctors": null,
    "activities": null
  }, {
    "storeId": "9ea073aa-003a-4946-a5a0-1b22d4b43258",
    "name": "北京金凤凰医院有限公司",
    "address": "北京市成寿路136号院二号楼1-2层101、102",
    "introduction": "美莱（MYLIKE）品牌实力雄厚，足迹遍布北京、上海、广州、深圳、成都、杭州、昆明等多个城市，拥有29院连锁的品牌规模，以高品质的医美服务，赢得求美者口碑",
    "path": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/merchant/store/9ea073aa-003a-4946-a5a0-1b22d4b43258/attachment/a3c6a890-fff9-4c5b-8c7e-1b6a57ee77f8?Expires=1491390309&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=TLc0%2BiNg9am9J13%2BlZW6teWBuTs%3D",
    "hotItems": [],
    "items": null,
    "doctors": null,
    "activities": null
  }];

  res.json(list);
})

app.get('/api/application/:appId/ruleresult', function (req, res) {
  var results = [
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "ApplyInfoInForm",
      "template": "申请信息",
      "answers": [{"name": "X_Industry", "questionText": "行业", "answerText": [], "value": 0}, {
        "name": "X_ApplyDate",
        "questionText": "申请日期",
        "answerText": ["Tue Mar 28 00:00:00 CST 2017"],
        "value": 1490630400000
      }, {"name": "X_CompanyName", "questionText": "工作单位名称", "answerText": [""], "value": ""}, {
        "name": "X_SchoolCode",
        "questionText": "学校编码",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_NowAddress",
        "questionText": "现居住地址",
        "answerText": ["江苏省南京市市辖区江苏省南京市鼓楼区汉口路22号77房88室"],
        "value": "江苏省南京市市辖区江苏省南京市鼓楼区汉口路22号77房88室"
      }, {
        "name": "X_CollegeMajorCode",
        "questionText": "专业编码",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_Profession",
        "questionText": "职业",
        "answerText": ["配偶"],
        "value": "配偶"
      }, {
        "name": "X_SchoolAddress",
        "questionText": "学生学校地址",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ExpectedAmount",
        "questionText": "期望金额",
        "answerText": ["3000.0"],
        "value": 3000.0
      }, {"name": "X_Nationality", "questionText": "民族", "answerText": [""], "value": ""}, {
        "name": "X_PhoneNum",
        "questionText": "用户手机号",
        "answerText": ["13938552122"],
        "value": "13938552122"
      }, {
        "name": "X_IdNumber",
        "questionText": "身份证号",
        "answerText": ["410222198802141043"],
        "value": "410222198802141043"
      }, {
        "name": "X_IsIdCardEffeisctive",
        "questionText": "身份证是否在有效期",
        "answerText": ["是"],
        "value": "IsIdCardEffeisctive_Yes"
      }, {"name": "X_IndustryLv3", "questionText": "职业结构LV3编码", "answerText": [""], "value": ""}, {
        "name": "X_Major",
        "questionText": "学生专业",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_IndustryLv1",
        "questionText": "职业结构LV1编码",
        "answerText": ["400000"],
        "value": "400000"
      }, {
        "name": "X_QqNumber",
        "questionText": "QQ号",
        "answerText": ["525463814"],
        "value": "525463814"
      }, {
        "name": "X_IndustryLv2",
        "questionText": "职业结构LV2编码",
        "answerText": ["402000"],
        "value": "402000"
      }, {
        "name": "X_ExpectedMonth",
        "questionText": "期望期数",
        "answerText": ["6"],
        "value": 6
      }, {
        "name": "X_IncomeAfterTex",
        "questionText": "税后月收入",
        "answerText": ["3000-4000"],
        "value": 3
      }, {"name": "X_IdCardAge", "questionText": "年龄", "answerText": ["29"], "value": 29}, {
        "name": "X_Education",
        "questionText": "教育程度",
        "answerText": ["职高"],
        "value": 6
      }, {"name": "X_WorkAddress", "questionText": "工作单位地址", "answerText": [""], "value": ""}, {
        "name": "X_IsStudent",
        "questionText": "是否学生",
        "answerText": ["false"],
        "value": false
      }, {"name": "X_Gender", "questionText": "性别", "answerText": ["女性"], "value": "女性"}, {
        "name": "X_Marriage",
        "questionText": "婚姻状况",
        "answerText": ["单身"],
        "value": 4
      }, {"name": "X_School", "questionText": "学生学校", "answerText": [""], "value": ""}]
    },
    {"appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464", "name": "ConsistencyInForm", "template": "衍生变量", "answers": []},
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "HospitalInfoInForm",
      "template": "医院信息",
      "answers": [{
        "name": "X_HospitalCity",
        "questionText": "医院所在城市",
        "answerText": ["市辖区"],
        "value": "市辖区"
      }, {
        "name": "X_HospitalCooperateStartTime",
        "questionText": "医院开始合作时间",
        "answerText": ["Thu Sep 01 08:00:00 CST 2016"],
        "value": 1472688000000
      }, {
        "name": "X_HospitalLevel",
        "questionText": "医院等级",
        "answerText": ["B+"],
        "value": "B+"
      }, {
        "name": "X_HospitalName",
        "questionText": "医院名称",
        "answerText": ["测试医院私"],
        "value": "测试医院私"
      }, {
        "name": "X_HospitalType",
        "questionText": "进件类型",
        "answerText": ["正常"],
        "value": "正常"
      }, {"name": "X_HospitalProvice", "questionText": "医院所在省份", "answerText": ["上海市"], "value": "上海市"}]
    },
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "HospitalRankInoutForm",
      "template": "医院评级结果",
      "answers": [{
        "name": "rankResult",
        "questionText": "医院评级结果",
        "answerText": ["NOR"],
        "value": "NOR"
      }, {"name": "rankTag", "questionText": "医院评级标签为", "answerText": [""], "value": ""}]
    },
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "InoutForm",
      "template": "cos决策结果",
      "answers": [{
        "name": "transactionMonitorRequired",
        "questionText": "是否需要交易监控",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "decisionResult",
        "questionText": "cos决策结果",
        "answerText": ["Approved"],
        "value": "Approved"
      }, {
        "name": "X_CheckCount",
        "questionText": "重传次数",
        "answerText": ["1"],
        "value": 1
      }, {
        "name": "X_CommonUseInternalBlackList",
        "questionText": "常用联系人Psl黑名单状态",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_OnAlert",
        "questionText": "拉警报状态",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_LinealKinInternalBlackList",
        "questionText": "直系亲属Psl黑名单状态",
        "answerText": ["false"],
        "value": false
      }]
    },
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "InvestigationInForm",
      "template": "医美调查信息",
      "answers": [{
        "name": "X_IsIssuingAuthorityConsistent",
        "questionText": "身份证签证机关是否一致",
        "answerText": [],
        "value": "IsIssuingAuthorityConsistent_Yes"
      }, {
        "name": "X_ConfirmIdentityWhileAuditing",
        "questionText": "身份确认",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_ConfirmClientLocation",
        "questionText": "客户所在场景确认",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_PnWeChatAvatarType",
        "questionText": "手机对应微信头像类型",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_FilledWeChatAvatarIsSameAsLivePhone",
        "questionText": "填写的微信的头像中人像是否和用户现场照片中为同一人",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IdCardAddress",
        "questionText": "身份证地址",
        "answerText": ["fasd"],
        "value": "fasd"
      }, {
        "name": "X_DoesAgreementImgContainDoctorSignature",
        "questionText": "医师签字",
        "answerText": [],
        "value": "IsDoesAgreementImgContainDoctorSignature_Condition_Yes"
      }, {
        "name": "X_PnWeChatAvatarIsSameAsBindedPhone",
        "questionText": "手机对应微信头像是否和绑定微信头像相同",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IsSceneImg",
        "questionText": "是否是现场照片+身份证",
        "answerText": [],
        "value": "IsSceneImg_Yes"
      }, {
        "name": "X_SpeakerAnswerConditionWhileAuditing",
        "questionText": "通话人接听情况",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IsIdCardWordsNomal",
        "questionText": "“居民身”文字是否有异常",
        "answerText": [],
        "value": "IsIdCardWordsNomal_Yes_Nomal"
      }, {
        "name": "X_PnWeChatAvatarIsSameAsLivePhone",
        "questionText": "手机对应微信头像中人像是否和用户现场照片中为同一人",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_FilledWeChatAvatarType",
        "questionText": "填写的微信的头像类型",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_PnWeChatAvatarIsBlack",
        "questionText": "手机对应微信头像是否涉黑",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IsAgreementImgUploaded",
        "questionText": "客户上传的是否同意书照片？",
        "answerText": [],
        "value": "IsAgreementImgUploaded_Yes"
      }, {
        "name": "X_SceneImgFacialExpression",
        "questionText": "头像现场照片表情",
        "answerText": [],
        "value": "IsSceneImgFacialExpressionValid_Simle_Yes"
      }, {
        "name": "X_OtherHintRiskOfClient",
        "questionText": "其他风险提示",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_IsBirthdayMonthValid",
        "questionText": "出生日期“月份”是否符合要求",
        "answerText": [],
        "value": "IsBirthdayMonthValid_Yes"
      }, {
        "name": "X_IsIdCardReverseImg",
        "questionText": "是否是身份证背面",
        "answerText": [],
        "value": "IsIdCardReverseImg_Yes"
      }, {
        "name": "X_IsSexMatchedWithNumber",
        "questionText": "性别与身份证号码第17位是否匹配",
        "answerText": [],
        "value": "IsSexMatchedWithNumber_Yes"
      }, {
        "name": "X_IsIdCardFrontImg",
        "questionText": "是否是身份证正面",
        "answerText": [],
        "value": "IsIdCardFrontImg_Yes"
      }, {
        "name": "X_IsSceneImgClear",
        "questionText": "现场照片人脸是否清晰可辨识",
        "answerText": [],
        "value": "IsSceneImgClear_Yes"
      }, {
        "name": "X_QqWeChatAvatarIsSameAsLivePhone",
        "questionText": "QQ对应微信头像中人像是否和用户现场照片中为同一人",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_FilledWeChatAvatarIsExist",
        "questionText": "填写的微信的头像照片是否存在",
        "answerText": [],
        "value": "FilledWeChatAvatarIsExist_No"
      }, {
        "name": "X_QqWeChatAvatarIsExist",
        "questionText": "QQ对应微信头像照片是否存在",
        "answerText": [],
        "value": "QqWeChatAvatarIsExist_No"
      }, {
        "name": "X_IsIdCardFrontImgClear",
        "questionText": "身份证件正面是否清晰可辨识",
        "answerText": [],
        "value": "IsIdCardFrontImgClear_Yes"
      }, {
        "name": "X_IsHintRiskOfClient",
        "questionText": "本人风险提示",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IssuingAuthority",
        "questionText": "签发机关",
        "answerText": ["fdas"],
        "value": "fdas"
      }, {"name": "X_ConfirmIncome", "questionText": "收入确认", "answerText": [], "value": ""}, {
        "name": "X_OperationItem",
        "questionText": "同意书是否包含手术项目",
        "answerText": [],
        "value": "IsOperationItem_Condition_Yes"
      }, {
        "name": "X_DoesClientAccept",
        "questionText": "客户是否接受",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_HospitalSeal",
        "questionText": "医院盖章是否一致",
        "answerText": [],
        "value": "IsHospitalSeal_Condition_Coincident"
      }, {
        "name": "X_IsIdCardReverseImgClear",
        "questionText": "身份证件背面是否清晰可辨识",
        "answerText": [],
        "value": "IsIdCardReverseImgClear_Yes"
      }, {
        "name": "X_IsIdCardReverseImgInfoClear",
        "questionText": "身份证背面信息是否可以辨认（签发机关、有效期限）",
        "answerText": [],
        "value": "IsIdCardReverseImgInfoClear_Yes"
      }, {
        "name": "X_IsSceneImgIdCardFrontImgClear",
        "questionText": "现场照中身份证照是否清晰可辨识",
        "answerText": [],
        "value": "IsSceneImgIdCardFrontImgClear_Yes"
      }, {
        "name": "X_BindedWeChatAvatarIsBlack",
        "questionText": "绑定的微信头像是否涉黑",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_BindedWeChatAvatarType",
        "questionText": "绑定的微信头像类型",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IsAgreementImgClear",
        "questionText": "同意书照片是否清晰完整",
        "answerText": [],
        "value": "IsAgreementImgClear_Yes"
      }, {
        "name": "X_IsBirthdateSame",
        "questionText": "出生日期与身份证号码年月日是否一致",
        "answerText": [],
        "value": "IsBirthdateSame_Yes"
      }, {
        "name": "X_ClientCreditCardCount",
        "questionText": "信用卡信息收集",
        "answerText": ["0"],
        "value": 0
      }, {
        "name": "X_DoesAgreementImgContainClientName",
        "questionText": "同意书照片客户签名是否一致",
        "answerText": [],
        "value": "IsDoesAgreementImgContainClientName_Condition_Coincident"
      }, {
        "name": "X_DoesAgreementImgContainSignDate",
        "questionText": "同意书照片签字日期是否当天",
        "answerText": [],
        "value": "IsDoesAgreementImgContainSignDate_Condition_Coincident"
      }, {
        "name": "X_QqWeChatAvatarIsSameAsBindedPhone",
        "questionText": "QQ对应微信头像是否和绑定微信头像相同",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_HintRiskOfClient",
        "questionText": "风险问题(多选，勿用，请使用‘客户电话审核_风险问题包含’替代)",
        "answerText": [],
        "value": []
      }, {
        "name": "X_QQZoneImgType",
        "questionText": "qq头像类型是什么?",
        "answerText": ["风景/场景"],
        "value": "QQZoneImgType_Scenery"
      }, {
        "name": "X_IsIdCardEffeisctive",
        "questionText": "是否在有效期内",
        "answerText": ["是"],
        "value": "IsIdCardEffeisctive_Yes"
      }, {
        "name": "X_BindedWeChatAvatarIsExist",
        "questionText": "绑定的微信头像照片是否存在",
        "answerText": [],
        "value": "BindedWeChatAvatarIsExist_No"
      }, {
        "name": "X_BindedWeChatAvatarIsSameAsLivePhone",
        "questionText": "绑定的微信头像中人像是否和用户现场照片中为同一人",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_PnWeChatAvatarIsExist",
        "questionText": "手机对应微信头像照片是否存在",
        "answerText": [],
        "value": "PnWeChatAvatarIsExist_No"
      }, {
        "name": "X_MonitorResult",
        "questionText": "交易监控判断结果",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_OthersInstallmentProduct",
        "questionText": "其他分期产品收集(多选，勿用，请使用‘客户电话审核_其他分期产品收集包含’替代) ",
        "answerText": [],
        "value": []
      }, {
        "name": "X_ConfirmCompanyOrSchool",
        "questionText": "工作单位/学校名称确认",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IsNumber1And4Correct",
        "questionText": "身份证号码数字1和4是否符合要求",
        "answerText": [],
        "value": "IsNumber1And4Correct_Yes"
      }, {
        "name": "X_IsQQZoneImgInBlackList",
        "questionText": "头像是否涉黑?",
        "answerText": ["否"],
        "value": "IsQQZoneImgInBlackList_No"
      }, {
        "name": "X_IsPeopleImgAndQQZoneImgSame",
        "questionText": "qq头像中人像是否和用户现场照片中为同一人?",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IsSceneImgIdCardInfoSame",
        "questionText": "现场照人脸与现场照身份证两张人脸是否一致",
        "answerText": [],
        "value": "IsSceneImgIdCardInfoSame_Yes"
      }, {
        "name": "X_SceneImgFacialDirection",
        "questionText": "头像现场照片头像方向",
        "answerText": [],
        "value": "IsSceneImgFacialDirectionValid_Facing_Yes"
      }, {
        "name": "X_QqWeChatAvatarType",
        "questionText": "QQ对应微信头像类型",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IsPhoneAnsweringNomalWhileAuditing",
        "questionText": "电话是否正常接听",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_ConfirmHospital",
        "questionText": "医院确认",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IdCardNationality",
        "questionText": "身份证民族",
        "answerText": [],
        "value": "IdCardNationality_Han"
      }, {
        "name": "X_QqWeChatAvatarIsBlack",
        "questionText": "QQ对应微信头像是否涉黑",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_FilledWeChatAvatarIsSameAsBindedPhone",
        "questionText": "填写的微信的头像是否和绑定微信头像相同",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_IsIdCardFrontImgInfoClear",
        "questionText": "身份证正面信息是否可以辨认",
        "answerText": [],
        "value": "IsIdCardFrontImgInfoClear_Yes"
      }, {"name": "X_FilledWeChatAvatarIsBlack", "questionText": "填写的微信的头像是否涉黑", "answerText": [], "value": ""}]
    },
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "LimitStrategyInOutForm",
      "template": "额度策略",
      "answers": [{
        "name": "limitPerTimes",
        "questionText": "单笔借款金额",
        "answerText": ["0.0"],
        "value": 0.0
      }, {
        "name": "limitPerMonth",
        "questionText": "月借款限额",
        "answerText": ["0.0"],
        "value": 0.0
      }, {"name": "cityBizIndex", "questionText": "城市行业系数", "answerText": ["0.0"], "value": 0.0}]
    },
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "SocialRelationInForm",
      "template": "社会关系",
      "answers": [{
        "name": "X_LinealKinName",
        "questionText": "直系亲属姓名",
        "answerText": ["睡觉啊"],
        "value": "睡觉啊"
      }, {
        "name": "X_AllContactCount",
        "questionText": "联系人数",
        "answerText": ["0"],
        "value": 0
      }, {
        "name": "X_CommonContactsName",
        "questionText": "常用联系人姓名",
        "answerText": ["时间内"],
        "value": "时间内"
      }, {
        "name": "X_RelationWithCommonContacts",
        "questionText": "常用联系人与本人关系",
        "answerText": ["同事"],
        "value": "3"
      }, {
        "name": "X_LinealKinPhone",
        "questionText": "直系亲属手机号",
        "answerText": ["18810542764"],
        "value": "18810542764"
      }, {
        "name": "X_IsContact2InList",
        "questionText": "第二联系人手机号是否存在于用户通讯录",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_Contact2Name",
        "questionText": "第二联系人手机号码在用户通讯录中的称呼，不存在的话为-1",
        "answerText": ["-1"],
        "value": "-1"
      }, {
        "name": "X_IsContact1True",
        "questionText": "第一联系人的姓名在通讯录里的称呼中是否一致",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_CommonContactsPhone",
        "questionText": "常用联系人手机号",
        "answerText": ["18810542762"],
        "value": "18810542762"
      }, {
        "name": "X_IsContact1InList",
        "questionText": "第一联系人手机号是否存在于用户通讯录",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_RelationWithClient",
        "questionText": "直系亲属与本人关系",
        "answerText": ["母亲"],
        "value": 7
      }, {
        "name": "X_IsContact2True",
        "questionText": "第二联系人的姓名在通讯录里的称呼中是否一致",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_Contact1Name",
        "questionText": "第一联系人手机号码在用户通讯录中的称呼，不存在的话为-1",
        "answerText": ["-1"],
        "value": "-1"
      }]
    },
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "ThirdPartyInForm",
      "template": "第三方的数据信息",
      "answers": [{
        "name": "X_ZZC_Rule_HIS0005",
        "questionText": "同一申请人前次住宅电话与本次不同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "qqIsLowRiskFocus",
        "questionText": "同盾_QQ号命中低风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {"name": "X_SZR_Major", "questionText": "专业", "answerText": [""], "value": ""}, {
        "name": "X_JD_Location_level",
        "questionText": "居住城市等级",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_QQBindingCity",
        "questionText": "绑定的QQ城市",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JO_rsl_NameMobileConfirm",
        "questionText": "三维素验证(手机号码姓名验证接口)",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_HIS0001",
        "questionText": "同一申请人本机构前次风险拒绝",
        "answerText": [""],
        "value": ""
      }, {
        "name": "idCardAsContactNum2",
        "questionText": "同盾_3个月内申请人身份证作为联系人身份证出现的次数大于等于2",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Addr_credibility",
        "questionText": "地址可信度",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_HIS0009",
        "questionText": "已申请的申请人前次手机与本次不同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_HIS0008",
        "questionText": "同一申请人前次申请填写婚姻情况与本次不同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_HIS0007",
        "questionText": "同一申请人前次联系人姓名相同但电话与本次不同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_HIS0006",
        "questionText": "同一申请人前次住宅地址与本次不同（匹配度小于50%）",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_QHZX_HasIdCardFraudRisk",
        "questionText": "前海征信中身份证号是否存在欺诈风险",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_PnWechatCity",
        "questionText": "手机号对应微信城市",
        "answerText": [""],
        "value": ""
      }, {
        "name": "mobileIsSmall",
        "questionText": "同盾_手机号命中通信小号库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdBankBad",
        "questionText": "通过身份证查询银行不良",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact1CommonIdCardOverdraftCorporate",
        "questionText": "同盾_第一联系人身份证命中欠款公司法人名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyIdCards3Month",
        "questionText": "同盾_3个月内申请信息关联多个身份证",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1CommonIdCardLoanOverdue",
        "questionText": "同盾_第一联系人身份证命中信贷逾期名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact5CommonMobileIsFake",
        "questionText": "同盾_第五联系人手机号命中虚假号码或通信小号库_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4CommonMobileLoanBlackMedium",
        "questionText": "同盾_第四联系人手机号命中贷款黑中介库_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1ClosedIdCardCrimeWanted",
        "questionText": "同盾_第一联系人身份证命中犯罪通缉名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1IsClose",
        "questionText": "同盾_第一联系人社会关系为父母或子女或配偶",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4CommonIdCardCourtDishonesty",
        "questionText": "同盾_第四联系人身份证命中法院失信名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_IsAlwaysPowerOff",
        "questionText": "是否长时间关机(默认值无)",
        "answerText": ["无"],
        "value": "无"
      }, {
        "name": "applyLoanOnPlats24Month",
        "questionText": "同盾_24个月内申请人在多个平台申请借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "emailIsMidRiskFocus",
        "questionText": "同盾_邮箱命中中风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats30",
        "questionText": "同盾_30天内申请人在多个平台申请借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_PnWeChatAddress",
        "questionText": "手机号对应微信地址",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JO_rsl_IDcardMobileConfirm",
        "questionText": "三维素验证(手机号码身份证号验证接口)",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_PnWechatSex",
        "questionText": "手机号对应微信性别",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JXL_ReportData_regContactPhoneInJXLNum",
        "questionText": "用户所填联系人电话在聚信力中出现个数(默认值0)",
        "answerText": ["0"],
        "value": 0
      }, {
        "name": "idCardIsCourtDishonesty",
        "questionText": "同盾_身份证命中法院失信名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardIsLowRiskFocus",
        "questionText": "同盾_身份证命中低风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QqWechatNicknameBlack",
        "questionText": "QQ对应的微信昵称是否涉黑",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2IsClose",
        "questionText": "同盾_第二联系人社会关系为父母或子女或配偶",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1ClosedIdCardOverdraftCorporate",
        "questionText": "同盾_第一联系人身份证命中欠款公司法人名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "phoneIsBilk",
        "questionText": "同盾_座机号命中诈骗骚扰证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_CallLoanPhone",
        "questionText": "是否拨打含‘贷款’的电话(默认值否)",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1CommonMobileLoanOverdue",
        "questionText": "同盾_第一联系人手机号命中信贷逾期名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdBankRefuse",
        "questionText": "通过身份证查询银行拒绝",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JD_Activity_degree_lv",
        "questionText": "活跃度",
        "answerText": [],
        "value": ""
      }, {
        "name": "contact4IsClose",
        "questionText": "同盾_第四联系人社会关系为父母或子女或配偶",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "devIdCardMobileApplyOver7",
        "questionText": "同盾_7天内设备或身份证或手机号申请次数过多",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Market_instalment_lv",
        "questionText": "商品分期需求",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_JD_Purchasing_power_rating_lv",
        "questionText": "综合消费能力评级",
        "answerText": [],
        "value": ""
      }, {
        "name": "overIdCardMobile7",
        "questionText": "同盾_7天内设备使用过多的身份证或手机号进行申请",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3CommonMobileLoanBlackMedium",
        "questionText": "同盾_第三联系人手机号命中贷款黑中介库_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3CommonMobileIsFake",
        "questionText": "同盾_第三联系人手机号命中虚假号码或通信小号库_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "overIdCardMobile1",
        "questionText": "同盾_1天内设备使用过多的身份证或手机号进行申请",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_CallOut_Count",
        "questionText": "呼出通话总数量(默认值-1)",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_JD_Have_car_lv",
        "questionText": "有车指数",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_SZR_PersonalPhoto",
        "questionText": "照片",
        "answerText": [""],
        "value": ""
      }, {
        "name": "loanApplyIsConsist",
        "questionText": "同盾_客户多头借贷申请承诺与检测结果匹配不一致",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1CommonIdCardCourtExecuted",
        "questionText": "同盾_第一联系人身份证命中法院执行名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "finalDecision",
        "questionText": "同盾_风险评估结果，取所有策略中分数最高的结果。结果有三种：Accept无风险，通过；Review低风险，审查；Reject高风险，拒绝",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "mobileIsRandomInput",
        "questionText": "同盾_手机号疑似乱填",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardNameIsCourtClosed",
        "questionText": "同盾_身份证_姓名命中法院结案模糊名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Business",
        "questionText": "商旅人士",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_JXL_ReportData_CallJieXinPhone",
        "questionText": "是否拨打含‘捷信’的电话(默认值否)",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellP2PFraud",
        "questionText": "通过手机查询小贷或P2P欺诈",
        "answerText": [""],
        "value": ""
      }, {
        "name": "mobileIsMidRiskFocus",
        "questionText": "同盾_手机号命中中风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2CommonIdCardCrimeWanted",
        "questionText": "同盾_第二联系人身份证命中犯罪通缉名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "disIsExceptInShortTime",
        "questionText": "同盾_短时间移动距离位置异常",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_AppWechatHeadPic",
        "questionText": "app绑定微信的头像url",
        "answerText": ["http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/538B21E5-5E13-E711-B04C-D89D67298EA4/user/1490668729796.jpg?Expires=1490669334&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=DyuZrpqfS6ts4syCBFFTlH7Mp8M%3D"],
        "value": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/538B21E5-5E13-E711-B04C-D89D67298EA4/user/1490668729796.jpg?Expires=1490669334&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=DyuZrpqfS6ts4syCBFFTlH7Mp8M%3D"
      }, {
        "name": "X_PnWechatNickName",
        "questionText": "手机号对应微信昵称",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_FilledWechatNickName",
        "questionText": "填写的微信号对应的微信昵称",
        "answerText": ["someone"],
        "value": "someone"
      }, {
        "name": "contact3ClosedIdCardCourtDishonesty",
        "questionText": "同盾_第三联系人身份证命中法院失信名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "emailIsFormatErr",
        "questionText": "同盾_邮箱格式不符合国际标准",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "bankNameIdCards3Month",
        "questionText": "同盾_3个月内银行卡_姓名关联多个身份证",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4ClosedMobileLoanOverdue",
        "questionText": "同盾_第四联系人手机号命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3CommonIdCardCourtExecuted",
        "questionText": "同盾_第三联系人身份证命中法院执行名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_CallIn_Count",
        "questionText": "呼入通话总数量(默认值-1)",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_QQReptilePersonaldescInBlacklist",
        "questionText": "填写的QQ个人说明是否涉黑",
        "answerText": ["false"],
        "value": "false"
      }, {
        "name": "contact2ClosedIdCardCrimeWanted",
        "questionText": "同盾_第二联系人身份证命中犯罪通缉名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellBankFraud",
        "questionText": "通过手机查询银行欺诈",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_TwoDimensionJO_OneContact_NameMobileConfirm",
        "questionText": "二维素验证(第一联系人手机号码姓名验证)",
        "answerText": ["未查到"],
        "value": "未查到"
      }, {
        "name": "contact1IsCommon",
        "questionText": "同盾_第一联系人社会关系为其他亲属或朋友或同事或其他",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardNameIsLoanOverdue",
        "questionText": "同盾_身份证_姓名命中信贷逾期模糊名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_PnWeChatProvince",
        "questionText": "手机号对应微信省份",
        "answerText": [""],
        "value": ""
      }, {"name": "X_SZR_Education", "questionText": "学历", "answerText": [""], "value": ""}, {
        "name": "X_Alipay_City",
        "questionText": "支付宝城市",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact4ClosedIdCardCourtClosed",
        "questionText": "同盾_第四联系人身份证命中法院结案名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "eduAgeJobValidRisk",
        "questionText": "同盾_学历_年龄_行业信息交叉验证风险",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_AppWechatNickName",
        "questionText": "app绑定微信的昵称",
        "answerText": ["someone"],
        "value": "someone"
      }, {
        "name": "contact3CommonIdCardLoanOverdue",
        "questionText": "同盾_第三联系人身份证命中信贷逾期名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "mobileAsContactNum2",
        "questionText": "同盾_3个月内申请人手机号作为联系人手机号出现的次数大于等于2",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardIsCourtClosed",
        "questionText": "同盾_身份证命中法院结案名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QqWechatNickName",
        "questionText": "QQ对应的微信昵称",
        "answerText": ["阿华"],
        "value": "阿华"
      }, {
        "name": "contact1ClosedMobileLoanOverdueRepay",
        "questionText": "同盾_第一联系人手机号命中信贷逾期后还款名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_sl_cell",
        "questionText": "手机特殊名单校验",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_SZR_GraduateDate",
        "questionText": "毕业时间",
        "answerText": ["Wed Apr 05 18:56:38 CST 2017"],
        "value": 1491389798136
      }, {
        "name": "applyLoanOnPlats30Cnt",
        "questionText": "同盾_30天内申请人在多个平台申请借款-个数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_JD_Have_house_lv",
        "questionText": "有房指数",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_PnWCSameToAppWC",
        "questionText": "手机号对应微信昵称是否和app绑定的微信昵称相同",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "devIdCardMobileApplyOver30",
        "questionText": "同盾_30天内设备或身份证或手机号申请次数过多",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellP2PRefuse",
        "questionText": "通过手机查询小贷或P2P拒绝",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_AddressBookBlackList",
        "questionText": "通讯录命中套现中介黑名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QqWechatSignBlackv",
        "questionText": "QQ对应的微信签名是否涉黑",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Suspicious_check_exist",
        "questionText": "身份是否涉黑",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_JD_Credit_level",
        "questionText": "信用风险评分",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_FilledWechatNicknameBlack",
        "questionText": "填写的微信号对应的微信昵称是否涉黑",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Bai_score",
        "questionText": "小白信用分",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact4ClosedMobileLoanOverdueRepay",
        "questionText": "同盾_第四联系人手机号命中信贷逾期后还款名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4ClosedIdCardCourtDishonesty",
        "questionText": "同盾_第四联系人身份证命中法院失信名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2ClosedIdCardCourtDishonesty",
        "questionText": "同盾_第二联系人身份证命中法院失信名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "mobileIsLowRiskFocus",
        "questionText": "同盾_手机号命中低风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardIsLoanOverdueRepay",
        "questionText": "同盾_身份证命中信贷逾期后还款名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact5ClosedIdCardCourtClosed",
        "questionText": "同盾_第五联系人身份证命中法院结案名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact5ClosedIdCardCrimeWanted",
        "questionText": "同盾_第五联系人身份证命中犯罪通缉名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdP2PFraud",
        "questionText": "通过身份证查询小贷或P2P欺诈",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_QqWechatSex",
        "questionText": "QQ对应的微信性别",
        "answerText": ["男"],
        "value": "男"
      }, {
        "name": "contact1CommonIdCardCourtClosed",
        "questionText": "同盾_第一联系人身份证命中法院结案名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardIsTaxes",
        "questionText": "同盾_身份证命中欠税名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardIsVehicleHire",
        "questionText": "同盾_身份证命中车辆租赁黑名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Career",
        "questionText": "职业预测",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_JD_Account_usage_time_lv",
        "questionText": "网购账龄",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_JD_Suspicious_check_src",
        "questionText": "身份涉黑类型",
        "answerText": [],
        "value": ""
      }, {
        "name": "mobileIsHighRiskFocus",
        "questionText": "同盾_手机号命中高风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact5ClosedIdCardCourtExecuted",
        "questionText": "同盾_第五联系人身份证命中法院执行名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_ContactNumber_Count",
        "questionText": "联系号码数量(默认值-1)",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "idCardIsFormatRight",
        "questionText": "同盾_身份证格式校验正确",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4CommonMobileLoanOverdue",
        "questionText": "同盾_第四联系人手机号命中信贷逾期名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_PY_JusticeLoseTrackInfoNumber",
        "questionText": "鹏元_司法失信信息（条）",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "emailIsLoanOverdueRepay",
        "questionText": "同盾_邮箱命中信贷逾期后还款名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QqWeChatAddress",
        "questionText": "QQ对应微信地址",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_SZR_RXRQ_Checkrs",
        "questionText": "入学日期比对结果（1为一致，,0为不一致）",
        "answerText": ["服务异常"],
        "value": "服务异常"
      }, {
        "name": "X_YT_SimilarityIdcardDatabase",
        "questionText": "查询照对证件照(网纹照)的相似度",
        "answerText": [""],
        "value": ""
      }, {
        "name": "applyLoanOnPlats3Month",
        "questionText": "同盾_3个月内申请人在多个平台申请借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4ClosedMobileLoanBlackMedium",
        "questionText": "同盾_第四联系人手机号命中贷款黑中介库_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1CommonIdCardCrimeWanted",
        "questionText": "同盾_第一联系人身份证命中犯罪通缉名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4ClosedMobileIsFake",
        "questionText": "同盾_第四联系人手机号命中虚假号码或通信小号库_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_IsProviderInfoMatch",
        "questionText": "运营商信息是否匹配(默认值无)",
        "answerText": ["无"],
        "value": "无"
      }, {
        "name": "X_PY_JusticeCaseInfoNumber",
        "questionText": "鹏元_司法案例信息（条）",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_JD_Sum_money_1_year_lv",
        "questionText": "近1年网购金额",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_Alipay_Constellation",
        "questionText": "支付宝星座",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact3ClosedIdCardCourtExecuted",
        "questionText": "同盾_第三联系人身份证命中法院执行名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact5ClosedIdCardOverdraftCorporate",
        "questionText": "同盾_第五联系人身份证命中欠款公司法人名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_FilledWechatSex",
        "questionText": "填写的微信号对应的微信性别",
        "answerText": ["女"],
        "value": "女"
      }, {
        "name": "X_PnWechatNicknameBlack",
        "questionText": "手机号对应微信昵称是否涉黑",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3ClosedMobileIsFake",
        "questionText": "同盾_第三联系人手机号命中虚假号码或通信小号库_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QHZX_HasMobileFraudRisk",
        "questionText": "前海征信中手机号是否存在欺诈风险",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "emailIsLowRiskFocus",
        "questionText": "同盾_邮箱命中低风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Addr_usedtime",
        "questionText": "地址使用时长",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_QHZX_HasSeriousTrafficViolationRisk",
        "questionText": "前海征信中是否有交通严重违章",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_YT_SimilarityQueryIdcard",
        "questionText": "翻拍身份证照对证件照(网纹照)的相似度",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JD_Result",
        "questionText": "京东登录返回结果",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "phoneIsLoanOverdue",
        "questionText": "同盾_座机号命中信贷逾期名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4ClosedIdCardOverdraftCorporate",
        "questionText": "同盾_第四联系人身份证命中欠款公司法人名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2ClosedIdCardCourtClosed",
        "questionText": "同盾_第二联系人身份证命中法院结案名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact5IsClose",
        "questionText": "同盾_第五联系人社会关系为父母或子女或配偶",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_ZZC_Rule_BLK0002",
        "questionText": "申请人姓名和证件号码与黑名单姓名和证件号码均相同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_TD_Rule_33674_OuterPlatformLoanAmount",
        "questionText": "同盾_3个月内手机在本平台外的借款申请次数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_ZZC_Rule_BLK0001",
        "questionText": "申请人证件号码与黑名单证件号码相同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_QQBindingNicknameIncludeWordOfName",
        "questionText": "绑定的QQ昵称是否包含姓名中的某个字",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_BLK0004",
        "questionText": "申请人手机号码与黑名单手机号码相同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JXL_ReportData_DataExistMonth_Count",
        "questionText": "有数据月数(默认值-1)",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "idCardIsSecond",
        "questionText": "同盾_身份证是否二代身份证",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_ZZC_Rule_BLK0006",
        "questionText": "申请人手机号码与黑名单单位电话相同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_BLK0007",
        "questionText": "申请人手机号码与黑名单住宅电话相同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact1ClosedMobileLoanBlackMedium",
        "questionText": "同盾_第一联系人手机号命中贷款黑中介库_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Income_lv",
        "questionText": "收入预测",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_JD_Night_people",
        "questionText": "不良作息习惯",
        "answerText": [],
        "value": ""
      }, {
        "name": "idCardIsTravelDishonesty",
        "questionText": "同盾_身份证命中故意违章乘车名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_33676_OuterPlatformLoanAmount",
        "questionText": "同盾_3个月内身份证在本平台外的借款申请次数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_BR_SpecialListCellP2PLost",
        "questionText": "通过手机查询小贷或P2P失联",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact2ClosedMobileLoanBlackMedium",
        "questionText": "同盾_第二联系人手机号命中贷款黑中介库_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_ZZC_Rule_BLK0014",
        "questionText": "联系人电话号码与黑名单单位电话号码相同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_BLK0013",
        "questionText": "联系人电话号码与黑名单手机号码相同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JD_Student_lv",
        "questionText": "学生客群",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_QQReptileGender",
        "questionText": "填写的QQ性别",
        "answerText": ["男"],
        "value": "男"
      }, {
        "name": "contact1ClosedMobileIsFake",
        "questionText": "同盾_第一联系人手机号命中虚假号码或通信小号库_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats7",
        "questionText": "同盾_7天内申请人在多个平台申请借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_FilledWeChatAddress",
        "questionText": "填写的微信号对应微信地址",
        "answerText": ["扎伊尔"],
        "value": "扎伊尔"
      }, {
        "name": "contact2CommonMobileIsFake",
        "questionText": "同盾_第二联系人手机号命中虚假号码或通信小号库_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_SZR_EntryDate",
        "questionText": "入学年份",
        "answerText": ["Wed Apr 05 18:56:38 CST 2017"],
        "value": 1491389798136
      }, {
        "name": "X_QHZX_HasBankCardFraudRisk",
        "questionText": "前海征信中卡号是否存在欺诈风险",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_ZZC_Rule_BLK0025",
        "questionText": "申请人联系地址与黑名单家庭地址相同(匹配度大于75%）",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_BLK0026",
        "questionText": "申请人联系地址与黑名单单位地址相同(匹配度大于75%）",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_FilledWeChatProvince",
        "questionText": "填写的微信号对应微信省份",
        "answerText": [""],
        "value": ""
      }, {
        "name": "mobileAddrIsNotMatchIpCity",
        "questionText": "同盾_申请手机号归属地与真实IP的城市不匹配",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_ZZC_Rule_BLK0021",
        "questionText": "申请人手机号码与黑名单联系人电话相同",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_BLK0022",
        "questionText": "申请人住宅地址与黑名单单位地址相同(匹配度大于75%）",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZZC_Rule_BLK0024",
        "questionText": "申请人住宅地址与黑名单住宅地址相同(匹配度大于75%）",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact2ClosedIdCardLoanOverdue",
        "questionText": "同盾_第二联系人身份证命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_SZR_EducationType",
        "questionText": "学历类型",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact2CommonMobileLoanOverdueRepay",
        "questionText": "同盾_第二联系人手机号命中信贷逾期后还款名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2CommonIdCardCourtExecuted",
        "questionText": "同盾_第二联系人身份证命中法院执行名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1CommonIdCardCourtDishonesty",
        "questionText": "同盾_第一联系人身份证命中法院失信名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_Alipay_IsAuth",
        "questionText": "支付宝是否实名认证",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Market_sensitive_lv",
        "questionText": "营销敏感度",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_JD_Home_credibility",
        "questionText": "常用地址稳定性",
        "answerText": [],
        "value": ""
      }, {
        "name": "contact1ClosedIdCardLoanOverdue",
        "questionText": "同盾_第一联系人身份证命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact5CommonMobileLoanOverdueRepay",
        "questionText": "同盾_第五联系人手机号命中信贷逾期后还款名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "qqIsHighRiskFocus",
        "questionText": "同盾_QQ号中高风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdP2PBad",
        "questionText": "通过身份证查询小贷/P2P不良",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact1ClosedIdCardCourtExecuted",
        "questionText": "同盾_第一联系人身份证命中法院执行名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QQReptileNickname",
        "questionText": "填写的QQ昵称",
        "answerText": ["第八号当铺"],
        "value": "第八号当铺"
      }, {
        "name": "X_JD_Tel_credibility",
        "questionText": "常用手机稳定性",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_YT_IsPass",
        "questionText": "比对是否通过（依图提供的结果）",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdCreditBad",
        "questionText": "通过身份证查询资信不良",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_QQReptileNicknameIncludeWordOfName",
        "questionText": "填写的QQ昵称是否包含姓名中的某个字",
        "answerText": ["false"],
        "value": "false"
      }, {
        "name": "idCardIsOverdraftCorporate",
        "questionText": "同盾_身份证命中欠款公司法人名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Idcard_match_name",
        "questionText": "实名验真",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_BR_SpecialListIdP2POverdue",
        "questionText": "通过身份证查询小贷或P2P短时逾期",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_BR_SpecialListIdP2PLost",
        "questionText": "通过身份证查询小贷或P2P失联",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact4ClosedIdCardCourtExecuted",
        "questionText": "同盾_第四联系人身份证命中法院执行名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats60Month",
        "questionText": "同盾_60个月内申请人在多个平台申请借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_FilledWCSameToAppWC",
        "questionText": "填写的微信号对应的微信昵称是否和app绑定的微信昵称相同",
        "answerText": ["true"],
        "value": true
      }, {
        "name": "contact2CommonIdCardOverdraftCorporate",
        "questionText": "同盾_第二联系人身份证命中欠款公司法人名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardIsCourtExecuted",
        "questionText": "同盾_身份证命中法院执行名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "qqIsMidRiskFocus",
        "questionText": "同盾_QQ号命中中风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "addrIsLoanOverdue",
        "questionText": "同盾_地址信息命中信贷逾期名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_811950",
        "questionText": "同盾_借款人身份证命中法院结案证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellPhoneOverdue",
        "questionText": "通过手机查询电信欠费",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_TD_Rule_811954",
        "questionText": "同盾_借款人手机号命中失联证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_IsUserInfoInBlacklist",
        "questionText": "命中内部黑名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_811952",
        "questionText": "同盾_借款人身份证命中失联证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "mobileIsLoanBlackMedium",
        "questionText": "同盾_手机号命中贷款黑中介库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_811956",
        "questionText": "同盾_借款人身份证命中犯罪通缉名单库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats12Month",
        "questionText": "同盾_12个月内申请人在多个平台申请借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_Alipay_IsNicknameBlack",
        "questionText": "支付宝昵称涉黑",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2ClosedMobileLoanOverdueRepay",
        "questionText": "同盾_第二联系人手机号命中信贷逾期后还款名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_33676_LoanAmount",
        "questionText": "同盾_3个月内身份证多平台借款平台数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_FilledWechatSignBlack",
        "questionText": "填写的微信号对应的微信签名是否涉黑",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellBankLost",
        "questionText": "通过手机查询银行失联",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact3IsClose",
        "questionText": "同盾_第三联系人社会关系为父母或子女或配偶",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Pre_loan_lv",
        "questionText": "套现模块",
        "answerText": [],
        "value": ""
      }, {
        "name": "idCardIsStudentLoan",
        "questionText": "同盾_身份证号对应人存在助学贷款逾期历史",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "mobileIsBilk",
        "questionText": "同盾_手机号命中诈骗骚扰库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "qqIsLoanOverdueRepay",
        "questionText": "同盾_QQ号命中信贷逾期后还款名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3ClosedMobileLoanBlackMedium",
        "questionText": "同盾_第三联系人手机号命中贷款黑中介库_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_PnWechatNicknameContainTrueName",
        "questionText": "手机号对应微信昵称是否包含姓名中的某个字",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdInsFraud",
        "questionText": "通过身份证查询保险骗保",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_BD_BlackList_BlackLevel",
        "questionText": "百度黑名单等级",
        "answerText": ["-9999"],
        "value": "-9999"
      }, {
        "name": "X_SZR_YXMC_Checkrs",
        "questionText": "院校比对结果（1为一致,0为不一致）",
        "answerText": ["服务异常"],
        "value": "服务异常"
      }, {
        "name": "contact5ClosedIdCardCourtDishonesty",
        "questionText": "同盾_第五联系人身份证命中法院失信名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2CommonMobileLoanBlackMedium",
        "questionText": "同盾_第二联系人手机号命中贷款黑中介库_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Similarity_max",
        "questionText": "地址最大涉黑相似度",
        "answerText": [""],
        "value": ""
      }, {
        "name": "phoneIsLowRiskFocus",
        "questionText": "同盾_座机号命中低风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3CommonMobileLoanOverdueRepay",
        "questionText": "同盾_第三联系人手机号命中信贷逾期后还款名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Market_user_profit_lv",
        "questionText": "用户价值预测",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_QHZX_HasFraudRisk",
        "questionText": "前海征信中是否有欺诈风险",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Price_sensitivity_lv",
        "questionText": "价格敏感度",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_QqWeChatProvince",
        "questionText": "QQ对应微信省份",
        "answerText": ["浙江"],
        "value": "浙江"
      }, {
        "name": "applyLoanOnPlats60MonthCnt",
        "questionText": "同盾_60个月内申请人在多个平台申请借款-个数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "contact5ClosedIdCardLoanOverdue",
        "questionText": "同盾_第五联系人身份证命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3CommonMobileLoanOverdue",
        "questionText": "同盾_第三联系人手机号命中信贷逾期名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "unitNameIsMedium",
        "questionText": "同盾_单位名称疑似中介关键词",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats6MonthCnt",
        "questionText": "同盾_6个月内申请人在多个平台申请借款-个数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "idCardIsHighRiskFocus",
        "questionText": "同盾_身份证命中高风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_YT_SimilarityQueryDatabase",
        "questionText": "查询照对翻拍身份证照的相似度",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_ZM_ZhiMaScore",
        "questionText": "用户的芝麻信用分",
        "answerText": ["757"],
        "value": "757"
      }, {
        "name": "X_JD_Mob_usedtime",
        "questionText": "手机号使用时长",
        "answerText": [],
        "value": ""
      }, {
        "name": "idCardRegionIsHighRisk",
        "questionText": "同盾_身份证归属地位于高风险较为集中地区",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3CommonIdCardOverdraftCorporate",
        "questionText": "同盾_第三联系人身份证命中欠款公司法人名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_Contact_Count",
        "questionText": "联系人数量(默认值-1)",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_BR_SpecialListCellInsFraud",
        "questionText": "通过手机查询保险骗保",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JD_Decision_addr",
        "questionText": "地址涉黑判断",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_FilledWechatCity",
        "questionText": "填写的微信号对应的微信城市",
        "answerText": [""],
        "value": ""
      }, {
        "name": "idCardOverDev1",
        "questionText": "同盾_1天内身份证使用过多设备进行申请",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Mobile_match_name",
        "questionText": "手机号姓名校验模块",
        "answerText": [],
        "value": ""
      }, {
        "name": "mobileIsVehicleHire",
        "questionText": "同盾_手机号命中车辆租赁违约名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "mobileIsOverdraftCorporate",
        "questionText": "同盾_手机号命中欠款公司法人名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_33674_LoanAmount",
        "questionText": "同盾_3个月内手机多平台借款平台数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "idCardIsLost",
        "questionText": "同盾_身份证命中失联名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2ClosedIdCardCourtExecuted",
        "questionText": "同盾_第二联系人身份证命中法院执行名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QHZX_DataStatus",
        "questionText": "前海征信中数据状态",
        "answerText": [""],
        "value": ""
      }, {
        "name": "mobileIsFake",
        "questionText": "同盾_手机号命中虚假号码库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_CallFinancePhone",
        "questionText": "是否拨打含‘金融’的电话(默认值否)",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdP2PRefuse",
        "questionText": "通过身份证查询小贷或P2P拒绝",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_FilledWechatNicknameContainTrueName",
        "questionText": "填写的微信号对应的微信昵称是否包含姓名中的某个字",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3CommonIdCardCourtClosed",
        "questionText": "同盾_第三联系人身份证命中法院结案名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellBankOverdue",
        "questionText": "通过手机查询银行短时逾期",
        "answerText": [""],
        "value": ""
      }, {"name": "X_JD_Asset_lv", "questionText": "资产模块", "answerText": [""], "value": ""}, {
        "name": "idCardOverDev30",
        "questionText": "同盾_30天内身份证使用过多设备进行申请",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2ClosedIdCardOverdraftCorporate",
        "questionText": "同盾_第二联系人身份证命中欠款公司法人名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardIsMidRiskFocus",
        "questionText": "同盾_身份证命中中风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardIsCrimeWanted",
        "questionText": "同盾_身份证命中犯罪通缉名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QQBindingNicknameInBlackList",
        "questionText": "绑定的QQ昵称是否涉黑",
        "answerText": [""],
        "value": ""
      }, {
        "name": "idCardOverDev7",
        "questionText": "同盾_7天内身份证使用过多设备进行申请",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QQReptileCity",
        "questionText": "填写的QQ城市",
        "answerText": ["台州"],
        "value": "台州"
      }, {
        "name": "contact2ClosedMobileIsFake",
        "questionText": "同盾_第二联系人手机号命中虚假号码或通信小号库_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats12MonthCnt",
        "questionText": "同盾_12个月内申请人在多个平台申请借款-个数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "contact4CommonIdCardOverdraftCorporate",
        "questionText": "同盾_第四联系人身份证命中欠款公司法人名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "mobileIsFormatErr",
        "questionText": "同盾_手机号格式校验错误",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_CallIn_Length",
        "questionText": "呼入通话总时长(默认值-1)",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_QqWechatCity",
        "questionText": "QQ对应的微信城市",
        "answerText": ["台州"],
        "value": "台州"
      }, {
        "name": "contact3ClosedMobileLoanOverdue",
        "questionText": "同盾_第三联系人手机号命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_PY_CollectionNoticeInfoNumber",
        "questionText": "鹏元_催欠公告信息（条）",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "phoneIsHighRiskFocus",
        "questionText": "同盾_座机号中高风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_YT_Similarity",
        "questionText": "本次比对的相似度",
        "answerText": [""],
        "value": ""
      }, {
        "name": "idCardNameIsCourtDishonesty",
        "questionText": "同盾_身份证_姓名命中法院失信模糊名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2ClosedMobileLoanOverdue",
        "questionText": "同盾_第二联系人手机号命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3IsCommon",
        "questionText": "同盾_第三联系人社会关系为其他亲属或朋友或同事或其他",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "phoneIsMidRiskFocus",
        "questionText": "同盾_座机号命中中风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_PY_JusticeExecuteInfoNumber",
        "questionText": "鹏元_司法执行信息（条）",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_PnWeChatAvatar",
        "questionText": "手机号对应微信用户头像",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_QqWechatNicknameContainTrueName",
        "questionText": "QQ对应的微信昵称是否包含姓名中的某个字",
        "answerText": ["true"],
        "value": true
      }, {
        "name": "contact1CommonMobileLoanOverdueRepay",
        "questionText": "同盾_第一联系人手机号命中信贷逾期后还款名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4ClosedIdCardLoanOverdue",
        "questionText": "同盾_第四联系人身份证命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QQReptileNicknameCompreBinding",
        "questionText": "填写的QQ号和绑定的QQ号昵称是否一致",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact5ClosedMobileLoanOverdue",
        "questionText": "同盾_第五联系人手机号命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QHZX_HasBlackList",
        "questionText": "前海征信中是否有征信记录",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QQReptileNicknameInBlackList",
        "questionText": "填写的QQ昵称是否涉黑",
        "answerText": ["false"],
        "value": "false"
      }, {
        "name": "X_Alipay_IsTrueNameContainAlipayName",
        "questionText": "支付宝姓名是否和用户一致",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QQReptileBirthdayCompareRaw",
        "questionText": "填写的QQ生日是否和本人相同",
        "answerText": ["false"],
        "value": "false"
      }, {
        "name": "idCardIsLoanOverdue",
        "questionText": "同盾_身份证命中信贷逾期名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_57284",
        "questionText": "同盾_借款人身份证命中法院失信证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Suspicious_check_scr",
        "questionText": "身份涉黑等级",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_FilledWeChatNation",
        "questionText": "填写的微信号对应微信国家",
        "answerText": ["安哥拉"],
        "value": "安哥拉"
      }, {
        "name": "X_QHZX_HasCreditOverdueRisk",
        "questionText": "前海征信中是否有信贷逾期风险",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdBankOverdue",
        "questionText": "通过身份证查询银行短时逾期",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JD_Community_level",
        "questionText": "小区档次",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JD_Decision",
        "questionText": "京东天机审核结果",
        "answerText": ["true"],
        "value": true
      }, {
        "name": "X_JD_Have_children",
        "questionText": "有无子女",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_JD_Work_addr_stabl",
        "questionText": "工作稳定性",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_QqWeChatNation",
        "questionText": "QQ对应微信国家",
        "answerText": ["中国"],
        "value": "中国"
      }, {
        "name": "contact3CommonIdCardCrimeWanted",
        "questionText": "同盾_第三联系人身份证命中犯罪通缉名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellBankRefuse",
        "questionText": "通过手机查询银行拒绝",
        "answerText": [""],
        "value": ""
      }, {
        "name": "loanDevProxyExcept",
        "questionText": "同盾_借款设备代理识别",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_33640",
        "questionText": "同盾_借款身份证命中全局失信证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3ClosedIdCardCourtClosed",
        "questionText": "同盾_第三联系人身份证命中法院结案名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_33642",
        "questionText": "同盾_借款人身份证命中法院执行证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Mob_credibility",
        "questionText": "手机号可信度",
        "answerText": [],
        "value": ""
      }, {
        "name": "emailIsFormatRight",
        "questionText": "同盾_邮箱格式校验无误",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "eduAgePosValidRisk",
        "questionText": "同盾_学历_年龄_职位信息交叉验证风险",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_33638",
        "questionText": "同盾_借款手机号命中全局失信证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Addr_abandon_probility",
        "questionText": "地址弃用概率",
        "answerText": [""],
        "value": ""
      }, {
        "name": "idCardNameIsCourtExecuted",
        "questionText": "同盾_身份证_姓名命中法院执行模糊名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdCourtBad",
        "questionText": "通过身份证查询法院失信人",
        "answerText": [""],
        "value": ""
      }, {
        "name": "applyLoanOnPlats3MonthCnt",
        "questionText": "同盾_3个月内申请人在多个平台申请借款-个数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_PnWeChatNation",
        "questionText": "手机号对应微信国家",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact3ClosedIdCardCrimeWanted",
        "questionText": "同盾_第三联系人身份证命中犯罪通缉名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "mobileIsLoanOverdue",
        "questionText": "同盾_手机号命中信贷逾期名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TwoDimensionJO_TwoContact_NameMobileConfirm",
        "questionText": "二维素验证(第二联系人手机号码姓名验证)",
        "answerText": ["未查到"],
        "value": "未查到"
      }, {
        "name": "contact4IsCommon",
        "questionText": "同盾_第四联系人社会关系为其他亲属或朋友或同事或其他",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4CommonMobileLoanOverdueRepay",
        "questionText": "同盾_第四联系人手机号命中信贷逾期后还款名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "isHighRiskAge",
        "questionText": "同盾_申请人属于高风险年龄段人群",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2CommonMobileLoanOverdue",
        "questionText": "同盾_第二联系人手机号命中信贷逾期名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1ClosedIdCardCourtClosed",
        "questionText": "同盾_第一联系人身份证命中法院结案名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4ClosedIdCardCrimeWanted",
        "questionText": "同盾_第四联系人身份证命中犯罪通缉名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_PY_TaxAdministrationLawInfoNumber",
        "questionText": "鹏元_税务行政执法信息（条）",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "contact2CommonIdCardCourtClosed",
        "questionText": "同盾_第二联系人身份证命中法院结案名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1ClosedIdCardCourtDishonesty",
        "questionText": "同盾_第一联系人身份证命中法院失信名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdBankLost",
        "questionText": "通过身份证查询银行失联",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_QQBindingNickname",
        "questionText": "绑定的QQ昵称",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact1CommonMobileIsFake",
        "questionText": "同盾_第一联系人手机号命中虚假号码或通信小号库_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats24MonthCnt",
        "questionText": "同盾_24个月内申请人在多个平台申请借款-个数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "contact3ClosedIdCardOverdraftCorporate",
        "questionText": "同盾_第三联系人身份证命中欠款公司法人名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyIpIsNotMatchIpCity",
        "questionText": "同盾_申请IP与真实IP的城市不匹配",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact1CommonMobileLoanBlackMedium",
        "questionText": "同盾_第一联系人手机号命中贷款黑中介库_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "emailIsLoanOverdue",
        "questionText": "同盾_邮箱命中信贷逾期名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdPhoneOverdue",
        "questionText": "通过身份证查询电信欠费",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_BR_SpecialListIdBankFraud",
        "questionText": "通过身份证查询银行欺诈",
        "answerText": [""],
        "value": ""
      }, {
        "name": "mobileIsLost",
        "questionText": "同盾_手机号命中失联名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "idCardApplys3Month",
        "questionText": "同盾_3个月内身份证关联多个申请信息",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_Alipay_IsSignblack",
        "questionText": "支付宝签名是否涉黑",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3ClosedMobileLoanOverdueRepay",
        "questionText": "同盾_第三联系人手机号命中信贷逾期后还款名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_IsNewNumber",
        "questionText": "绑定号码是否为新号(默认值无)",
        "answerText": ["无"],
        "value": "无"
      }, {
        "name": "contact2CommonIdCardLoanOverdue",
        "questionText": "同盾_第二联系人身份证命中信贷逾期名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact2CommonIdCardCourtDishonesty",
        "questionText": "同盾_第二联系人身份证命中法院失信名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_33674",
        "questionText": "同盾_3个月内手机在多个平台进行借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_33676",
        "questionText": "同盾_3个月内身份证在多个平台进行借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Distance_min",
        "questionText": "地址最小涉黑距离",
        "answerText": [""],
        "value": ""
      }, {
        "name": "qqIsLoanOverdue",
        "questionText": "同盾_QQ号命中信贷逾期名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_PnWechatSignBlack",
        "questionText": "手机号对应微信签名是否涉黑",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4CommonIdCardCrimeWanted",
        "questionText": "同盾_第四联系人身份证命中犯罪通缉名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListIdCourtExecuted",
        "questionText": "通过身份证查询法院被执行人",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact2IsCommon",
        "questionText": "同盾_第二联系人社会关系为其他亲属或朋友或同事或其他",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4CommonIdCardCourtClosed",
        "questionText": "同盾_第四联系人身份证命中法院结案名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellBankBad",
        "questionText": "通过手机查询银行不良",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_QHZX_HasIPAddressFraudRisk",
        "questionText": "前海征信中IP是否存在欺诈风险",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact4CommonIdCardLoanOverdue",
        "questionText": "同盾_第四联系人身份证命中信贷逾期名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Consumption_desire_lv",
        "questionText": "消费饥渴度",
        "answerText": [],
        "value": ""
      }, {
        "name": "contact1ClosedMobileLoanOverdue",
        "questionText": "同盾_第一联系人手机号命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3ClosedIdCardLoanOverdue",
        "questionText": "同盾_第三联系人身份证命中信贷逾期名单_近亲",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats6Month",
        "questionText": "同盾_6个月内申请人在多个平台申请借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellP2PBad",
        "questionText": "通过手机查询小贷或P2P不良",
        "answerText": [""],
        "value": ""
      }, {
        "name": "idCardIsCompanyTaxes",
        "questionText": "同盾_身份证命中公司欠税名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_IdCardIdentificationResult",
        "questionText": "人证一致",
        "answerText": ["无"],
        "value": "无"
      }, {
        "name": "X_JD_Home_addr_stabl",
        "questionText": "居住稳定性",
        "answerText": [],
        "value": ""
      }, {
        "name": "X_FilledWeChatAvatar",
        "questionText": "填写的微信号对应微信用户头像",
        "answerText": ["http://qc-qa.oss-cn-hangzhou.aliyuncs.com/3ec578403e95165dc762afc5bdcd2166?Expires=1806028750&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=xITkaEIRDgvbTEoVS%2B8IQRSDMJs%3D"],
        "value": "http://qc-qa.oss-cn-hangzhou.aliyuncs.com/3ec578403e95165dc762afc5bdcd2166?Expires=1806028750&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=xITkaEIRDgvbTEoVS%2B8IQRSDMJs%3D"
      }, {
        "name": "X_QHZX_HasAdministrationNegativeRisk",
        "questionText": "前海征信中是否有行政负面风险",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats18Month",
        "questionText": "同盾_18个月内申请人在多个平台申请借款",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QHZX_RiskScore",
        "questionText": "前海征信中风险得分",
        "answerText": ["-99"],
        "value": -99
      }, {
        "name": "X_TD_Rule_33652",
        "questionText": "同盾_借款人手机号命中虚假号码证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_TD_Rule_33654",
        "questionText": "同盾_借款人手机号命中通信小号证据库",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "applyLoanOnPlats7Cnt",
        "questionText": "同盾_7天内申请人在多个平台申请借款-个数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_JXL_ReportData_CallOut_Length",
        "questionText": "呼出通话总时长(默认值-1)",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_QqWeChatAvatar",
        "questionText": "QQ号对应微信用户头像",
        "answerText": ["http://qc-qa.oss-cn-hangzhou.aliyuncs.com/49157ef3ea8b6a4dcf39ff4b5bcda4dd?Expires=1806028750&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=9Noqk5gvtSeT06O2Pgd95uSVSP0%3D"],
        "value": "http://qc-qa.oss-cn-hangzhou.aliyuncs.com/49157ef3ea8b6a4dcf39ff4b5bcda4dd?Expires=1806028750&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=9Noqk5gvtSeT06O2Pgd95uSVSP0%3D"
      }, {
        "name": "idCardIsFormatErr",
        "questionText": "同盾_身份证格式校验错误",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_RJ_Rule",
        "questionText": "风险规则",
        "answerText": [""],
        "value": ""
      }, {
        "name": "contact4CommonMobileIsFake",
        "questionText": "同盾_第四联系人手机号命中虚假号码或通信小号库_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_QqWCSameToAppWC",
        "questionText": "QQ对应的微信昵称是否和app绑定的微信昵称相同",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_ContactRegion_Count",
        "questionText": "联系地区数量(默认值-1)",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "contact4CommonIdCardCourtExecuted",
        "questionText": "同盾_第四联系人身份证命中法院执行名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact3CommonIdCardCourtDishonesty",
        "questionText": "同盾_第三联系人身份证命中法院失信名单_一般联系人",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JXL_ReportData_IsRealAuthenticated",
        "questionText": "是否实名认证(默认值无)",
        "answerText": ["无"],
        "value": "无"
      }, {
        "name": "X_BR_sl_id",
        "questionText": "身份证特殊名单校验",
        "answerText": [""],
        "value": ""
      }, {
        "name": "emailIsHighRiskFocus",
        "questionText": "同盾_邮箱命中高风险关注名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_JD_Mob_abandon_probility",
        "questionText": "手机号弃用概率",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JD_Market_active_response_lv",
        "questionText": "白条响应率",
        "answerText": [],
        "value": ""
      }, {
        "name": "mobileIsFormatRight",
        "questionText": "同盾_手机号格式校验正确",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "X_BR_SpecialListCellP2POverdue",
        "questionText": "通过手机查询小贷或P2P短时逾期",
        "answerText": [""],
        "value": ""
      }, {
        "name": "X_JO_rsl_DurationOfOnline",
        "questionText": "三维素验证(手机号码在网时长)",
        "answerText": [],
        "value": ""
      }, {
        "name": "applyLoanOnPlats18MonthCnt",
        "questionText": "同盾_18个月内申请人在多个平台申请借款-个数",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "X_PY_InternetLoanOverdueInfoNumber",
        "questionText": "鹏元_网贷逾期信息（条）",
        "answerText": ["-1"],
        "value": -1
      }, {
        "name": "mobileIsLoanOverdueRepay",
        "questionText": "同盾_手机号命中信贷逾期后还款名单",
        "answerText": ["false"],
        "value": false
      }, {
        "name": "contact5ClosedMobileLoanBlackMedium",
        "questionText": "同盾_第五联系人手机号命中贷款黑中介库_近亲",
        "answerText": ["false"],
        "value": false
      }]
    },
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "MedicalExpertInoutForm",
      "template": "医美专家job",
      "answers": [{
        "name": "X_IsOperationItemAndPositionReasonable",
        "questionText": "手术项目和部位是否合理",
        "answerText": [],
        "value": "IsOperationItemAndPositionReasonable_Yes"
      }, {
        "name": "X_IsExistBigDisputeRisk",
        "questionText": "是否存在较高纠纷风险",
        "answerText": [],
        "value": "IsExistBigDisputeRisk_No"
      }, {
        "name": "X_IsOperationPriceReasonable",
        "questionText": "手术价格是否合理",
        "answerText": [],
        "value": "IsOperationPriceReasonable_Yes"
      }]
    },
    {
      "appId": "2b9209d7-4d9c-4384-9d7b-3da5ae01f464",
      "name": "GpsDistanceInForm",
      "template": "Gps距离",
      "answers": [{
        "name": "X_DistanceUserToD",
        "questionText": "用户-驻场D距离",
        "answerText": ["170.0"],
        "value": "170.0"
      }, {
        "name": "X_DistanceUserToHospital",
        "questionText": "用户-医院距离",
        "answerText": ["274457.0"],
        "value": "274457.0"
      }, {"name": "X_DistanceDToHospital", "questionText": "驻场D-医院距离", "answerText": ["274288.0"], "value": "274288.0"}]
    }
  ]
  var type = req.query.type;
  res.json(results[type]);
})

app.get('/api/application/:appId/applicationnote', function (req, res) {
  res.json([]);
})

app.get('/api/application/:appId/personinfo', function (req, res) {
  var info = {
    "urls": ["http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/4a3a692d-f276-4644-a9d3-e1159c5faa50/surgery/1490669892927.jpg?Expires=1491390098&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=wRO8hgyDnZpaJVL%2BkgMNxsG8QNw%3D"],
    "idFrontPhoto": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/538B21E5-5E13-E711-B04C-D89D67298EA4/user/1490668502655.jpg?Expires=1491390398&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=aWzA%2Fc9KxoqHzGH2sKpSe8tOFDI%3D",
    "idBackPhoto": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/538B21E5-5E13-E711-B04C-D89D67298EA4/user/1490668812408.jpg?Expires=1491390398&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=Es0Hf5RMTSrnyUh6ZwEOt7IYj20%3D",
    "headPhoto": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/538B21E5-5E13-E711-B04C-D89D67298EA4/user/1490668502840.jpg?Expires=1491390398&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=hptK5115k4adGbxbx87DFyBCRd4%3D",
    "appCheckPhoto": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/dealer/2c07f252-59d6-4aad-ba5f-81fea54daf01/attachment/1490669409226.jpg?Expires=1491390998&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=CL5XbNWd2CGJwnBKbjYm0hfjS8A%3D",
    "mobileReferences": {"refInformation": "13938552122", "refCount": 0, "refList": []},
    "qqReferences": {"refInformation": "525463814", "refCount": 0, "refList": []},
    "companyReferences": {"refInformation": "", "refCount": 0, "refList": []},
    "linealMobileReferences": {
      "refInformation": "18810542764",
      "refCount": 3,
      "refList": [{
        "userId": "299B976F-2F15-E711-B04C-D89D67298EA4",
        "name": "徐曹铭",
        "isBlackStatus": null,
        "mobile": "15822551133",
        "type": "9"
      }, {
        "userId": "0466DCCA-B515-E711-B04C-D89D67298EA4",
        "name": "徐曹铭",
        "isBlackStatus": null,
        "mobile": "13525412233",
        "type": "9"
      }, {
        "userId": "F4A328DC-0E15-E711-B04C-D89D67298EA4",
        "name": "徐曹",
        "isBlackStatus": null,
        "mobile": "13938552125",
        "type": "8"
      }]
    },
    "favoriteMobileReferences": {"refInformation": "18810542762", "refCount": 0, "refList": []}
  };

  res.json(info);
})

app.get('/api/application/:appId/thirdaccountinfo', function (req, res) {
  var info = [{
    "type": 4,
    "thirdAccount": "525463814",
    "thirdHeadPic": null,
    "nickName": null,
    "areaName": null,
    "openId": null
  }, {
    "type": 5,
    "thirdAccount": "zhaoh6813",
    "thirdHeadPic": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/513-E711-B04C-D89D67298EA4/user/1490668729796.jpg?Expires=1491390398&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=ReOsKnUMRtuE4AwCOLDlB6j659s%3D",
    "nickName": "sone",
    "areaName": " ",
    "openId": "opnwrulyCQWg5rWAj9xc3i4"
  }];

  res.json(info);
})

app.get('/api/application/:appId/mobileinfo', function (req, res) {
  res.json({});
})

app.get('/api/application/:appId/applicationinfo', function (req, res) {
  var info = {
    "appId": null,
    "s1Id": "bef58846-7a64-11e6-98a0-1051721b36c9",
    "posId": "89502845-6e71-11e6-98a0-1051721b36c9",
    "pricipal": 3000.0,
    "installmentMonth": 6,
    "interest": 0.05,
    "repayment": 666.05,
    "productId": "23a82ef2-7588-11e6-b4cd-8038bc0f0573",
    "fundId": "6A92B245-557C-E511-ACD8-AC853D9F5508",
    "feeRate": "0.025000",
    "discount": "0.030000",
    "repaymentStatus": "1",
    "monthQuota": "0.0",
    "merchantQuota": "77999.0",
    "totalQuota": "3221.7572028923105",
    "startPayTime": "2017-03-28",
    "expectedAmount": 3000.0,
    "expectedMonth": 6,
    "surgeryProject": "今年你",
    "surgeryDate": 1490668427000,
    "applyDate": 1490668420000,
    "userSource": 0,
    "fundSource": 0,
    "userId": null,
    "name": "赵华",
    "mobile": "13938552122",
    "idName": "赵华",
    "idNumber": "410222198802141000",
    "idFrontPhoto": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/538B21E5-5E13-E711-B04C-D89D67298EA4/user/1490668502655.jpg?Expires=1491390398&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=aWzA%2Fc9KxoqHzGH2sKpSe8tOFDI%3D",
    "idBackPhoto": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/538B21E5-5E13-E711-B04C-D89D67298EA4/user/1490668812408.jpg?Expires=1491390398&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=Es0Hf5RMTSrnyUh6ZwEOt7IYj20%3D",
    "headPhoto": "http://cosmetic-qa.oss-cn-hangzhou.aliyuncs.com/538B21E5-5E13-E711-B04C-D89D67298EA4/user/1490668502840.jpg?Expires=1491390398&OSSAccessKeyId=LTAIWVSd6EcpLkrv&Signature=hptK5115k4adGbxbx87DFyBCRd4%3D",
    "bankCardPhoto": null,
    "bankaccout": null,
    "bankName": null,
    "signOrg": "",
    "validDate": "",
    "idAddress": "",
    "nation": "",
    "province": "江苏省",
    "city": "南京市",
    "district": "市辖区",
    "detailAddress": "江苏省南京市鼓楼区汉口路22号77房88室",
    "added_on": 1490668395000,
    "offset": 0,
    "limit": 0,
    "search": null,
    "sort": null,
    "order": null,
    "transactionComments": null
  };

  res.json(info);

})

app.get('/api/application/2b9209d7-4d9c-4384-9d7b-3da5ae01f464/userinfo', function (req, res) {
  var info = [{"key": "用户身份", "value": "待业"}, {"key": "主要收入来源", "value": "收入来源于配偶"}, {
    "key": "月收入",
    "value": "3000-4000"
  }];
  res.json(info);
})

app.get('/api/application/:appId/signdetails', function (req, res) {
  var results = [
    {},
    {"id":"58d9cf830cf2ed09877db930","appId":"4a3a692d-f276-4644-a9d3-e1159c5faa50","dealerUserId":"2c07f252-59d6-4aad-ba5f-81fea54daf01","type":1,"checkTime":1490669443528,"content":{"name":"AppCheck","description":"审核结构化签单","version":"v0.1.2","content":[{"id":"0","text":"您好，我是星计划的驻点面签员，我有几个问题想问您一下：","type":"html","answer":""},{"id":"1","text":"您今天几个人一起来的呢","type":"SingleChoice","required":true,"options":[{"id":"A","text":"独自前来"},{"id":"B","text":"有1个人陪同"},{"id":"C","text":"有2个人陪同"},{"id":"D","text":"有2个以上的人陪同"}],"answer":{"id":"A","value":"独自前来"}},{"id":"2","text":"您是如何了解这家医院的","type":"SingleChoice","required":true,"options":[{"id":"A","text":"朋友介绍来的"},{"id":"B","text":"医院医生名气很大"},{"id":"C","text":"在网上查到的"},{"id":"D","text":"户外广告看到的"},{"id":"E","text":"微信朋友圈看到的"},{"id":"F","text":"客户不愿说"},{"id":"G","text":"猜测是渠道带来的"},{"id":"H","text":"其他","note":""}],"answer":{"id":"A","value":"朋友介绍来的"}},{"id":"3","text":"您今天有没有带信用卡","type":"SingleChoice","required":true,"options":[{"id":"A","text":"客户没办过信用卡"},{"id":"B","text":"客户没带"},{"id":"C","text":"带了1张"},{"id":"D","text":"带了2张"},{"id":"E","text":"带了3张及以上"},{"id":"F","text":"客户不愿意说"}],"answer":{"id":"B","value":"客户没带"}},{"id":"4","text":"您之前有没有办过分期","type":"SingleChoice","required":true,"options":[{"id":"A","text":"没办过分期"},{"id":"B","text":"办过医美分期"},{"id":"C","text":"办过车贷/房贷"},{"id":"D","text":"办过现金贷"},{"id":"E","text":"办过手机分期"},{"id":"F","text":"办过其他分期"}],"answer":{"id":"A","value":"没办过分期"}},{"id":"5","text":"是哪家您还记得吗","type":"SingleChoice","required":true,"dependency":{"id":"4","answer":{"id":"B"}},"options":[{"id":"A","text":"么么贷"},{"id":"B","text":"即分期"},{"id":"C","text":"麦芽"},{"id":"D","text":"百度"},{"id":"E","text":"快分期"},{"id":"F","text":"医分期"},{"id":"G","text":"浦发"},{"id":"H","text":"华夏"},{"id":"I","text":"小牛"},{"id":"J","text":"马上"},{"id":"K","text":"佰仟（仟姿贷）"},{"id":"L","text":"分期乐"},{"id":"M","text":"美人贷"},{"id":"N","text":"美好分期"},{"id":"O","text":"任我买"},{"id":"P","text":"招联"},{"id":"Q","text":"量化派"},{"id":"R","text":"秀分期"},{"id":"S","text":"乐分期"},{"id":"T","text":"易美健"},{"id":"U","text":"既美分期"},{"id":"others","text":"其他","note":""}],"answer":""},{"id":"6","text":"是哪家您还记得吗","type":"Text","required":true,"dependency":{"id":"4","answer":{"id":"C"}},"note":"","answer":""},{"id":"7","text":"是哪家您还记得吗","type":"SingleChoice","required":true,"dependency":{"id":"4","answer":{"id":"D"}},"options":[{"id":"A","text":"捷信"},{"id":"B","text":"佰仟"},{"id":"C","text":"马上"},{"id":"D","text":"有用"},{"id":"E","text":"达飞"},{"id":"others","text":"其他","note":""}],"answer":""},{"id":"8","text":"是哪家您还记得吗","type":"SingleChoice","required":true,"dependency":{"id":"4","answer":{"id":"E"}},"options":[{"id":"A","text":"捷信"},{"id":"B","text":"佰仟"},{"id":"C","text":"达飞（即有）"},{"id":"D","text":"玖富"},{"id":"E","text":"普惠"},{"id":"F","text":"恒昌"},{"id":"G","text":"拍拍贷"},{"id":"H","text":"速分期"},{"id":"I","text":"有用"},{"id":"J","text":"小牛"},{"id":"K","text":"翼分期"},{"id":"L","text":"银信"},{"id":"M","text":"闪银"},{"id":"N","text":"优亿金融"},{"id":"O","text":"秒付"},{"id":"P","text":"纷奇"},{"id":"Q","text":"马上金融"},{"id":"R","text":"买单侠"},{"id":"others","text":"其他","note":""}],"answer":""},{"id":"9","text":"是哪家您还记得吗","type":"Text","required":true,"dependency":{"id":"4","answer":{"id":"F"}},"note":"","answer":""},{"id":"10","text":"当时分了多少期","type":"Text","required":true,"dependency":{"id":"4","answer":{"id":["B","C","D","E","F"]}},"note":"","answer":""},{"id":"11","text":"每期大概还多少钱","type":"Text","required":true,"dependency":{"id":"4","answer":{"id":["B","C","D","E","F"]}},"note":"","answer":""},{"id":"12","text":"现在还剩几期","type":"Text","required":true,"dependency":{"id":"4","answer":{"id":["B","C","D","E","F"]}},"note":"","answer":""},{"id":"13","text":"您的手机是实名的吗","type":"SingleChoice","required":true,"options":[{"id":"A","text":"是本人实名的"},{"id":"B","text":"不是本人实名的"},{"id":"C","text":"没问到/客户自己也不知道"}],"answer":{"id":"A","value":"是本人实名的"}},{"id":"14","text":"方便透露下手机实名人的名字吗？这个对审核有帮助","type":"Text","required":true,"dependency":{"id":"13","answer":{"id":"B"}},"answer":""},{"id":"15","text":"他/她同您是什么关系","type":"SingleChoice","required":true,"dependency":{"id":"13","answer":{"id":"B"}},"options":[{"id":"A","text":"父母"},{"id":"B","text":"伴侣"},{"id":"C","text":"朋友"},{"id":"D","text":"其他","note":""}],"answer":""},{"id":"16","text":"感谢您的配合，之后可能会有我们伤害总部的审核电话。您稍等，我去帮您查一下审核进度","type":"html","answer":""},{"id":"17","text":"请驻场继续完成以下问题：","type":"html","answer":""},{"id":"18","text":"客户是否首单","type":"SingleChoice","required":true,"options":[{"id":"A","text":"首单"},{"id":"B","text":"非首单"},{"id":"C","text":"无法确定"}],"answer":{"id":"A","value":"首单"}},{"id":"19","text":"客户是否拼单","type":"SingleChoice","required":true,"options":[{"id":"A","text":"拼单","note":""},{"id":"B","text":"非拼单"},{"id":"C","text":"无法确定"}],"answer":{"id":"B","value":"非拼单"}},{"id":"20","text":"客户工作信息是否造假","type":"SingleChoice","required":true,"options":[{"id":"A","text":"真实"},{"id":"B","text":"造假"},{"id":"C","text":"无法确定"}],"answer":{"id":"A","value":"真实"}},{"id":"21","text":"客户个人信息是否造假（地址、联系人）","type":"SingleChoice","required":true,"options":[{"id":"A","text":"真实"},{"id":"B","text":"造假"},{"id":"C","text":"无法确定"}],"answer":{"id":"A","value":"真实"}},{"id":"22","text":"客户是否有做医美项目的医院","type":"SingleChoice","required":true,"options":[{"id":"A","text":"真实"},{"id":"B","text":"造假"},{"id":"C","text":"无法确定"}],"answer":{"id":"A","value":"真实"}},{"id":"23","text":"客户备注","type":"Text","note":"","answer":""},{"id":"24","text":"辛苦啦！我们会加速审核的，比心","type":"html","answer":""}],"checkTime":1490669442582},"dealerUser":"南京测试"},
    {"id":null,"appId":null,"dealerUserId":null,"type":null,"checkTime":null,"content":null},
    {},
    {"id":null,"appId":null,"dealerUserId":null,"type":null,"checkTime":null,"content":null},
    {"id":null,"appId":null,"dealerUserId":null,"type":null,"checkTime":null,"content":null}
  ];

  var type = req.query.type;

  res.json(results[type]);

})

app.get('/api/merchant/bankcard/pending/check/list', function (req, res) {
  console.log(req.query);
  var info = {
    total: 2,
    rows: [
      {
        merchantName:"wwww",
        bankCardNumber:"wq1",
        bankName:"qw",
        accountType:"1",
        checkResult:null,
        storeId:"1111",
        checkResultDesc:""
      },
      {
        merchantName:"21eqw",
        bankCardNumber:"wq2",
        bankName:"qw",
        accountType:"1",
        checkResult:2,
        storeId:"2222",
        checkResultDesc:"对公校验失败"
      }
    ]
  }
  res.json(info);
})

app.post('/api/:storeId/bankCard/:accountNumber/check', function (req, res) {
  console.log(req.params.storeId+"------"+req.params.accountNumber);
  var info = {
    errorCode:"0001",
    errorMessage:"失败!"
  }
  res.json(info);
})

app.put('/api/:storeId/bankCard/:accountNumber/check/manual/:result', function (req, res) {
  console.log(req.params.storeId+"------"+req.params.accountNumber+"-----"+req.params.result);
  var info = {
    errorCode:"0000",
    errorMessage:"成功!"
  }
  res.json(info);
})

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  var error = {
    errorCode: "500",
    errorMessage: "call api error"
  }
  res.status(500);
  res.json(error);
}

app.listen(port, function () {
  console.log('server start, listen on port ' + port);
});
