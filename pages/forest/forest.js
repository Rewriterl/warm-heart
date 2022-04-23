Page({
    data: {
        back_arrow: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwMTcwNzI3MTMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1ODciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjI0Ljc4ODk5MiAyMDQuMDQ3OTc0IDU4NS4yMDU5NjUgMTY0LjQ2NDAyNiAyMTkuNTYwMDM4IDUzMC4xODUwMTEgNTg1LjIwNTk2NSA4OTUuODY0MDEzIDYyNC43ODg5OTIgODU2LjI4MDk4NiAyOTguNjYzMDE0IDUzMC4xNjEwNVoiIHAtaWQ9IjI1ODgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=",
        basePath: getApp().globalData.basePath
    },
    onLoad: function (options) {

    },
    redictHome: function (e) {
        var id = e.currentTarget.dataset.id,
            url = '/pages/index/index';
        wx.switchTab({
            url: url
        });
    },

    goProblem: function (e) {
        var id = e.currentTarget.dataset.id,
            url = '/pages/problem/problem';
        wx.navigateTo({
            url: url
        });
    },
});
