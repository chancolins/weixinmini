//创建WebSocket连接
var ws = new WebSocket("ws://127.0.0.1:9999/");

//监听WebSocket连接打开
ws.onopen = function() {
  console.log("Opened");
  var obj = {
    id: 1,
    info: {
      name: '我的电脑'
    }
  };

  //向服务器端发送客户端信息    
  ws.send(JSON.stringify(obj));
};

//监听从服务器发送过来的消息
ws.onmessage = function(res) {
  var temp = JSON.parse(res.data);
  //收到不同的消息做不同的处理
  if (temp.msg == $('.metro li').length) {
    $('.close').click();
  } else {
    $('.metro li:eq(' + temp.msg + ')').click();
  }
  console.log('收到[' + temp.name + ']发来的消息：' + temp.msg);
};

//监听WebSocket关闭
ws.onclose = function() {
  console.log("Closed");
};

//监听WebSocket错误      
ws.onerror = function(err) {
  console.log("Error: ");
  console.log(err);
};
