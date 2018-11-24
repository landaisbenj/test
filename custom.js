$( document ).ready(function() {

  if ($('#main-view div.row').next().length != 0 ){
console.log('Ready ok')
		}
  

});

document.addEventListener('DOMContentLoaded', function () {

  if ($('#main-view div.row').next().length != 0 ){
console.log('domcontent ok')
  }
});

$(document).ajaxSuccess(function (event, xhr, settings) {

  if ($('#main-view div.row').next().length != 0 ){
console.log('ajax success ok')
  }
});

$(document).ajaxComplete(function (event, xhr, settings) {

  if ($('#main-view div.row').next().length != 0 ){
console.log('ajax complete ok')
  }
});

$( window ).load(function() {

  if ($('#main-view div.row').next().length != 0 ){
console.log('windows load ok')
  }
});
