//index.js
//获取应用实例
var app = getApp()
Page({

    data: {
        src: '',
        src1: ''
    },
    bindButtonTap: function() {
        var that = this
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: ['front','back'],
            success: function(res) {
                console.log(res)
                that.setData({
                    src: res.tempFilePaths
                })
            }
        })
    },
    bindButtonTap1: function() {
        var that = this
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: ['front','back'],
            success: function(res) {
              var tempFilePaths = res.tempFilePaths
              console.log(tempFilePaths[0])
              wx.uploadFile({
                  url: 'http://www.apayado.com/upload.php',
                  filePath: tempFilePaths[0],
                  name: 'file',
                  success: function(res){
                    console.log(res)
                    that.setData({
                        src1: res
                    })
                  },
                  fail: function(res){
                    console.log("fail:")
                    console.log(res)
                    that.setData({
                        src1: "http://www.apayado.com/shenghuaweiji.mp4"
                    })                    
                  }
              })              
            }
        })
    },    
    videoErrorCallback: function(e) {
      console.log('视频错误信息:')
      console.log(e.detail.errMsg)
    }

})
