
document.addEventListener('DOMContentLoaded', function () {
    console.log('DomContent Loaded')
    const holder = $('#holder');   
    var observer = new MutationObserver(function(mutationsList, observer) {
        $(mutationsList).each(function(index, item){
            if (item.type === 'childList'){

                if (item.addedNodes.length > 0){
                    //console.log('New div is being added!');
                    
                    for (var i = 0; i < item.addedNodes.length; i++) {
                        if ((item.addedNodes[i].id === "dashcontent") || (item.addedNodes[i].id === "lightcontent") || (item.addedNodes[i].id === "scenecontent") || (item.addedNodes[i].id === "tempwidgets") || (item.addedNodes[i].id === "weatherwidgets") || (item.addedNodes[i].id === "utilitycontent")) {
                            console.log('  "' + item.addedNodes[i].id + '" added');
                            alert($('#main-view div.row').next().length);
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
    let navBar =  $('.navbar').append('<button class="menu-toggle"></button>');
	let navBarInner = $(".navbar-inner");
	let navBarToggle = $('.menu-toggle');
	let containerLogo = '<header class="logo"><div class="container-logo">';
	containerLogo += '<img class="header__icon" src="images/logo.png">';
	$('<style>#login:before {content: url(../images/logo.png) !important;}</style>').appendTo('head');
	containerLogo += '</div></header>';
	$(containerLogo).insertBefore('.navbar-inner');
    
    
    
});
