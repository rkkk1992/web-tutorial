(function($){var menuCount=0;$.fn.mobileMenu=function(options){var settings={switchWidth:768,topOptionText:'Select a page',indentString:'&nbsp;&nbsp;&nbsp;'};function isList($this){return $this.is('ul, ol');}
function isMobile(){return($(window).width()<settings.switchWidth);}
function menuExists($this){if($this.attr('id')){return($('#mobileMenu_'+$this.attr('id')).length>0);}
else{menuCount++;$this.attr('id','mm'+menuCount);return($('#mobileMenu_mm'+menuCount).length>0);}}
function goToPage($this){if($this.val()!==null){document.location.href=$this.val()}}
function showMenu($this){$this.hide();$('#mobileMenu_'+$this.attr('id')).show();}
function hideMenu($this){$this.css('display','');$('#mobileMenu_'+$this.attr('id')).hide();}
function createMenu($this){if(isList($this)){var selectString='<select id="mobileMenu_'+$this.attr('id')+'" class="mobileMenu">';selectString+='<option value="">'+settings.topOptionText+'</option>';$this.find('li').each(function(){var levelStr='';var len=$(this).parents('ul, ol').length;for(i=1;i<len;i++){levelStr+=settings.indentString;}
var link=$(this).find('a:first-child').attr('href');var text=levelStr+$(this).clone().children('ul, ol').remove().end().text();selectString+='<option value="'+link+'">'+text+'</option>';});selectString+='</select>';$this.parent().append(selectString);$('#mobileMenu_'+$this.attr('id')).change(function(){goToPage($(this));});showMenu($this);}else{alert('mobileMenu will only work with UL or OL elements!');}}
function run($this){if(isMobile()&&!menuExists($this)){createMenu($this);}
else if(isMobile()&&menuExists($this)){showMenu($this);}
else if(!isMobile()&&menuExists($this)){hideMenu($this);}}
return this.each(function(){if(options){$.extend(settings,options);}
var $this=$(this);$(window).resize(function(){run($this);});run($this);});};})(jQuery);