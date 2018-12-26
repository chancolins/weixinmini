//index.js
//获取应用实例

var util = require('../../util/util.js')

Page({

  onShow: function () {
    util.getLocationAndOpenMap();
  }

})
