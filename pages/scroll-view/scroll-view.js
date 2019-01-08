// pages/scroll-view/scroll-view.js

var order = ['red','yellow','blue','green','red']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 0,
    
  },

  upper: function(e) {
    console.log(e)
  },

  lower: function(e) {
    console.log(e)
  },

  scroll: function(e) {
    console.log(e)
  },

  tap: function(e) {
    for(var i = 0; i < order.length; ++i) {
      if(order[i] == this.data.toView) {
        this.setData({
          toView: order[i+1]
        })
        break
      }
    }

  },

  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
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
    wx.showNavigationBarLoading({
      success: function(res) {
        //wx.hideNavigationBarLoading()
        console.log(res, new Date())
      }
    })
    setTimeout(function () {wx.hideNavigationBarLoading()},2000)
  
    console.log('onPullDownRefresh', new Date())
  },
  

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showActionSheet({
      itemList: ['item1','item2','item3'],
      success: function(res) {
        if(!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})