(function() {

    var infoCard;

    // Create InfoCard constructor
    // infoList parameter gets an unordered list DOM element
    infoCard = function (infoList) {

            this.list = document.getElementById(infoList.list);

        };

    infoCard.prototype = {

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

            console.dir($(this.list).children());

            $(this.list).find("li").on("click", function (e) {

                e.preventDefault();
                
                var info = $(this).find(".info").html();

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

                $("#transparentOverlay").on("click", function () {

                    $("#transparentOverlay").remove();
                    $("#bubble").remove();

                });

            }

          /*
           *  Create "bubble" method. This method creates the profile card.
           */
            function bubble(info) {

                $("body").prepend('<div id="bubble">' + info + '</div>');

                var bubbleWidth = $("#bubble").width(),
                    windowWidth = $(window).width(),
                    centerAlign = Math.floor((windowWidth / 2), 10) - Math.floor((bubbleWidth / 2), 10);

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

            $(this.list).find("li").on("click", function (e) {

                e.preventDefault();

                setTransparentOverlay();
                bubble($(this).find(".info").html());

            });

        }

    };

    this.InfoCard = infoCard;


}());
