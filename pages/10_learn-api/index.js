// pages/10_learn-api/index.js
Page({

  onToastTap() {
    wx.showToast({
      title: '你好啊',  
      duration: 3000,
      mask: true,
      success: res => console.log(res),
      fail: err => console.log(err)
    })
  },

  onModalTap() {
    wx.showModal({
      title: '确认购买吗?',
      content: '奥迪A8L可不便宜,想好了吗?',
      cancelColor: "#f00",
      confirmColor: "#f0f",
      success: res => console.log("res:",res),
      fail: err => console.log("err:",err),
      complete: (comp) => {
        console.log(comp);
      }
    })
  },

  onActionSheetTap() {
    wx.showActionSheet({
      alertText: "商品菜单",
      itemList: ["鱼香肉丝", "宫保鸡丁", "大米饭"],
      itemColor: '#f00',
      success: res => console.log("res:", res),
      fail: err => console.log("err:", err)
    })
  },

  onGetLocationTap() {
    wx.getLocation({
      success: res => console.log(res),
      fail: err => console.log(err)
    })
  },

  onGetSystemInfoTap() {
    wx.getSystemInfo({
      success: res => console.log("res:", res),
      fail: err => console.log("err:", err)
    })
  },

  onSetStorageAsyncTap() {
    wx.setStorageSync('username', "哈哈哈")
    wx.setStorageSync('age', 18)
    wx.setStorageSync('height', 1.88)
  },

  onGetStorageAsyncTap() {
    const res = wx.getStorageSync("username")
    const res2 = wx.getStorageSync("age")
    console.log(res, res2)
  },

  onRemoveStorageAsyncTap() {
    wx.removeStorageSync('age')
  },

  onSetStorageTap() {
    wx.setStorage({
      encrypt: true, // 开启加密存储
      key: "userInfo",
      data: 12345
    })
  },

  onGetStorageTap() {
    wx.getStorage({
      encrypt: true,
      key: "userInfo",
      success: res => console.log(res)
    })
  },

  onRemoveStorageTap() {
    wx.removeStorage({
      key: 'userInfo',
    })
  }
})