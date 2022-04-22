Page({

    /**
     * 页面的初始数据
     */
    data: {
        basePath: getApp().globalData.basePath,
        swiperList: [
            {
                img: 'swiper-1.jpg',
                type: 'url'
            },
            {
                img: 'swiper-2.jpg',
                type: 'url'
            },
            {
                img: 'swiper-3.jpg',
                type: 'url'
            }
        ],
        HeaderMenuList:[
            {
                name:'家庭成员',
                icon:'ze-friends-o-s.svg',
                style:''
            },
            {
                name:'家庭户口本',
                icon:'ze-coupon-o-copy-s.svg',
                style:''
            },
            {
                name:'修改家庭信息',
                icon:'ze-edit-s.svg',
                style:'font-size:18rpx'
            },
            {
                name:'改绑家庭',
                icon:'iconPark-devices-s.svg',
                style:''
            }
        ],
        MenuList:[
            {
                name:'智能家居',
                icon:'iconPark-smart-optimization-copy.svg'
            },
            {
                name:'定位签到',
                icon:'ze-description.svg'
            },
            {
                name:'社区农场',
                icon:'iconPark-leaves.svg'
            },
            {
                name:'物业缴费',
                icon:'ze-wechat-red.svg'
            }
        ]
    },

    switchHeaderMenuList:function(e){
        console.log(e.currentTarget.dataset.index);
        if (e.currentTarget.dataset.index === 0){
            wx.navigateTo({
                // url: '../family/family',
            })
        }else if (e.currentTarget.dataset.index === 1){
            wx.navigateTo({
                url: '../../pages/householdRegister/HouseholdRegister',
            })
        }else if (e.currentTarget.dataset.index === 2){
            wx.navigateTo({
                // url: '../family/family',
            })
        }else if (e.currentTarget.dataset.index === 3){
            wx.navigateTo({
                // url: '../family/family',
            })
        }
    },

    switchMenuList:function(e){
        console.log(e.currentTarget.dataset.index);
        if (e.currentTarget.dataset.index === 0){
            wx.navigateTo({
                url: '../../pages/smarthome/Smarthome',
            })
        }else if (e.currentTarget.dataset.index === 1){
            wx.navigateTo({
                url: '../../pages/position/position',
            })
        }else if (e.currentTarget.dataset.index === 2){
            wx.navigateTo({
                url: '../../pages/forest/forest',
            })
        }else if (e.currentTarget.dataset.index === 3){
            wx.navigateTo({
                url: '../../pages/property/property',
            })
        }
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

})
