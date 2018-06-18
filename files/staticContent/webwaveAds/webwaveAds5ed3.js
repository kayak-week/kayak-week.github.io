webwaveAdsService = function() {

	/**
	 *Inicjalizacja reklam nazwa initAdvertButton jest nie adekwatna...
	 */
	function initAdvertButton(){
		var updateBackgroundSizeFunc = pageService.updateBackgroundSize;
		pageService.updateBackgroundSize = function(){
			updateBackgroundSizeFunc();
			var bottomAds = $('#ww_advertisement_bottom_container_wrapper');
	        if(bottomAds.length == 1){
                var elements = $('#container > div[fixed != "true"]');
                elements = groupService.filterEmptyGroups(elements);
                var tmp = utilService.getLowestPostionInList(elements, true) + bottomAds.outerHeight();
                if(tmp > $(window).height()){ //zwieksz wysokosc strony, gdy pasek bedzie zaslanial tresc strony, w przciwnym wypadku nie zwiekszaj wysokosci
                    var val = Math.min(tmp - $(window).height(), bottomAds.outerHeight()); //dodaj rozniece, jednak maksymalnie o wysokosc paska
                    $("body").css('height','+=' + (val) + 'px');
                }
	        }
		};

		pageService.updateBackgroundSize();//jednokronie wywolaj - w init.js initAdvertButton jest wywolana po updateBackgroundSize, wiec strona nie dostanie odpowiednich wymiarow
	}

    return {
        initAdvertButton : initAdvertButton,
    };

}();
