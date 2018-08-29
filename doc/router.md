#### 路由方式

1. 初始化

    触发时机：小程序打开的第一个页面

    路由前页面：

    路由后页面：onLoad,onShow
2. 打开新页面

    触发时机：调用`API wx.navigate To` 或者使用组件`<navigator open-type="navigateTo"/>`

    路由前页面：onHide

    路由后页面：onLoad,onShow
3. 页面重定向

    触发时机：调用`API wx.redirectTo`或使用`<navigator open-type="redirectTo"/>`

    路由前页面：onUnload

    路由后页面：onLoad,onShow
4. 页面返回

    触发时机：调用`API wx.navigteBack`或使用`<navigator open-type="navigateBack"/>`或用户按左上角返回按钮

    路由前页面：onUnload

    路由后页面：onShow
5. Tab切换

    触发时机：调用`API wx.navigateBack`或使用组件`<navigator open-type="navigateBack"/>`或调用`API wx.switchTab`或使用组件`<navigagtor open-type="switchTab"/>`或用户切换Tab

    路由前页面：

    路由后页面：
6. 重启动

    触发时机：调用`API wx.reLaunch`或使用组件`<navigator open-type="reLaunch">`

    路由前页面：

    路由后页面：onLoad,onShow