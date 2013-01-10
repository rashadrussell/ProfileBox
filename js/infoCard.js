(function () {

    

    // Create InfoCard constructor
    // infoList parameter gets an unordered list DOM element
    InfoCards = function (infoList) {

            this.list = document.getElementById(infoList.list);

        };

    InfoCards.prototype = {

    /*
     *  Initialize InfoCards
     */
        init : function () {

            this.getInfo();
            this.popup();

        },

    /*
     *  Create the "getInfo" instance method. This method gathers the profile information of each
     *  members' li element.
     */
        getInfo : function () {

            $(this.list).find("li").bind("click", function () {

                var info = $(this).find("#profile_info").html();

            });

        },

        /*
         *  Create "popup" instance method. This method combines the "setTransparentOverlay" and
         *  the "bubble" methods to create the entire effect.
         */
        popup : function () {

          /* 
           *  Create "setTransparentOverlay" method to place a transparent screen to cover
           *  the page when an li element is clicked.
           */
            function setTransparentOverlay() {

                $("body").prepend('<div id="transparentOverlay"></div>');

                $("#transparentOverlay").bind("click", function () {

                    $("#transparentOverlay").remove();
                    $("#bubble").remove();

                });

            }

          /*
           *  Create "bubble" method. This method creates the profile card.
           */
            function bubble(info) {

                $("body").append('<div id="bubble">' + info + '</div>');

                var bubbleWidth = $("#bubble").width(),
                    windowWidth = $(window).width(),
                    centerAlign = parseInt((windowWidth / 2), 10) - parseInt((bubbleWidth / 2), 10);

                $("#bubble").css("margin-left", centerAlign);

                $("body").find('#bubble').animate({
                    height: 320,
                    width: 320,
                    "top": "-10",
                    "right": "10",
                    "bottom": "10",
                    "left": "-10"
                }, 200);

            }

            $(this.list).find("li").bind("click", function () {

                setTransparentOverlay();
                bubble($(this).find("#profile_info").html());

            });

        }

    };


}());
