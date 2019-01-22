// pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userPhone: "点击绑定手机号",
    authorizedOrNot: true,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo
              console.log("getsetting!!!!" + res.userInfo)

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况

            }
          })
        } else {
          that.setData({
            authorizedOrNot: false
          })
        }
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
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      console.log("无用户信息！！")
    }
    var userPhone = wx.getStorageSync("userPhone")
    if(userPhone != null && userPhone != ""){
      this.setData({
        userPhone: userPhone
      })
    } else {
      console.log("未读取到手机号！！")
    }
    
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
  binduserPhoneNumber: function(){

    wx.navigateTo({
      url: '../userphone/userphone',
    })
  },

  bindGetUserInfo: function(e){
    //通过e.detail.userInfo判断用户是否同意授权。
    var userInfo = e.detail.userInfo
    if(userInfo){
      //用户同意授权，将用户信息传入视图层，并赋值给全局变量
      this.setData({
        authorizedOrNot: true,
        userInfo: e.detail.userInfo
      })
      app.globalData.userInfo = userInfo
      //console.log("sfafsggagg")
    }
    
  }
 
})