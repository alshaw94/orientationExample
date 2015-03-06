$(window).on("orientationchange",function(){
  if(window.orientation == 0) // Portrait
  {
    $("p").css({"background-color":"yellow","font-size":"300%"});
  }
  else // Landscape
  {
    $("p").css({"background-color":"pink","font-size":"200%"});
  }
});
