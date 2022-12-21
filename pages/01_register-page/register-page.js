Page({

  data: {
    banners: [],

    // 作用二: 定义一些本地固定的数据
    counter: 100,
    btns: ["red", "yellow", "blue", "green", "pink"],
    list: 30
  },

  onLoad() {

    console.log("onload");

    // 作用一: 发送网络请求,请求数据
    wx.request({
      url: "http://123.57.109.30:3999/api/bannerList",
      success: res => {
        this.setData({
          banners: this.data.banners = res.data.list
        })
      }
    })
  },

  // 作用三: 绑定wxml中产生事件后的回调函数
  btnsClick(event) {
    const item = event.target.dataset.color
    console.log(item);
  },

  // 作用四: 绑定下拉刷新,触底监听,页面滚动监听
  // 下拉加载更多
  onPullDownRefresh() {
    this.setData({
      list: this.data.list = 30
    })
  },

  // 底部加载更多
  onReachBottom() {
    setTimeout(() => {
      this.setData({
        list: this.data.list + 30
      })
    }, 2000)
  },

  // 获取滚动位置
  onPageScroll(event) {
    console.log("滚动", event);
  },

  onShow() {
    console.log("onshow");
  },

  onReady() {
    console.log("onready");
  },

  onHide() {
    console.log("onhide");
  },

  onUnload() {
    console.log("onunload");
  }
})

