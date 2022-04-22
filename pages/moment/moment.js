// pages/shop/shop.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        basePath: getApp().globalData.basePath,
        reachBottom: false,
        momentList: [
            {
                cover: 'p1.png',
                title: '疯狂星期四就应该搞一场家庭聚餐！~',
                avatar: 'avatar2.png',
                nickName: '猪猪一家'
            },
            {
                cover: 'p2.png',
                title: '运动必备曲目推荐',
                avatar: 'avatar4.png',
                nickName: 'Eason Chen',
            },
            {
                cover: 'p3.png',
                title: '一整个下午都在画这幅画，还好没有画崩',
                avatar: 'avatar3.png',
                nickName: '阮文',
            },
            {
                cover: 'p4.png',
                title: '日常水帖',
                avatar: 'avatar3.png',
                nickName: 'qwq',
            },
            {
                cover: 'p5.png',
                title: '【详解】小猪佩奇教会孩子们学会了哪些事情',
                avatar: 'avatar2.png',
                nickName: '猪猪一家'
            },
            {
                cover: 'p6.png',
                title: '没想到孩子画的一张简笔画竟是一只粉粉兔！~',
                avatar: 'avatar3.png',
                nickName: 'Eason Chen'
            },
            {
                cover: 'p7.png',
                title: '育儿曲目推荐',
                avatar: 'avatar4.png',
                nickName: '阮文'
            },
            {
                cover: 'p8.png',
                title: '蜡笔小新好多剧情对孩子的启发都特别大！',
                avatar: 'avatar5.png',
                nickName: '野原新之助'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        // this.data.reachBottom = true;
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
