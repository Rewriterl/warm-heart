// pages/problem/problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basePath: getApp().globalData.basePath,
    index:0,
    problem:[
      {
        problem:"1. 遇到洪水来不及撤离时，应该（ ）",
        A:"A.在身上捆绑重物，防止被洪水裹挟",
        B:"B.迅速向大树、房屋高处转移",
        C:"C.以静制动，原地等待救援",
        D:"D.抓住电线杆以防被洪水冲走",
        right_answer:"B",
        select_answer:"",
      },
      {
        problem:"2.遇到火灾时，下列那种做法是正确的（ ）",
        A:"A.沉着、冷静，迅速正确逃生",
        B:"B.什么也不用做，等待消防队救援",
        C:"C.迅速坐电梯逃生",
        D:"D.跳楼逃生",
        right_answer:"A",
        select_answer:"",
      },
    ]
  },

  radioChange:function(e){
    console.log('radio发生change事件，携带value值为：',e.detail.value)
    var index = this.data.index
    var right_answer = this.data.problem[index].right_answer
    if(e.detail.value == right_answer)
    {
      wx.showToast({
        title: '回答正确！',
        icon: 'none',
        duration: 1000//持续的时间
      })
    }
    else{
      wx.showToast({
        title: '回答错误,请重新作答！',
        icon: 'none',
        duration: 1000//持续的时间
      })
    }
  },

  nextProblem:function(){
    var index = this.data.index
    var select_answer = 
    this.setData({
      index:index+1,
    })
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

  }
})