

$.ajax({url: 'acttheme/js/functions.js', async: false, dataType: 'script'});

document.addEventListener('DOMContentLoaded', function () {
//DOM Construction
//live modification	
    console.log('DomContent Loaded')
    const holder = $('#holder');   
    var observer = new MutationObserver(function(mutationsList, observer) {
        $(mutationsList).each(function(index, item){
            if (item.type === 'childList'){
		    //For each node added:
                if (item.addedNodes.length > 0){
			//new search
	
			//if ($('#main-view').length != 0 ){
//$('#prebannav tbody tr').append('<td id="search"><input onkeyup="" placeholder="Rechercher" title="Rechercher" id="searchInput" type="text"></td>')
//			}
			
			
			
			
			//Suppress multiple row divider
                    if ($('#main-view div.row').next().length != 0 ){
			$('#main-view div.row').each(function(){
				x=$(this).nextAll().children().detach();
				$(this).append(x).nextAll().remove();
			})
		    };
			//Modify item dom for type - action
			if ($('#main-view').find('.item').length > 0) {
	if (($('#lightcontent #type > div').length != 0)){
		$('.item tbody tr').has('td#type > div').each(function(){
			$('<td class="input">').insertAfter($(this).children('td#type'))
			x=$(this).find('td#type > div').detach();
			$(this).find('td.input').append(x);
		})
	};
};
			
			
                }

            }
        });
    });

    // Start observing the target node for configured mutations
    observer.observe( holder[0], { 
        attributes: true, 
        childList: true, 
        subtree: true 
    });

	
//DOM's modification
    if ($('#holder #copyright').length != 0){
	$('#holder #copyright').insertAfter('#holder');
    };
    //new navbar 
    $('div.navbar').prepend('<header id="container-logo"></header>');
    $('header#container-logo').append('<div id="header-menu"></div>').append('<img class="header-logo" src="images/logo.png">').append('<div id="notify"></div>');
    $('<img id="notyIcon" src="images/notify.png"/>').appendTo('#notify')
    
});
