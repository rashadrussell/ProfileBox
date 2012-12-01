function InfoBubble(infoList) {

    this.list = infoList;

}

InfoBubble.setTransparentOverlay = function() {
  $("body").prepend('<div id="transparentOverlay"></div>');

  $("#transparentOverlay").bind("click", function(){
    $("#transparentOverlay").remove();
    $("#bubble").remove();
  });
}

InfoBubble.bubble = function(info) {
  $("body").append('<div id="bubble">' + info +'</div>');

  var bubbleWidth = $("#bubble").width();
  var windowWidth = $(window).width();
  var centerAlign = parseInt(windowWidth/2) - parseInt(bubbleWidth/2);

  $("#bubble").css("margin-left", centerAlign);
        $("body").find('#bubble').animate({
              height: 320,
              width: 320,
              "top": "-10",
              "right": "10",
              "bottom": "10",
              "left": "-10"
        },200);
}

InfoBubble.prototype.getInfo = function(){

  $(this.list).find("li").bind("click", function(){

      var info = $(this).find("#profile_info").html();
    
  });

}

InfoBubble.prototype.popup = function() {
  $(this.list).find("li").bind("click", function(){

    InfoBubble.setTransparentOverlay();
    InfoBubble.bubble($(this).find("#profile_info").html());    

  });
}
