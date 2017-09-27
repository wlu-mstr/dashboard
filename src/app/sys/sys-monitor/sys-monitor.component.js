var express = require('express');
var app = express();
var port = 3000;
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/*', function (req, res, next) {
    res.header("authentication", "eyJhbGciOiJIUzI1NiJ9.eyJsLWxldiI6IkhtYWNTSEEyNTYiLCJpc3MiOiJjNjA0NGU4YS01ODQ0LTExZTYtODY2My1hMDk5OWIwOGE3N2IiLCJleHAiOjE0OTEwMzMxMDIsImp0aSI6ImUwNDcyNGJmLWU0ODAtNGVkZS1iY2IxLTM3NjY0ZWFhYmFmNiJ9.5VnZ4nRpqKv6NC2QfggkjetTm2zAVVj5zZkPteHjBrQ");
    next();
});
app.post('/admin/dashboard/getUserInfo', function (req, res) {
    var result;
    // result = {
    //   "location":
    //     [
    //       {name: '拉萨', value: 24},
    //       {name: '上海', value: 25},
    //       {name: '福州', value: 29},
    //       {name: '南宁', value: 37},
    //       {name: '广州', value: 38},
    //       {name: '太原', value: 39},
    //       {name: '昆明', value: 39},
    //       {name: '海口', value: 44},
    //       {name: '沈阳', value: 50},
    //       {name: '长春', value: 51},
    //       {name: '银川', value: 52},
    //       {name: '南昌', value: 54},
    //       {name: '西宁', value: 57},
    //       {name: '呼和浩特', value: 58},
    //       {name: '成都', value: 58},
    //       {name: '西安', value: 61},
    //       {name: '重庆', value: 66},
    //       {name: '南京', value: 67},
    //       {name: '贵阳', value: 71},
    //       {name: '北京', value: 79},
    //       {name: '乌鲁木齐', value: 84},
    //       {name: '杭州', value: 84},
    //       {name: '济南', value: 92},
    //       {name: '兰州', value: 99},
    //       {name: '天津', value: 105},
    //       {name: '郑州', value: 113},
    //       {name: '哈尔滨', value: 114},
    //       {name: '石家庄', value: 147},
    //       {name: '长沙', value: 175},
    //       {name: '合肥', value: 229},
    //       {name: '武汉', value: 273}
    //     ],
    //   "userQty":['805','1300','3205','2300','43505'],
    //   "activeUser":
    //     [
    //       {data: 'Jan1', value: 24},
    //       {data: 'Jan2', value: 25},
    //       {data: 'Jan3', value: 29},
    //       {data: 'Jan4', value: 37},
    //       {data: 'Jan5', value: 38},
    //       {data: 'Jan6', value: 39},
    //       {data: 'Jan7', value: 39},
    //       {data: 'Jan8', value: 44},
    //       {data: 'Jan9', value: 50},
    //       {data: 'Jan10', value: 51},
    //       {data: 'Jan11', value: 51},
    //       {data: 'Jan12', value: 80},
    //       /*{data: 'Jan7', value: 52},
    //        {data: 'Jan7', value: 54},
    //        {data: 'Jan7', value: 57},
    //        {data: 'Jan7', value: 58},
    //        {data: 'Jan7', value: 58},
    //        {data: 'Jan7', value: 61},
    //        {data: 'Jan7', value: 66},
    //        {data: 'Jan7', value: 67},
    //        {data: 'Jan7', value: 71},
    //        {data: 'Jan7', value: 79},
    //        {data: 'Jan7', value: 84},
    //        {data: 'Jan7', value: 84},
    //        {data: 'Jan7', value: 92},
    //        {data: 'Jan7', value: 99},
    //        {data: 'Jan7', value: 105},
    //        {data: 'Jan7', value: 113},
    //        {data: 'Jan7', value: 114},
    //        {data: 'Jan7', value: 147},
    //        {data: 'Jan7', value: 175},
    //        {data: 'Jan7', value: 229},*/
    //     ],
    //   "RegisteredUser":
    //     [
    //       {data: 'Jan1', value: 14},
    //       {data: 'Jan2', value: 55},
    //       {data: 'Jan3', value: 19},
    //       {data: 'Jan4', value: 17},
    //       {data: 'Jan5', value: 21},
    //       {data: 'Jan6', value: 39},
    //       {data: 'Jan7', value: 3},
    //       {data: 'Jan8', value: 14},
    //       {data: 'Jan9', value: 50},
    //       {data: 'Jan10', value: 11},
    //       {data: 'Jan11', value: 21},
    //       {data: 'Jan12', value: 51},
    //     ],
    // }
    result = { "retbody": { "getUserInfo": { "userQty": ["0", "5", "165"], "location": [{ "name": "", "value": "23" }, { "name": "\u4e0a\u6d77\u5e02", "value": "502" }, { "name": "\u4e91\u5357\u7701", "value": "12" }, { "name": "\u5317\u4eac\u5e02", "value": "88" }, { "name": "\u5409\u6797\u7701", "value": "5" }, { "name": "\u56db\u5ddd\u7701", "value": "40" }, { "name": "\u5929\u6d25\u5e02", "value": "134" }, { "name": "\u5b89\u5fbd\u7701", "value": "2" }, { "name": "\u5c71\u4e1c\u7701", "value": "59" }, { "name": "\u5e7f\u4e1c\u7701", "value": "243" }, { "name": "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a", "value": "4" }, { "name": "\u6c5f\u82cf\u7701", "value": "861" }, { "name": "\u6c5f\u897f\u7701", "value": "4" }, { "name": "\u6cb3\u5317\u7701", "value": "5" }, { "name": "\u6cb3\u5357\u7701", "value": "6" }, { "name": "\u6d59\u6c5f\u7701", "value": "463" }, { "name": "\u6e56\u5317\u7701", "value": "13" }, { "name": "\u6e56\u5357\u7701", "value": "37" }, { "name": "\u798f\u5efa\u7701", "value": "11" }, { "name": "\u8fbd\u5b81\u7701", "value": "17" }, { "name": "\u91cd\u5e86\u5e02", "value": "1" }, { "name": "\u9655\u897f\u7701", "value": "5" }, { "name": "\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a", "value": "3" }], "activeUser": [{ "date": "1506297600.0", "value": "7" }, { "date": "1506384000.0", "value": "5" }], "RegisteredUser": [{ "date": "1505145873.29", "value": "1" }, { "date": "1505246647.72", "value": "1" }, { "date": "1504710123.4", "value": "1" }, { "date": "1505913157.06", "value": "1" }] } }, "message": "success", "retcode": 200 };
    res.json(result);
});
app.post('/admin/dashboard/getTradeOrderInfo', function (req, res) {
    var result;
    // result = {
    //   "trade": {
    //     "tradeToday": '43,505',
    //     "tradeNums": [
    //       {data: 'Jan1', value: 114},
    //       {data: 'Jan2', value: 125},
    //       {data: 'Jan3', value: 119},
    //       {data: 'Jan4', value: 37},
    //       {data: 'Jan5', value: 38},
    //       {data: 'Jan6', value: 59},
    //       {data: 'Jan7', value: 39},
    //       {data: 'Jan8', value: 14},
    //       {data: 'Jan9', value: 50},
    //       {data: 'Jan10', value: 11},
    //       {data: 'Jan11', value: 21},
    //       {data: 'Jan12', value: 51},
    //     ],
    //     "tradeTop":
    //       [
    //         { "total_price":12340000,
    //           "total":[
    //             {name:'Company1', percent:'82%', value:156},
    //             {name:'Company2', percent:'62%', value:123},
    //             {name:'Company3', percent:'32%', value:96},
    //             {name:'Company4', percent:'12%', value:67},
    //             {name:'Company5', percent:'2%', value:52}
    //           ]
    //         },
    //         { "total_price":12340000,
    //           "1month":[
    //             {name:'Company1', percent:'82%', value:156},
    //             {name:'Company2', percent:'62%', value:123},
    //             {name:'Company3', percent:'32%', value:96},
    //             {name:'Company4', percent:'12%', value:67},
    //             {name:'Company5', percent:'2%', value:52}
    //           ]
    //         },
    //         { "total_price":12340000,
    //           "3month":[
    //             {name:'Company1', percent:'82%', value:156},
    //             {name:'Company2', percent:'62%', value:123},
    //             {name:'Company3', percent:'32%', value:96},
    //             {name:'Company4', percent:'12%', value:67},
    //             {name:'Company5', percent:'2%', value:52}
    //           ]
    //         },
    //         { "total_price":12340000,
    //           "6month":[
    //             {name:'Company1', percent:'82%', value:156},
    //             {name:'Company2', percent:'62%', value:123},
    //             {name:'Company3', percent:'32%', value:96},
    //             {name:'Company4', percent:'12%', value:67},
    //             {name:'Company5', percent:'2%', value:52}
    //           ]
    //         },
    //       ],
    //   },
    //   "order": {
    //     "orderToday": '13,505',
    //     "orderNums": [
    //       {data: 'Jan1', value: 114},
    //       {data: 'Jan2', value: 125},
    //       {data: 'Jan3', value: 109},
    //       {data: 'Jan4', value: 307},
    //       {data: 'Jan5', value: 380},
    //       {data: 'Jan6', value: 509},
    //       {data: 'Jan7', value: 439},
    //       {data: 'Jan8', value: 514},
    //       {data: 'Jan9', value: 550},
    //       {data: 'Jan10', value: 611},
    //       {data: 'Jan11', value: 621},
    //       {data: 'Jan12', value: 651},
    //     ],
    //     "orderTop":
    //       [
    //         { "total_num":35005,
    //           "total":[
    //             {name:'Company1', percent:'72%', value:996},
    //             {name:'Company2', percent:'62%', value:129},
    //             {name:'Company3', percent:'42%', value:86},
    //             {name:'Company4', percent:'32%', value:37},
    //             {name:'Company5', percent:'22%', value:32}
    //           ]
    //         },
    //         { "1month_price":12340000,
    //           "1month":[
    //             {name:'Company1', percent:'82%', value:156},
    //             {name:'Company2', percent:'62%', value:123},
    //             {name:'Company3', percent:'32%', value:96},
    //             {name:'Company4', percent:'12%', value:67},
    //             {name:'Company5', percent:'2%', value:52}
    //           ]
    //         },
    //         { "total_num":12340000,
    //           "3month":[
    //             {name:'Company1', percent:'82%', value:156},
    //             {name:'Company2', percent:'62%', value:123},
    //             {name:'Company3', percent:'32%', value:96},
    //             {name:'Company4', percent:'12%', value:67},
    //             {name:'Company5', percent:'2%', value:52}
    //           ]
    //         },
    //         { "total_num":12340000,
    //           "6month":[
    //             {name:'Company1', percent:'82%', value:156},
    //             {name:'Company2', percent:'62%', value:123},
    //             {name:'Company3', percent:'32%', value:96},
    //             {name:'Company4', percent:'12%', value:67},
    //             {name:'Company5', percent:'2%', value:52}
    //           ]
    //         },
    //       ],
    //   },
    // }
    result = { "retbody": { "getTradeOrderInfo": { "order": { "orderToday": "118", "orderNums": [{ "date": 1505520000.0, "value": "128" }, { "date": 1505606400.0, "value": "128" }, { "date": 1504828800.0, "value": "160" }, { "date": 1504310400.0, "value": "128" }, { "date": 1505433600.0, "value": "175" }, { "date": 1505260800.0, "value": "291" }, { "date": 1505347200.0, "value": "179" }, { "date": 1506124800.0, "value": "128" }, { "date": 1506384000.0, "value": "168" }, { "date": 1505952000.0, "value": "128" }, { "date": 1504224000.0, "value": "217" }, { "date": 1505174400.0, "value": "249" }, { "date": 1504915200.0, "value": "132" }, { "date": 1504742400.0, "value": "236" }, { "date": 1506297600.0, "value": "142" }, { "date": 1505779200.0, "value": "129" }, { "date": 1505001600.0, "value": "131" }, { "date": 1504483200.0, "value": "154" }, { "date": 1505865600.0, "value": "131" }, { "date": 1504396800.0, "value": "128" }, { "date": 1504656000.0, "value": "197" }, { "date": 1504569600.0, "value": "179" }, { "date": 1506470400.0, "value": "118" }, { "date": 1505088000.0, "value": "168" }, { "date": 1506211200.0, "value": "133" }, { "date": 1506038400.0, "value": "127" }, { "date": 1505692800.0, "value": "128" }], "orderTop": [{ "total": [{ "top": "1", "percent": "78%", "name": "test2017", "value": "14042" }, { "top": "2", "percent": "5%", "name": "jtest", "value": "1037" }, { "top": "3", "percent": "3%", "name": "demo", "value": "715" }, { "top": "4", "percent": "3%", "name": "\u676d\u5dde\u5a01\u8bfe\u4fe1\u606f", "value": "658" }, { "top": "5", "percent": "1%", "name": "gaoqing1", "value": "344" }], "total_num": "17'981" }, { "1month": [{ "top": "1", "percent": "86%", "name": "test2017", "value": "4557" }, { "top": "2", "percent": "6%", "name": "gaoqing1", "value": "338" }, { "top": "3", "percent": "2%", "name": "cjtest", "value": "134" }, { "top": "4", "percent": "1%", "name": "jtest", "value": "75" }, { "top": "5", "percent": "1%", "name": "alextest2", "value": "65" }], "total_num": "5'250" }, { "3month": [{ "top": "1", "percent": "85%", "name": "test2017", "value": "10065" }, { "top": "2", "percent": "5%", "name": "jtest", "value": "694" }, { "top": "3", "percent": "2%", "name": "gaoqing1", "value": "344" }, { "top": "4", "percent": "1%", "name": "alextest2", "value": "168" }, { "top": "5", "percent": "1%", "name": "cjtest", "value": "151" }], "total_num": "11'718" }, { "6month": [{ "top": "1", "percent": "82%", "name": "test2017", "value": "11629" }, { "top": "2", "percent": "7%", "name": "jtest", "value": "1037" }, { "top": "3", "percent": "2%", "name": "gaoqing1", "value": "344" }, { "top": "4", "percent": "2%", "name": "develop", "value": "303" }, { "top": "5", "percent": "1%", "name": "alextest2", "value": "168" }], "total_num": "14'124" }] }, "trade": { "tradeTop": [{ "total_price": "-6'222'819'183'388'223'000'000'000'000'000'000'001'623'036'821'091", "total": [{ "top": "1", "percent": "0%", "name": "jtest", "value": "354151105208" }, { "top": "2", "percent": "0%", "name": "gaoqing1", "value": "233630844" }, { "top": "3", "percent": "0%", "name": "Alexx", "value": "150904480" }, { "top": "4", "percent": "0%", "name": "ray826", "value": "70013778" }, { "top": "5", "percent": "0%", "name": "\u6d4b\u8bd5", "value": "5668473" }] }, { "total_price": "N'one", "1month": [{ "top": "1", "percent": "0%", "name": "ray826", "value": "70012149" }, { "top": "2", "percent": "0%", "name": "develop", "value": "45987" }, { "top": "3", "percent": "0%", "name": "cjtest", "value": "31916" }, { "top": "4", "percent": "0%", "name": "jtest", "value": "25266" }, { "top": "5", "percent": "0%", "name": "alextest2", "value": "2296" }] }, { "total_price": "N'one", "3month": [{ "top": "1", "percent": "0%", "name": "test2017", "value": "577710946" }, { "top": "2", "percent": "0%", "name": "gaoqing1", "value": "233630844" }, { "top": "3", "percent": "0%", "name": "jtest", "value": "103356421" }, { "top": "4", "percent": "0%", "name": "ray826", "value": "70013778" }, { "top": "5", "percent": "0%", "name": "develop", "value": "34597123" }] }, { "6month": [{ "top": "1", "percent": "0%", "name": "jtest", "value": "354151105208" }, { "top": "2", "percent": "0%", "name": "gaoqing1", "value": "233630844" }, { "top": "3", "percent": "0%", "name": "Alexx", "value": "150904480" }, { "top": "4", "percent": "0%", "name": "ray826", "value": "70013778" }, { "top": "5", "percent": "0%", "name": "demo", "value": "171386" }], "total_price": "N'one" }], "tradeNums": [{ "date": 1505520000.0, "value": "-8000" }, { "date": 1505606400.0, "value": "-8000" }, { "date": 1504828800.0, "value": "-5660" }, { "date": 1504310400.0, "value": "-8000" }, { "date": 1505433600.0, "value": "-4839" }, { "date": 1505260800.0, "value": "6863" }, { "date": 1505347200.0, "value": "-6330" }, { "date": 1506124800.0, "value": "-8000" }, { "date": 1506384000.0, "value": "30168" }, { "date": 1505952000.0, "value": "-8000" }, { "date": 1504224000.0, "value": "-110205" }, { "date": 1505174400.0, "value": "6431" }, { "date": 1504915200.0, "value": "-7600" }, { "date": 1504742400.0, "value": "-827897" }, { "date": 1506297600.0, "value": "10514" }, { "date": 1505779200.0, "value": "-7873" }, { "date": 1505001600.0, "value": "-7610" }, { "date": 1504483200.0, "value": "-8805" }, { "date": 1505865600.0, "value": "-7644" }, { "date": 1504396800.0, "value": "-8000" }, { "date": 1504656000.0, "value": "-18997" }, { "date": 1504569600.0, "value": "8908" }, { "date": 1506470400.0, "value": "-7824" }, { "date": 1505088000.0, "value": "615" }, { "date": 1506211200.0, "value": "-7985" }, { "date": 1506038400.0, "value": "-7915" }, { "date": 1505692800.0, "value": "-8000" }], "tradeToday": "-7'824" } } }, "message": "success", "retcode": 200 };
    res.json(result);
});
app.post('/admin/dashboard/getPlatformInfo', function (req, res) {
    var result = {
        "host": {
            "cur": 140,
            "total": 200,
            "perecnt": "70%"
        },
        "cpu": {
            "cur": 4,
            "total": 8,
            "perecnt": "50%"
        },
        "memory": {
            "cur": 23000,
            "total": 100000,
            "perecnt": "25%"
        },
        "pv": {
            "today": "2000",
            "lastMonth": [
                { data: 'Jan1', value: 114 },
                { data: 'Jan2', value: 125 },
                { data: 'Jan3', value: 109 },
                { data: 'Jan4', value: 307 },
                { data: 'Jan5', value: 380 },
                { data: 'Jan6', value: 509 },
                { data: 'Jan7', value: 439 },
                { data: 'Jan8', value: 514 },
                { data: 'Jan9', value: 550 },
                { data: 'Jan10', value: 611 },
                { data: 'Jan11', value: 621 },
                { data: 'Jan12', value: 651 },
            ]
        },
        "dataVolumn": "63,500,500"
    };
    res.json(result);
});
//app.post('/admin/dashboard/getUserInfo',function(req,res){
//  var result = {
//    "map":
//      [
//        {name: '拉萨', value: 24},
//        {name: '上海', value: 25},
//        {name: '福州', value: 29},
//        {name: '南宁', value: 37},
//        {name: '广州', value: 38},
//        {name: '太原', value: 39},
//        {name: '昆明', value: 39},
//        {name: '海口', value: 44},
//        {name: '沈阳', value: 50},
//        {name: '长春', value: 51},
//        {name: '银川', value: 52},
//        {name: '南昌', value: 54},
//        {name: '西宁', value: 57},
//        {name: '呼和浩特', value: 58},
//        {name: '成都', value: 58},
//        {name: '西安', value: 61},
//        {name: '重庆', value: 66},
//        {name: '南京', value: 67},
//        {name: '贵阳', value: 71},
//        {name: '北京', value: 79},
//        {name: '乌鲁木齐', value: 84},
//        {name: '杭州', value: 84},
//        {name: '济南', value: 92},
//        {name: '兰州', value: 99},
//        {name: '天津', value: 105},
//        {name: '郑州', value: 113},
//        {name: '哈尔滨', value: 114},
//        {name: '石家庄', value: 147},
//        {name: '长沙', value: 175},
//        {name: '合肥', value: 229},
//        {name: '武汉', value: 273}
//      ],
//    "users": {
//      "onlineUser": 805,
//      "downlineUser": 1200,
//      "activeUser": 3205,
//      "unactiveUser": 2300,
//      "registerUser": 1143500
//    },
//    "AcUser":
//      [
//        {data: 'Jan1', value: 24},
//        {data: 'Jan2', value: 25},
//        {data: 'Jan3', value: 29},
//        {data: 'Jan4', value: 37},
//        {data: 'Jan5', value: 38},
//        {data: 'Jan6', value: 39},
//        {data: 'Jan7', value: 39},
//        {data: 'Jan8', value: 44},
//        {data: 'Jan9', value: 50},
//        {data: 'Jan10', value: 51},
//        {data: 'Jan11', value: 51},
//        {data: 'Jan12', value: 51},
//        /*{data: 'Jan7', value: 52},
//         {data: 'Jan7', value: 54},
//         {data: 'Jan7', value: 57},
//         {data: 'Jan7', value: 58},
//         {data: 'Jan7', value: 58},
//         {data: 'Jan7', value: 61},
//         {data: 'Jan7', value: 66},
//         {data: 'Jan7', value: 67},
//         {data: 'Jan7', value: 71},
//         {data: 'Jan7', value: 79},
//         {data: 'Jan7', value: 84},
//         {data: 'Jan7', value: 84},
//         {data: 'Jan7', value: 92},
//         {data: 'Jan7', value: 99},
//         {data: 'Jan7', value: 105},
//         {data: 'Jan7', value: 113},
//         {data: 'Jan7', value: 114},
//         {data: 'Jan7', value: 147},
//         {data: 'Jan7', value: 175},
//         {data: 'Jan7', value: 229},*/
//
//      ],
//    "ReUser":
//      [
//        {data: 'Jan1', value: 14},
//        {data: 'Jan2', value: 25},
//        {data: 'Jan3', value: 19},
//        {data: 'Jan4', value: 37},
//        {data: 'Jan5', value: 38},
//        {data: 'Jan6', value: 459},
//        {data: 'Jan7', value: 439},
//        {data: 'Jan8', value: 114},
//        {data: 'Jan9', value: 650},
//        {data: 'Jan10', value: 311},
//        {data: 'Jan11', value: 321},
//        {data: 'Jan12', value: 251},
//
//      ],
//    "trade": {
//      "tradeToday": '43,505',
//      "tradeNums": [
//        {data: 'Jan1', value: 114},
//        {data: 'Jan2', value: 125},
//        {data: 'Jan3', value: 119},
//        {data: 'Jan4', value: 37},
//        {data: 'Jan5', value: 38},
//        {data: 'Jan6', value: 59},
//        {data: 'Jan7', value: 39},
//        {data: 'Jan8', value: 14},
//        {data: 'Jan9', value: 50},
//        {data: 'Jan10', value: 11},
//        {data: 'Jan11', value: 21},
//        {data: 'Jan12', value: 51},
//      ],
//    },
//    "tradeTop":
//    {
//      total:'123400000',
//      t1name:'CompanyXX',
//      t1percent:'32%',
//      t1value:'123,000,000',
//      t2name:'CompanyXX',
//      t2percent:'32%',
//      t2value:'123,000,000',
//      t3name:'CompanyXX',
//      t3percent:'32%',
//      t3value:'123,000,000',
//      t4name:'CompanyXX',
//      t4percent:'32%',
//      t4value:'123,000,000',
//      t5name:'CompanyXX',
//      t5percent:'32%',
//      t5value:'123,000,000'
//
//    },
//
//
//  }
//
//
//  res.json(result);
//});
//
//
//app.post('/getPlatform',function(req,res){
//  var result = {
//    "host": {
//      "cur": 140,
//      "total": 200,
//      "percent":"70%"
//    },
//    "cpu": {
//      "cur": 4,
//      "total": 8,
//      "percent":"50%"
//    },
//    "memory": {
//      "cur": 23000,
//      "total": 100000,
//      "percent":"23%"
//    },
//    'pageVisit': "230,500",
//     "dataVolumn":"63,500,500"
//
//  }
//
//
//  res.json(result);
//});
//
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
    };
    res.status(500);
    res.json(error);
}
app.listen(port, function () {
    console.log('server start, listen on port ' + port);
});
//# sourceMappingURL=sys-monitor.component.js.map