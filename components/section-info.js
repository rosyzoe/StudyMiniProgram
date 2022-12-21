// components/section-info.js
Component({

  properties: {
    title: {
      type: String,
      value: "默认标题"
    },
    content: {
      type: String,
      value: "默认内容"
    }
  },

  methods: {
    onTitleTap() {
      console.log("title被点击了");
      this.triggerEvent("onTitleClick", "aaaaa")
    }
  }

  // data: {
  //   title: "我是顶部",
  //   content: "我是内容"
  // }
})
