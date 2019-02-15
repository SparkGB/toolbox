// TODO: 應該要增加單例
// 'position-fixed', 'overflow-hidden' 是用來解決iOS無法鎖定滾動的問題
var SideMenu = function (options) {
  var init = function (opts) {
    var $el = document.querySelector(opts.el)
    var $activeBtn = document.querySelector(opts.activeBtn)
    var $closeBtn = document.querySelector(opts.closeBtn)
    var $body = document.querySelector('body')
    var $overlay = document.querySelector('#menu-backdrop')

    this.$body = $body
    this.$el = $el

    this.setMenuWidth(opts.menuWidth)
    this.setPosition(opts.position)

    $closeBtn.addEventListener('click', this.close.bind(this))
    $overlay.addEventListener('click', this.close.bind(this))
    $activeBtn.addEventListener('click', this.open.bind(this))

    console.log('menu init')
  }

  this.open = function () {
    this.$body.classList.add('is-menu-visible', 'position-fixed', 'overflow-hidden')
    console.log('menu is opened')
  }

  this.close = function () {
    this.$body.classList.remove('is-menu-visible', 'position-fixed', 'overflow-hidden')
    console.log('menu is closed')
  }

  this.setMenuWidth = function (width) {
    this.$el.style.width = width || '260px'
  }

  this.setPosition = function (position) {
    let pos = position || 'right'

    if (pos === 'left') return this.$el.classList.add('left')

    return;
  }

  init.call(this, options)
}


// example
// var menu = new SideMenu({
//   el: '#menu',
//   activeBtn: '.navbar',
//   closeBtn: '.close',
//   menuWidth: '260px',
//   position: 'right',
// })
