Page({
    data: {
        isLastPage: false,
        page: 1,
        search: '',
        showerror: "none",
        showCategoryName: "",
        categoryName: "",
        floatDisplay: "none",
        // listAdsuccess: true,
        // webSiteName: webSiteName,
        // domain: domain,
        swiperList: [
            {
                img: '../../asserts/swiper-1.png',
                url: '#',
                type: 'navigateTo' //直接跳转类型
            }
        ],
        isFirst: false, // 是否第一次打开,
        isLoading: false
    },

    toNuclein:function(){
        wx.navigateTo({
          url: '../nuclein/nuclein',
        })
    },

    onShareAppMessage: function () {
        return {
            title: '“' + "webSiteName" + '”暖社区',
            path: 'pages/index/index',
            success: function (res) {
                // 转发成功
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },
    // 自定义分享朋友圈
    onShareTimeline: function () {
        return {
            title: '“' + "webSiteName" + '”暖社区',
            path: 'pages/index/index',

        }
    },
    onPullDownRefresh: function () {
        var self = this;
        self.setData({
            showerror: "none",
            floatDisplay: "none",
            isLastPage: false,
            page: 1,
            // listAdsuccess: true
        });
    },
    onReachBottom: function () {
        console.log('已经到底了');
    },
    onLoad: function (options) {
        var self = this;
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline'],
            success: function (e) {
                console.log(e);
            }
        })
        // 判断用户是不是第一次打开，弹出添加到我的小程序提示
        var isFirstStorage = wx.getStorageSync('isFirst');
        // console.log(isFirstStorage);
        if (!isFirstStorage) {
            self.setData({
                isFirst: true
            });
            wx.setStorageSync('isFirst', 'no')
            // console.log(wx.getStorageSync('isFirst'));
            setTimeout(function () {
                self.setData({
                    isFirst: false
                });
            }, 5000)
        }
    },
    onShow: function (options) {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
        wx.setStorageSync('openLinkCount', 0);
    },

    //返回首页
    redictHome: function (e) {
        var id = e.currentTarget.dataset.id,
            url = '/pages/index/index';
        wx.switchTab({
            url: url
        });
    },

    goForest: function (e) {
        var id = e.currentTarget.dataset.id,
            url = '/pages/forest/forest';
        wx.navigateTo({
            url: url
        });
    },

    // 广告相关配置
    // adbinderror: function (e) {
    //     var self = this;
    //     console.log(e.detail.errCode);
    //     console.log(e.detail.errMsg);
    //     if (e.detail.errCode) {
    //         self.setData({
    //             listAdsuccess: false
    //         })
    //     }
    //
    // },
})
