Page({
    data: {
        back_arrow: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwMTcwNzI3MTMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1ODciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjI0Ljc4ODk5MiAyMDQuMDQ3OTc0IDU4NS4yMDU5NjUgMTY0LjQ2NDAyNiAyMTkuNTYwMDM4IDUzMC4xODUwMTEgNTg1LjIwNTk2NSA4OTUuODY0MDEzIDYyNC43ODg5OTIgODU2LjI4MDk4NiAyOTguNjYzMDE0IDUzMC4xNjEwNVoiIHAtaWQ9IjI1ODgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=",
        basePath: getApp().globalData.basePath,
        parentingList: [
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
            },
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
            }
        ]
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
});
