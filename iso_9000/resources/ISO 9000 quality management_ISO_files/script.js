/* Author:

*/


// prevents conflicts with other js libraries, Use jQuery instead of $ or use the function($)

$.noConflict();


jQuery(document).ready(function($){
	
	// Run Matt Kersley's jQuery Responsive menu plugin (see plugins.js)
	if ($.fn.mobileMenu) {
		$('ol#id').mobileMenu({
			switchWidth: 768,                   // width (in px to switch at)
			topOptionText: 'Choose a page',     // first option text
			indentString: '&nbsp;&nbsp;&nbsp;'  // string for indenting nested items
		});
	}

	// Run Mathias Bynens jQuery placeholder plugin (see plugins.js)
	if ($.fn.placeholder) {
		$('input, textarea').placeholder();		
	}
	
	    // meta data toggle in search results -if you upgrade jQuery to v1.7, you'll need to use the .on() function
	    
	    $("body").delegate("a.meta_toggle", "click", function(event){ 
	    			event.preventDefault();
	    			var cs = $(this).attr("id").substring(1);
	    			var display = $("div#cs" + cs + " div.cs_meta").css("display")
	    			if (display == "none") {$(this).html("Hide details"); }
	    			else { $(this).html("More details"); }
	    			$("div#cs" + cs + " div.cs_meta").slideToggle();			
	    });
	    
	    // SHOW MORE PAGES toggle in cat details -if you upgrade jQuery to v1.7, you'll need to use the .on() function
	     $("body").delegate("a#morepages", "click", function(event){ 
	    	    			event.preventDefault();	    
	    	    			var display = $("ul#showmorepages li").css("display")
	    	    			if (display == "none") { $("#imgmore2").attr(({src: "arrowdown.png", title: "show more", alt: "show more"})); }
	    	    				else { $("#imgmore2").attr({src: "arrowup.png", title: "show less", alt: "show less"}); }
	    	    	    			$("ul#showmorepages li").slideToggle();;			
	    });
	    
	     // SHOW MORE NEWS toggle in cat details -if you upgrade jQuery to v1.7, you'll need to use the .on() function
	    	     $("body").delegate("a#morenews", "click", function(event){ 
	    	    	    			event.preventDefault();	    
	    	    	    			var display = $("div#showmorenews article").css("display")
	    	    	    			if (display == "none") { $("#imgmore").attr(({src: "arrowdown.png", title: "show more", alt: "show more"})); }
	    	    				else { $("#imgmore").attr({src: "arrowup.png", title: "show less", alt: "show less"}); }
	    	    	    			$("div#showmorenews article").slideToggle();			
	    	    });
	    

//---------- Remove the width attribute from images (set by WCM)-----------------
	$("img").removeAttr("width");

	
	
});

// http://www.learningjquery.com/2006/09/slicker-show-and-hide



jQuery(function($) {$('#copyright').hide(); });

    jQuery('a[href="#copyright"]').click(function(event) {    	
		event.preventDefault();
      jQuery("#copyright").slideToggle("fast");
    });




// dropdown on masthead
jQuery('#masthead').dropdown()

// menu convert to dropdown on mobile
jQuery(document).ready(function($){

	$('#sitenav').mobileMenu({
	  switchWidth: 480,                   //width (in px to switch at)
	  topOptionText: 'Select a page...',     //first option text
	  indentString: '&nbsp;&nbsp;&nbsp;'  //string for indenting nested items
	});
	
	/*
	$('#post-list').mobileMenu({
	  switchWidth: 753,                   //width (in px to switch at)
	  topOptionText: 'Select a post...',     //first option text
	  indentString: '&nbsp;&nbsp;&nbsp;'  //string for indenting nested items
	});
	*/
	
	//$("h3.post-title").fitText(1.2); // Turn the compressor up   (text shrinks more aggressively)

});



// Standards filter for Catalogue 

function toggleFilter(filterForm, url){
	var checkboxes = filterForm.getElementsByTagName('input');
	for (var i=0; i<checkboxes.length; i++){
		var regExp = new RegExp('&' + checkboxes[i].name + '=on');
		url = url.replace(regExp, '');
		if (checkboxes[i].checked)
			url += '&' + checkboxes[i].name + '=on';
	}
	//location.href = 'http://www.iso.org/iso/' + url;
	location.href = url;
};






//basketmini
//Functions related to webstore basket
var bmWin;

function addToBasket(prodId, mediaId, lang, guilang, anchor, salestype) {
	//alert("add item " + prodId + "," + mediaId + "," + lang + "," + guilang+ "," + anchor);
	var d = new Date();
	var t = d.getTime();
	var dhtmlwindow = document.getElementById("dhtmlwindow");
	var coordinates = getAbsolutePos(document.getElementById(anchor));
	var windowsSize = getWindowSize();
	
	//alert(coordinates.x + "," + coordinates.y);
	//alert(windowsSize.x + "," + windowsSize.y);
	var left = coordinates.x;
	var top = coordinates.y + 25;
	if (left + 300 > windowsSize.x) {
		left = windowsSize.x -340;
	}
	if (top + 100 > windowsSize.y) {
		top = coordinates.y - 120;
	}

	//alert(coordinates.x + "," + coordinates.y);

	// load country webstore info, parameter country code is only for test
	var paramName = "countrycode="
	var pos = document.URL.indexOf(paramName);
	var countryCode
	if (pos != -1) {
		countryCode = document.URL.substr(pos + paramName.length, 2);
	}
	
	new Ajax.Updater("webstore_popupinfo", "webstore_popupinfo.html", {
		parameters: {
		"countrycode": countryCode
		  	},
		method:'GET'
	});

	document.getElementById('addToBasket').src = 'addtobasket.html?itemId=' + prodId + '&idProductMedia=' + mediaId + '&alt=' + lang + '&salestype=' + salestype + '&guilang=' + guilang + '&t=' + t
	var dhtmlwindow = document.getElementById("dhtmlwindow");
	dhtmlwindow.style.left = left + "px"
	dhtmlwindow.style.top = top + "px"
	dhtmlwindow.style.visibility="visible";
	dhtmlwindow.style.display="block";			
			
	//var counterUrl = 'https://comp-test.iso.org/isoweb/app?page=basket/BasketCounter&service=page&' + t
	//alert(counterUrl);
	//document.getElementById('basketCounter').src = counterUrl;
	//document.getElementById(id).className = 'shoppingcartchecked';
}

function addToBasketStd(id, guilang) {
	var bki = document.getElementById("bki_" + id);
	addToBasket2(
		bki.value,
		document.getElementById("stdref").innerHTML + " " + document.getElementById("bkifmt_" + id).innerHTML + " " + bki.options[bki.selectedIndex].text,
		guilang,
		"bkianchor_" + id
	)		
}
function addToBasketPub(id, guilang) {
	var bki = document.getElementById("bki_" + id);
	var elems = bki.value.split("#");
	var purchaseId = elems[0];
	var title = elems[1];
	addToBasket2(
		purchaseId,
		title,
		guilang,
		"bkianchor_" + id
	)		
}
function addToBasket2(prodId, prodDescr, guilang, anchor) {
	jQuery("#" + anchor + " > .icon_addtobasket").css("cursor", "wait");
	
	var dhtmlwindow = document.getElementById("dhtmlwindow");
	var coordinates = getAbsolutePos(document.getElementById(anchor));
	var windowsSize = getWindowSize();
	
	//alert(coordinates.x + "," + coordinates.y);
	//alert(windowsSize.x + "," + windowsSize.y);
	var left = coordinates.x;
	var top = coordinates.y + 25;
	if (left + 300 > windowsSize.x) {
		left = windowsSize.x -340;
	}
	if (top + 100 > windowsSize.y) {
		top = coordinates.y - 120;
	}

	//alert(coordinates.x + "," + coordinates.y);

	// load country webstore info, parameter country code is only for test
	var paramName = "countrycode="
	var pos = document.URL.indexOf(paramName);
	var countryCode
	if (pos != -1) {
		countryCode = document.URL.substr(pos + paramName.length, 2);
	}
	
	new Ajax.Updater("webstore_popupinfo", "webstore_popupinfo.html", {
		parameters: {
		"countrycode": countryCode
		  	},
		method:'GET'
	});

	// needed by IE to accept cookies
	jQuery.support.cors = true;
	jQuery.ajax({
         url: "http://www.iso.org/webstore/MiniShoppingBasket?memberId=ISO&purchaseId=" + prodId + "&guilang=" + guilang,
		 cache: false,
         crossDomain: true,
         type: "GET"})
		 .done(
         		function(output, status, xhr) {
		  			//alert('Successfully added to basket! ' + xhr.getAllResponseHeaders());
					//console.log("after cookies:" + document.cookie)
					document.getElementById('addToBasketDescr').innerHTML = prodDescr;
					var dhtmlwindow = document.getElementById("dhtmlwindow");
					dhtmlwindow.style.left = left + "px"
					dhtmlwindow.style.top = top + "px"
					dhtmlwindow.style.visibility="visible";
					dhtmlwindow.style.display="block";			
					jQuery("#" + anchor + " > .icon_addtobasket").css("cursor", "");
		  		})
		 .fail(
		 		function(xhr, status, errorThrown) {
				    jQuery("#" + anchor + " > .icon_addtobasket").css("cursor", "");
				    alert("Error: " + errorThrown + "\nUnable to add item to basket! Please try again.");
				});		  
}

function toggleBasketOptions(prodId) {
	jQuery("#"+prodId + " > tbody > tr.optional").toggle();
}

function continueShopping() {
	//document.getElementById('addToBasket').src = "";
	var dhtmlwindow = document.getElementById("dhtmlwindow");
	dhtmlwindow.style.visibility="hidden";
	dhtmlwindow.style.display="none";
}

function getAbsolutePos (el) {
	var SL = 0, ST = 0;
	var is_div = /^div$/i.test(el.tagName);
	if (is_div && el.scrollLeft)
		SL = el.scrollLeft;
	if (is_div && el.scrollTop)
		ST = el.scrollTop;
	var r = { x: el.offsetLeft - SL, y: el.offsetTop - ST };
	if (el.offsetParent) {
		var tmp = this.getAbsolutePos(el.offsetParent);
		r.x += tmp.x;
		r.y += tmp.y;
	}
	return r;
}

function getWindowSize() {
	var myWidth = 0, myHeight = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}
	var r = { x: myWidth, y: myHeight };
	return r;
}



// For the link 'More Standards' in related information / Related products

function loadMore(type, pageId)
{
	getAjaxObject('text/xml');
	xmlHttpRequest.onreadystatechange = getRelatedContent;
	switch (type)
	{
		case 'relatedProducts':
			xmlHttpRequest.open('GET', 'http://www.iso.org/iso/loadrelatedproducts.xml?pageId=' + pageId, true);
		xmlHttpRequest.send(null);
			break;
		case 'relatedInformation':
			xmlHttpRequest.open('GET', 'http://www.iso.org/iso/loadrelatedinformation.xml?pageId=' + pageId, true);
			xmlHttpRequest.send(null);
			break;
		case 'relatedInformation':
		default:
	}
}



function getAjaxObject(mimeType)
{
   if (window.XMLHttpRequest)
      xmlHttpRequest = new XMLHttpRequest();
   else if (window.ActiveXObject)
   {
      try {
         xmlHttpRequest = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e) {
         try {
            xmlHttpRequest = new ActiveXObject('Microsoft.XMLHTTP');
         } catch (e) {}
      }
   }
   if (xmlHttpRequest!=null)
   {
      if (xmlHttpRequest.overrideMimeType)
         xmlHttpRequest.overrideMimeType(mimeType);
   }
   else
      alert('Your Browser does not support XMLHTTP');
   return xmlHttpRequest;
}

function getRelatedContent()
{
	if (xmlHttpRequest.readyState==4)
	{
		
		if (xmlHttpRequest.status==200)
		{
			var xmldoc = xmlHttpRequest.responseXML;
			
			var moreLink = document.getElementById('moreRelatedLink');
			moreLink.parentNode.removeChild(moreLink);
			var links = xmldoc.getElementsByTagName('link');
			
			var resultType = xmldoc.getElementsByTagName('resultType').item(0).firstChild.data;
			var linkList = document.getElementById(resultType);
			for (var i=0; i<links.length; i++)
			{
				var listElem = document.createElement('li');
				listElem.setAttribute("style","margin-bottom: 5px;");
				listElem.innerHTML = links.item(i).firstChild.data;
				linkList.appendChild(listElem);
			}
		}
	}
	else
	{
		var loadingTag = document.getElementById('moreRelatedLink');
		loadingTag.innerHTML = '<li class="loading"><span>' + pleasWaitStr + '</span></li>';
	}
}

// for bottom navigation on mobile devices
function toggleDiv(divId) {
	
	jQuery("#"+divId).slideToggle("slow");
	jQuery("#close_"+divId).toggleClass('level2more level2less');
}

// for search on mobile devices
function toggleSearch() {
	jQuery("#searchbar").slideToggle("slow");
	jQuery(".searchiconPhone").toggleClass("active");
	jQuery("header[role='banner'] form[role='search']").slideToggle("slow");
}

jQuery(document).ready(function(){
    jQuery(".scroll").click(function(event){
        //prevent the default action for the click event
        event.preventDefault();

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];

        //get the top offset of the target anchor
        var target_offset = jQuery("#"+trgt).offset();
        var target_top = target_offset.top;

        //goto that anchor by setting the body scroll navigation to anchor navigation
        jQuery('html,body').animate({scrollTop: jQuery("#navigation").offset().top}, 'slow');
   
    });
});

jQuery(document).ready(function(){
    jQuery(".toplink").click(function(event){
        //prevent the default action for the click event
        event.preventDefault();

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];

        //get the top offset of the target anchor
        var target_offset = jQuery("#"+trgt).offset();
        var target_top = target_offset.top;

        //goto that anchor by setting the body scroll top to anchor top
        jQuery('html,body').animate({scrollTop: jQuery("#skip").offset().top}, 'slow');
   
    });
});
