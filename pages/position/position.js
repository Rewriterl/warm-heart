Page({
    data: {
        basePath: getApp().globalData.basePath,
        back_arrow: 'ze-arrow-left-copy.svg',
        location_tag: 'if-pin.svg',
        fingerprint: 'riLine-fingerprint-line.svg',
        tab_list: [
            {
                tab_name: '首页',
                active: '#fff'
            },
            {
                tab_name: '智能停车',
                active: ''
            },
            {
                tab_name: '定位签到',
                active: ''
            }
        ]
    },
    changeActive: function (e) {
        console.log(e)
        var index = e.currentTarget.dataset.index;
        var tab_list = this.data.tab_list;
        for (var i = 0; i < tab_list.length; i++) {
            if (i === index) {
                tab_list[i].active = '#fff';
            } else {
                tab_list[i].active = '';
            }
        }
        this.setData({
            tab_list: tab_list
        }
        )
    },
    onLoad: function (options) {

    },
    redictHome: function (e) {
        var id = e.currentTarget.dataset.id,
            url = '/pages/index/index';
        wx.switchTab({
            url: url
        });
    }
});
