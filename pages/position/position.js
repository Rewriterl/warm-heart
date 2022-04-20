Page({
    data: {
        back_arrow: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwMTcwNzI3MTMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1ODciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjI0Ljc4ODk5MiAyMDQuMDQ3OTc0IDU4NS4yMDU5NjUgMTY0LjQ2NDAyNiAyMTkuNTYwMDM4IDUzMC4xODUwMTEgNTg1LjIwNTk2NSA4OTUuODY0MDEzIDYyNC43ODg5OTIgODU2LjI4MDk4NiAyOTguNjYzMDE0IDUzMC4xNjEwNVoiIHAtaWQ9IjI1ODgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=",
        basePath: getApp().globalData.basePath,
        // back_arrow: 'ze-arrow-left-copy.svg',
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
