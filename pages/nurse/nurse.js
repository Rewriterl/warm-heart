Page({
    data: {
        menuListF: [
            {
                imgUrl: '../../../../asserts/ze-clock.svg',
                iconName: '快速预约'
            },
            {
                imgUrl: '../../../../asserts/ze-description.svg',
                iconName: '健康监测'
            },
            {
                imgUrl: '../../../../asserts/ze-completed.svg',
                iconName: '定期检查'
            },
            {
                imgUrl: '../../../../asserts/ze-wechat-red.svg',
                iconName: '账单缴费'
            }
        ],
        menuListS:[
            {
                imgUrl: '../../../../asserts/far-fa-lemon.svg',
                iconName: '膳食管理',
                color:'#BEE570'
            },
            {
                imgUrl: '../../../../asserts/ze-user-o.svg',
                iconName: '心理健康',
                color:'#F8CEB4'
            },
            {
                imgUrl: '../../../../asserts/haFill-33-award.svg',
                iconName: '运动规划',
                color:'#9DBAE1'
            },
            {
                imgUrl: '../../../../asserts/ze-flower-o.svg',
                iconName: '常规护理',
                color:'#FFE38F'
            },
            {
                imgUrl: '../../../../asserts/ze-warning.svg',
                iconName: '应急门诊',
                color:'#B4DDFF'
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
    }
});
