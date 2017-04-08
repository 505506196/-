Page({
  data: {
    menuList: [{
      name: '封面与标题',
      APIList: [{
        zhName: '发起支付',
        enName: 'RequestPayment',
      }],
      closed: false
    }, {
      name: '客户资料',
      opened: false,
      APIList: [{
        zhName: '设置界面标题',
        enName: 'setNavigationBarTitle',
      }]
    }, {
      name: '空间展示',
      opened: false,
      APIList: [{
        zhName: '获取手机网络状态',
        enName: 'getNetworkType',        
      }]
    }, {
      name: '设计心得',
      opened: false,
      APIList: [{
        zhName: '发起一个请求',
        enName: 'request',        
      }]
    }, {
      name: '主题模版',
      opened: false,
      APIList: [{
        zhName: '图片',
        enName: 'chooseImage/previewImage',      
      }]
    }, {
      name: '测试',
      opened: false,
      APIList:[
        {
          zhName: '获取当前位置',
        enName: '填写一些基本的信息内容',
        }
      ]     
    }, {
      name: '作者信息',
      opened: false,
      APIList: [{
        zhName: '获取当前位置',
        enName: 'getLocation',       
      }, {
        zhName: '使用原生地图查看位置',
        enName: 'openLocation',     
      }]
    }], 
    
  },
  tapMenuItem: function (e) {
    var menuItem = this.data.menuList[parseInt(e.currentTarget.id)] 
    if (menuItem.url) {
      wx.navigateTo({ url: menuItem.url })
    } else {
      var changeData = {}
      var opened = menuItem.opened

      changeData['menuList[' + e.currentTarget.id + '].opened'] = !opened
      this.setData(changeData)
    }
  }
})
