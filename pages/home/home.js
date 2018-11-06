Page({
  data: {
    imgUrls: [
      '../imgs/2.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad(){
    wx.showShareMenu({
      withShareTicket: true
    })
    wx.getSystemInfo({
      success(err){
          console.log(err)
      }
    })
  }
})