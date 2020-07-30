var express = require('express')
var app = express()

var cors = require('cors');    
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.post('/api/Token/Login', function (req, res) {
    let data = {
        "Code": 0,
        "Message": "数据获取成功！",
        "Data": {
          "AccountID": "10223",
          "LastLogin": "2020-07-21 14:00:16",
          "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNzY4MTk1Nzc0OSIsIm5vbmNlIjoiMTAyMjMiLCJuYmYiOiIxMjA0IiwiYXpwIjoiMSIsImFkbWluaXN0cmF0aXZlX2xldmVsIjoiMSIsIlJlZ2lvbnNDb2RlIjoiMzYwNTAwIiwiZXhwIjoxNTk1MzQ3MjE2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjU2MjY4LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTYyNjgvIn0.3RocB6IWhq4ZhLjCF1dYb1-MsISKEn-G0dwpnPKNpYU",
          "Expires": 600,
          "IsUpdateStartPwd": true,
          "RefreshToken": "26f11ee3-4b99-4ac7-8a55-154ba786b34e|17681957749",
          "ExpiresTime": "",
          "NickName": "某某测试",
        }
      };
    res.send(JSON.stringify(data));
})
// 站点基础配置项
app.get('/api/Configs/GetProjectSettings', function (req, res) {
    let data = {
        "Code": 0,
        "Message": "数据获取成功！",
        "Data": {
          "ProjectType": 2,
          "ProjectName": "XXXXX",
          "RegionsCode": 340000,
          "Giiso": {
            "OuterLoginUrl": "",
            "OuterCode": "TEST"
          },
          "CopyrightName": "XXXX社版权所有",
          "ICPName": "赣公网安备XXXXXXXXXX",
          "CityNetUrl": "",
          "HelpUrl": "",
          "XiangZhengRongUrl": "、"
        }
    };
    res.send(JSON.stringify(data));
})


// 列表
app.get('/api/Article/GetReviewArticles', function (req, res) {
  let data = {
    "Code": 0,
    "Message": "数据获取成功！",
    "Data": {
      "Items": [
        {
          "ArticleID": 72388,
          "Title": "习近平同秘鲁总统比斯卡拉互致信函",
          "Author": null,
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 330,
          "SourceAccountName": "辛巴辛巴辛巴",
          "SourceOrganizationName": "LV1XXX省",
          "ReferenceTypeName": "投稿",
          "PubTime": "2020-06-12 16:30:16",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        },
        {
          "ArticleID": 62382,
          "Title": "广西桂林：开展“红脸谈话” 转变干部作风",
          "Author": "人民网",
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 954,
          "SourceAccountName": "username60",
          "SourceOrganizationName": "测试机构60",
          "ReferenceTypeName": "投稿",
          "PubTime": "2020-05-30 17:09:42",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        },
        {
          "ArticleID": 72363,
          "Title": "习近平宁夏行丨塞上鱼米乡——走进宁夏稻渔空间",
          "Author": null,
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 118,
          "SourceAccountName": "XXX测试",
          "SourceOrganizationName": "XXX测试机构",
          "ReferenceTypeName": "原创",
          "PubTime": "2020-06-10 11:06:30",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        },
        {
          "ArticleID": 72360,
          "Title": "三部门联合印发通知 安徽支持高校实体书店建设",
          "Author": "田先进",
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 337,
          "SourceAccountName": "XXX测试",
          "SourceOrganizationName": "XXX测试机构",
          "ReferenceTypeName": "原创",
          "PubTime": "2020-06-10 10:49:41",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        },
        {
          "ArticleID": 72360,
          "Title": "三部门联合印发通知 安徽支持高校实体书店建设",
          "Author": "田先进",
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 337,
          "SourceAccountName": "XXX测试",
          "SourceOrganizationName": "XXX测试机构",
          "ReferenceTypeName": "原创",
          "PubTime": "2020-06-10 10:49:41",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        },
        {
          "ArticleID": 72360,
          "Title": "三部门联合印发通知 安徽支持高校实体书店建设",
          "Author": "田先进",
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 337,
          "SourceAccountName": "XXX测试",
          "SourceOrganizationName": "XXX测试机构",
          "ReferenceTypeName": "原创",
          "PubTime": "2020-06-10 10:49:41",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        },
        {
          "ArticleID": 72360,
          "Title": "三部门联合印发通知 安徽支持高校实体书店建设",
          "Author": "田先进",
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 337,
          "SourceAccountName": "XXX测试",
          "SourceOrganizationName": "XXX测试机构",
          "ReferenceTypeName": "原创",
          "PubTime": "2020-06-10 10:49:41",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        },
        {
          "ArticleID": 72360,
          "Title": "三部门联合印发通知 安徽支持高校实体书店建设",
          "Author": "田先进",
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 337,
          "SourceAccountName": "XXX测试",
          "SourceOrganizationName": "XXX测试机构",
          "ReferenceTypeName": "原创",
          "PubTime": "2020-06-10 10:49:41",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        },
        {
          "ArticleID": 72360,
          "Title": "三部门联合印发通知 安徽支持高校实体书店建设",
          "Author": "田先进",
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 337,
          "SourceAccountName": "XXX测试",
          "SourceOrganizationName": "XXX测试机构",
          "ReferenceTypeName": "原创",
          "PubTime": "2020-06-10 10:49:41",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        },
        {
          "ArticleID": 72360,
          "Title": "三部门联合印发通知 安徽支持高校实体书店建设",
          "Author": "田先进",
          "OrganizationName": "XXX测试机构",
          "HasImage": false,
          "HasVideo": false,
          "WordCount": 337,
          "SourceAccountName": "XXX测试",
          "SourceOrganizationName": "XXX测试机构",
          "ReferenceTypeName": "原创",
          "PubTime": "2020-06-10 10:49:41",
          "IsFinalReview": false,
          "CanReviewable": true,
          "ReviewerID": 0,
          "ReviewerName": null
        }
      ],
      "Count": 21
    }
  };
  res.send(JSON.stringify(data));
})

// 目录权限
app.get('/api/Power/GetAccountRights', function (req, res) {
  let data = {
      "Code": 0,
      "Message": "数据获取成功！",
      "Data": []
    };
  res.send(JSON.stringify(data));
})

app.listen(3001)