 /**
   * 对小程序进行初始化
   */
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('我启动了')
    // 获取登陆凭证
    wx.login({
      success(res){       //res.code 微信提供的临时凭证，发送code到后台获取openId,sessionKey,unionId
        console.log(res)
      }
    }) 
    // 获取用户信息 
    wx.getUserInfo({   //需要通过另外的方式获取  https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01
      success(res){
        console.log(res)
      }
    })
// 获取用户设置，授权信息等
    wx.getSetting({
      success(res){
        console.log(res)
      }
    })

    wx.getLocation({
      success: function(res) {console.log(res)},
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('我显示了')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('我隐藏了')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('我eoor了')
  }
})
