// pages/04_learn-wxml/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    message: "Hello",
    firstName: "zhang",
    lastName: "xinxin",
    date: new Date().toLocaleDateString(),

    score: 99,
    isHidden: false,
    books: [
      { id: 0, name: "js高级程序设计", price: 99 },
      { id: 1, name: "react好难", price: 888 },
      { id: 2, name: "vue学不会", price: 222}
    ]

  },

  onChangeHidden() {
    this.setData({
      isHidden: !this.data.isHidden
    })
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