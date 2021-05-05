$("#logo,#exitBtn").click(function() {
    location.assign('../Login-page/login.html');

});


$("#playAgainBtn").click(function() {
    location.assign('../Category_Page/category.html');

});

$("#logo,#exitBtn,#playAgainBtn").mouseover(function() {
    $(this).css('cursor', 'pointer');
});

$("#score").html(getCookie(getCookie("categoryName").toLowerCase() + "HScore"));