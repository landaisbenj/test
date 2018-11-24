
document.addEventListener('DOMContentLoaded', function () {
    console.log('DomContent Loaded')
    
const holder = $('#holder');
    
    var observer = new MutationObserver(function(mutationsList, observer) {
        $(mutationsList).each(function(index, item){
            if (item.type === 'childList'){

                if (item.addedNodes.length > 0){
                    console.log('new div is being added! ' + item.tagName );
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
});
