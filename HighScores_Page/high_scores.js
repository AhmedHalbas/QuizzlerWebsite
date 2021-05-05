$("#logo").click(function() {
    location.assign('../Login-page/login.html');

});

$("#logo").mouseover(function() {
    $("#logo").css('cursor', 'pointer');
});
$("#musicWinner,#moviesWinner,#sportsWinner").text(getCookie("userName") == null ? "No Player Yet" : getCookie("userName"));

$("#musicHScore").text(getCookie("musicHScore") == null ? 0 : getCookie("musicHScore"));

$("#sportsHScore").text(getCookie("sportsHScore") == null ? 0 : getCookie("sportsHScore"));

$("#moviesHScore").text(getCookie("moviesHScore") == null ? 0 : getCookie("moviesHScore"));