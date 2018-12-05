
document.addEventListener('DOMContentLoaded', function () {
    console.log('DomContent Loaded')
    const holder = $('#holder');   
    var observer = new MutationObserver(function(mutationsList, observer) {
        $(mutationsList).each(function(index, item){
            if (item.type === 'childList'){

                if (item.addedNodes.length > 0){
                    //console.log('New div is being added!');
                    
                    for (var i = 0; i < item.addedNodes.length; i++) {
			    if ($('navbar-fixed-top').length != 0){
				    $('.navbar').toggleClass('navbar-fixed-top navbar-static-top').prepend('<header class="container-logo"></header>');
			    }
			    
			    
			    
                        if ((item.addedNodes[i].id === "dashcontent") || (item.addedNodes[i].id === "lightcontent") || (item.addedNodes[i].id === "scenecontent") || (item.addedNodes[i].id === "tempwidgets") || (item.addedNodes[i].id === "weatherwidgets") || (item.addedNodes[i].id === "utilitycontent")) {
                            console.log('  "' + item.addedNodes[i].id + '" added');
                        }
                    }
                    
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
    
    
    //new navbar 
    
    let navBarHeader = $('.navbar header.container-logo');
    let navBarHeaderButton = '<button class="menu-toggle"></button>';

    
    
});
