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
    var feed = util.getData2();
    var feed_data = feed.data
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    })
    console.log(this.feed)
  },
})
