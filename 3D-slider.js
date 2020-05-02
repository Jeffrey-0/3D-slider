/* global jQuery */
/* eslint-disable no-new */
// 实现插件 + 实现轮播图功能
// $.fn.extend  自动播放+点击切换
(function ($) {
  // 实现轮播功能
  function Slider (ele, opt) {
    var d = {
      curDisplay: 0, // 当前显示第n张图片
      autoPlay: true, // 是否自动轮播
      interval: 2000, // 轮播的时间，单位：毫秒
      translateX: 200, // 图片向俩边平移的距离，单位：px
      translateZ: 300, // 图片向前平移的距离，视觉上的放大缩小，单位：px
      rotateY: 30 // 图片的偏移角度，单位：deg
    }
    // 合并形参和默认参数
    this.opts = $.extend({}, d, opt)
    this.wrap = ele
    this.curDisplay = this.opts.curDisplay
    this.$img = this.wrap.find('img')
    this.imgLen = this.$img.length
    this.nowIndex = 0
    this.autoPlay = this.opts.autoPlay
    this.timer = null
    this.interval = this.opts.interval
    this.translateX = this.opts.translateX
    this.translateZ = this.opts.translateZ
    this.rotateY = this.opts.rotateY
    this.init()
  }
  // 初始化
  Slider.prototype.init = function () {
    this.initMove()
    this.bindEvent()
    this.$img.parent('a').not(this.$img.parent('a').eq(this.curDisplay)).addClass('disable')
  }
  // 整体布局
  Slider.prototype.initMove = function () {
    var self = this
    var hLen = Math.floor(this.imgLen / 2)
    var lNum, rNum

    for (let i = 0; i < hLen; i++) {
      lNum = (self.curDisplay - i - 1) % this.imgLen
      if (lNum < 0) {
        lNum += this.imgLen
      }
      self.$img.eq(lNum).css({
        transform: 'translateX(' + (-this.translateX * (i + 1)) + 'px) translateZ(' + (this.translateZ / 2 - i * 100) + 'px) rotateY(' + this.rotateY + 'deg)'
      })
      rNum = (self.curDisplay + i + 1) % this.imgLen
      self.$img.eq(rNum).css({
        transform: 'translateX(' + (this.translateX * (i + 1)) + 'px) translateZ(' + (this.translateZ / 2 - i * 100) + 'px) rotateY(-' + this.rotateY + 'deg)'
      })
    }
    self.$img.eq(self.curDisplay).css({
      transform: 'translateZ(' + this.translateZ + 'px)'
    })
  }
  // 绑定点击事件 + 自动轮播事件
  Slider.prototype.bindEvent = function () {
    var self = this
    // 点击事件
    self.$img.parent('a').on('click', function (e) {
      if ($(this).hasClass('disable')) {
        e.preventDefault()
      }
      self.nowIndex = $(this).index()
      self.moving(self.nowIndex)
    })
    // 自动轮播事件
    if (self.autoPlay) {
      self.$img.parent('a').hover(function () {
        clearInterval(self.timer)
      }, function () {
        self.timer = setInterval(function () {
          self.play()
        }, self.interval)
      })
      this.timer = setInterval(function () {
        self.play()
      }, this.interval)
    }
  }
  // 移动事件
  Slider.prototype.moving = function (index) {
    this.$img.parent('a').eq(index).removeClass('disable')
    this.$img.parent('a').eq(this.curDisplay).addClass('disable')
    this.curDisplay = index
    this.initMove()
  }
  // 自动播放
  Slider.prototype.play = function () {
    if (this.autoPlay) {
      if (this.nowIndex === this.imgLen - 1) {
        this.nowIndex = 0
      } else {
        this.nowIndex++
      }
      this.moving(this.nowIndex)
    }
  }
  // 扩展插件

  $.fn.extend({
    slider: function (options) {
      new Slider(this, options)  // eslint-disable-line
    }
  })
})(jQuery)
