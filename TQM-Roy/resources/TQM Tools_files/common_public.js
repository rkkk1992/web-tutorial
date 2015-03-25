var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

$(document).ready(function() {
	initMenus();
	$('#jsddm > li').bind('mouseover', jsddm_open);
	$('#jsddm > li').bind('mouseout',  jsddm_timer);

});

function initMenus() {
    $('ul.menu ul').hide();
    $.each($('ul.menu'), function(){
    var cookie = $.cookie(this.id);
    if(cookie === null || String(cookie).length < 1) {
    $('#' + this.id + '.expandfirst ul:first').show();
    }
    else {
    $('#' + this.id + ' .' + cookie).next().show();
    }
    });
    $('ul.menu li a').click(
    function() {
    var checkElement = $(this).next();
    var parent = this.parentNode.parentNode.id;
    if($('#' + parent).hasClass('noaccordion')) {
    if((String(parent).length > 0) && (String(this.className).length > 0)) {
    if($(this).next().is(':visible')) {
    $.cookie(parent, null);
    }
    else {
    $.cookie(parent, this.className);
    }
    $(this).next().slideToggle('normal');
    }
    }
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    if($('#' + parent).hasClass('collapsible')) {
    $('#' + parent + ' ul:visible').slideUp('normal');
    }
    return false;
    }
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#' + parent + ' ul:visible').slideUp('normal');
    if((String(parent).length > 0) && (String(this.className).length > 0)) {
    $.cookie(parent, this.className);
    }
    checkElement.slideDown('normal');
    return false;
    }
    }
    );
}

function jsddm_open()
{	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');}

function jsddm_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{	closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}

document.onclick = jsddm_close;

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

function showHideEvent(id){
	var tempObj;
	for (i = 1; i <= 6; i++){
		tempObj = 'tab'+i;
		if (document.getElementById(tempObj)){
			if (i == id){
				var doIt = document.getElementById(tempObj).style.display='block';
			} else {
				var doIt = document.getElementById(tempObj).style.display='none';
			}
		}
	}
}

function togglePeople(id){
	var viewContainer = $(id);
	viewContainer.slideToggle();
}