//index.js
//获取应用实例
var util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    feed: [],
    feed_length: 0
  },
  onLoad: function () {
    console.log('onLoad')
    //调用应用实例的方法获取全局数据
    this.getData()
  },
  getData: function () {
    console.log("loaddata")
    var feed = util.getData2()
    var feed_data = feed.data
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    })
  },
  upper: function () {
    // API
    // https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html
    // 在当前页面显示导航条加载动画
    // 有回调 success fail complete
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper")
    setTimeout(function () {
      // 在当前页面隐藏导航条加载动画
      wx.hideNavigationBarLoading() 
      // 停止当前页面下拉刷新
      wx.stopPullDownRefresh()
    }, 2000)
  },
  refresh: function () {
    // 显示消息提示框
    // https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html?search-key=showToast
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      // 提示的延迟时间
      duration: 3000
    })
    var feed = util.getData2()
    console.log("loaddata")
    var feed_data = feed.data
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    })
    // 虽然开了定时器，但并没有消除 _____________?
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        // icon的合法值: success|loading|nione
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  },

  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () {
       wx.hideNavigationBarLoading() 
       that.nextLoad() 
      }, 1000)
    console.log("lower")
  },

  nextLoad: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    })
    var next = util.getNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  }
})
