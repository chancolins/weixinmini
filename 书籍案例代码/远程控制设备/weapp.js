var that = this;

//创建WebSocket连接
wx.connectSocket({
  url: 'ws://127.0.0.1:9999/'
});

//监听WebSocket连接打开
wx.onSocketOpen(function(res) {
  console.log("Opened");
  var obj = {
    id: 2,
    info: {
      name: '微信小程序'
    }
  };

  //向服务器端发送客户端信息
  wx.sendSocketMessage({
    data: JSON.stringify(obj)
  });

  //绑定页面按钮点击事件
  that.remoteCtrl = function(e) {
    //向服务器端发送对应的按钮数据
    wx.sendSocketMessage({
      data: JSON.stringify({
        fromId: 2,
        toId: 1,
        data: e.currentTarget.id
      })
    });
  };

});

//监听从服务器发送过来的消息
wx.onSocketMessage(function(res) {
  var temp = JSON.parse(res.data);
  console.log('收到[' + temp.name + ']发来的消息：' + temp.msg);
});

//监听WebSocket关闭
wx.onSocketClose(function(res) {
  console.log("Closed");
});

//监听WebSocket错误
wx.onSocketError(function(res) {
  console.log("Error: ");
  console.log(err);
});
