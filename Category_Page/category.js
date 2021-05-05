$(function() {
    var categories = $(".category1");
    var toggleflag = 1;
    var music = $(categories[0]);
    var movies = $(categories[1]);
    var sports = $(".category2");
    var windowWidth = window.innerWidth;
    console.log(windowWidth);
    console.log("cat", categories);
    console.log(categories);

    function ShakeOnMouseON(category, icon_1, icon_2) {
        category.mouseover(function() {
            console.log("mouseover function");
            if (toggleflag) {
                console.log("click", this);
                toggleflag = 0;
                icon_1.hide();
                icon_2.show("fold", 600);
                $(this).effect("shake", {
                    times: 2
                }, 'slow');
                var timer = setTimeout(function() {
                    toggleflag = 1;
                    clearTimeout(timer);
                }, 1000);
            }

        });


        category.mouseleave(function() {
            console.log("mouseout function");
            icon_2.hide("fold", 600);
            icon_1.show();


        });
    }


    function AnimateONCategoryClick(html_element, category, category_name) {
        category.click(function() {
            setCookie('categoryName', category_name, true);
            $(".categoriesContainer1").hide();
            $(".categoriesContainer2").hide();
            console.log("animate on click function");
            console.log("animate ", category_name);
            $("#header").after(html_element);
            var left_1 = windowWidth - parseInt($(this).css("width")) - 200;
            var left_2 = windowWidth - parseInt($(this).css("width"));
            left_1 = left_1 + "px";
            left_2 = left_2 + "px";
            if (category === music) {

                $('#Category_Icon_Wrapper').addClass("relative");
                $('#Category_Icon_Wrapper').animate({
                    left: left_1
                }, {
                    duration: 1200,
                    specialEasing: {
                        left: "linear"
                    },
                    step: function() {
                        $('#Category_Icon_2').effect("bounce", {
                            times: 3
                        }, 'slow');
                    },
                    complete: function() {
                        location.assign('../QuestionsPages/question2.html' + '?category=' + category_name);

                    }

                });

            } else {
                $('#Category_Icon').addClass("relative");
                $('#Category_Icon').animate({
                        left: left_1
                    }, 1000,
                    function() {
                        location.assign('../QuestionsPages/question2.html' + '?category=' + category_name);
                    }
                );
                $('#Category_Icon_2').animate({
                    left: left_2
                }, 800);

            }
            var category_title = category_name + ' Category <b> ARE YOU READY !!! </b>';
            $("#categories_title").html(category_title);


        });

    }

    ShakeOnMouseON(music, music.children("div").children("#music_icon"), music.children("div").children("#play"));
    ShakeOnMouseON(movies, movies.children("div").children("#burger_icon"), movies.children("div").children("#eat"));
    ShakeOnMouseON(sports, sports.children("div").children("#sports_icon"), sports.children("div").children("#football"));

    AnimateONCategoryClick(' <div id="Category_Icon_Wrapper"><img id="Category_Icon" src="../Images/runner2.png"></img> <i style="margin-top:250px;" id="Category_Icon_2" class="fas fa-futbol"></i></div>', sports, 'Sports');
    AnimateONCategoryClick(' <div id="Category_Icon_Wrapper"><img id="Category_Icon" src="../Images/movies2.png"></img></div>', movies, 'Movies');
    AnimateONCategoryClick(' <div id="Category_Icon_Wrapper"><img id="Category_Icon" src="../Images/drums.png"></img> <i style="margin-top:0px;" id="Category_Icon_2" class="fas fa-music"></i></div>', music, 'Music');


    $("#logo").click(function() {
        location.assign('../Login-page/login.html');

    });

    $("#logo").mouseover(function() {
        $("#logo").css('cursor', 'pointer');
    });




});