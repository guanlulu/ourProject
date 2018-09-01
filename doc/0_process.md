#### 2018/09/01
* 完成头部、底部tab
* 注意事项

  * 头部，底部信息都在app.json里
  * 底部配置的路由在pages里必须有对应的文件，.js、.wxml、.wxss、.json文件必须完整
  * js里必须先正确应用page
    ```javascript
    Page({
      data: {

      },
      onLoad: function () {
        
      }
    });
    ```
    * json里必须先写上 {}