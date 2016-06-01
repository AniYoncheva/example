$(document).ready(function () {
    toolbar.render('.container');
    toolbar.createButton('#link', '#container-link', '.btn-success');
    toolbar.createText('#text', '#container-text', '.btn-info');
  
    $("#link").draggable();
    $("#text").draggable();
    $("#container-link").draggable();
    $("#container-text").draggable();

});





