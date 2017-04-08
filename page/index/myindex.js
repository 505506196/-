// var pageData = {},
//     type = [
//         'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
//     ];

// pageData.widgetsToggle = function (e) {
//     var id = e.currentTarget.id, data = {};
//     for (var i = 0, len = type.length; i < len; ++i) {
//         data[type[i] + 'Show'] = false;
//     }
//     data[id + 'Show'] = !this.data[id + 'Show'];
//     this.setData(data);
// };

// Page(pageData);

Page({
  data: {
    imgUrls: [
      'http://shrcdnout.yfway.com/share/images/topline/adv_sp.jpg',
      'http://shrcdnout.yfway.com/share/images/mjcity/shop1.jpg',
      'http://shrcdnout.yfway.com/share/images/mjcity/shop2.jpg',
      'http://shrcdnout.yfway.com/share/images/mjcity/shop3.jpg'
    ],
    logs: []
  }
,
  onLoad: function () {
      var _this =this;
      var myDate = new Date()
      var time = myDate.getFullYear() +'-11' + myDate.getMonth() +'-' +myDate.getMonth()
    // var time = new Date().toLocaleDateString()
      _this.setData({
      logs: time
      })
  }
})
