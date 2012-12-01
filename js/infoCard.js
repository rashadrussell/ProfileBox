function InfoBubble(infoList) {

    this.list = infoList;

}

InfoBubble.setTransparentOverlay = function() {
  $("body").prepend('<div id="transparentOverlay"></div>');

  //$("#transparentOverlay").css("margin-top", scrollHeight);

  $("#transparentOverlay").bind("click", function(){
    $("#transparentOverlay").remove();
    $("#bubble").remove();
  });
}

InfoBubble.bubble = function(info) {
  $("body").append('<div id="bubble">' + info +'</div>');
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
      return 5;

    
  });

}

InfoBubble.prototype.popup = function() {
  console.dir($(this.list).find("li"));
  $(this.list).find("li").bind("click", function(){

    InfoBubble.setTransparentOverlay();
    InfoBubble.bubble($(this).find("#profile_info").html());    

  });
}




/*
$("#members_list").click(function(){
       $("body").prepend('<div id="fadeScreen"></div>');
       
       var width  = document.body.scrollWidth;
       var height = document.body.scrollHeight;
              
       var fadeOverlay = document.getElementById("fadeScreen");
       
       fadeOverlay.style.height = height;
       fadeOverlay.style.width - width;
       
        $(this).append('<p class="bubble">Hello</p>');
        $(this).find('p.bubble').animate({
              height: 320,
              width: 320,
              "top": "-10",
              "right": "10",
              "bottom": "10",
              "left": "-10"
        },200);
               
       $("#fadeScreen").on('click',function(e){
              console.log(e.pageY);
              
            if(e.pageY < 188) {
              $("#fadeScreen").remove();
              $(".bubble").remove();
            }
       });
            
});
*/
