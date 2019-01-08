Page({
  data: {
    inputShowed: false,
    inputVal: "",
    nickName: "",
    avatarUrl: "",
    carNumber: ""
  },
  //输入框内容响应
  bindCarNumInput: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //绑定车牌号
  bindCarNumbers: function() {
    var openId = wx.getStorageSync('openId')
    var that = this
    //判断是否已获取该用户的openId
    if (openId) {
      console.log('什么情况')
      wx.getUserInfo({

        success: function (res) {
          
          that.setData({
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
          })
        },
        fail: function () {
          console.log('获取失败！')
        },
        complete: function () {
          console.log("获取用户信息完成！")
        }
      })
    } else {  //若没有获取过openId，则进行获取
      
      wx.login({
        success: function (res) {
          console.log(res.code)
          if (res.code) {
            wx.request({
              url: 'http://192.168.4.14/wx/login',//待填
              data: {
                code: res.code,
                encryptedData: res.encryptedData,
                iv: res.iv
              },
              method: 'GET',
              header: {
                'conten-type': 'application/json'
              },
              success: function (res) {
                wx.setStorageSync('openId', res.data.openId)
                console.log("获取到的openid：" + res.data.toString)
              },
              fail: function(res) {
                console.log(res.statusCode)
              }
            })
            wx.getUserInfo({
              withCredentials: true,
              successs: function (res_user) {
                console.log("successkkkkkk")
                
              },
              fail: function () {
                wx.showModal({
                  title: '注意',
                  content: '您选择了拒绝授权，将无法正常使用该小程序，点击确定重新获取授权',
                  success: function (res) {
                    if (res.confirm) {
                      wx.openSetting({
                        success(res) {
                          if (res.authSetting['scope.userInfo']) {
                            wx.login({
                              success: function (res_login) {
                                if (res_login.code) {
                                  wx.getUserInfo({
                                    withCredentials: true,
                                    success: function (res_user) {
                                      wx.request({
                                        url: 'http://192.168.4.14/wx/login',//待填
                                        data: {
                                          code: res_login.code,
                                          encryptedData: res_login.encryptedData,
                                          iv: res_login.iv
                                        },
                                        method: 'GET',
                                        header: {
                                          'content-type': 'application/json'
                                        },
                                        success: function (res) {
                                          that.setData({
                                            nickName: res.data.nickName,
                                            avatarUrl: res.data.avatarUrl
                                          })
                                          wx.setStorageSync('openId', res.data.openId)
                                          console.log("获取到的openid：" + res.data.toString)

                                        }
                                      })
                                    }
                                  })
                                }
                              }
                            })
                          }
                        }
                      })
                    }
                  }
                })
              }
            })
          }
        }
      })
    }
    
  },
  
  //请求openId
  requestCode: function() {
  },
  
  onLoad: function () {
    
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

});