// index.js

Page({
  data: {
    pages: [
      { name: "01_注册页面", path: "/pages/01_register-page/register-page" },
      { name: "02_公共组件", path: "/pages/02_common-cpns/index" },
      { name: "03_学习wxss", path: "/pages/03_learn-wxss/index" },
      { name: "04_学习wxml", path: "/pages/04_learn-wxml/index" },
      { name: "05_学习wxs", path: "/pages/05_learn-wxs/index" },
      { name: "06_学习事件相关", path: "/pages/06_learn-event/index" },
      { name: "07_学习组件相关", path: "/pages/07_learn-component/index" },
      { name: "08_学习组件插槽", path: "/pages/08_learn-cnpsslot/index" },
      { name: "09_学习网络请求", path: "/pages/09_learn-network/index" },
      { name: "10_学习系统API", path: "/pages/10_learn-api/index" },
      { name: "11_学习导航跳转", path: "/pages/11_learn-nav/index" }


    ]
  },

  onBtnClick(event) {
    const item = event.target.dataset.item
    wx.navigateTo({
      url: item.path,
    })
  }
})