(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function setElements(callback) {

    config = {};
    config.bannerWidth = 970;
    config.bannerHeight = 250;

    addClicktag(dd.exit_url);
    loadFont();

    function loadFont() {
        sr.font.add([asset('diodrum_semibold.woff'), asset('diodrum_regular.woff')], add);
    }

    function add() {
        ___("bg")
            .image(asset('bg-photo_970x250.jpg'), {width:937, height:config.bannerHeight, fit:true})
            .position({left:0, top:0});

        ___("guy")
            .image(asset('guy.png'), {width:233, height:231, fit:true})
            .position({left:120, bottom:0});

        ___("orange_fractal")
            .image(asset('orange-fractals_970x250.png'), {width:668, height:config.bannerHeight, fit:true})
            .position({right:0, top:0});

        ___('h1d1')
            .text('Je overstap', {webfont:'diodrum_semibold', color:"#FFFFFF", fontSize:36})
            .position({left:490, top:-20});

        ___('h1d2')
            .text('goed gefixt', {webfont:'diodrum_semibold', color:"#FFFFFF", fontSize:60})
            .position({left:492, push:{el:__("h1d1"), bottom:-15}});

        ___('check1')
            .image(asset('uspLabel.png'), {width:20, height:16, fit:true})
            .position({top:54, left:470});

        ___('check2')
            .image(asset('uspLabel.png'), {width:20, height:16, fit:true})
            .position({top:119, left:472});

        ___('check3')
            .image(asset('uspLabel.png'), {width:20, height:16, fit:true})
            .position({top:157, left:474});

        ___("usp1")
            .text("Gratis monteur, <br /><span class='thin'>indien gewenst</span>", {webfont:'diodrum_semibold', color:"#FFFFFF", fontSize:24})
            .position({left:505, top:40});

        ___("usp2")
            .text("Gratis overstapservice", {webfont:'diodrum_semibold', color:"#FFFFFF", fontSize:24})
            .position({left:507, push:{el:__("usp1"), bottom:6}});

        ___("usp3")
            .text("Geen dag zonder tv,<br /> internet en bellen", {webfont:'diodrum_semibold', color:"#FFFFFF", fontSize:24})
            .position({left:509, push:{el:__("usp2"), bottom:6}});

        ___('h2d1')
            .text('Dus stap gerust', {webfont:'diodrum_semibold', color:"#FFFFFF", fontSize:30})
            .position({left:450, top:-40});

        ___('h2d2')
            .text('over op', {webfont:'diodrum_semibold', color:"#FFFFFF", fontSize:30})
            .position({left:452, push:{el:__("h2d1"), bottom:-7}});

        ___('h2d3')
            .text('Ziggo Alles-in-1', {webfont:'diodrum_semibold', color:"#FFFFFF", fontSize:30})
            .position({left:454, push:{el:__("h2d2"), bottom:-5}});

        ___("fractal")
            .image(asset('fractal-3mnd.png'), {width:178, height:146, fit:true})
            .position({right:89, top:31});

        ___("logoLbl")
            .image(asset('logoLabel.png'), {width:122, height:68, fit:true})
            .position({right:0, bottom:0});

        ___("logo")
            .image(asset('ziggo-logo.png'), { width:78, height:28, fit:true })
            .position({bottom:15, right:15});

        ___('btn')
            .text('Bekijk de deal', {webfont:'diodrum_semibold', fontSize:17})
            .position({left:470, bottom:46});

        sr.loading.done(callback);
    }
}

function addClicktag(customUrl) {
    document.getElementById("bg-exit").addEventListener('click', bgExitHandler, false);
   
    function bgExitHandler(e) {
        if (srBanner.useDcs) {
            Enabler.exit('Background Exit');

        } else {
            window.open(clickTag);
        }
    }
}

module.exports.setElements = setElements;
},{}],2:[function(require,module,exports){
function animate(callback) {

    setAnimation();

    function setAnimation() {
        CSSPlugin.defaultForce3D = false;
        __("creative").style.opacity = 1;

        var tl01 = new TimelineMax();
        var tlRO = new TimelineMax({ paused : true });

        var transformHeader = "1200px 0px",
        h1 = [h1d1, h1d2],
        h2 = [h2d1, h2d2, h2d3],
        usps = [check1, usp1, check2, usp2, check3, usp3];

        tl01.set([h1, h2, usps], {alpha:0, rotation:-20, y:360, x:20});
        tl01.set(usps, {rotation:-2});
        tl01.set(fractal, {alpha:0, scale:0.2, rotation:-22});

        // tl01.set(guy, {y:-60, x:280, rotation:-75});
        // tl01.to(guy, 0.6, {x:180,repeat:1, yoyo:true});
        //     tl01.to(this, 0.5, {});
        tl01.to(guy, 0, {x:300, y:0, rotation:0});
        tl01.to(guy, 1, {x:0, y:0, ease:Back.easeOut.config(0.6)}, "+=0.4");
        
        tl01.staggerTo(h1, 1.4, {alpha:1, rotation:-3, y:10, x:0, transformOrigin:transformHeader, ease:Back.easeInOut.config(0.8)}, 0.05, "-=0.8");
            tl01.to(this, 1.6,{});
        tl01.staggerTo(h1, 1.4, {rotation:20, y:"-=600", transformOrigin:transformHeader, ease:Back.easeInOut.config(0.8)}, 0.05);        
        
        tl01.staggerTo(usps, 1.4, {alpha:1, rotation:-3, y:-50, x:0, transformOrigin:transformHeader, ease:Back.easeInOut.config(0.8)}, 0.05, "-=1.6");
        tl01.to(this, 2.4,{});
        tl01.staggerTo(usps, 1.4, {rotation:20, y:"-=600", transformOrigin:transformHeader, ease:Back.easeInOut.config(0.8)}, 0.05);        

        // tl01.staggerFrom([check1, check2, check3], 1.2, {scale:0, alpha:0, rotation:-90, ease:Elastic.easeOut.config(0.6)}, 0.1, "uspsIn-=0.6");
        // tl01.staggerFrom([usp1, usp2, usp3], 0.4, {alpha:0, x:-20, ease:Back.easeOut.config(0.8)}, 0.1, "uspsIn-=0.6");
        // tl01.staggerTo(usps, 0.5, {scale:1.1, repeat:1, yoyo:true, transformOrigin:"center center", ease:Back.easeIn.config(0.6)}, 0.06);
        //     tl01.to(this, 0.8,{});
        // tl01.staggerTo(usps, 0.4, {y:40, alpha:0, ease:Back.easeIn.config(0.6)}, 0.05);

        tl01.staggerTo(h2, 1.4, {alpha:1, rotation:-3, y:10, x:0, transformOrigin:transformHeader, ease:Back.easeInOut.config(0.8)}, 0.05, "-=1.6");
        tl01.to(fractal, 1.2, {scale:1, alpha:1, rotation:0, ease:Elastic.easeOut.config(0.4)}, "-=0.2");
        tl01.from(btn, 0.6, {y:100, ease:Back.easeOut.config(0.8)}, "-=0.8");

        tl01.to(btn, 0.2, {scale:1.1, transformOrigin:"50% 50%", ease:Back.easeInOut.config(0.8)}, "+=0.6");
        tl01.to(btn, 0.2, {scale:1, transformOrigin:"50% 50%", ease:Back.easeInOut.config(0.8), onComplete:rollover}, "+=0.4");

        tlRO.to(btn, 0.2, {scale:1.1, transformOrigin:"50% 50%", ease:Back.easeInOut.config(0.8)});
        // tlRO.to(fractal, 0.2, {scale:1.1, transformOrigin:"50% 50%", rotation:5, ease:Elastic.easeInOut.config(0.2)}, "-=0.1");

        /** Rollover functions */
        function rollover(element){
            banner.onmouseover= function(){
                tlRO.play();
            };

            banner.onmouseout= function(){
                tlRO.reverse();
            };
        }

        if (srBanner.debug) {
            if (srBanner.debug && srBanner.pauseFrom) {
                console.log("pause from " + srBanner.pauseFrom);
                tl01.pause(srBanner.pauseFrom);
            }

            if (srBanner.debug && srBanner.playFrom) {
                console.log("play from " + srBanner.playFrom);
                tl01.pause(srBanner.playFrom);
            }

            if (srBanner && srBanner.backupImage) {
                console.log("create backup images of last frame");
                tl01.add("screenshot");
                tl01.pause("screenshot");
            }
        }
    }

    if (callback) {
        callback();
    }
}

module.exports.animate = animate;
},{}],3:[function(require,module,exports){
require('./../lib/sr.dynamic.min.js');
var setConfig = require('./../set/config.js');
var create = require('./create.js');
var interact = require('./interact.js');

var srBanner = setConfig.loadSettings();
var dynamicData = srBanner.dynamicData;

asset = function(assetToLoad) {

    if (srBanner && srBanner.isLocal) {
        console.log("load asset: " + assetToLoad);

        return srBanner.localFolder + assetToLoad;

    }

    return "./" + assetToLoad;
}

if (srBanner.debug) {

    console.log(srBanner);
}

window.onload = setupBanner;

function setupBanner() {

    dynamicData.setup(setDynamicData);

    function setDynamicData(dynamicData) {

        dd = dynamicData;

        addElements();
    }

    function addElements() {

        //set elements and use addInteract as callback
        create.setElements(addInteract);
    }

    function addInteract() {

        interact.animate();

    }
}
},{"./../lib/sr.dynamic.min.js":4,"./../set/config.js":5,"./create.js":1,"./interact.js":2}],4:[function(require,module,exports){
(function (global){
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.sr=a()}}(function(){var a;return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){},{}],2:[function(a,b,c){function d(a,b){o=b,h(a)}function e(a,b){o=b,g(a,o)}function f(a,b,c){o=c;var d="";d+="@font-face { font-family:"+b+"; src: url("+a+"); }    ",m.push(b);var e=document.createElement("style");e.type="text/css",e.textContent=d,document.head.appendChild(e),i()}function g(a,b){l.load({google:{families:a},fontloading:function(){},test:0,fontactive:function(){this.test+=1,this.test==a.length&&b()}})}function h(a){for(var b=k(a),c="",d=0;d<b.length;d++)c+="@font-face { font-family:"+b[d].name+"; src: url("+b[d].filename+"); }    ",m.push(b[d].name);var e=document.createElement("style");e.type="text/css",e.textContent=c,document.head.appendChild(e),i()}function i(){l.load({custom:{families:m},fontloading:function(){},fontactive:function(){j()},fontinactive:function(a,b){console.log("failed to load"+a),j()}})}function j(){++n==m.length&&o()}function k(a){for(var b=[],c=0;c<a.length;c++)if("woff"==a[c].substring(a[c].length-4,a[c].length)){var d=a[c].split("/");d=d[d.length-1],b.push({name:d.substring(0,d.length-5),filename:a[c]})}else console.log("only woff fonts are supported for now");return b}var l=a("./lib/webfontloader.js"),m=[],n=0,o=function(){};b.exports.addBase64=f,b.exports.addGoogle=e,b.exports.add=d},{"./lib/webfontloader.js":6}],3:[function(a,b,c){sr=a("./srmain.js"),_underscoresr=a("./underscoresr.js"),___=function(a){if(Array.isArray(a)){var b=new _underscoresr;return b.elementArray=b.getArray(a),b}var b=new _underscoresr;return b.element=a,b.get(a),b},__=function(a){if(Array.isArray(a)){for(var b=[],c=0;c<a.length;c++)b.push(___(a[c]).element);return b}return ___(a).element}},{"./srmain.js":8,"./underscoresr.js":11}],4:[function(a,b,c){function d(a){if(Array.isArray(a)){for(var b=[],c=0;c<a.length;c++)a[c].tagName,b.push(a[c]);for(var d=e(b),c=0;c<b.length;c++)b[c].style.fontSize=String(d)+"px"}else console.log("input needs to be array")}function e(a){for(var b=99999,c=0;c<a.length;c++){var d=a[c].style.fontSize,e=parseFloat(d.substring(0,d.length-2));e<=b&&(b=e)}return b}function f(a){return{left:k(a,"left"),right:l(a,"left","offsetWidth"),top:k(a,"top"),bottom:l(a,"top","offsetHeight")}}function g(a){var b=k(a,"top");return l(a,"top","offsetHeight")-b}function h(a){var b=k(a,"left");return l(a,"left","offsetWidth")-b}function i(a,b){if(b.el||(b.el=__("creative")),b.left||0==b.left){var c=k(a,"left"),d=l(a,"left","offsetWidth"),e=d-c,f=b.el.offsetWidth,g=b.el.style.left||"0px",h=parseFloat(g.substring(0,g.length-2)),i=h,m=i-c+b.left;j(a,m,"left")}if(b.right||0==b.right){var c=k(a,"left"),d=l(a,"left","offsetWidth"),e=d-c,f=b.el.offsetWidth,g=b.el.style.left||"0px",h=parseFloat(g.substring(0,g.length-2)),i=f-e+h,m=i-c-b.right;j(a,m,"left")}if(b.top||0==b.top){var n=k(a,"top"),o=l(a,"top","offsetHeight"),p=o-n,m=b.top;j(a,m,"top")}if(b.bottom||0==b.bottom){var n=k(a,"top"),o=l(a,"top","offsetHeight"),p=o-n,q=b.el.offsetHeight,r=b.el.style.top||"0px",s=parseFloat(r.substring(0,r.length-2)),i=q-p+s,m=i-n-b.bottom;j(a,m,"top")}if(b.centerX||0==b.centerX){var c=k(a,"left"),d=l(a,"left","offsetWidth"),e=d-c,f=b.el.offsetWidth,g=b.el.style.left||"0px",h=parseFloat(g.substring(0,g.length-2)),i=f/2-e/2+h,m=i-c;j(a,m,"left")}if(b.centerY||0==b.centerY){var n=k(a,"top"),o=l(a,"top","offsetHeight"),p=o-n,q=b.el.offsetHeight,r=b.el.style.top||"0px",s=parseFloat(r.substring(0,r.length-2)),i=q/2-p/2+s,m=i-n;j(a,m,"top")}if(b.between.top&&b.between.bottom){var n=k(a,"top"),o=l(a,"top","offsetHeight"),p=o-n;if(isNaN(b.between.top))var t=b.between.top.getBoundingClientRect(),u=t.top+t.height;else var u=b.between.top;if(isNaN(b.between.bottom))var v=b.between.bottom.getBoundingClientRect(),w=v.top;else var w=b.between.bottom;j(a,u+(w-u-p)/2,"top")}if(b.between.left&&b.between.right){var c=k(a,"left"),d=l(a,"left","offsetWidth"),e=d-c;if(isNaN(b.between.left))var x=b.between.left.getBoundingClientRect(),y=x.left+x.width;else var y=b.between.left;if(isNaN(b.between.right))var z=b.between.right.getBoundingClientRect(),A=z.left;else var A=b.between.right;j(a,y+(A-y-e)/2,"left")}}function j(a,b,c){for(var d=0;d<a.length;d++){var e=a[d].style[c]||"0px";newValue=e.substring(0,e.length-2),a[d].style[c]=parseFloat(newValue,10)+b+"px"}}function k(a,b){for(var c=999999,d=0;d<a.length;d++){var e=a[d].style[b]||"0px";newValue=e.substring(0,e.length-2),newValue<c&&(c=parseFloat(newValue,10))}return c}function l(a,b,c){for(var d=0,e=0;e<a.length;e++){var f=a[e].style[b]||"0px";newValue=parseFloat(f.substring(0,f.length-2),10)+a[e][c],newValue>d&&(d=parseFloat(newValue,10))}return d}function m(a,b){if(b.distribute.auto){var c=k(a,"left"),d=l(a,"left","offsetWidth");b.distribute.left=c,b.distribute.width=d-c}if(b.distribute.x)for(var e=0,f=0;f<a.length;f++){a[f].style.left=e+"px";var g=a[f].offsetWidth;e+=parseFloat(g+b.distribute.x)}if(b.distribute.y)for(var h=0,f=0;f<a.length;f++){a[f].style.top=h+"px";var i=a[f].offsetHeight;h+=parseFloat(i+b.distribute.y)}if(b.distribute.width){for(var e=b.distribute.left||0,j=0,f=(a.length,0);f<a.length;f++){var g=a[f].offsetWidth;j+=parseFloat(g)}for(var m=(b.distribute.width-j)/(a.length-1),f=0;f<a.length;f++)a[f].style.left=parseInt(e)+"px",e+=a[f].offsetWidth+m}if(b.distribute.height){for(var h=0,n=0,f=(a.length,0);f<a.length;f++){var i=a[f].offsetHeight;n+=parseFloat(i)}for(var m=(b.distribute.height-n)/(a.length-1),f=0;f<a.length;f++)a[f].style.top=parseInt(h)+"px",h+=a[f].offsetHeight+m}}b.exports.groupGetPosition=f,b.exports.groupHeight=g,b.exports.groupWidth=h,b.exports.groupFs=d,b.exports.position=i,b.exports.distribute=m},{}],5:[function(a,b,c){function d(a,b,c,d){function i(a,b){this._dimensions=h(a),this._vars.wrap?f.call(this,a,this._element):this._vars.fit&&e.call(this,a,this._element),this._vars.align&&g.call(this,a),this._element.appendChild(a),d(this,"succes")}if(this._element=a||{},this._vars=c,this._input=b||"",!this._element)return void console.log("kan element niet vinden");var j=new Image;j.onerror=function(){d(this,"error")},j.onload=function(){i.call(k,this)},j.src=this._input;var k=this;this._vars.width&&(this._element.style.width=this._vars.width+"px"),this._vars.height&&(this._element.style.height=this._vars.height+"px")}function e(a,b){if(b||"")var c=b.offsetHeight/this._dimensions.height,d=b.offsetWidth/this._dimensions.width;else var c=context.bannerHeight/this._dimensions.height,d=context.bannerWidth/this._dimensions.width;var e=c<d?c:d;a.width=this._dimensions.width*e,a.height=this._dimensions.height*e}function f(a,b){var c=b||"";if(!c)return void console.log("no element privided");var d=b.offsetHeight/this._dimensions.height,e=b.offsetWidth/this._dimensions.width;c.style.overflow="hidden";var f=d>e?d:e;a.width=this._dimensions.width*f,a.height=this._dimensions.height*f}function g(a){a.style.position="absolute";var b=this._vars.align.split(" ")||[];"center"==b[0]&&(a.style.top=(this._element.offsetHeight-a.height)/2+"px"),"bottom"==b[0]&&(a.style.top=this._element.offsetHeight-a.height+"px"),"top"==b[0]&&(a.style.top="0px"),"center"==b[1]&&(a.style.left=(this._element.offsetWidth-a.width)/2+"px"),"right"==b[1]&&(a.style.left=this._element.offsetWidth-a.width+"px"),"left"==b[1]&&(a.style.left="0px")}function h(a){if(a.naturalWidth)return{width:a.naturalWidth,height:a.naturalHeight};var b=new Image;return b.src=a.src,{width:b.width,height:b.height}}b.exports=d},{}],6:[function(b,c,d){!function(){function b(a,b,c){return a.call.apply(a.bind,arguments)}function d(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function e(a,c,f){return e=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:d,e.apply(null,arguments)}function f(a,b){this.F=a,this.k=b||a,this.H=this.k.document}function g(a,b,c){a=a.H.getElementsByTagName(b)[0],a||(a=document.documentElement),a.insertBefore(c,a.lastChild)}function h(a,b,c){b=b||[],c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}for(b=[],e=0;e<d.length;e+=1){for(f=!1,g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function i(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}function j(a){if("string"==typeof a.fa)return a.fa;var b=a.k.location.protocol;return"about:"==b&&(b=a.F.location.protocol),"https:"==b?"https:":"http:"}function k(a,b,c){function d(){i&&e&&f&&(i(h),i=null)}b=a.createElement("link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,h=null,i=c||null;_?(b.onload=function(){e=!0,d()},b.onerror=function(){e=!0,h=Error("Stylesheet failed to load"),d()}):setTimeout(function(){e=!0,d()},0),g(a,"head",b)}function l(a,b,c,d){var e=a.H.getElementsByTagName("head")[0];if(e){var f=a.createElement("script",{src:b}),g=!1;return f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))},e.appendChild(f),setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5e3),f}return null}function m(){this.S=0,this.K=null}function n(a){return a.S++,function(){a.S--,p(a)}}function o(a,b){a.K=b,p(a)}function p(a){0==a.S&&a.K&&(a.K(),a.K=null)}function q(a){this.ea=a||"-"}function r(a,b){this.Q=a,this.M=4,this.L="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.L=c[1],this.M=parseInt(c[2],10))}function s(a){return v(a)+" "+a.M+"00 300px "+t(a.Q)}function t(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function u(a){return a.L+a.M}function v(a){var b="normal";return"o"===a.L?b="oblique":"i"===a.L&&(b="italic"),b}function w(a){var b=4,c="n",d=null;return a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10)))),c+b}function x(a,b){this.a=a,this.j=a.k.document.documentElement,this.O=b,this.f="wf",this.e=new q("-"),this.da=!1!==b.events,this.u=!1!==b.classes}function y(a){a.u&&h(a.j,[a.e.d(a.f,"loading")]),A(a,"loading")}function z(a){if(a.u){var b=i(a.j,a.e.d(a.f,"active")),c=[],d=[a.e.d(a.f,"loading")];b||c.push(a.e.d(a.f,"inactive")),h(a.j,c,d)}A(a,"inactive")}function A(a,b,c){a.da&&a.O[b]&&(c?a.O[b](c.getName(),u(c)):a.O[b]())}function B(){this.t={}}function C(a,b,c){var d,e=[];for(d in b)if(b.hasOwnProperty(d)){var f=a.t[d];f&&e.push(f(b[d],c))}return e}function D(a,b){this.a=a,this.h=b,this.m=this.a.createElement("span",{"aria-hidden":"true"},this.h)}function E(a,b){var c,d=a.m;c="display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+t(b.Q)+";font-style:"+v(b)+";font-weight:"+b.M+"00;",d.style.cssText=c}function F(a){g(a.a,"body",a.m)}function G(a,b,c,d,e,f){this.G=a,this.J=b,this.g=d,this.a=c,this.v=e||3e3,this.h=f||void 0}function H(a,b,c,d,e,f,g){this.G=a,this.J=b,this.a=c,this.g=d,this.h=g||"BESbswy",this.s={},this.v=e||3e3,this.Z=f||null,this.D=this.C=this.A=this.w=null,this.w=new D(this.a,this.h),this.A=new D(this.a,this.h),this.C=new D(this.a,this.h),this.D=new D(this.a,this.h),E(this.w,new r(this.g.getName()+",serif",u(this.g))),E(this.A,new r(this.g.getName()+",sans-serif",u(this.g))),E(this.C,new r("serif",u(this.g))),E(this.D,new r("sans-serif",u(this.g))),F(this.w),F(this.A),F(this.C),F(this.D)}function I(){if(null===ba){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);ba=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return ba}function J(a,b,c){for(var d in aa)if(aa.hasOwnProperty(d)&&b===a.s[aa[d]]&&c===a.s[aa[d]])return!0;return!1}function K(a){var b,c=a.w.m.offsetWidth,d=a.A.m.offsetWidth;(b=c===a.s.serif&&d===a.s["sans-serif"])||(b=I()&&J(a,c,d)),b?$()-a.ga>=a.v?I()&&J(a,c,d)&&(null===a.Z||a.Z.hasOwnProperty(a.g.getName()))?M(a,a.G):M(a,a.J):L(a):M(a,a.G)}function L(a){setTimeout(e(function(){K(this)},a),50)}function M(a,b){setTimeout(e(function(){this.w.remove(),this.A.remove(),this.C.remove(),this.D.remove(),b(this.g)},a),0)}function N(a,b,c){this.a=a,this.p=b,this.P=0,this.ba=this.Y=!1,this.v=c}function O(a){0==--a.P&&a.Y&&(a.ba?(a=a.p,a.u&&h(a.j,[a.e.d(a.f,"active")],[a.e.d(a.f,"loading"),a.e.d(a.f,"inactive")]),A(a,"active")):z(a.p))}function P(a){this.F=a,this.q=new B,this.$=0,this.T=this.U=!0}function Q(a,b,c,d,f){var g=0==--a.$;(a.T||a.U)&&setTimeout(function(){var a=f||null,i=d||null||{};if(0===c.length&&g)z(b.p);else{b.P+=c.length,g&&(b.Y=g);var j,k=[];for(j=0;j<c.length;j++){var l=c[j],m=i[l.getName()],n=b.p,o=l;n.u&&h(n.j,[n.e.d(n.f,o.getName(),u(o).toString(),"loading")]),A(n,"fontloading",o),n=null,null===ca&&(ca=!!window.FontFace&&(!(n=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(n[1],10))),n=ca?new G(e(b.V,b),e(b.W,b),b.a,l,b.v,m):new H(e(b.V,b),e(b.W,b),b.a,l,b.v,a,m),k.push(n)}for(j=0;j<k.length;j++)k[j].start()}},0)}function R(a,b,c){var d=[],e=c.timeout;y(b);var d=C(a.q,c,a.a),f=new N(a.a,b,e);for(a.$=d.length,b=0,c=d.length;b<c;b++)d[b].load(function(b,c,d){Q(a,f,b,c,d)})}function S(a,b,c){this.N=a||b+da,this.o=[],this.R=[],this.ca=c||""}function T(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.R.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":"),a.o.push(e.join(f))}}function U(a){this.o=a,this.aa=[],this.I={}}function V(a,b){this.a=a,this.c=b}function W(a,b){this.a=a,this.c=b,this.X=[]}function X(a,b){this.a=a,this.c=b}function Y(a,b){this.a=a,this.c=b}function Z(a,b){this.a=a,this.c=b}var $=Date.now||function(){return+new Date},_=!!window.FontFace;f.prototype.createElement=function(a,b,c){if(a=this.H.createElement(a),b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));return c&&a.appendChild(this.H.createTextNode(c)),a},q.prototype.d=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ea)},r.prototype.getName=function(){return this.Q},D.prototype.remove=function(){var a=this.m;a.parentNode&&a.parentNode.removeChild(a)},G.prototype.start=function(){function a(){$()-d>=c.v?c.J(c.g):b.fonts.load(s(c.g),c.h).then(function(b){1<=b.length?c.G(c.g):setTimeout(a,25)},function(){c.J(c.g)})}var b=this.a.k.document,c=this,d=$();a()};var aa={ia:"serif",ha:"sans-serif"},ba=null;H.prototype.start=function(){this.s.serif=this.C.m.offsetWidth,this.s["sans-serif"]=this.D.m.offsetWidth,this.ga=$(),K(this)};var ca=null;N.prototype.V=function(a){var b=this.p;b.u&&h(b.j,[b.e.d(b.f,a.getName(),u(a).toString(),"active")],[b.e.d(b.f,a.getName(),u(a).toString(),"loading"),b.e.d(b.f,a.getName(),u(a).toString(),"inactive")]),A(b,"fontactive",a),this.ba=!0,O(this)},N.prototype.W=function(a){var b=this.p;if(b.u){var c=i(b.j,b.e.d(b.f,a.getName(),u(a).toString(),"active")),d=[],e=[b.e.d(b.f,a.getName(),u(a).toString(),"loading")];c||d.push(b.e.d(b.f,a.getName(),u(a).toString(),"inactive")),h(b.j,d,e)}A(b,"fontinactive",a),O(this)},P.prototype.load=function(a){this.a=new f(this.F,a.context||this.F),this.U=!1!==a.events,this.T=!1!==a.classes,R(this,new x(this.a,a),a)};var da="//fonts.googleapis.com/css";S.prototype.d=function(){if(0==this.o.length)throw Error("No fonts to load!");if(-1!=this.N.indexOf("kit="))return this.N;for(var a=this.o.length,b=[],c=0;c<a;c++)b.push(this.o[c].replace(/ /g,"+"));return a=this.N+"?family="+b.join("%7C"),0<this.R.length&&(a+="&subset="+this.R.join(",")),0<this.ca.length&&(a+="&text="+encodeURIComponent(this.ca)),a};var ea={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},fa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ga={i:"i",italic:"i",n:"n",normal:"n"},ha=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;U.prototype.parse=function(){for(var a=this.o.length,b=0;b<a;b++){var c=this.o[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var f,g=c[1];if(f=[],g)for(var g=g.split(","),h=g.length,i=0;i<h;i++){var j;if(j=g[i],j.match(/^[\w-]+$/))if(null==(j=ha.exec(j.toLowerCase())))j="";else{var k;if(null==(k=j[1])||""==k)k="4";else{var l=fa[k];k=l||(isNaN(k)?"4":k.substr(0,1))}j=j[2],j=[null==j||""==j?"n":ga[j],k].join("")}else j="";j&&f.push(j)}0<f.length&&(e=f),3==c.length&&(c=c[2],f=[],c=c?c.split(","):f,0<c.length&&(c=ea[c[0]])&&(this.I[d]=c))}for(this.I[d]||(c=ea[d])&&(this.I[d]=c),c=0;c<e.length;c+=1)this.aa.push(new r(d,e[c]))}};var ia={Arimo:!0,Cousine:!0,Tinos:!0};V.prototype.load=function(a){var b=new m,c=this.a,d=new S(this.c.api,j(c),this.c.text),e=this.c.families;T(d,e);var f=new U(e);f.parse(),k(c,d.d(),n(b)),o(b,function(){a(f.aa,f.I,ia)})},W.prototype.B=function(a){var b=this.a;return j(this.a)+(this.c.api||"//f.fontdeck.com/s/css/js/")+(b.k.location.hostname||b.F.location.hostname)+"/"+a+".js"},W.prototype.load=function(a){var b=this.c.id,c=this.a.k,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var e=0,f=c.fonts.length;e<f;++e){var g=c.fonts[e];d.X.push(new r(g.name,w("font-weight:"+g.weight+";font-style:"+g.style)))}a(d.X)},l(this.a,this.B(b),function(b){b&&a([])})):a([])},X.prototype.B=function(a){return(this.c.api||"https://use.typekit.net")+"/"+a+".js"},X.prototype.load=function(a){var b=this.c.id,c=this.a.k;b?l(this.a,this.B(b),function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var d=[],e=0;e<b.length;e+=2)for(var f=b[e],g=b[e+1],h=0;h<g.length;h++)d.push(new r(f,g[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(a){}a(d)}},2e3):a([])},Y.prototype.B=function(a,b){return j(this.a)+"//"+(this.c.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"")+"/"+a+".js"+(b?"?v="+b:"")},Y.prototype.load=function(a){function b(){if(e["__mti_fntLst"+c]){var d,f=e["__mti_fntLst"+c](),g=[];if(f)for(var h=0;h<f.length;h++){var i=f[h].fontfamily;void 0!=f[h].fontStyle&&void 0!=f[h].fontWeight?(d=f[h].fontStyle+f[h].fontWeight,g.push(new r(i,d))):g.push(new r(i))}a(g)}else setTimeout(function(){b()},50)}var c=this.c.projectId,d=this.c.version;if(c){var e=this.a.k;l(this.a,this.B(c,d),function(c){c?a([]):b()}).id="__MonotypeAPIScript__"+c}else a([])},Z.prototype.load=function(a){var b,c,d=this.c.urls||[],e=this.c.families||[],f=this.c.testStrings||{},g=new m;for(b=0,c=d.length;b<c;b++)k(this.a,d[b],n(g));var h=[];for(b=0,c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var i=d[1].split(","),j=0;j<i.length;j+=1)h.push(new r(d[0],i[j]));else h.push(new r(d[0]));o(g,function(){a(h,f)})};var ja=new P(window);ja.q.t.custom=function(a,b){return new Z(b,a)},ja.q.t.fontdeck=function(a,b){return new W(b,a)},ja.q.t.monotype=function(a,b){return new Y(b,a)},ja.q.t.typekit=function(a,b){return new X(b,a)},ja.q.t.google=function(a,b){return new V(b,a)};var ka={load:e(ja.load,ja)};"function"==typeof a&&a.amd?a(function(){return ka}):void 0!==c&&c.exports?c.exports=ka:(window.WebFont=ka,window.WebFontConfig&&ja.load(window.WebFontConfig))}()},{}],7:[function(a,b,c){function d(a,b){if(this._element=a,this._vars=b||{},this._vars.group&&console.log("has group in posotion"),!this._element)return void console.log("kan element niet vinden");this._element.style.position="absolute",this._vars.addClass&&(a.className+=" "+this._vars.addClass),this._vars.css&&(cssProps=b.css,a.style.cssText+=";"+cssProps),isNaN(this._vars.width)||(a.style.width=this._vars.width+"px"),isNaN(this._vars.height)||(a.style.height=this._vars.height+"px"),f.call(this),this._vars.push&&g.call(this),this._vars.between&&e.call(this)}function e(){if(console.log("position between"),"object"==typeof this._vars.between&&null!==this._vars.between){this._element.style.display="inline-block",this._element.style.clear="both",this._element.style.position="absolute";var a=this._element.getBoundingClientRect().width,b=this._element.offsetHeight;if(this._vars.between.top&&this._vars.between.bottom){if(isNaN(this._vars.between.top))var c=this._vars.between.top.getBoundingClientRect(),d=c.top+c.height;else var d=this._vars.between.top;if(isNaN(this._vars.between.bottom))var e=this._vars.between.bottom.getBoundingClientRect(),f=e.top;else var f=this._vars.between.bottom;var g=f-d,h=g-b,i=h/2,j=d+i;this._element.style.top=j+"px"}if(this._vars.between.left&&this._vars.between.right){if(isNaN(this._vars.between.left))var k=this._vars.between.left.getBoundingClientRect(),l=k.left+k.width;else var l=this._vars.between.left;if(isNaN(this._vars.between.right))var m=this._vars.between.right.getBoundingClientRect(),n=m.left;else var n=this._vars.between.right;var o=n-l,p=o-a,q=p/2,r=l+q;this._element.style.left=r+"px"}}}function f(){if("object"==typeof this._vars&&null!==this._vars){this._element.style.display="inline-block",this._element.style.clear="both",this._element.style.position="absolute";var a=0,b=this._element.getBoundingClientRect().width;if(0===b&&(b=this._element.scrollWidth),!this._vars.el){var c=document.getElementById("creative");if(!c)return void console.log("creative div not found");this._vars.el=c}var d=this._element.getBoundingClientRect().height,e=this._vars.el.getBoundingClientRect();if(this._vars.left||0==this._vars.left||this._vars.right||0==this._vars.right||this._vars.centerX||0==this._vars.centerX){var f=this._vars.el,g=f.currentStyle||window.getComputedStyle(f);g.marginLeft.substring(0,g.marginLeft.length-2);this._vars.right||0==this._vars.right?a=e.left+e.width-this._vars.right-parseInt(b,10):this._vars.left||0==this._vars.left?a=e.left+this._vars.left:(this._vars.centerX||0==this._vars.centerX)&&(a=e.left+(e.width-parseInt(b,10))/2+this._vars.centerX),this._element.style.left=a+"px"}if(this._vars.top||0==this._vars.top||this._vars.bottom||0==this._vars.bottom||this._vars.centerY||0==this._vars.centerY){var f=this._vars.el,g=f.currentStyle||window.getComputedStyle(f);g.marginTop.substring(0,g.marginTop.length-2);this._vars.top||0==this._vars.top?a=e.top+this._vars.top:this._vars.bottom||0==this._vars.bottom?a=e.top+e.height-this._vars.bottom-parseInt(d,10):(this._vars.centerY||0==this._vars.centerY)&&(a=e.top+((e.height-d)/2+parseInt(this._vars.centerY))),this._element.style.top=a+"px"}if(this._vars.y){var h=this._vars.y.split(" ");"top"==h[0]&&(a=e.top,h[1]&&(a+=parseInt(h[1],10)),this._element.style.top=a+"px"),"bottom"==h[0]&&(a=e.top+e.height-d,h[1]&&(a-=parseInt(h[1],10)),this._element.style.top=a+"px"),"center"==h[0]&&(a=e.top+(e.height-d)/2,h[1]&&(a-=parseInt(h[1],10)),this._element.style.top=a+"px")}}}function g(){if("object"==typeof this._vars.push&&null!==this._vars.push){this._element.style.display="inline-block",this._element.style.clear="both",this._element.style.position="absolute";var a,b=this._element.getBoundingClientRect().width,c=this._element.offsetHeight,d=this._vars.push.el.getBoundingClientRect();(this._vars.push.bottom||0==this._vars.push.bottom)&&(a=d.top+d.height+this._vars.push.bottom,this._element.style.top=a+"px"),(this._vars.push.top||0==this._vars.push.top)&&(a=d.top-c-this._vars.push.top,this._element.style.top=a+"px"),(this._vars.push.left||0==this._vars.push.left)&&(a=d.left-b-this._vars.push.left,this._element.style.left=a+"px"),(this._vars.push.right||0==this._vars.push.right)&&(a=d.left+d.width+this._vars.push.right,this._element.style.left=a+"px")}}b.exports=function(a,b){return new d(a,b)}},{}],8:[function(a,b,c){var d,e=(a("./config.js"),a("./positioning.js")),f=a("./text.js"),g=a("./image.js"),h=a("./style.js"),i=a("./video.js"),j=a("./font.js"),k=0,l=[],m=[];b.exports=function(){var a={};a.font={},a.font.add=function(a,b){j.add(a,b)},a.font.addGoogle=function(a,b){j.addGoogle(a,b)},a.font.addBase64=function(a,b,c){a.addBase64(a,b,c)},a.position=function(a,b){var c=new e(a,b);l.push(c)},a.style=function(a,b){var c=new h(a,b);l.push(c)},a.video=function(a,b,c){var d=new i(a,b,c);l.push(d)},a.text=function(a,b,c){var d=new f(a,b,c);l.push(d)},a.image=function(a,c,d){var e=new g(a,c,d,b);l.push(e),m.push(e)},a.loading={done:function(a){d=a,0==m.length&&d()}};var b=function(a,b){"error"==b&&(console.log("failed to load: "),console.log(a)),++k==m.length&&(d&&"function"==typeof d?d():console.log("no callback funciton given. Please add a function to the sr.loading.done function. IE: sr.loading.done(setPositioning)"))};return a.dynamicAssets=m,a.dd=l,a}()},{"./config.js":1,"./font.js":2,"./image.js":5,"./positioning.js":7,"./style.js":9,"./text.js":10,"./video.js":12}],9:[function(a,b,c){function d(a,b){if(this._element=a,this._vars=b||{},this._vars.css&&(cssProps=b.css,a.style.cssText+=";"+cssProps),this._vars.background&&e.call(this),this._vars.rotation&&setRotation.call(this),this._vars.width&&(this._element.style.width=this._vars.width+"px"),this._vars.height&&(this._element.style.height=this._vars.height+"px"),this._vars.addClass&&(this._element.className+=" "+this._vars.addClass),this._vars.padding){var c=document.createElement("div");c.id=this._element.id,this._element.id=this._element.id+"-nest",c.style.display="inline-block",c.style.backgroundColor=this._element.style.backgroundColor,this._element.style.display="inline",this._element.style.maxWidth=this._element.style.width,this._element.style.width="auto",c.style.position="absolute",c.style.left=this._element.style.left,c.style.top=this._element.style.top,isNaN(this._vars.padding)||(console.log("global is int"),c.style.width=this._element.offsetWidth+2*this._vars.padding+"px",c.style.height=this._element.offsetHeight+2*this._vars.padding+"px",this._element.style.left=this._vars.padding+"px",this._element.style.top=this._vars.padding+"px"),"object"==typeof this._vars.padding&&null!==this._vars.padding&&(this._vars.padding.y=this._vars.padding.y||0,this._vars.padding.x=this._vars.padding.x||0,this._vars.padding.top=this._vars.padding.top||0,this._vars.padding.bottom=this._vars.padding.bottom||0,this._vars.padding.left=this._vars.padding.left||0,this._vars.padding.right=this._vars.padding.right||0,c.style.height=this._element.offsetHeight+"px",c.style.width=this._element.offsetWidth+"px",this._element.style.left="0px",this._element.style.top="0px",this._vars.padding.x&&(c.style.width=this._element.offsetWidth+2*this._vars.padding.x+"px",this._element.style.left=this._vars.padding.x+"px"),this._vars.padding.y&&(c.style.height=this._element.offsetHeight+2*this._vars.padding.y+"px",this._element.style.top=this._vars.padding.y+"px"),(this._vars.padding.top||this._vars.padding.bottom)&&(c.style.height=this._element.offsetHeight+this._vars.padding.top+this._vars.padding.bottom+this._vars.padding.y+"px",this._vars.padding.top&&this._vars.padding.y?this._element.style.top=this._vars.padding.top+"px":this._element.style.top=this._vars.padding.top+this._vars.padding.y+"px"),(this._vars.padding.left||this._vars.padding.right)&&(c.style.width=this._element.offsetWidth+this._vars.padding.left+this._vars.padding.right+this._vars.padding.x+"px",this._vars.padding.left&&this._vars.padding.x?this._element.style.left=this._vars.padding.left+"px":this._element.style.left=this._vars.padding.x+this._vars.padding.left+"px"));var d=this._element.parentElement;c.appendChild(this._element),d.appendChild(c)}}function e(){function a(a,b,d){this._element.style.background=c[1],this._element.style.background="-webkit-linear-gradient(-90deg,"+a+", "+b+")",this._element.style.background="-o-linear-gradient(-90deg,"+a+", "+b+")",this._element.style.background="-moz-linear-gradient(-90deg,"+a+", "+b+")",this._element.style.background="-linear-gradient(-90deg,"+a+", "+b+")",this._element.style.background="-linear-gradient(to bottom,"+a+", "+b+")",this._element.style.background="-ms-linear-gradient(top,"+a+", "+b+")"}function b(a){this._element.style["background-color"]=a,this._element.style.setProperty("background-color",a)}var c=this._vars.background.split("-");c.length>=2?a.call(this,c[0],c[1],c[2]):b.call(this,c[0])}b.exports=function(a,b){return new d(a,b)}},{}],10:[function(a,b,c){function d(a,b,c){if(this._element=a,this._vars=c,this._input=b||"",!this._element)return void console.log("kan element niet vinden");if(this.width=function(a){if(!a)return this._element.offsetWidth;this._element.style.width=a+"px"},this.height=function(){return this._element.offsetHeight},this._vars.padding&&(isNaN(this._vars.padding)||(this._element.style.padding=this._vars.padding+"px"),"object"==typeof this._vars.padding&&null!==this._vars.padding)){this._vars.padding.top=this._vars.padding.top||this._vars.padding.y||0,this._vars.padding.bottom=this._vars.padding.bottom||this._vars.padding.y||0,this._vars.padding.left=this._vars.padding.left||this._vars.padding.x||0,this._vars.padding.right=this._vars.padding.right||this._vars.padding.x||0;var d="";d+=this._vars.padding.top+"px "+this._vars.padding.right+"px "+this._vars.padding.bottom+"px "+this._vars.padding.left+"px ",this._element.style.padding=d}if(this._vars.addClass&&(this._element.className+=" "+this._vars.addClass),g.call(this),this._vars.autoSize){var e=document.createElement("div");e.id=this._element.id+"mirror";this._vars.padding,e.style.maxWidth=this._element.offsetWidth-0+"px",e.style.maxHeight=this._element.offsetHeight-0+"px",e.style.display="inline-block";var f=document.createElement("p");f.style.display="inline",f.id=this._element.id+"inner",e.style.lineHeight=this._element.style.lineHeight,e.style.fontSize=this._element.style.fontSize,e.style.fontWeight=this._element.style.fontWeight,e.style.fontFamily=this._element.style.fontFamily,f.innerHTML=this._element.innerHTML,e.appendChild(f),this._element.parentElement.appendChild(e);var h=document.getElementById(this._element.id+"inner");this._element.style.width=h.offsetWidth+1+"px",this._element.style.height=h.offsetHeight+1+"px",this._vars.debug||this._element.parentElement.removeChild(e)}}function e(){var a=this._vars.webfont.split("-");this._element.style.fontFamily=a[0],a[1]&&(this._element.style.fontWeight=a[1])}function f(){var a=window.getComputedStyle(this._element,null),b=a.getPropertyValue("font-size"),c=b.substring(0,b.length-2);return{fontSizeString:b||12,fontSize:c||12,fontFamily:this._element.style.fontFamily||"arial"}}var g=function(){if(this._vars.css&&(this._element.style.cssText+="; "+this._vars.css),this._vars.height||this._vars.width){var a=0;this._vars.padding&&(a=this._vars.padding.left+this._vars.padding.right),
this._element.style.width=this._vars.width-a+"px",this._element.style.height="auto"}this._vars.webfont&&e.call(this),this._vars.textAlign&&(this._element.style.textAlign=this._vars.textAlign),this._vars.color&&(this._element.style.color=this._vars.color),this._vars.backgroundColor&&(this._element.style.backgroundColor=this._vars.backgroundColor),h.call(this)},h=function(){this._vars.upperCase&&(this._valueOriginal=this._input,this._input=this._input.toUpperCase()),this._element.innerHTML=this._input,this._vars.fontSize?this._element.style.fontSize=this._vars.fontSize+"px":i.call(this)},i=function(){var a=this._vars.maxFs||60;attempts=100*this._vars.maxFs||4e3,this._element.style.fontSize=a+"px";var b=f.call(this).fontSize||a;for(""==this._element.style.lineHeight&&(this._element.style.lineHeight=1,"SPAN"==this._element.tagName&&""==this._element.parentElement.style.lineHeight&&(this._element.parentElement.style.lineHeight=1));attempts&&(this.width()>this._element.offsetWidth||this._element.offsetWidth>this._vars.width||this.height()>this._vars.height);){var c=b-=.1;this._element.style.fontSize=c+"px",attempts--}this._vars.autoWidth&&(this._element.style.maxWidth=this._element.style.width,this._element.style.width="auto",this._element.style.display="inline",this._element.style.float="left")};b.exports=d},{}],11:[function(a,b,c){function d(a,b){var c=a,d=f(a);d&&(c=d.id);var g=document.getElementById(c);return null==g&&(g=e(a,b)),g}function e(a,b){var c="div",d=f(a);d&&(c=d.tag,a=d.id);var e=b||document.getElementById("creative");if(!e)return void console.log("No div given, and creative div is not found");var g=document.createElement(c);return g.id=a,g.className="srDynamic",e.appendChild(g),g}function f(a){var b,c,d=a,e=/\[\S*\]/.exec(d);if(e){var f=e[0];b=f.substring(1,e[0].length-1),c=d.substring(f.length,d.length)}return!(!b||!c)&&{tag:b,id:c}}sr=a("./srmain.js"),group=a("./group.js");var g=function(){this.element=Object,this.elementArray=[],this.getArray=function(a){for(var b=a,c=[],d=0;d<b.length;d++)c.push(this.get(b[d]).element);return c},this.get=function(a){var b=a.replace(/\s+/g,"");if("string"==typeof b||b instanceof String){var c=b.split(">");if(1==c.length)b=c[0],g=d(b);else{var e=document.getElementById("creative");if(!e)return void console.log("no parent div given, and no creative div found");for(var f=0;f<c.length;f++){var g=d(c[f],e);e=g}}}else if(!(g=b))return void console.log("not element found and no string ");return this.element=g,this},this.getAgain=function(){},this.height=function(a){if(this.elementArray.length)return group.groupHeight(this.elementArray)},this.width=function(a){if(this.elementArray.length)return group.groupWidth(this.elementArray)},this.getPosition=function(a){if(this.elementArray.length)return group.groupGetPosition(this.elementArray)},this.position=function(a){if(this.elementArray.length&&a.distribute&&group.distribute(this.elementArray,a),this.elementArray.length&&a.group)group.position(this.elementArray,a);else if(this.elementArray.length)for(var b=0;b<this.elementArray.length;b++)sr.position(this.elementArray[b],a);else sr.position(this.element,a);return this},this.groupFs=function(){group.groupFs(this.elementArray)},this.scale=function(a){var b=a;if("object"==typeof a&&null!==a){if((a.maxWidth||a.maxHeight)&&(a.maxWidth&&this.element.offsetWidth>a.maxWidth&&(a.width=a.maxWidth),a.maxHeight&&this.element.offsetHeight>a.maxHeight&&(a.height=a.maxHeight),!a.height&&!a.width))return this;if(a.width&&a.height){var c=a.width/this.element.offsetWidth,d=a.height/this.element.offsetHeight;e=c>d?d:c,b=e}else if(a.width){var e=a.width/this.element.offsetWidth;b=e}else if(a.height){var e=a.height/this.element.offsetHeight;b=e}}return isNaN(a),a.transformOrigin&&(this.element.style.transformOrigin=a.transformOrigin),this.element.style.transform="scaleX("+b+") scaleY("+b+")",this},this.text=function(a,b){if(this.elementArray.length)for(var c=0;c<this.elementArray.length;c++)sr.text(this.elementArray[c],a,b);else sr.text(this.element,a,b);return this},this.image=function(a,b){if(this.elementArray.length)for(var c=0;c<this.elementArray.length;c++)sr.image(this.elementArray[c],a,b);else sr.image(this.element,a,b);return this},this.style=function(a){if(this.elementArray.length)for(var b=0;b<this.elementArray.length;b++)sr.style(this.elementArray[b],a);else sr.style(this.element,a);return this},this.setSize=function(){console.log(this.nested()),console.log(this),this.element.style.width=this.nested().width+"px"||"0px",this.element.style.height=this.nested().height+"px"||"0px"},this.nested=function(a){function b(a){for(var d=0,e=a.children.length;d<e;d++){var h=a.children[d].getBoundingClientRect(),i=h.left+h.width,j=h.top+h.height;i>f&&(f=i,c=a.children[d]),j>g&&(g=j),b(a.children[d])}if(0==a.children.length){var h=a.getBoundingClientRect(),k=h.left+h.width;k>f&&(f=k,c=a.children[d]),j>g&&(g=j)}}var c,d=this.element,e=0,e=0,f=0,g=0;return e=d.getBoundingClientRect().left,relativeTop=d.getBoundingClientRect().top,b(d),{width:f-e,height:g-relativeTop}}};b.exports=g},{"./group.js":4,"./srmain.js":8}],12:[function(a,b,c){function d(a,b,c,d){if(this.element=a||{},this.vars=c,this.input={},this.input.filename=b||"",this.applied={},this.element.style.width=this.vars.width+"px",this.element.style.height=this.vars.height+"px",!this.element)return void console.log("kan element niet vinden");var g=document.createElement("video");g.src="video.mp4",g.autoplay=!0,g.muted=!0,this.element.appendChild(g),this.applied.videoElement=g,f.call(this,g,this.element,e)}function e(){g.call(this,this.element,this.applied.videoElement)}function f(a,b,c){var d=this;a.onloadedmetadata=function(){d.input.dimensions={},d.input.dimensions.height=this.videoHeight,d.input.dimensions.width=this.videoWidth,d._dimensions=this._dimensions,c.call(d)}}function g(a,b){if(!a&&!0)return void console.log("no element privided");var c=this.vars.height/this.input.dimensions.height,d=this.vars.width/this.input.dimensions.width,e=1;if(1==this.vars.wrap?e=c>d?c:d:1==this.vars.fit&&(e=c<d?c:d),b.width=this.input.dimensions.width*e,b.height=this.input.dimensions.height*e,this.applied.dimensions={},this.applied.dimensions.scale=e,this.applied.dimensions.width=b.width,this.applied.dimensions.height=b.height,this.vars.align){this.vars.align.split(" ");h.call(this,b)}}function h(a){a.style.position="absolute";var b=this.vars.align.split(" ")||[];"center"==b[0]&&(a.style.top=(this.element.offsetHeight-a.height)/2+"px"),"bottom"==b[0]&&(a.style.top=this.element.offsetHeight-a.height+"px"),"top"==b[0]&&(a.style.top="0px"),"center"==b[1]&&(a.style.left=(this.element.offsetWidth-a.width)/2+"px"),"right"==b[1]&&(a.style.left=this.element.offsetWidth-a.width+"px"),"left"==b[1]&&(a.style.left="0px")}b.exports=d},{}]},{},[3])(3)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
function loadSettings(callback) {

    var manifest = require('./../set/manifest.json');

    srBanner = {};
    srBanner.useDcs = manifest.publish.useDcs;

    srBanner.debug = manifest.debugging.debug;

    srBanner.playFrom = manifest.debugging.playFrom;

    srBanner.pauseFrom = manifest.debugging.pauseFrom;

    srBanner.backupImage = manifest.debugging.backupImage;

    srBanner.isLocal = false;
    srBanner.localFolder = "../set/assets/"

    if (srBanner.debug) {

        console.log("DEBUGGING SET TO TRUE");
    }


    if (srBanner.useDcs == true) {

        srBanner.dynamicData = require('./../set/dcsData.js');

    } else {

        srBanner.dynamicData = require('./../set/srData.js');

    }


    return srBanner;

}


module.exports.loadSettings = loadSettings;
},{"./../set/dcsData.js":6,"./../set/manifest.json":7,"./../set/srData.js":8}],6:[function(require,module,exports){
   function setup(callback) {

       Enabler.setProfileId(1079748);
       var devDynamicContent = {};

       devDynamicContent.srFeed = [{}];
       devDynamicContent.srFeed[0]._id = 0;
       devDynamicContent.srFeed[0].isWorking = "USING GOOGLE DYNAMIC FEED 3";
       devDynamicContent.srFeed[0].exit_url = "";
       devDynamicContent.srFeed[0].backgroundImage = asset("devices.png");
       devDynamicContent.srFeed[0].logo = asset("logo.png");
       devDynamicContent.srFeed[0].endscreen = asset("endscreen-offer.png");

       if (srBanner.debug) {

           console.log("USING GOOGLE DYNAMIC FEED");
       }

       Enabler.setDevDynamicContent(devDynamicContent);

       if (Enabler.isInitialized()) {
           enablerInitHandler();
       } else {
           Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
       }

       function enablerInitHandler() {

           if (Enabler.isPageLoaded()) {
               pageLoadedHandler();
           } else {

               Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,
                   pageLoadedHandler);
           }
       }

       function pageLoadedHandler() {

           var dd = dynamicContent.srFeed[0];

           dcsDataSetupDone(dd)

       }

       function dcsDataSetupDone(dd) {

           callback(dd);

       }

   }

   module.exports.setup = setup;
},{}],7:[function(require,module,exports){
module.exports={
    "publish": {
        "useDcs": false,
        "projectName": "ziggo-stap_over"
    },
    "debugging": {
        "debug": false,
        "playFrom": false,
        "pauseFrom": false,
        "backupImage": false
    }
}
},{}],8:[function(require,module,exports){
var dataInput = require('./../set/versions/justatest.js');

function setup(callback) {


    var devDynamicContent = {};

    devDynamicContent.srFeed = [{}];
    devDynamicContent.srFeed[0]._id = 0;
    devDynamicContent.srFeed[0].isWorking = "USING SR STATIC FEED";
    devDynamicContent.srFeed[0].exit_url = "";
    devDynamicContent.srFeed[0].logo = asset("logo.png");


    if (srBanner.debug) {

        console.log("USING SR STATIC FEED");
    }

    addData()

    function addData() {

        var dd = devDynamicContent.srFeed[0];

        dcsDataSetupDone(dd)

    }

    function dcsDataSetupDone(dd) {

        callback(dd);

    }

}

module.exports.setup = setup;
},{"./../set/versions/justatest.js":9}],9:[function(require,module,exports){
console.log("version 1 of the banner");
},{}]},{},[3]);// JavaScript Document