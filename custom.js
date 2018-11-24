$( document ).ready(function() {

console.log('Ready ok')

});

document.addEventListener('DOMContentLoaded', function () {

console.log('domcontent ok')
});

$(document).ajaxSuccess(function (event, xhr, settings) {

console.log('ajax success ok')
});

$(document).ajaxComplete(function (event, xhr, settings) {

console.log('ajax complete ok')
});

$( window ).load(function() {

console.log('windows load ok')

});
