// options
// {
//   el: '#menu',
//   activeBtn: '.navbar',
//   closeBtn: '.close',
//   menuWidth: '260px',
//   position: 'right'
// }

// hack
// 'position-fixed', 'overflow-hidden' 是用來解決iOS無法鎖定滾動的問題

var SideMenu = function (options) {
  var init = function (opts) {
    var $el = document.querySelector(opts.el);
    var $activeBtn = document.querySelector(opts.activeBtn);
    var $closeBtn = document.querySelector(opts.closeBtn);
    var $body = document.querySelector('body');
    var $overlay;

    this.$body = $body;
    this.$el = $el;

    $overlay = this.createOverlay();

    this.setMenuWidth(opts.menuWidth);
    this.setPosition(opts.position);

    $closeBtn.addEventListener('click', this.close.bind(this));
    $overlay.addEventListener('click', this.close.bind(this));
    $activeBtn.addEventListener('click', this.open.bind(this));

    console.log('menu init.');
  }

  this.open = function () {
    this.$body.classList.add('is-menu-visible', 'position-fixed', 'overflow-hidden');
  }

  this.close = function () {
    this.$body.classList.remove('is-menu-visible', 'position-fixed', 'overflow-hidden');
  }

  this.createOverlay = function () {
    var $overlay = document.createElement('div');

    $overlay.id = 'menu-backdrop';
    this.$body.appendChild($overlay);

    return $overlay;
  }

  this.setMenuWidth = function (width) {
    this.$el.style.width = width || '260px';
  }

  this.setPosition = function (position) {
    let pos = position || 'right';

    if (pos === 'left') return this.$el.classList.add('left');
  }

  init.call(this, options);
}