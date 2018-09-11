WXSS 具有 CSS 大部分特性,微信小程序对 CSS 进行了扩充以及修改

eg: 尺寸单位、样式导入
#### 尺寸单位 rpx
* 根据屏幕宽度进行自适应
* 不同手机不一样
  * iPhone5	1rpx = 0.42px	1px = 2.34rpx
  * iPhone6	1rpx = 0.5px	1px = 2rpx
  * iPhone6 Plus	1rpx = 0.552px
* 类似dp（android）设置的大小不会根据屏幕的大小改变而改变，而是根据屏幕的像素px来改变大小的
* 建议： 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。
#### 样式导入
* 使用@import语句可以导入外联样式表，@import后跟需要导入的外联样式表的相对路径，用;表示语句结束
#### 选择器(目前支持)
* .class
* #id
* element
* element,element
* ::before
* ::after
#### 定义在 app.wxss 中的样式为全局样式，作用于每一个页面。在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.wxss 中相同的选择器。

### 写点不一样的
1. 没有body,page相当于body,对page的设置来影响整个页面的样式

    ```css
    page {
      background:#F8F8F8  
    }
    ```
    * 设置page的xxx.json中的backgroundColor属性来影响一个page页面下拉时出现的**空白区域**的颜色，一般来说当你页面有**下拉刷新和上拉加载**功能时，往往要设置backgroundColor属性
2. 使用flex布局使用方式（具体了解flex,请点此链接，图文并茂）

    [flex grammar](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
    [flex example](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
    * display flex容器的属性
     
      * flex-direction : 决定主轴的方向
      * flex-wrap : 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行
      * flex-flow : flex-direction属性和flex-wrap属性的简写形式
      * justify-content : 定义了项目在主轴上的对齐方式
      * align-items : 定义项目在交叉轴上如何对齐 
      * align-content : 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
    * _交叉轴_
      * 相对而言，例如你的主轴是y轴，那么你的交叉轴就是x轴
3. rpx

    [微信小程序新单位rpx与自适应布局](https://segmentfault.com/a/1190000007220703)
    [微信小程序开发--从px到rpx](http://www.wxapp-union.com/portal.php?mod=view&aid=2826)

