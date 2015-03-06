$(window).on("orientationchange",function(){
  if(window.orientation == 0) // Portrait
  {
    $("p").css({"background-color":"yellow","font-size":"300%"});
  }
  else // Landscape
  {
    alert("This App is to be used in portrait only!");
  }
});
