
document.addEventListener('DOMContentLoaded', function () {
    var mutationTest = true;
    console.log('DomContent Loaded')
    
const holder = $('#holder');
    
    var observer = new MutationObserver(function(mutationsList, observer) {
    console.log('Mutation Loaded')
    
        $(mutationsList).each(function(index, item){
			var mutationTest = true,
            if (item.type === 'childList'){

                if (item.addedNodes.length > 0){
                    console.log('new div is being added! ' + item.name );
                }

            }
        });
    });

    if (mutationTest){
    // Start observing the target node for configured mutations
    observer.observe( holder[0], { 
        attributes: true, 
        childList: true, 
        subtree: true 
    });	
    };
});
