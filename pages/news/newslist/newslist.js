// pages/news/newslist/newslist.js

import common from '../../../utils/common.js'

//导入moment
import moment from '../../../lib/moment/we-moment-with-locales.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsListData()
  },

  getNewsListData(){
    //发送网络请求
    const that = this
    wx.request({
      url: common.apihost +"api/getnewslist",
      success: function (res) {
        res.data.message.forEach(item=>{
          item.add_time = moment(item.add_time).format("YYYY-MM-DD HH:mm")
        })
        that.setData({
          newsList : res.data.message
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})