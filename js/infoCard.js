// Create InfoBubble constructor
// infoList parameter gets an unordered list DOM element
function InfoBubble(infoList) {

    this.list = infoList;

}

/* 
Create "setTransparentOverlay" static method to place a transparent screen to cover
the page when an li element is clicked.
*/
InfoBubble.setTransparentOverlay = function() {
  $("body").prepend('<div id="transparentOverlay"></div>');

  $("#transparentOverlay").bind("click", function(){
    $("#transparentOverlay").remove();
    $("#bubble").remove();
  });
}

/*
Create "bubble" static method. This method creates the profile card.
*/
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

/*
Create the "getInfo" instance method. This method gathers the profile information of each
members' li element.
*/
InfoBubble.prototype.getInfo = function(){

  $(this.list).find("li").bind("click", function(){

      var info = $(this).find("#profile_info").html();
    
  });

}

/*
Create "popup" instance method. This method combines the "setTransparentOverlay" and
the "bubble" methods to create the entire effect.
 */
InfoBubble.prototype.popup = function() {
  $(this.list).find("li").bind("click", function(){

    InfoBubble.setTransparentOverlay();
    InfoBubble.bubble($(this).find("#profile_info").html());    

  });
}
