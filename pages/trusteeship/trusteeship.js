// pages/trusteeship/trusteeship.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // back图片
        back_arrow: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwMTcwNzI3MTMyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1ODciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjI0Ljc4ODk5MiAyMDQuMDQ3OTc0IDU4NS4yMDU5NjUgMTY0LjQ2NDAyNiAyMTkuNTYwMDM4IDUzMC4xODUwMTEgNTg1LjIwNTk2NSA4OTUuODY0MDEzIDYyNC43ODg5OTIgODU2LjI4MDk4NiAyOTguNjYzMDE0IDUzMC4xNjEwNVoiIHAtaWQ9IjI1ODgiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=",
        //右箭头图片
        right_arrow: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwMTk1MTIzNzU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc1NTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNzExLjYgNDg4LjYyNEwzNTUuMiAxNTIuOTc2YTI5LjM2IDI5LjM2IDAgMCAwLTQyLjM1MiAwIDMxLjQwOCAzMS40MDggMCAwIDAgMCA0My41NTJMNjQ3Ljc2IDUxMiAzMTIuODQ4IDgyNy4zNmEzMS40MDggMzEuNDA4IDAgMCAwIDAgNDMuNTUyIDI5LjM2IDI5LjM2IDAgMCAwIDQyLjM1MiAwbDM1Ni40LTMzNS42NDhhMzYuMzIgMzYuMzIgMCAwIDAgMC00Ni42NHoiIHAtaWQ9Ijc1NTEiIGZpbGw9IiNGRjhBNDEiPjwvcGF0aD48L3N2Zz4=",
        pet_list: [
            {
                pet_name: "大哈",
                pet_image: "/asserts/dog1.png",
                pet_status: true,
                pet_address: "A103 04座位",
            },

            {
                pet_name: "二哈",
                pet_image: "/asserts/dog2.png",
                pet_status: false,
                pet_address: "",
            },
        ],
        order: [
            {},
            {}
        ]
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
    redictHome: function (e) {
        var id = e.currentTarget.dataset.id,
            url = '/pages/index/index';
        wx.switchTab({
            url: url
        });
    },
})
