#### wxml语法

  * 所有元素都必须闭合标签
  * 所有元素都必须正确嵌套
  * 属性值必须使用引号包围
  * 标签必须使用小写
  * WXML中连续多个空格会被合并为1个空格
#### 组件
[小程序组件](https://developers.weixin.qq.com/miniprogram/dev/component/)
##### 视图容器
* `view` : 相当于 `div`
* `scroll-view` : [可滚动视图区域](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)
  |属性         |类型      |默认值  |说明    |
  | --------   | -----:   | :----: |:----: |
  |`scroll-y`  |Boolean   |false   |允许纵向滚动|
  |`bindscrolltoupper`|EventHandle||滚动到顶部/左边，会触发 scrolltoupper 事件|
  |`upper-threshold`|Number|50|距顶部/左边多远时（单位px），触发 scrolltoupper 事件|
  |`scroll-into-view`|String||值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素|
  **注：`scroll-into-view` 这个属性对于做手动轮播图很有用**
##### 基础内容
* `text` : 文本
  - 属性: 默认值都是`false`
  - `selectable`: 文本是否可选
  - `space` : 显示连续空格
  - `decode` : 是否解码
  - tips:
    + decode可以解析的有 `&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;`
  

##### `<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。(比如说 `wx:if,wx:for`)



    