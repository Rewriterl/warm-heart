Page({
    data: {
        basePath: getApp().globalData.basePath,
        showerror: "none",
        floatDisplay: "none",
        // listAdsuccess: true,
        // webSiteName: webSiteName,
        // domain: domain,
        swiperList: [
            {
                img: 'swiper-1.png',
                url: '#',
                type: 'navigateTo' //直接跳转类型
            }
        ],
        isFirst: false, // 是否第一次打开,
        isLoading: false,
        logoWrapperList: [
            {
                imgUrl: 'qrcode-green.svg',
                iconName: '健康码'
            },
            {
                imgUrl: 'ze-wechat-brown.svg',
                iconName: '行程码'
            },
            {
                imgUrl: 'ze-column-yellow.svg',
                iconName: '核酸检测'
            },
            {
                imgUrl: 'iconPark-smart-optimization-blue.svg',
                iconName: '智能家居'
            }
        ],
        menuList: [
            {
                mImgUrl: 'ze-wap-home.svg',
                iconName: '社区信息'
            },
            {
                mImgUrl: 'riFill-gps-fill.svg',
                iconName: '位置'
            },
            {
                mImgUrl: 'ze-coupon-o.svg',
                iconName: '家庭户口本'
            },
            {
                mImgUrl: 'iconPark-baby.svg',
                iconName: '育儿专区'
            },
            {
                mImgUrl: 'ze-shop-collect-o.svg',
                iconName: '托管服务'
            },
            {
                mImgUrl: 'ze-youzan-shield.svg',
                iconName: '护工服务'
            },
            {
                mImgUrl: 'ze-hotel-o.svg',
                iconName: '物业综合'
            },
            {
                mImgUrl: 'iconPark-leaves.svg',
                iconName: '社区森林'
            },
            {
                mImgUrl: 'rescue.svg',
                iconName: '紧急救援'
            },
            {
                mImgUrl: 'ze-weapp-nav.svg',
                iconName: '更多'
            }
        ]
    },

    logoWrapperListSwitch: function (e) {
        console.log(e.currentTarget.dataset.index)
        if (e.currentTarget.dataset.index === 0) {
            wx.navigateTo({
                // url: '../../pages/healthCode/healthCode',
            })
        } else if (e.currentTarget.dataset.index === 1) {
            wx.navigateTo({
                // url: '../../pages/tripCode/tripCode',
            })
        } else if (e.currentTarget.dataset.index === 2) {
            wx.navigateTo({
                url: '../../pages/nuclein/nuclein',
            })
        } else if (e.currentTarget.dataset.index === 3) {
            wx.navigateTo({
                url: '../../pages/smarthome/Smarthome',
            })
        }
    },

    switchMenuList: function (e) {
        console.log(e.currentTarget.dataset.index)
        if (e.currentTarget.dataset.index === 0) {
            wx.navigateTo({
                // url: '../../pages/community/community',
            })
        } else if (e.currentTarget.dataset.index === 1) {
            wx.navigateTo({
                url: '../../pages/position/position',
            })
        } else if (e.currentTarget.dataset.index === 2) {
            wx.navigateTo({
                url: '../../pages/householdRegister/HouseholdRegister',
            })
        } else if (e.currentTarget.dataset.index === 3) {
            wx.navigateTo({
                url: '../../pages/parenting/parenting',
            })
        } else if (e.currentTarget.dataset.index === 4) {
            wx.navigateTo({
                url: '../../pages/trusteeship/trusteeship',
            })
        } else if (e.currentTarget.dataset.index === 5) {
            wx.navigateTo({
                url: '../../pages/nurse/nurse',
            })
        } else if (e.currentTarget.dataset.index === 6) {
            wx.navigateTo({
                url: '../../pages/property/property',
            })
        } else if (e.currentTarget.dataset.index === 7) {
            wx.navigateTo({
                url: '../../pages/forest/forest',
            })
        } else if (e.currentTarget.dataset.index === 8) {
            wx.navigateTo({
                // url: '../../pages/wallet/wallet',
            })
        } else if (e.currentTarget.dataset.index === 9) {
            wx.navigateTo({
                // url: '../../pages/more/more',
            })
        }
    },

    toNuclein: function () {
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
    }
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
