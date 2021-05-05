$(function() {
    var categories_title = location.search.toString().split('?')[1].split('=')[1];
    console.log("category_title", categories_title);
    $("#categories_title").html(categories_title + " Quiz");


    $("#game_icon").animate({
        top: '60%'
    }, {
        duration: 5000,
        specialEasing: {
            left: "linear"
        },
        complete: function() {
            $(this).fadeOut();
            $('#game_player').effect("shake", { times: 3 }, 'slow');
        }
    });

    $("#stop").click(function() {
        console.log("stop");
        $("#game_icon").stop(true, true, true);
    });

    $("#back").click(function() {
        console.log("back");
        $("#game_icon").stop(true, false, true);

        $("#game_icon").animate({
            top: '120px'
        }, {
            duration: 2000,
            specialEasing: {
                left: "linear"
            },
            complete: function() {
                $('#game_icon').effect("bounce", { times: 3 }, 'slow');
            }
        });
    });

});