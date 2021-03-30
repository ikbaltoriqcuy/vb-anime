var scriptName = "pe-el9.js";
var browser = /Firefox[\/\s]\d+/.test(navigator.userAgent) ? 'ff' : /MSIE 6/.test(navigator.userAgent) ? 'ie6' : /MSIE 7/.test(navigator.userAgent) ? 'ie7' : /MSIE 8/.test(navigator.userAgent) ? 'ie8' : /MSIE 9/.test(navigator.userAgent) ? 'ie9' : /MSIE 10/.test(navigator.userAgent) ? 'ie10' : /MSIE\s\d+/.test(navigator.userAgent) ? 'ie?' : /Chrome[\/\s]\d+/.test(navigator.userAgent) ? 'gc' : /Chromium[\/\s]\d+/.test(navigator.userAgent) ? 'oc' : /Safari[\/\s]\d+/.test(navigator.userAgent) ? 'sa' : /Opera[\/\s]\d+/.test(navigator.userAgent) ? 'op' : navigator.appName === 'Netscape' && /Trident\/.*rv\:\d+/.test(navigator.userAgent) ? 'ie11' : '?';
var inpop = (window.name.indexOf("ad2_") == 0) || (window.name.indexOf("TVEInjectAdWindow-") == 0) || (window.name.indexOf("InterYield") == 0) || (window.name.indexOf("r_ron_redir") == 0) || (window.name.indexOf("__ctxpop") == 0) || (window.name.indexOf("ld893_") == 0);

if (!inpop && browser == "gc" || browser == "ff" || browser == "ie9" || browser == "ie10" || browser == "ie11") {
    //chack src from js 
    if (!window.__ext_brand) {
        window.__ext_brand = 'OffersWizard';
    }

    window.highest = 2147483646;

    //check if peel already loaded 
    window.amway = '';
    var scripts = document.getElementsByTagName("script");
    for (i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(scriptName) > -1) { // change to match check
            window.amway = scripts[i].src;
            window.amway = window.amway.replace(scriptName, "");
            break;
        }
    }


    window.myframe = 'myframe' + Math.floor((Math.random() * 100) + 1);
    window.ampil = 'ampil' + Math.floor((Math.random() * 100) + 1);
    window.peel_content = 'peel_content' + Math.floor((Math.random() * 100) + 1);



    //load jquery 

    var script = document.createElement("SCRIPT");
    script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    //Wait for jquery to be loaded
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        } else {
            window.setTimeout(function() {
                checkReady(callback);
            }, 100);
        }
    }; //end callback


    setTimeout(function() { //wait 0.5 sec 	
        checkReady(function(jQuery) {

            var amjq = jQuery.noConflict();

            amjq(document).ready(function() {


                (function(amjq) {
                    //refrash iframe
                    function refreshiframe() {
                        setTimeout(function() { //wait 0.5 sec     
                            var iframe = document.getElementById(window.peel_content)
                            iframe.innerHTML = iframe.innerHTML; //inserting the iframe into itself will refrash the iframe
                            return;
                        }, 400); //timer close
                    }

                    amjq.ResolveConflicts = function() {

                        if (amjq('#yW4aSrch').length > 0 && amjq("#affiliateToolbarDiv").length > 0) {
                            amjq("#affiliateToolbarDiv").removeAttr("style");
                            amjq("#affiliateToolbarDiv").css("z-index", "2147483630")
                            amjq("#affiliateToolbarDiv").css("height", "40px");
                            amjq("#affiliateToolbarDiv").css("position", "fixed");

                            amjq("#jwbar").attr('style', 'z-index: 2147483630 !important');
                            amjq("#jwbar").css("z-index", "2147483630");
                            amjq("#jwbar").css("display", "none");
                            amjq("#jwbar").css("margin-top", "31px");
                            amjq("#jwbar").css("z-index", "2147483630");

                            amjq(".peelimage").css("top", "31px");
                            amjq(".peelimage").css("margin-top", "0");
                            amjq(".peelimage2").css("top", "0");
                            amjq(".peelimage2").css("margin-top", "0");
                            amjq("#closepeel").css("top", "512px");
                            amjq("#closepeel").css("margin-top", "0");
                            amjq("#" + window.ampil).css("top", "0");
                            amjq("#" + window.ampil + " span").css("top", "0px");
                            amjq("#" + window.ampil + " h9").css("top", "494px");
                            amjq("#" + window.ampil + " h9").css("margin-top", "0");
                            amjq("#" + window.peel_content).css("top", "0px");
                            amjq("#" + window.peel_content).css("margin-top", "34px");
                            amjq("#adbywho").css("top", "103px");
                            amjq("#adbywho").css("margin-top", "0");
                        } else if (amjq("#affiliateToolbarDiv").length > 0) { // if jw
                            amjq("#affiliateToolbarDiv").removeAttr("style");
                            amjq("#jwbar").attr('style', 'z-index: 2147483630 !important');
                            amjq("#affiliateToolbarDiv").css("z-index", "2147483630");
                            amjq("#jwbar").css("z-index", "2147483630");
                            amjq(".peelimage2").css("margin-top", "0");
                            amjq(".peelimage2").css("top", "8px");
                        } else if (amjq('#yW4aSrch').length > 0 || amjq('.yW4aie').length > 0) { //if adopt

                            if (amjq('.yW4aie').length > 0) { //if IE and adopt
                                amjq(".peelimage").css("top", "31px");
                                amjq(".peelimage2").css("top", "0");
                                amjq(".peelimage2").css("margin-top", "0");
                                amjq("#closepeel").css("top", "512px");
                                amjq("#closepeel").css("margin-top", "0");
                                amjq("#" + window.ampil).css("top", "0");
                                amjq("#" + window.ampil + " span").css("top", "0px");
                                amjq("#" + window.ampil + " h9").css("top", "494px");
                                amjq("#" + window.ampil + " h9").css("margin-top", "0");
                                amjq("#" + window.peel_content).css("top", "0px");
                                amjq("#adbywho").css("top", "103px");
                                amjq("#adbywho").css("margin-top", "0");
                            } //if
                            else {
                                amjq(".peelimage").css("top", "31px");
                                amjq(".peelimage2").css("top", "0");
                                amjq(".peelimage2").css("margin-top", "0");
                                amjq("#closepeel").css("top", "512px");
                                amjq("#closepeel").css("margin-top", "0");
                                amjq("#" + window.ampil).css("top", "0");
                                amjq("#" + window.ampil + " span").css("top", "0px");
                                amjq("#" + window.ampil + " h9").css("top", "494px");
                                amjq("#" + window.ampil + " h9").css("margin-top", "0");
                                amjq("#" + window.peel_content).css("top", "0px");
                                amjq("#adbywho").css("top", "103px");
                                amjq("#adbywho").css("margin-top", "0");
                            } //else
                        } //else if	
                        else {
                            amjq(".peelimage").css("top", "0");
                            amjq(".peelimage2").css("top", "-33px");
                            amjq(".peelimage2").css("margin-top", "0");
                            amjq("#closepeel").css("top", "478px");
                            amjq("#closepeel").css("margin-top", "0");
                            amjq("#" + window.ampil).css("top", "0");
                            amjq("#" + window.ampil + " span").css("top", "0px");
                            amjq("#" + window.ampil + " h9").css("top", "467px");
                            amjq("#" + window.ampil + " h9").css("margin-top", "0");
                            amjq("#" + window.peel_content).css("top", "0px");
                            amjq("#adbywho").css("top", "70px");
                            amjq("#adbywho").css("margin-top", "0");
                        }



                        //look for z index 
                        function findHighestZIndex() {
                            var divs = document.getElementsByTagName('div');
                            var highest = 0;
                            for (var i = 0; i < divs.length; i++) {
                                var zindex = parseInt(divs[i].style.zIndex);
                                if (zindex > highest) {
                                    highest = zindex;
                                }
                            }
                            if (highest > window.highest && (highest + 10 <= 2147483647)) {
                                window.highest = highest;
                                window.highest = window.highest + 10;
                                window.reloadcss();
                            }

                        }
                        findHighestZIndex();
                    }

                    amjq.Peelback = function(el, settings) {
                        window.amisopen = 0;
                        //Caching
                        var base = this;
                        base.$el = amjq(el);
                        base.el = el;
                        base.$el.data("Peelback", base);

                        //Main stuff    
                        base.init = function() {

                            //Vars
                            var peelHTML, peelImage, peelMask, smallSize, bigSize, smallMaskSize, bigMaskSize;

                            //Defaults, meet Settings
                            base.settings = amjq.extend({}, amjq.Peelback.defaultSettings, settings);
                            amjq.cc_is_prem = false;
                            var t2_chance = (Math.random() >= 0.2);
                            if ((typeof window.__pcc === 'undefined') || (amjq.inArray(window.__pcc, base.settings.t1_cc_arr) != -1) || (amjq.inArray(window.__pcc, base.settings.t2_cc_arr) != -1 && t2_chance)) {
                                amjq.cc_is_prem = true;
                            }

                            //If ad image is missing, stop the show            
                            if (typeof(base.settings.adImage) !== 'string' || base.settings.adImage === '') {
                                if (base.settings.debug === true) {}
                                return;
                            }

                            //If peel image is missing, stop the show            
                            if (typeof(base.settings.peelImage) !== 'string' || base.settings.peelImage === '') {
                                if (base.settings.debug === true) {}
                                return;
                            }

                            //If click URL is missing, stop the show            
                            if (typeof(base.settings.clickURL) !== 'string' || base.settings.clickURL === '') {
                                if (base.settings.debug === true) {}
                                return;
                            }

                            //Convenience vars and set mask size
                            smallSize = base.settings.smallSize + 'px';
                            bigSize = base.settings.bigSize + 'px';
                            smallMaskSize = (base.settings.smallSize - 13) + 'px';
                            bigMaskSize = Math.floor((base.settings.bigSize * 0.85)) + 'px';
                            //Assemble
                            peelHTML = amjq('<div id="' + window.ampil + '" yW4a="1"><span yW4a="1"><a id="closepeel" yW4a="1">X</a><h9 yW4a="1">Ads by ' + window.__ext_brand + '</h9><img src="' + base.settings.peelImage + '" class="peelimage" yW4a="1" alt="" border="0" /></span><div id="' + window.peel_content + '" yW4a="1"></div><a class="peelimage2" style="background-image: url(' + window.amway + 'peel-image2.svg); margin-top:0 !important;" yW4a="1" ></a></div>');
                            peelImage = peelHTML.find('img');
                            peelMask = peelHTML.find('div');
                            amjq('body').append('<div id="adbywho" yW4a="1"><a yW4a="1">(X)</a> Ads by ' + window.__ext_brand + '</div>')

                            window.reloadcss = function() {
								window.highest7 = window.highest - 7;
								var style = document.createElement('style');
                                style.type = 'text/css';
								
								var st = "";

                                st += '.' + window.myframe + '{height: 250px;position:absolute !important;right: 0;top: 0;width: 300px;z-index:' + window.highest + ';}';
                                st += '#closepeel {color: gray;cursor: pointer;display: none;height: 5px;position: fixed;right: 477px;top: 478px;width: 5px;z-index:' + (window.highest + 1) + ';}';
                                st += '#' + window.ampil + ' h9{display: none;color: gray;height: 5px;position: fixed;right: 5px;top: 467px;width: 200px;font-size: 12px;z-index:' + (window.highest + 1) + ';}';
                                st += '.peelimage2{height: 817px !important;border:0 !important;position: fixed !important;right: 162px !important;top: -33px;transform: rotate(-45deg);-webkit-transform: rotate(-45deg);-moz-transform: rotate(-45deg);width: 416px !important;display:none;z-index:' + window.highest + ' !important;}';
                                st += '#adbywho{position: fixed;right: 15px;top: 70px;font-size: 9px;color: gray;cursor: pointer;width: 50px;line-height: 14px;text-align: center; z-index: ' + (window.highest7 - 1) + ';}';
                                st += '#affiliateToolbarDiv,#jwbar{ z-index: 2147483630 important;}';

                                style.innerHTML = st;
                                document.getElementsByTagName('head')[0].appendChild(style);

                                amjq(peelImage).css({
                                    'width': '0',
                                    'height': '0',
                                    'z-index': window.highest,
                                    'position': 'fixed',
                                    'right': '0',
                                    'top': '0',
                                    '-ms-interpolation-mode': 'bicubic'
                                });

                                amjq(peelMask).css({
                                    'width': '0',
                                    'height': '0',
                                    'overflow': 'hidden',
                                    'position': 'fixed',
                                    'right': '0',
                                    'top': '0',
                                    'z-index': window.highest7,
                                    'background': 'url(' + base.settings.adImage + ') no-repeat right top'
                                });
                            }


                            window.reloadcss();

                            //Insert
                            base.$el.prepend(peelHTML);

                            // check if conflivting scripts exists when we load first time 
                            amjq.ResolveConflicts();


                            //Auto animate option      
                            if (base.settings.autoAnimate === false) {
                                amjq(peelImage).css({
                                    'width': smallSize,
                                    'height': smallSize
                                });
                                amjq(peelMask).css({
                                    'width': smallMaskSize,
                                    'height': smallMaskSize
                                });
                            } else {
                                amjq(peelImage).delay(500).animate({
                                    width: smallSize,
                                    height: smallSize
                                }, 500);

                                amjq(peelMask).delay(500).animate({
                                    width: smallMaskSize,
                                    height: smallMaskSize
                                }, 500);
                            }


                            if (checkTime()) {
								window.setTimeout(function() { //wait 5 sec 
									if (window.amisopen != 1) {
										amjq(peelImage).stop().animate({
											width: bigSize,
											height: bigSize
										}, 500);
									
										amjq(peelMask).stop().animate({
											width: bigMaskSize,
											height: bigMaskSize
										}, 500);

										window.amisopen = 1; //change token to 1	
										// show compl
										setTimeout(function() { //wait 0.5 sec 
											if (amjq("#" + window.peel_content).width() > 492) {
												amjq('#closepeel').css('display', 'block'); //display close button
												amjq('#' + window.ampil + ' h9').css('display', 'block'); //display close button
												amjq('.peelimage').css('display', 'none'); //hide peeler image 
												amjq('.peelimage2').css('display', 'block'); //add amhide image
											}
											window.amisopen = 1; //change token to 1 						
										}, 500);											
										
										// close
										window.setTimeout(function() { //wait 5 sec 
											if (amjq("#" + window.peel_content).width() > 492) {
												window.amisopen = 0; //change token to 1
												closePeal(); //closepeel
											}
										}, 5000);
									}
								}, 5000);
                            }




                            //Hover behavior
                            peelHTML.mouseenter(
                                //Mouseover pill down
                                function() {
                                    if (window.amisopen != 1) {
                                        amjq(peelImage).stop().animate({
                                            width: bigSize,
                                            height: bigSize
                                        }, 500);

                                        amjq(peelMask).stop().animate({
                                            width: bigMaskSize,
                                            height: bigMaskSize
                                        }, 500);
                                        setTimeout(function() { //wait 0.5 sec 
                                            if (amjq("#" + window.peel_content).width() > 492) {
                                                amjq('#closepeel').css('display', 'block'); //display close button
                                                amjq('#' + window.ampil + ' h9').css('display', 'block'); //display close button
                                                amjq('.peelimage').css('display', 'none'); //hide peeler image 
                                                amjq('.peelimage2').css('display', 'block'); //add amhide image
                                            }
                                            window.amisopen = 1; //change token to 1 						
                                        }, 500);
                                    }
                                });

                            peelHTML.mouseleave(
                                function() {
                                    if (window.amisopen == 1) {
                                        window.amisopen = 0;
                                        closePeal();
                                    }
                                }
                            );

                            peelHTML.mousemove(

                                //cheack mouse position for closeing  
                                function(e) {
                                    var parentOffset = amjq(this).parent().offset();
                                    var relX = e.pageX - amjq("#" + window.peel_content).offset().left;
                                    var relY = e.pageY - amjq("#" + window.peel_content).offset().top;
                                    //if mouse is out of div close peel
                                    if ((relX < 0 || relY > 510) && window.amisopen == 1) {
                                        window.amisopen = 0;
                                        closePeal();
                                    }
                                }
                            );

                            function closePeal() {

                                amjq('.peelimage').css('display', 'block'); //add peeler image 
                                amjq('.peelimage2').css('display', 'none'); //hide amhide image
                                setTimeout(function() { //wait 0.5 sec
                                    if (amjq('.peelimage2').css('display') == 'none') { //check if amhide is not diplayed 
                                        amjq('#closepeel').css('display', 'none'); //hide close button
                                        amjq('#' + window.ampil + ' h9').css('display', 'none'); //display close button	
                                        amjq(peelImage).stop().animate({
                                            width: smallSize,
                                            height: smallSize
                                        }, 400);

                                        amjq(peelMask).stop().animate({
                                            width: smallMaskSize,
                                            height: smallMaskSize
                                        }, 400);
                                    } //if close
                                }, 500);
                                refreshiframe()
                            }


                            //set page shake every 15 sec
                            window.setInterval(function() {
                                if (window.amisopen == 0 && amjq("#" + window.peel_content).width() < 68) { //check if peel is not starting
                                    amjq(peelImage).stop().animate({
                                        width: bigSize,
                                        height: bigSize
                                    }, 400);

                                    amjq(peelMask).stop().animate({
                                        width: bigMaskSize,
                                        height: bigMaskSize
                                    }, 400);

                                    setTimeout(function() { //close 
                                        amjq(peelImage).stop().animate({
                                            width: smallSize,
                                            height: smallSize
                                        }, 400);

                                        amjq(peelMask).stop().animate({
                                            width: smallMaskSize,
                                            height: smallMaskSize
                                        }, 400);
                                    }, 80);
                                }
                            }, 15000); //timer close

                        };

                        // Run initializer
                        base.init();
                    };

                    amjq.Peelback.defaultSettings = {
                        adImage: null,
                        peelImage: null,
                        clickURL: null,
                        smallSize: 58,
                        bigSize: 510,
                        gaTrack: false,
                        gaLabel: 'default',
                        autoAnimate: true,
                        debug: false,
                        t1_cc_arr: [],
                        t2_cc_arr: []

                    };

                    amjq.fn.peelback = function(settings) {
                        return this.each(function() {
                            (new amjq.Peelback(this, settings));
                        });
                    };
                    setTimeout(function() {
                        tagid = (typeof adParams !== "object" || !adParams.a || adParams.a == "") ? 63481008 : adParams.a;
                        
						var cbuster=(new Date()).getTime();

						amjq("#" + window.ampil + " div").append("<iframe class='" + window.myframe + "' src='//t.tmdn2015x11.com/build/6dddab6d/v1/script/' FRAMEBORDER='0' SCROLLING='no' MARGINHEIGHT='0' MARGINWIDTH='0' TOPMARGIN='0' LEFTMARGIN='0' ALLOWTRANSPARENCY='true' WIDTH='300' HEIGHT='250'></iframe>");
//"&r=&u="+encodeURIComponent(window.location.href)

                        amjq("#closepeel").click(function() {
                            amjq("#" + window.ampil).css('display', 'none');
                            amjq("#adbywho").css('display', 'none');
                        })
                        amjq("#adbywho a").click(function() {
                            amjq("#" + window.ampil).css('display', 'none');
                            amjq("#adbywho").css('display', 'none');
                        })
                    }, 1000);

                    amjq(function() {
                        amjq('body').peelback({
                            adImage: window.amway + 'peel-ad.svg',
                            peelImage: window.amway + 'peel-image.svg',
                            clickURL: '#',
                            smallSize: 70,
                            bigSize: 580,
                            gaTrack: true,
                            gaLabel: '#1 Stegosaurus',
                            autoAnimate: true,
                            t1_cc_arr: ['XX', 'US', 'GB', 'CA', 'DE', 'FR', 'ES', 'IT', 'AU', 'NZ', 'NO', 'DK', 'AT', 'CH', 'SE'], //T1
                            t2_cc_arr: ['RU', 'TR', 'BR', 'AR', 'MX', 'CO', 'SA', 'AE', 'JO', 'ZA', 'KW', 'IQ'] // T2
                        });
                    });
                    window.setInterval(amjq.ResolveConflicts, 1000); //timer close	

                })(jQuery);



            })
        })
    }, 400); //timer close
}


function checkTime() {
	var numberRetries = 4;
	var resetTime = 86400000;

	if (typeof(Storage) !== "undefined") {
		var count = 0;
		lastOpen = 0;
		var now = new Date().getTime();
		var setupTime = localStorage.getItem('setupTime');
		var str_count = localStorage.getItem("count");
		if (str_count == null || str_count == "null") {
			count = 0;
		} else {
			count = parseInt(str_count);
		}
		if (setupTime == null) {
			localStorage.setItem('setupTime', now)
			setupTime = 0;
		}
		if (now - setupTime > resetTime) {
			count = 0;
			localStorage.clear();
			localStorage.setItem('setupTime', now);
			var mycount = parseInt(count);
			localStorage.setItem("count", mycount);
			lastOpen = parseInt(setupTime);
			return true;
		} else if (count <= numberRetries ) {
			count++;
			window.localStorage.setItem('setupTime', now);
			localStorage.setItem("count", count);
			return true;
		}
		else{
			return false;
			}
		
		
		
	}
}
