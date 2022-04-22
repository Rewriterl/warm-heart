Page({
    data: {
        basePath: getApp().globalData.basePath,
        location_tag: 'if-pin.svg',
        aid_tag: 'aid.svg'
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
