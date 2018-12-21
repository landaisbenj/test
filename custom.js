document.addEventListener('DOMContentLoaded', function () {
//DOM Construction
//live modification	
    console.log('DomContent Loaded')
    const holder = $('#holder');   
    var observer = new MutationObserver(function(mutationsList, observer) {
        $(mutationsList).each(function(index, item){
            if (item.type === 'childList'){
                if (item.addedNodes.length > 0){
		$('#main-view table[id^="itemtable"] #type').find('br').remove();
			//Multiple div row suppressed
                    if ($('#main-view div.row').next().length != 0 ){
			$('#main-view div.row').each(function(){
				x=$(this).nextAll().children().detach();
				$(this).append(x).nextAll().remove();
			})
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
    

	
//modification
    //new navbar 
    if ($('.navbar-fixed-top').length != 0){
	    $('.navbar').toggleClass('navbar-fixed-top navbar-static-top');
    };
    $('div.navbar').prepend('<header id="container-logo"></header>');
    $('header#container-logo').append('<div id="header-menu"></div>').append('<img class="header-logo" src="images/logo.png">').append('<div id="notify"></div>').append('<div id="search"><input onkeyup="" placeholder="Rechercher" title="Rechercher" id="searchInput" type="text"></div>');
    $('<img id="notyIcon" src="images/notify.png"/>').appendTo('#notify')
    
    
});
