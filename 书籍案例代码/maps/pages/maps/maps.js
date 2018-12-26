//maps.js
//获取应用实例

var util = require('../../util/util.js')

Page({

  data: {
    pois: {},
    latitude:"39.13824",
    longitude:"116.33535"
  },

  onLoad: function () {
    var that = this;
    util.getLocationPois(function(data){
      console.log(data);
      that.setData({
        pois: data,
        latitude:data.location.lat,
        longitude:data.location.lng        
      });
    });    

  }

})
