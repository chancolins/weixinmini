//index.js
//获取应用实例
var app = getApp()
var initData = '高冷:我是高冷......机器人'
var extraLine = [];
var socketOpen = false;
Page({
  data: {
    text: initData,
    tt: ''
  },
  //事件处理函数
  formBindsubmit: function(e) {
    extraLine.push("我  ："+e.detail.value.q)
    extraLine.push("高冷："+e.detail.value.q)
    console.log(e.detail)
    this.setData({
      text: initData + '\n' + extraLine.join('\n'),
      tt: ''
    })
  },

  onLoad: function(e){
    wx.connectSocket({
      url: 'ws://www.apayado.com/RobotsServer',
      data:{
      },
      header:{ 
        'content-type': 'application/json'
      },
      method:"GET"
    }),

    wx.onSocketOpen(function(res) {
      socketOpen = true
    }),

    function sendSocketMessage(msg) {
      if (socketOpen) {
        wx.sendSocketMessage({
          data:msg
        })
      } else {
        console.log("还没有连接，不能发送："+msg)
      }
    },
    wx.onSocketMessage(function(res) {
      console.log('收到服务器内容：' + res.data)
      extraLine.push("高冷：" + res.data)
      this.setData({
        text: initData + '\n' + extraLine.join('\n'),
        tt: ''
      })
    })

  }



})
