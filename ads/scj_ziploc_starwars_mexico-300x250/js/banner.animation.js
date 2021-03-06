'use strict';

/**
 * Run the animation functions.
 */

// if include slider conditional is creating a link between iframe and banner by creating a slider.

Creative.prototype.start = function () {

  this.banner = document.querySelector('.banner-class');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;
  this.bannerCenterX = this.bannerWidth * 0.5;
  this.bannerCenterY = this.bannerHeight * 0.5;

  // Image array for preloading
  this.images = ['images/bg.jpg', 'images/cockpit.png', 'images/cheerios01.png', 'images/cheerios02.png', 'images/cheerios03.png', 'images/cheerios04.png', 'images/cheerios05.png', 'images/cheerios06.png', 'images/blur1.jpg', 'images/blur2.jpg', 'images/cabineBag.png', 'images/bg_blue.jpg', 'images/sw_logo.png', 'images/f2_text1.png', 'images/f2_text2.png', 'images/f2_bag01.png', 'images/f2_bag02.png', 'images/f2_bag03.png', 'images/f2_bag04.png', 'images/f2_box.png', 'images/cta.png', 'images/cta_arrow.png', 'images/ziploc_logo.png'];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Creative.prototype.createElements = function () {
  this.bg = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    parent: this.banner
  });
  this.f1container = this.smartObject({
    scale: 0.7,
    parent: this.banner
  });
  for (var i = 0; i < 10; i++) {
    this['cheerios_A' + i] = this.smartObject({
      id: 'cheeriosA' + i,
      backgroundImage: 'images/cheerios01.png',
      scale: 1.5,
      parent: this.f1container
    });
    this['cheerios_B' + i] = this.smartObject({
      id: 'cheeriosB' + i,
      backgroundImage: 'images/cheerios02.png',
      scale: 1.5,
      parent: this.f1container
    });
    this['cheerios_C' + i] = this.smartObject({
      id: 'cheeriosC' + i,
      backgroundImage: 'images/cheerios03.png',
      scale: 1.5,
      parent: this.f1container
    });
    this['cheerios_D' + i] = this.smartObject({
      id: 'cheeriosD' + i,
      backgroundImage: 'images/cheerios04.png',
      scale: 1.5,
      parent: this.f1container
    });
    this['cheerios_E' + i] = this.smartObject({
      id: 'cheeriosE' + i,
      backgroundImage: 'images/cheerios05.png',
      scale: 1.3,
      parent: this.f1container
    });
    this['cheerios_F' + i] = this.smartObject({
      id: 'cheeriosF' + i,
      backgroundImage: 'images/cheerios06.png',
      scale: 1.5,
      parent: this.f1container
    });
  }
  this.cockpit = this.smartObject({
    backgroundImage: 'images/cockpit.png',
    parent: this.banner
  });
  this.blur1 = this.smartObject({
    backgroundImage: 'images/blur1.jpg',
    autoAlpha: 0,
    parent: this.banner
  });
  this.blur2 = this.smartObject({
    backgroundImage: 'images/blur2.jpg',
    autoAlpha: 0,
    parent: this.banner
  });
  this.cabineBag = this.smartObject({
    backgroundImage: 'images/cabineBag.png',
    autoAlpha: 0,
    scale: 1.4,
    parent: this.banner
  });
  this.bg_blue = this.smartObject({
    backgroundImage: 'images/bg_blue.jpg',
    autoAlpha: 0,
    parent: this.banner
  });
  this.f2container = this.smartObject({
    parent: this.banner
  });
  this.sw_logo = this.smartObject({
    backgroundImage: 'images/sw_logo.png',
    autoAlpha: 0,
    parent: this.f2container
  });
  this.f2_text1 = this.smartObject({
    backgroundImage: 'images/f2_text1.png',
    autoAlpha: 0,
    parent: this.f2container
  });
  this.f2_text2 = this.smartObject({
    backgroundImage: 'images/f2_text2.png',
    autoAlpha: 0,
    parent: this.f2container
  });
  this.f2_bag04 = this.smartObject({
    backgroundImage: 'images/f2_bag04.png',
    autoAlpha: 0,
    parent: this.f2container
  });
  this.f2_bag03 = this.smartObject({
    backgroundImage: 'images/f2_bag03.png',
    autoAlpha: 0,
    parent: this.f2container
  });
  this.f2_bag02 = this.smartObject({
    backgroundImage: 'images/f2_bag02.png',
    autoAlpha: 0,
    parent: this.f2container
  });
  this.f2_bag01 = this.smartObject({
    backgroundImage: 'images/f2_bag01.png',
    autoAlpha: 0,
    parent: this.f2container
  });
  this.f2_box = this.smartObject({
    backgroundImage: 'images/f2_box.png',
    autoAlpha: 0,
    parent: this.f2container
  });
  this.cta = this.smartObject({
    backgroundImage: 'images/cta.png',
    autoAlpha: 0,
    parent: this.banner
  });
  this.cta_arrow = this.smartObject({
    backgroundImage: 'images/cta_arrow.png',
    id: 'cta_arrow',
    autoAlpha: 0,
    parent: this.banner
  });
  this.ziploc_logo = this.smartObject({
    backgroundImage: 'images/ziploc_logo.png',
    autoAlpha: 0,
    parent: this.banner
  });
  this.cta_area = this.smartObject({
    x: 74,
    y: 173,
    width: 155,
    height: 31,
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Creative.prototype.setup = function () {
  this.cheerios_A0.set({ x: -78, y: -178 }), this.cheerios_A1.set({ x: -163, y: 77 }), this.cheerios_A2.set({ x: -184, y: -73 }), this.cheerios_A3.set({ x: -12, y: -146 }), this.cheerios_A4.set({ x: 50, y: -261 }), this.cheerios_A5.set({ x: 220, y: 200 }), this.cheerios_A6.set({ x: -270, y: -250 }), this.cheerios_A7.set({ x: -5, y: -400 }), this.cheerios_A8.set({ x: 220, y: -340 }), this.cheerios_A9.set({ x: -150, y: -10 }), this.cheerios_B0.set({ x: 220, y: -70 }), this.cheerios_B1.set({ x: -270, y: -330 }), this.cheerios_B2.set({ x: -300, y: -20 }), this.cheerios_B3.set({ x: 180, y: -410 }), this.cheerios_B4.set({ x: -85, y: -400 }), this.cheerios_B5.set({ x: 220, y: -140 }), this.cheerios_B6.set({ x: -270, y: -190 }), this.cheerios_B7.set({ x: 40, y: -400 }), this.cheerios_B8.set({ x: 220, y: -410 }), this.cheerios_B9.set({ x: 160, y: -235 }), this.cheerios_C0.set({ x: 104, y: 31 }), this.cheerios_C1.set({ x: -102, y: -206 }), this.cheerios_C2.set({ x: -105, y: 76 }), this.cheerios_C3.set({ x: -150, y: 151 }), this.cheerios_C4.set({ x: -181, y: -71 }), this.cheerios_C5.set({ x: 73, y: 120 }), this.cheerios_C6.set({ x: -423, y: -303 }), this.cheerios_C7.set({ x: -149, y: -260 }), this.cheerios_C8.set({ x: 3, y: 174 }), this.cheerios_C9.set({ x: -37, y: -99 }), this.cheerios_D0.set({ x: 100, y: 200 }), this.cheerios_D1.set({ x: 144, y: -31 }), this.cheerios_D2.set({ x: -98, y: 14 }), this.cheerios_D3.set({ x: 165, y: -193 }), this.cheerios_D4.set({ x: -105, y: -94 }), this.cheerios_D5.set({ x: 110, y: -103 }), this.cheerios_D6.set({ x: -84, y: 131 }), this.cheerios_D7.set({ x: 53, y: 15 }), this.cheerios_D8.set({ x: -29, y: -265 }), this.cheerios_D9.set({ x: 52, y: -67 }), this.cheerios_E0.set({ x: 50, y: -31 }), this.cheerios_E1.set({ x: -8, y: -216 }), this.cheerios_E2.set({ x: -85, y: -259 }), this.cheerios_E3.set({ x: -20, y: 21 }), this.cheerios_E4.set({ x: -8, y: -21 }), this.cheerios_E5.set({ x: 74, y: -295 }), this.cheerios_E6.set({ x: 6, y: 72 }), this.cheerios_E7.set({ x: -147, y: -125 }), this.cheerios_E8.set({ x: 102, y: -43 }), this.cheerios_E9.set({ x: 9, y: -281 }), this.cheerios_F0.set({ x: -16, y: 126 }), this.cheerios_F1.set({ x: 104, y: -239 }), this.cheerios_F2.set({ x: -94, y: -291 }), this.cheerios_F3.set({ x: 45, y: -307 }), this.cheerios_F4.set({ x: -100, y: -326 }), this.cheerios_F5.set({ x: 13, y: -84 }), this.cheerios_F6.set({ x: -65, y: -302 }), this.cheerios_F7.set({ x: 25, y: -180 }), this.cheerios_F8.set({ x: -125, y: -167 }), this.cheerios_F9.set({ x: -162, y: -305 }), this.blur2.center();
  this.f1container.center();
};

/**
 * Hide the preloader.
 */
Creative.prototype.hidePreloader = function () {
  TweenMax.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Creative.prototype.animate = function () {
  this.cheerios_ani1 = [];
  this.cheerios_ani2 = [];
  this.cheerios_ani3 = [];

  for (var i = 0; i < 10; i++) {
    this.cheerios_ani2.push(this['cheerios_A' + i]);
    this.cheerios_ani2.push(this['cheerios_B' + i]);
    this.cheerios_ani1.push(this['cheerios_C' + i]);
    this.cheerios_ani3.push(this['cheerios_D' + i]);
    this.cheerios_ani3.push(this['cheerios_E' + i]);
    this.cheerios_ani3.push(this['cheerios_F' + i]);
  }

  this.timeline = new TimelineMax({ repeat: 0 }).addLabel('f1').to(this.bg, 3, { scale: 1.4 }).staggerFrom(this.cheerios_ani1, .8, { scale: 0.1, y: 0, x: -10, ease: Power1.easeIn }, .1, "f1+=0").staggerFrom(this.cheerios_ani2, 1.5, { scale: 0.1, alpha: 0.5, y: 20, x: 0, ease: Power1.easeIn }, .1, "f1+=0.5").staggerFrom(this.cheerios_ani3, .3, { scale: 0.01, ease: Power1.easeIn }, .1, "f1+=1").addLabel('f2').to([this.cockpit, this.f1container], .4, { autoAlpha: 0, scale: .6, ease: Power4.easeIn }, "f2+=0.4").fromTo(this.blur1, .8, { autoAlpha: 0, scale: 2, ease: Power4.easeIn }, { autoAlpha: 1, scale: 1.1, y: 8, x: 2, ease: Power4.easeOut }, "f2+=0.4").to(this.bg, 0.8, { scale: 1 }, "f2+=0.4").to(this.blur1, .1, { autoAlpha: 0 }, "f2+=0.4").to(this.cabineBag, .3, { autoAlpha: 1, scale: 1, ease: Power4.easeIn }, "f2+=0.5").addLabel("f2b", "+=0.2").to(this.cabineBag, .3, { autoAlpha: 0, scale: 0.75, ease: Power4.easeIn }, "f2b+=0").fromTo(this.blur2, .8, { autoAlpha: 0, scale: 1.1, ease: Power4.easeIn }, { autoAlpha: 1, scale: .75, y: 20, ease: Power4.easeOut }, "f2b+=0.1").to([this.blur2], .1, { autoAlpha: 0, ease: Power3.easeOut }, "f2b+=0.5").to(this.bg_blue, 0.5, { autoAlpha: 1, ease: Power3.easeOut }, "f2b+=0.2").addLabel("f3").to([this.sw_logo, this.f2_text1, this.f2_box], .5, { autoAlpha: 1 }, "-=0.2").fromTo(this.f2_bag01, .5, { x: 120, y: 150 }, { autoAlpha: 1, scale: 1, x: 200, y: 119, ease: Elastic.easeOut.config(1, 1) }, "f3").fromTo(this.f2_bag02, .5, { x: 128, y: 157 }, { autoAlpha: 1, scale: 1, x: 148, y: 107, ease: Elastic.easeOut.config(1, 1) }, "f3").fromTo(this.f2_bag03, .5, { x: 97, y: 156 }, { autoAlpha: 1, scale: 1, x: 77, y: 106, ease: Elastic.easeOut.config(1, 1) }, "f3").fromTo(this.f2_bag04, .5, { x: 38, y: 146 }, { autoAlpha: 1, scale: 1, x: 8, y: 116, ease: Elastic.easeOut.config(1, 1) }, "f3").to(this.f2_text1, .5, { autoAlpha: 0 }, "+=2").to(this.f2_text2, .5, { autoAlpha: 1 }).to(this.f2container, .5, { autoAlpha: 0 }, "+=2").addLabel("f4").to([this.ziploc_logo, this.cta, this.cta_arrow], .5, { autoAlpha: 1 });

  this.cta_area.onmouseover = function () {
    TweenMax.to('#cta_arrow', .25, { x: 5 });
  };
  this.cta_area.onmouseout = function () {
    TweenMax.to('#cta_arrow', .25, { x: 0 });
  };
};