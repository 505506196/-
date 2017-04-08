Page({
  data: {
    title: '美家个人中心',
    userInfo: {
      wechat: 'WEDN-NET',
      nickName: '点击登录',
      avatarUrl: '../../images/wechat.jpeg'
    }
  },

  getUserInfo () {
    const that = this
    wx.getUserInfo({
      success (res) {
        console.log(res)
        that.setData({ userInfo: res.userInfo })
      }
    })
  },

  onLoad () {
    wx.login({
      success (res) {
        if (res.code) {
          console.log('登录成功！' + res.code)
        } else {
          console.error('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail () {},
      complete () {},
    })
  }
})
