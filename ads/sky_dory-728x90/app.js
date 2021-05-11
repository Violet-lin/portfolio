
var preloader;
var bannerWidth = 728;
var bannerHeight = 90;

window.onload = function() {
    preloader = new PreloaderAnimation();

	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
};

function PreloaderAnimation() {

	var stage = new createjs.Stage("preloader"),
		container = new createjs.Container();

	stage.autoClear = true;

	for (var i = 0; i < 12; i++) {
		var circle = new PreloaderAsset((1/12) * i, "#999999", 5),
			degrees = (360 / 12) * i + (135),
			radians = degrees * (Math.PI / 180);

		circle.x = Math.sin(radians) * 35;
		circle.y = Math.cos(radians) * 35;
		container.addChild(circle);
	}

	container.x = stage.canvas.width * 0.5;
	container.y = stage.canvas.height * 0.5;
	container.scaleX = 0.8;
	container.scaleY = 0.8;
	container.scaleX *= -1;
	stage.addChild(container);
	stage.update();

	TweenLite.ticker.addEventListener("tick", stage.update, stage);

	this.getStage = function(){ return stage }
	this.getContainer = function(){ return container }
}

PreloaderAnimation.prototype.fadeOut = function(callback) {
	var stage = this.getStage();
	TweenLite.to(this.getContainer(), 0.5, { alpha: 0, ease:Quad.easeOut, onComplete:function(){
		TweenLite.ticker.removeEventListener("tick", stage.update, stage);
		stage.removeAllChildren();
		stage.update();
		stage = null;
		document.getElementById("container").removeChild( document.getElementById("preloader"));
		callback();
	}});
}

function PreloaderAsset(delay, colour, radius) {

	var container = new createjs.Container(),
		circle = new createjs.Shape(),
		xy = 0 - (radius * 0.5);

	circle.graphics.beginFill(colour).drawCircle(xy, xy, radius);
	circle.scaleX = 0.4;
	circle.scaleY = 0.4;
	circle.alpha = 0;
	container.addChild(circle);

	TweenMax.to(circle, 0.5, { onStart: function(){ circle.alpha = 0.8}, delay: delay, scaleX: 1, scaleY: 1, repeat: -1, yoyo:true, ease:Quad.easeOut  } );

	return container;
}


function enablerInitHandler() {

    Enabler.setProfileId(1115119);
    var devDynamicContent = {};

    devDynamicContent.Feed_728x90= [{}];
    devDynamicContent.Feed_728x90[0]._id = 0;
    devDynamicContent.Feed_728x90[0].id = 1;
    devDynamicContent.Feed_728x90[0].DEFAULT = false;
    devDynamicContent.Feed_728x90[0].ReportingLabel = "ReportingLabel";
    devDynamicContent.Feed_728x90[0].Clicktag = {};
    devDynamicContent.Feed_728x90[0].Clicktag.Url = "https://www.sky.com/";
    devDynamicContent.Feed_728x90[0].StartDate = {};
    devDynamicContent.Feed_728x90[0].StartDate.RawValue = "";
    devDynamicContent.Feed_728x90[0].StartDate.UtcValue = 0;
    devDynamicContent.Feed_728x90[0].EndDate = {};
    devDynamicContent.Feed_728x90[0].EndDate.RawValue = "";
    devDynamicContent.Feed_728x90[0].EndDate.UtcValue = 0;

	devDynamicContent.Feed_728x90[0].content = {

	"background.jpg":{"Type":"file","Url":"background.jpg"},
    "finding_dory_txt.png":{"Type":"file","Url":"finding_dory_txt.png"},
    "headline_cover.png":{"Type":"file","Url":"headline_cover.png"},
    "cta.png":{"Type":"file","Url":"cta.png"},
    "flare.png":{"Type":"file","Url":"flare.png"},
    "headline_01.png":{"Type":"file","Url":"headline_01.png"},
    "headline_02.png":{"Type":"file","Url":"headline_02.png"},
    "headline_03_a.png":{"Type":"file","Url":"headline_03_a.png"},
    "headline_03_b.png":{"Type":"file","Url":"headline_03_b.png"},
    "headline_04.png":{"Type":"file","Url":"headline_04.png"},
    "dory_01.jpg":{"Type":"file","Url":"dory_01.jpg"},
    "dory_02.jpg":{"Type":"file","Url":"dory_02.jpg"},
	};

    devDynamicContent.Feed_728x90[0].LegalButton = "Click for legals";
    devDynamicContent.Feed_728x90[0].LegalCopy = "Finding Dory \u00A9Disney\/Pixar. \u00A350 Prepaid MasterCard\u00AE can be used wherever MasterCard\u00AE is accepted, except for gambling, cash withdrawals, currency, cashback or at petrol stations. Unused card values will expire 12 months after the cards are printed. Further terms apply.  Sky TV Customers: Your friend must live at a different UK address. We will send your reward once we receive your friend\'s first subscription payment. You must remain a customer to qualify. Not available with other offers.";
    Enabler.setDevDynamicContent(devDynamicContent);

    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
}


function pageLoadedHandler() {
    if (Enabler.isVisible()) {
        adVisibilityHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
    }
}


function adVisibilityHandler() {

	var queue = new createjs.LoadQueue(true);

	queue.on('complete', handleAllImagesLoaded, this);

	queue.loadFile({id:"background", src: dynamicContent.Feed_728x90[0].content['background.jpg'].Url});
	queue.loadFile({id:"finding_dory_txt", src: dynamicContent.Feed_728x90[0].content['finding_dory_txt.png'].Url});
	queue.loadFile({id:"headline_cover", src: dynamicContent.Feed_728x90[0].content['headline_cover.png'].Url});
	queue.loadFile({id:"cta", src: dynamicContent.Feed_728x90[0].content['cta.png'].Url});
  	queue.loadFile({id:"flare", src: dynamicContent.Feed_728x90[0].content['flare.png'].Url});
	queue.loadFile({id:"headline_01", src: dynamicContent.Feed_728x90[0].content['headline_01.png'].Url});
	queue.loadFile({id:"headline_02", src: dynamicContent.Feed_728x90[0].content['headline_02.png'].Url});
	queue.loadFile({id:"headline_03a", src: dynamicContent.Feed_728x90[0].content['headline_03_a.png'].Url});
  	queue.loadFile({id:"headline_03b", src: dynamicContent.Feed_728x90[0].content['headline_03_b.png'].Url});
	queue.loadFile({id:"headline_04", src: dynamicContent.Feed_728x90[0].content['headline_04.png'].Url});
	queue.loadFile({id:"finding_dory_spritesheet_01", src: dynamicContent.Feed_728x90[0].content['dory_01.jpg'].Url});
  	queue.loadFile({id:"finding_dory_spritesheet_02", src: dynamicContent.Feed_728x90[0].content['dory_02.jpg'].Url});

	function handleAllImagesLoaded() {
		//console.log('All images loaded');
		preloader.fadeOut(function() {
			var assets = new Assets(queue);
            var main = new Main(assets);
        });
		document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
	}

}

function bgExitHandler() {
    var exitId = 'Primary Exit';
    var dynamicExitUrl = dynamicContent.Feed_728x90[0].Clicktag.Url;

    if (dynamicExitUrl) {
        Enabler.exitOverride(exitId, dynamicExitUrl);
    } else {
        Enabler.exit(exitId);
    }
}

function Assets(queue) {

	var assets = {};

	assets.background = {};
	assets.background.img = queue.getResult("background");

	assets.finding_dory_txt = {};
	assets.finding_dory_txt.img = queue.getResult("finding_dory_txt");

	assets.headline_01 = {};
	assets.headline_01.img = queue.getResult("headline_01");

	assets.headline_02 = {};
	assets.headline_02.img = queue.getResult("headline_02");

	assets.headline_03a = {};
	assets.headline_03a.img = queue.getResult("headline_03a");

  	assets.headline_03b = {};
	assets.headline_03b.img = queue.getResult("headline_03b");

	assets.headline_04 = {};
	assets.headline_04.img = queue.getResult("headline_04");


	assets.headline_cover = {};
	assets.headline_cover.img = queue.getResult("headline_cover");

	assets.cta = {};
	assets.cta.img = queue.getResult("cta");

  	assets.flare = {};
	assets.flare.img = queue.getResult("flare");

	assets.finding_dory_spritesheet_01 = {};
	assets.finding_dory_spritesheet_01.img = queue.getResult("finding_dory_spritesheet_01");

  	assets.finding_dory_spritesheet_02 = {};
	assets.finding_dory_spritesheet_02.img = queue.getResult("finding_dory_spritesheet_02");

	return assets;
}

function Main(assets) {

	var stage = new createjs.Stage("main");

	var legals = new SkyLegals();

	var currentFrame = null,
		framePointer = null,
		framesArray = [];

	var background = new createjs.Bitmap(assets.background.img);

	stage.addChild(background);

	var frame_01 = new Frame01(stage, assets);
	framesArray.push(frame_01);

	createjs.Ticker.addEventListener("tick", stage);
	createjs.Ticker.setInterval(25);
	createjs.Ticker.setFPS(40);
	stage.update();

	/*Start Banner*/
	handleNextFrame();

	function handleNextFrame(){
		if (currentFrame === null) {
			framePointer = 0;
		} else if (framePointer !== framesArray.length -1) {
			framePointer++;
		}else {
			createjs.Ticker.removeEventListener("tick");
			return;
		}
		currentFrame = framesArray[framePointer];
		currentFrame.animate(handleNextFrame);
	}
}

function Frame01(stage, assets) {

	var finding_dory_txt = new createjs.Bitmap(assets.finding_dory_txt.img);
	var headline_cover = new createjs.Bitmap(assets.headline_cover.img);
	var cta = new Glintable(new createjs.Bitmap(assets.cta.img), 0.5, 1);
  	var flare =  new createjs.Bitmap(assets.flare.img);
  	var headline_01 = new Glintable(new createjs.Bitmap(assets.headline_01.img), 0.5, 1);
	var headline_02 = new Glintable(new createjs.Bitmap(assets.headline_02.img), 0.5, 1);
	var headline_03a = new Glintable(new createjs.Bitmap(assets.headline_03a.img), 0.6, 2);
  	var headline_03b = new Glintable(new createjs.Bitmap(assets.headline_03b.img), 1, 2);
	var headline_04 = new Glintable(new createjs.Bitmap(assets.headline_04.img), 0.5, 1);
  	createjs.MotionGuidePlugin.install();

  var spriteSheetCount = 125;
	var spriteSheet_01 = new createjs.SpriteSheet({
		framerate: 25,
		"images": [assets.finding_dory_spritesheet_01.img],
		"frames": {
		  "width": 428,
		  "height": bannerHeight,
		  "count": spriteSheetCount
		},

		"animations": {
		  "start": [0, spriteSheetCount - 1,'stop'],
		  "stop": [spriteSheetCount - 1]
		}
	});

  var spriteSheet_02 = new createjs.SpriteSheet({
		framerate: 24,
		"images": [assets.finding_dory_spritesheet_02.img],
		"frames": {
      "width": 428,
		  "height": bannerHeight,
		  "count": spriteSheetCount
		},

		"animations": {
		  "start": [0, spriteSheetCount - 1,'stop'],
		  "stop": [spriteSheetCount - 1]
		}
	});

	var spritesheetHolder_01 = new createjs.Sprite(spriteSheet_01);
  	var spritesheetHolder_02 = new createjs.Sprite(spriteSheet_02);
    //spritesheetHolder.alpha = 0;
	spritesheetHolder_01.setBounds(0,0,428,bannerHeight);
  	spritesheetHolder_02.setBounds(0,0,428,bannerHeight);
	spritesheetHolder_01.x = spritesheetHolder_02.x = bannerWidth-428;

	cta.alpha = 0;
  	flare.alpha = 0.8;
  	flare.regX = flare.regY = 20;
  	flare.scaleX = flare.scaleY = 1.2;

	headline_01.alpha = 0;
	headline_02.alpha = 0;
	headline_03a.alpha = 0;
  	headline_03b.alpha = 0;
  	headline_03b.regX = headline_03b.x = 150;
  	headline_03b.regY = headline_03b.y = 46;
  	// headline_03b.scaleX = headline_03b.scaleY = 1.8;
	headline_04.alpha = 0;

	this.animate = function(animationComplete) {
		stage.addChild(spritesheetHolder_02, spritesheetHolder_01, finding_dory_txt, cta, headline_cover, headline_01, headline_02, headline_03a, headline_03b, headline_04, flare);

		TweenLite.delayedCall(0.2, function(){
			spritesheetHolder_01.gotoAndPlay("start");
			spritesheetHolder_01.addEventListener("animationend", spritePart2);
		});

		function spritePart2(){
			// console.log("test test");
    		// playing 2nd spritesheets
			spritesheetHolder_02.gotoAndPlay("start");
			spritesheetHolder_01.removeEventListener("animationend", spritePart2);
      		stage.removeChild(spritesheetHolder_01);
			}

      //--Frame1--//
  		TweenLite.to(headline_01, 0.5, {delay: 0, alpha: 1});             //fade in
      	TweenLite.delayedCall(1, function(){headline_01.playGlint();});   //Sheen
  		TweenLite.to(headline_01, 0.5, {delay: 2.5, alpha: 0});           //fade out

      	flareMotion(flare,2000); // calling the motion

      //--Frame2--//
  		TweenLite.to(headline_02, 0.5, {delay: 3, alpha: 1});             //fade in
      	TweenLite.delayedCall(3.5, function(){headline_02.playGlint();}); //Sheen
  		TweenLite.to(headline_02, 0.5, {delay: 5.5, alpha: 0});           //fade out

      //--Frame3--//
  		TweenLite.to(headline_03a, 0.5, {delay: 6, alpha: 1});            //fade in
      	TweenLite.delayedCall(6, function(){headline_03a.playGlint();});  //Sheen
  		TweenLite.to(headline_03a, 0.5, {delay: 8.5, alpha:0});           //fade out

      	TweenLite.set(headline_03b, {'webkitFilter': 'blur(10px)',scaleX:2.5, scaleY:2.5, alpha: 0});
      	TweenLite.to(headline_03b, 0.5, {'webkitFilter': 'blur(0px)', delay: 6, alpha: 1, scaleX:1, scaleY:1, ease: Sine.easeIn}); //Zoom in
      	TweenLite.delayedCall(6.1, function(){headline_03b.playGlint();});  //Sheen
  		TweenLite.to(headline_03b, 0.5, {delay: 8.5, alpha:0});           //fade out
      // console.log(headline_03b.regY);

      //--Frame4--//
      	flareMotion(flare,9000); // calling the motion

  		TweenLite.to(headline_04, 0.5, {delay: 9, alpha: 1});             //fade in
      	TweenLite.delayedCall(9.5, function(){headline_04.playGlint();}); //Sheen
  		TweenLite.to(cta, 0.5, {delay: 9, alpha: 1});                     //fade in
      	TweenLite.delayedCall(10, function(){
        cta.playGlint();                                                //Sheen
      });
      // console.log(cta);
  		TweenLite.delayedCall(26, function(){
  		animationComplete();
  		});
	};
}



function SkyLegals() {
	var legalsContainer = document.getElementById('legalsContainer'),
	legalsButton = document.getElementById('legalsButton'),
	legalsCopy = document.getElementById('legalsCopy'),
	legalsClose = document.getElementById('legalsClose');

	legalsCopy.innerHTML = dynamicContent.Feed_728x90[0].LegalCopy;
	legalsButton.innerHTML = dynamicContent.Feed_728x90[0].LegalButton;

	var outerWidth = document.getElementById('main').offsetWidth;
	var outerHeight = document.getElementById('main').offsetHeight;

	legalsContainer.style.top = outerHeight + 'px';
	legalsCopy.style['max-height'] = (outerHeight - 30) + 'px';
	legalsClose.style.left = (outerWidth - 21) + 'px';

	legalsButton.addEventListener('click', handleClick);
	legalsClose.addEventListener('click', handleClose);

	function handleClick() {
		TweenMax.to(legalsContainer, 0.5, {
			ease: Cubic.easeInOut,
			top: outerHeight - document.getElementById('legalsCopy').offsetHeight
		});

		legalsButton.style.visibility = 'hidden';
	}

	function handleClose() {
		TweenMax.to(legalsContainer, 0.5, {
			ease: Cubic.easeInOut,
			top: outerHeight
		});

		legalsButton.style.visibility = 'visible';
	}
}

function Glintable(imagePath, sheenAlpha, sheenSpeed) {
    var container = new createjs.Container(),
        glint = new createjs.Shape(),
        textField = imagePath,
        highlight = imagePath;

	var sheenArea = new createjs.Shape();
	sheenArea.graphics.beginFill("#fff").drawRect(0,0,bannerWidth,bannerHeight);
	textField.cache(0,0,bannerWidth,bannerHeight);
	sheenArea.filters = [new createjs.AlphaMaskFilter(textField.cacheCanvas)];
	sheenArea.cache(0,0,bannerWidth,bannerHeight);
	sheenArea.alpha = sheenAlpha;

	var sheenLine = new createjs.Shape();
	sheenLine.graphics.beginLinearGradientFill(['rgba(255,255,255,.4)','rgba(255,255,255,.7)','rgba(255,255,255,.4)'], [0,.5,0], 0, 0 , 15, 0).drawRect(0,0,25,bannerHeight);
	sheenLine.rotation = 10;
	sheenLine.x = -15;
	sheenLine.y = 0;
	sheenArea.mask = sheenLine;

    container.addChild(textField, sheenArea);

    container.playGlint = function () {
        TweenLite.to(sheenLine, sheenSpeed, {x: bannerWidth+50});
    };

    return container;
}

function flareMotion(item, delay){
  createjs.Tween.get(item)  // the flare that is on the path
  .wait(delay)              // when does it start
  .to({rotation: 540, guide:{ path:[285.7,-44.2,325.7,41,294.1,120.7]}},1800,createjs.Ease.circOut); // flare rotates & follows the edge of the headline cover (1.8s)
}
