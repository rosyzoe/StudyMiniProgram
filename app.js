// app.js
App({
  onLaunch(options) {
    console.log("小程序启动", options);
  },
  // 判断进入的不同场景
  onShow(options) {
    console.log("onShow", options);
  },
  onHide(options) {
    console.log("onHide", options);
  },

  // 数据不是响应式的,这里共享的数据通常是一些固定的数据
  globalData: {
    userName: "coderzxx",
    age: 18,
    height: 1.88
  }
})
