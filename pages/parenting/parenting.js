Page({
    data: {
        parentingList: [
            {
                cover: '../../../../../asserts/p5.png',
                title: '【详解】小猪佩奇教会孩子们学会了哪些事情',
                avatar: '../../../../asserts/avatar2.png',
                nickName: '猪猪一家'
            },
            {
                cover: '../../../../../asserts/p6.png',
                title: '没想到孩子画的一张简笔画竟是一只粉粉兔！~',
                avatar: '../../../../asserts/avatar3.png',
                nickName: 'Eason Chen'
            },
            {
                cover: '../../../../../asserts/p7.png',
                title: '育儿曲目推荐',
                avatar: '../../../../asserts/avatar4.png',
                nickName: '阮文'
            },
            {
                cover: '../../../../../asserts/p8.png',
                title: '蜡笔小新好多剧情对孩子的启发都特别大！',
                avatar: '../../../../asserts/avatar5.png',
                nickName: '野原新之助'
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
