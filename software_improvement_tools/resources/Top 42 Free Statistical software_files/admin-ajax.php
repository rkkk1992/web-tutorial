function stripBorder_2_yp551a640480c56(object) {
	object.each(function() {
		if( parseInt(jQuery(this).width() ) > 0) {
			jQuery(this).width(
				parseInt(
					jQuery(this).width() ) -
					parseInt(jQuery(this).css("border-left-width")) -
					parseInt(jQuery(this).css("border-right-width"))
			);
			}
		else {
		jQuery(this).css("border-left-width", "0px");
		jQuery(this).css("border-right-width", "0px");
		}
	});
}
function stripPadding_2_yp551a640480c56(object) {
	object.each(function() {
		jQuery(this).width(
		parseInt( jQuery(this).width() ) -
		parseInt(jQuery(this).css("padding-left")) -
		parseInt(jQuery(this).css("padding-left"))
		);
	});
}

function strip_results_2_yp551a640480c56() {
	stripPadding_2_yp551a640480c56( jQuery("#yop-poll-container-2_yp551a640480c56 .yop_poll_li_result-2_yp551a640480c56") );
	stripBorder_2_yp551a640480c56(  jQuery("#yop-poll-container-2_yp551a640480c56 .yop-poll-result-bar-2_yp551a640480c56") );
}

jQuery(document).ready(function(e) {
	if(typeof window.strip_results_2_yp551a640480c56 == "function")
		strip_results_2_yp551a640480c56();
	if(typeof window.tabulate_answers_2_yp551a640480c56 == "function")
		tabulate_answers_2_yp551a640480c56();
	if(typeof window.tabulate_results_2_yp551a640480c56 == "function")
		tabulate_results_2_yp551a640480c56();
});

function equalWidth_2_yp551a640480c56(obj, cols, findWidest ) {
	findWidest  = typeof findWidest  !== "undefined" ? findWidest  : false;
	if ( findWidest ) {
		obj.each(function() {
			var thisWidth = jQuery(this).width();
			width = parseInt(thisWidth / cols);
			jQuery(this).width(width);
			jQuery(this).css("float", "left");
		});
	}
	else {
		var widest = 0;
		obj.each(function() {
			var thisWidth = jQuery(this).width();
			if(thisWidth > widest) {
				widest = thisWidth;
			}
		});
		width = parseInt( 320 / cols[0]);
		obj.width(width-20);
		obj.css("float", "left");
	}
}

function equalWidth2_2_yp551a640480c56(obj, cols, findWidest ) {
	findWidest  = typeof findWidest  !== "undefined" ? findWidest  : false;
	if ( findWidest ) {
		obj.each(function() {
			var thisWidth = jQuery(this).width();
			width = parseInt(thisWidth / cols);
			jQuery(this).width(width);
			jQuery(this).css("float", "left");
		});
	}
	else {
		var widest = 0;
		obj.each(function() {
			var thisWidth = jQuery(this).width();
			if(thisWidth > widest) {
				widest = thisWidth;
			}
		});
		width = parseInt( 320 / cols[1]);
		obj.width(width-20);
		obj.css("float", "left");
	}
}

function tabulate_answers_2_yp551a640480c56() {

	equalWidth_2_yp551a640480c56( jQuery("#yop-poll-container-2_yp551a640480c56 .yop-poll-li-answer-2_yp551a640480c56"), [1,1] );
	//equalWidth_2_yp551a640480c56( jQuery("#yop-poll-container-2_yp551a640480c56 .yop-poll-li-answer-2_yp551a640480c56 .yop-poll-results-bar-2_yp551a640480c56 div "), [1,1], true );
}

function tabulate_results_2_yp551a640480c56() {
	equalWidth2_2_yp551a640480c56( jQuery("#yop-poll-container-2_yp551a640480c56 .yop-poll-li-result-2_yp551a640480c56"), [1,1] );
	//equalWidth_2_yp551a640480c56( jQuery("#yop-poll-container-2_yp551a640480c56 .yop-poll-li-result-2_yp551a640480c56 .yop-poll-results-bar-2_yp551a640480c56 div "), [1,1], true );
	}

jQuery(document).ready(function(){
	runOnPollStateChange_2_yp551a640480c56();
});

function runOnPollStateChange_2_yp551a640480c56() {

};jQuery(document).ready(function(){ jQuery('.yop-poll-li-answer-2_yp551a640480c56').css('float','none');});