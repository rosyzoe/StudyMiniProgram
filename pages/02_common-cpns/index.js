// pages/02_common-cpns/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "coderzxx",
    chooseImage: "",
    list: ["red", "pink", "yellow", "orange", "skyblue", "blue"]
  },

  getUserInfo() {
    wx.getUserProfile({
      desc: 'desc',
      success: res => {
        console.log(res);
      }
    })
  },

  getPhoneNumber(e) {
    console.log(e);
  },

  onChooseImage() {
    wx.chooseMedia({
      count: 2,
      mediaType: "image",
      sourceType: "album",
      success: res => {
        console.log(res);
        const imgPath = res.tempFiles[0].tempFilePath
        this.setData({
          chooseImage: this.data.chooseImage = imgPath
        })
      }
    })
  },

  onUpper() {
    console.log("滚动到顶部/最左边");
  },

  onLower() {
    console.log("滚动到最底部/最右边");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})