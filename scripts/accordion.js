$(document).ready(function(){

  $( function() {
    const icons = {
      header: "ui-icon-circle-plus",
      activeHeader: "ui-icon-circle-minus"};

    $( "#accordion" )
      .accordion({
        icons:icons,
        collapsible: "true",
        heightStyle: "content"
      })
  } );
})