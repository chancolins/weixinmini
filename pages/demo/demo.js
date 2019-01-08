//demo.js

//App Service应用逻辑代码

//初始数据
var helloData = {
  name: 'WeChat'
}
//注册页面
Page({
  
  /**
  * 页面的初始数据
  */

  data: helloData,

  changeName:function(e) {
    //发送数据主视图
    this.setData({
      name: 'MINA'
    });
    wx.downloadFile({
      url: 'https://yz.chsi.com.cn/apply/kscx/zkzdown.do?bmh=360179661&trnd=6e778c73-6bb0-48ae-8b0e-75e41ad37644',
      success: function(res) {
        
        var filePath = res.tempFilePath
        console.log('文档下载成功，文档所在位置：'+filePath)
        wx.openDocument({
          filePath: filePath,
          success: function(res) {
            console.log('文档打开成功')
          }
        })
      }
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
    
  },
  //新增demo
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function(){
    console.log('form发生了reset事件')
  }

})