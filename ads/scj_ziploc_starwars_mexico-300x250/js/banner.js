'use strict';

var Creative = function Creative() {
  this.loader();
  this.imageCache = {};
};

Creative.prototype.onInit = function () {
  console.log('Creative initialised');
};

Creative.prototype.onPolite = function () {
  console.log('Polite loading scripts');
};

/**
 * Polite load scripts and trigger the
 */
Creative.prototype.onVisible = function () {
  var _this = this;
  // var scripts = ['https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'];
  // var scripts = ['https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.20.0_d360d9a082ccc13b1a1a9b153f86b378_min.js'];    // 8/MAY/2018
  var scripts = ['https://s0.2mdn.net/creatives/assets/2733394/TweenMax.min.js'];

  // Promise.resolve('../base/js/GSDevTools.min.js').then(function(value){
  //   scripts.push(value);
  //   _this.politeLoad(scripts, function () { _this.start() });
  // }, function(){
  //   _this.politeLoad(scripts, function () { _this.start() });
  // });

  this.politeLoad(scripts, function () {
    _this.start();
  });
};

/**
 * Set up smart SVG object method. Created by Dwayne Schick, 22nd May 2018
 */
Creative.prototype.smartSVGObject = function (_settings) {
  var svgNS = "http://www.w3.org/2000/svg";
  var settings = _settings || {};

  var svg = document.createElementNS(svgNS, "svg");
  svg.setAttributeNS(null, "viewBox", settings.viewBox);

  // svg.setAttributeNS(null, "style", "width:" + settings.width + "px; height:" + settings.height + "px;");

  var path = document.createElementNS(svgNS, "path");
  path.setAttributeNS(null, "fill", settings.fill);
  path.setAttributeNS(null, "d", settings.path);

  svg.appendChild(path);

  settings.parent.appendChild(svg);

  // Helper functions
  svg.set = function (settings) {
    TweenMax.set(this, settings);
  };

  svg.to = function (time, settings) {
    TweenMax.to(this, time, settings);
  };

  svg.from = function (time, settings) {
    TweenMax.from(this, time, settings);
  };

  svg.fromTo = function (time, from, to) {
    TweenMax.fromTo(this, time, from, to);
  };

  return svg;
};

/**
 * Set up smart object method.
 */
Creative.prototype.smartObject = function (_settings) {
  var _this = this;

  var settings = _settings || {};
  settings.type = settings.type || 'div';
  settings.position = settings.position || 'absolute';
  settings.left = settings.left || '0';
  settings.top = settings.top || '0';

  var element = document.createElement(settings.type);
  element._settings = settings.constructor();
  for (var key in settings) {
    element._settings[key] = settings[key];
  }

  switch (settings.type) {
    case 'canvas':
      element.width = settings.width;
      element.height = settings.height;
      break;
    case 'video':
      if (settings.autoplay) {
        element.autoplay = settings.autoplay;
      }
      if (settings.loop) {
        element.loop = settings.loop;
      }
      if (settings.controls) {
        element.controls = settings.controls;
      }
      if (settings.muted) {
        element.muted = settings.muted;
        element.setAttribute('muted', '');
      }
      if (settings.poster) {
        element.poster = settings.poster;
      }
      if (settings.preload) {
        element.preload = settings.preload;
      }
      if (settings.playsinline) {
        element.setAttribute('playsinline', '');
      }
      if (settings.src) {
        element.src = settings.src;
      }
      break;
    case 'img':
      element.src = settings.src;
      element.alt = settings.alt;
      break;
  }

  if (settings.sources) {
    var sources = settings.sources;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < sources.length; i++) {
      var sourceTag = document.createElement('source');
      sourceTag.src = sources[i].url;
      sourceTag.type = sources[i].type;
      fragment.appendChild(sourceTag);
    }
    element.appendChild(fragment);
  }

  function applySettings() {
    if (settings.id) {
      element.id = settings.id;
    }
    if (settings.parent) {
      settings.parent.appendChild(element);
    }
    if (settings.innerHTML) {
      element.innerHTML = settings.innerHTML;
    }
    delete settings.innerHTML;
    delete settings.retina;
    delete settings.parent;
    delete settings.id;
    delete settings.type;
    delete settings.autoplay;
    delete settings.loop;
    delete settings.controls;
    delete settings.muted;
    delete settings.poster;
    delete settings.preload;
    delete settings.playsinline;
    delete settings.sources;
    delete settings.src;
    delete settings.alt;
    TweenMax.set(element, settings);
  }

  function setImage() {
    var isSVG = this.src.slice(-4) === '.svg';
    if (isSVG) {
      document.body.appendChild(this);
    }
    settings.width = Math.round(settings.width || (settings.retina ? this.width / 2 : this.width));
    settings.height = Math.round(settings.height || (settings.retina ? this.height / 2 : this.height));
    settings.backgroundImage = 'url(' + this.src + ')';
    applySettings();
    if (isSVG) {
      document.body.removeChild(this);
    }
  }

  function loadImg(src, setImg) {
    var img = _this.imageCache[src];
    if (img) {
      if (setImg) {
        setImage.apply(img);
      }
    } else {
      img = document.createElement('img');
      img.src = src;
      if (setImg) {
        img.onload = setImage;
      }
      _this.imageCache[src] = img;
    }
  }

  if (settings.backgroundImage) {
    element.style.backgroundSize = settings.backgroundSize || '100% 100%';
    element.style.backgroundPosition = settings.backgroundPosition || 'center';
    element.style.backgroundRepeat = settings.backgroundRepeat || 'no-repeat';

    if (Object.prototype.toString.call(settings.backgroundImage) === '[object Array]') {
      element.images = settings.backgroundImage;
      for (var j = 0; j < element.images.length; ++j) {
        loadImg(element.images[j], j === 0);
      }
    } else {
      loadImg(settings.backgroundImage, true);
    }
  } else {
    applySettings();
  }

  // Helper functions
  element.appendChildren = function (children) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < children.length; i++) {
      fragment.appendChild(children[i]);
    }
    this.appendChild(fragment);
  };

  element.set = function (settings) {
    TweenMax.set(this, settings);
  };

  element.to = function (time, settings) {
    TweenMax.to(this, time, settings);
  };

  element.from = function (time, settings) {
    TweenMax.from(this, time, settings);
  };

  element.fromTo = function (time, from, to) {
    TweenMax.fromTo(this, time, from, to);
  };

  element.get = function (property) {
    return this._gsTransform && this._gsTransform[property] || this._gsTransform && this._gsTransform[property] === 0 ? this._gsTransform[property] : this.style[property].slice(-2) === 'px' ? parseFloat(this.style[property]) : this.style[property];
  };

  element.center = function () {
    TweenMax.set(this, { top: '50%', marginTop: -this.offsetHeight / 2, left: '50%', marginLeft: -this.offsetWidth / 2 });
  };

  element.centerHorizontal = function () {
    TweenMax.set(this, { left: '50%', marginLeft: -this.offsetWidth / 2 });
  };

  element.centerVertical = function () {
    TweenMax.set(this, { top: '50%', marginTop: -this.offsetHeight / 2 });
  };

  element.getOriginal = function (property) {
    return element._settings[property] || 0;
  };

  return element;
};

/**
 * Preload images method.
 */
Creative.prototype.preloadImages = function (images, callback, scope) {
  var _this = this;
  var l = images.length;
  var loaded = 0;
  var img = null;

  for (var i = 0; i < l; ++i) {
    img = document.createElement('img');
    img.src = img.microSrc = images[i];
    img.onload = function () {
      _this.imageCache[this.microSrc] = this;
      loaded++;
      if (loaded === l) {
        if (scope) {
          callback.call(scope);
        } else {
          callback();
        }
      }
    };
  }
};