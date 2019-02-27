var ChartCreator = (function () {
  var ChartCreator = function (options) {
    var init = function (opts) {
      var $el = document.querySelector(opts.el)
      var mode = opts.mode
      var chart = echarts.init($el, null, { renderer: mode }) // svg下能讓print時較銳利
      var settings = opts.settings
      this.chart = chart

      chart.setOption(settings)
    }

    ChartCreator.prototype.showLoading = function (opts) {
      this.chart.showLoading({ text: '' })

      // 限制有點多，可以考慮自己刻一個
      // default: {
      //   text: 'loading',
      //   color: '#c23531',
      //   textColor: '#000',
      //   maskColor: 'rgba(255, 255, 255, 0.8)',
      //   zlevel: 0
      // }
    }

    ChartCreator.prototype.hideLoading = function () {
      this.chart.hideLoading()
    }

    ChartCreator.prototype.update = function (newSettings) {
      this.chart.setOption(newSettings)
    }

    init.call(this, options)
  }

  return ChartCreator
})()

// reference
// https://echarts.baidu.com/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts