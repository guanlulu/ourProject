// share.js
var app = getApp()
Component({
    data:{
        // 定义组件的内部数据 
    },
    properties:{
        // 组件的对外属性，主要用于父页面向子组件传值
        visible: {
            type: Boolean,
            value: false,
            observer(visible) {
                // 当开始显示分享弹窗时开始绘制
                if (visible) {
                  this.draw()
                }
            }
        },
        // 由于需要绘制用户信息，由页面传入
        userInfo: {
            type: Object,
            value: false
        }
    },
    created:function(){
        // 组件实例进入页面节点树时触发，是最新触发的生命周期函数，值得注意的是此时不能使用setData方法修改数据，但是可以获取到数据
    },
    attached:function(){
        // 组件实例进入页面节点树时触发，是第二顺序触发的生命周期函数，此时可以使用setData修改数据
    },
    ready:function(){
        // 组件布局完成后执行，此时可以使用selectQuery获取到组件的节点信息
    },
    moved:function(){
        // 组件在父页面的节点位置发生改变时触发
    },
    detached:function(){
        // 组件在父页面被删除时触发
    },
    methods:{
        // 组件内部的方法
        draw() {
            // 实际绘制函数，后续绘制代码放于此处
            // 父组件传入，父组件调用 getUserInfo
            const { avatarUrl, nickName } = userInfo

            // 获取头像图像信息 
            const avatarPromise = getImageInfo(avatarUrl)
            // 获取背景图像信息
            const backgroundPromise = getImageInfo('https://img.xiaomeipingou.com/_assets_home-share-bg.jpg')

            Promise.all([avatarPromise, backgroundPromise])
            .then(([avatar, background]) => {
                // 创建绘图上下文
                const ctx = wx.createCanvasContext('share', this)
                
                const canvasWidth = 281
                const canvasHeight = 500
                // 绘制背景，填充满整个canvas画布
                ctx.drawImage(background.path, 0, 0, canvasWidth, canvasHeight)
                
                const avatarWidth = 60
                const avatarHeight = 60
                const avatarTop = 40
                // 绘制头像
                ctx.drawImage(
                avatar.path,
                canvasWidth / 2 - avatarWidth / 2,
                avatarTop - avatarHeight / 2,
                avatarWidth,
                avatarHeight
                )

                // 绘制用户名
                ctx.setFontSize(20)
                ctx.setTextAlign('center')
                ctx.setFillStyle('#ffffff')
                ctx.fillText(
                nickName,
                canvasWidth / 2,
                avatarTop + 50,
                )
                ctx.stroke()
                // 完成作画
                ctx.draw()
            })
        }
    }
})