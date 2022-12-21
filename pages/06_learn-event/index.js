// pages/06_learn-event/index.js
Page({

  data: {
    tabControl: ["手机", "电脑", "ipad", "相机"],
    currentIndex: 0
  },

  onBtnTap() {
    console.log(1);
  },

  ontabControl(event) {
    console.log(event);
    const currentIndex = event.currentTarget.dataset.index
    this.setData({
      currentIndex
    })
  }
})