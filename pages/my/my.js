Page({
  data: {
    msg:'this is my page',
    num:2
    
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