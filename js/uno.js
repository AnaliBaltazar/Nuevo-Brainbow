$(document).ready(function(){
  $("#navbarNav").on("hide.bs.collapse", function(){
    $(".boton-menu").html('<i class="material-icons icono-bm"> menu </i>');
  });
  $("#navbarNav").on("show.bs.collapse", function(){
    $(".boton-menu").html('<i class="material-icons icono-bc"> close </i>');
  });
  });