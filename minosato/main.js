

// パララックス
// 背景画像のスクロール速度。数字が小さいほど速い。
const speed = 3;
const $window = $(window);

// スライド1枚の高さを保持する変数
let slideHeightBg1;
let slideHeightBg2;

// パララックスを適用する関数
const showParallax = () => {
  const scrollTop = $window.scrollTop();

  // 各スライドの背景位置をスクロールに合わせて変える
  $('.bg-1').css({
    'background-position': `center ${Math.round((slideHeightBg1 - scrollTop) / speed)}px`,
  });
  $('.bg-2').css({
    'background-position': `center ${Math.round((slideHeightBg2- scrollTop) / speed)}px`,
  });
};

// パララックスの初期設定をする関数
const initParallax = () => {
  // ウインドウの高さをスライド1枚分の高さとする
  slideHeightBg1 = $('#parallax-01').offset().top;
  slideHeightBg2 = $('#parallax-02').offset().top;

  // 表示を更新
  showParallax();
};

// スクロールのたびにshowParallax関数を呼ぶ
$window.on('scroll', showParallax);

$window.on('resize', () => {
  // ウインドウがリサイズされるとここが実行される
  initParallax();
});

initParallax();

//ページ内リンクで自動でスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// BootstrapのTooltipを適用
$('[data-toggle="tooltip"]').tooltip();

new Vue({
  el: '#app',
  data: {
    $toggle_icon: "",
    $content: "",
  },
  components: {
    // カルーセル
    carousel: VueCarousel.Carousel,
    slide: VueCarousel.Slide,
  },
  methods: {
    accordionTop() {
      // top accordion 
      this.$toggle_icon = $('.toggle-icon-top');
      this.$content = $('.main-nav');
      if (!this.$content.is(':visible')) {
        // スライドダウン
        this.$content.slideDown();
        this.$toggle_icon.removeClass("fa-angle-double-down");
        this.$toggle_icon.addClass("fa-angle-double-up");
      }else{
        // スライドアップ
        this.$content.slideUp();
        this.$toggle_icon.removeClass("fa-angle-double-up");
        this.$toggle_icon.addClass("fa-angle-double-down");
      };
    },
    accordionFoot() {
      // footer accordion 
      this.$toggle_icon = $('.toggle-icon-foot');
      this.$content = $('.footer-nav');
      console.log('gohann');
      if (!this.$content.is(':visible')) {
        //  スライドアップ
        this.$content.slideDown();
        this.$toggle_icon.removeClass("fa-angle-double-up");
        this.$toggle_icon.addClass("fa-angle-double-down");
      }else{
        // スライドダウン
        this.$content.slideUp();
        this.$toggle_icon.removeClass("fa-angle-double-down");
        this.$toggle_icon.addClass("fa-angle-double-up");
      };
    },
  },
});