// dist/pages/o/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    isShow: true,
  },
  setArr(arr) {
    this.setData({ arr });
  },
  setIsShow() {
    // console.log('isShow', this.data.isShow)
    this.setData({isShow: !this.data.isShow})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    this.setArr(arr);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
