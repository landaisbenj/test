
document.addEventListener('DOMContentLoaded', function () {

    var observer = new MutationObserver(function(mutationsList, observer) {
        $(mutationsList).each(function(index, item){
            if (item.type === 'childList'){

                if (item.addedNodes.length > 0){
                    console.log('new div is being added! ' + item.name );
                }

            }
        });
    });

    // Start observing the target node for configured mutations
    observer.observe( document, { 
        attributes: true, 
        childList: true, 
        subtree: true 
    });	
  
});

