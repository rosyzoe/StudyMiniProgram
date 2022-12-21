
// 1.封装成函数
// export function xinRequest(options) {

//   return new Promise((resolve, reject) => {
//     wx.request({
//       ...options,
  
//       success: res => {
//         resolve(res.data)
//       },
//       fail: err => {
//         reject(err)
//       }
//     })
//   })
// }

// 2.封装成类
// class xinRequest {

//   request(options) {
//     return new Promise((resolve, reject) => {
//       wx.request({
//         ...options,
//         success: res =>  resolve(res.data),
//         fail: reject
//       })
//     })
//   }

//   get(options) {
//     return this.request({ ...options, method: "GET" })
//   }
// }

// export const xinInstance = new xinRequest()

class xinRequest {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL
  }
  
  request(options) {
   	const { url } = options
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.BASE_URL + url,
        success: res => resolve(res),
        reject: err => reject(err)
      })
    })
  }
  
  get(options) {
    return this.request({ ...options, method: "GET" })
  }
  
  post(options) {
    return this.request({ ...options, method: "POST" })
  }
}

export default new xinRequest("http://123.207.32.32:1888/api")