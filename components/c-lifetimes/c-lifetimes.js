// components/c-lifetimes/c-lifetimes.js
Component({

  lifetimes: {
    created() {
      console.log("组件被创建 created");
    },
    attached() {
      console.log("组件被添加到组件树中 attached");
    },
    detached() {
      console.log("组件从组件树中被移除 datached");
    }
  },

  // 监听此组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("show");
    },
    hide() {
      console.log("hide");
    }
  }
})
