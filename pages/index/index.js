//index.js
//获取应用实例
var app = getApp()

import common from '../../utils/common.js'

Page({
  data: {
    lunboArray:[], //轮播数组
    menus:[
      {
        img_src:"../../statics/images/home/menu3.png",
        text:"新闻咨询",
        navigateToURL:'/pages/news/newslist/newslist'
      },
      {
        img_src: "../../statics/images/home/menu4.png",
        text: "图片分享",
        navigateToURL: '/pages/news/newslist/newslist'
      },
      {
        img_src: "../../statics/images/home/menu5.png",
        text: "商品购买",
        navigateToURL: '/pages/news/newslist/newslist'
      },
      {
        img_src:"../../statics/images/home/menu6.png",
        text:"留言反馈",
        navigateToURL: '/pages/news/newslist/newslist'
      },
      {
        img_src: "../../statics/images/home/menu9.png",
        text: "视频专区",
        navigateToURL: '/pages/news/newslist/newslist'
      },
      {
        img_src: "../../statics/images/home/menu10.png",
        text: "联系我们",
        navigateToURL: '/pages/news/newslist/newslist'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    //获取轮播图片
    this.getLunboData()
  },
  getLunboData(){
    var that = this
    wx.request({
      url: common.apihost+"api/getlunbo", //轮播接口
      success: function (res) {
          that.setData({
            lunboArray:res.data.message
          })
      }
    })
  }
})
