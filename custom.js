
document.addEventListener('DOMContentLoaded', function () {
    console.log('DomContent Loaded')
    
const holder = $('#holder');
    
    var observer = new MutationObserver(function(mutationsList, observer) {
        $(mutationsList).each(function(index, item){
            if (item.type === 'childList'){

                if (item.addedNodes.length > 0){
                    console.log('New div is being added!');
                    
                    for (var i = 0; i < item.addedNodes.length; i++) {
                        console.log('  "' + mutation.addedNodes[i].textContent + '" added');
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
});