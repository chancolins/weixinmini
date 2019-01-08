// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.000000,
    longitude: 113.000000,
    markers: [{
      id: 1,
      latitude: 23.0000000,
      longitude: 113.000000,
      name: '哈哈哈哈'
    }],
    covers: [{
      latitude: 23.000000,
      longitude: 113.000000,
      iconPath:'../images/location.png'
    }],
    text: ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      },
    })
    /** this.mapCtx = wx.createMapContext('myMap')
    this.mapCtx.moveToLocation({
      fail: function(res) {
        console.log(res)
        text: "您的位置：" + res.longitude + "\n" + res.latitude + "fail位置已更新"
      },
      success: function(res) {
        that.setData({
          text: "您的位置：" + res.longitude + "\n" + res.latitude + "位置已更新"
        })
      },
      complete: function(res) {
        console("dddd"+ res)
        text: "您的位置：" + res.longitude + "\n" + res.latitude + "dddddd位置已更新"
      }
    })
    this.mapCtx.getCenterLocation({
      success: function(res) {
        that.setData({ text :"您的位置：" + res.longitude + "\n" + res.latitude})
        console.log(res.longitude)
        console.log(res.latitude)

      }
    })*/
    
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