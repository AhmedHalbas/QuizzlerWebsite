$(function() {
    $(".veen .hiscrBtn button").on("click", function() {
        $('#logo').switchClass('yellow', 'red', 5000, "easeOutBounce").effect("bounce", { times: 3, direction: "right" }, 1000);
        $('.veen .wrapper').addClass('move', 1000, "easeOutBounce");
        $('.veen .wrapper').addClass('switch');
        $('body').animate({
            backgroundColor: "#e0b722"
        }, 1000, 'easeOutBounce');
        $(".veen .playBtn button").removeClass('active');
        $(this).addClass('active');

    });
    $(".veen .playBtn button").on("click", function() {
        $('#logo').switchClass('red', 'yellow', 5000, "easeOutBounce").effect("bounce", { times: 3, direction: "right" }, 1000);
        $('.veen .wrapper').removeClass('move', 1000, "easeOutBounce");
        $('.veen .wrapper').removeClass('switch');
        $('body').animate({
            backgroundColor: '#322059'
        }, 1000, 'easeOutBounce');
        $(".veen .hiscrBtn button").removeClass('active');
        $(this).addClass('active');
    });

    $('#playBtn').click(function() {
        window.location.href = '../Category_Page/category.html';
    });


    $('#hiscrBtn').click(function() {
        window.location.href = '../HighScores_Page/high_scores.html';
    });

});