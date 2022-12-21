// pages/09_learn-network/index.js
// import { xinRequest } from "../../service/index"
// import { xinInstance } from "../../service/index"
import xinRequest from "../../service/index"
Page({

  data: {
    allCities: {}
  },

  async onLoad() {

    // 1.网络请求的基本使用
    // wx.request({
    //   url: "http://123.207.32.32:1888/api/city/all",
    //   success: res => {
    //     const data = res.data.data
    //     this.setData({
    //       allCities: data
    //     })
    //   }
    // })

    // 2.使用封装后的网络请求: 函数
    // xinRequest({
    //   url: "http://123.207.32.32:1888/api/city/all"
    // })
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log(err);
    // })

    // 3.使用类的实例发送网络请求
    // xinInstance.get({
    //   url: "http://123.207.32.32:1888/api/city/all"
    // }).then(res => {
    //   console.log(res);
    // })


    xinRequest.get({ url: "/city/all" })
    .then(res => {
      console.log(res);
    })
    
  }
})