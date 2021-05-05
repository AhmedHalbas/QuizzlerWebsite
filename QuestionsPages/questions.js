$(function() {

    getRequest();

});
var timerId;
var dataObj;
var correctAns;
var quest_timer;
var score = 0;
var categories_title = location.search.toString().split('?')[1].split('=')[1];


$("#categories_title").html(categories_title + " Quiz");
if (categories_title == "Movies") {
    InsertPlay('<i id="game_icon" class="fas fa-film"></i>',
        '<img id="game_player" src="../Images/movies2.png">');
} else if (categories_title == "Music") {
    InsertPlay('<i id="game_icon" class="fas fa-music"></i>',
        '<img id="game_player" src="../Images/drums.png">');
} else if (categories_title == "Sports") {
    InsertPlay('<img id="game_player" src="../Images/basketball2.png"></img>',
        ' <i id="game_icon" class="fas fa-basketball-ball"></i>');
}

function InsertPlay(html_element_1, html_element_2) {
    $("body").append(html_element_1);
    $("body").append(html_element_2);
}
$("body").append("<div id='some_div'></div>");
var typingTimer;
var flag = 1;
var count = 0;


///stop submission time
function stopTime(e) {
    clearTimeout(typingTimer);
    if (e.keyCode == 13) {
        execute();
    }
}

///question timer goes out and wrong answer
function startQuestion() {

    /////////////// timer/////////////////////////////////////
    var timeLeft = 30;
    var elem = document.getElementById('some_div');
    timerId = setInterval(function() {
        if (timeLeft == -1)
            timeLeft = 30;
        else {
            elem.innerHTML = '00 : ' + timeLeft;
            timeLeft--;
        }
    }, 1000);

    ///////////////////////////////////////////////////

    quest_timer = setTimeout(function() {

        clearInterval(timerId);
        wrongAnswer();
        setQuestion(count);
        count++;

    }, 30000);


}

function terminateQuestionTime() {
    clearTimeout(quest_timer);
    clearInterval(timerId);

}


function resetQuestionHTML() {
    $("#ques").html("");
    $("#cell1").html("");


}


function execute() {

    console.log("correct ans", correctAns);
    var answer = document.getElementById("answerText").value;
    console.log("correct ans", answer);
    answer = answer.toString().toLowerCase().trim();
    console.log(answer);

    if (correctAns != answer) {

        document.getElementById("answerText").value = "";


    } else {
        console.log("else");
        score += 10;
        $("#points").html(score + "/100");
        document.getElementById("cell1").innerHTML = correctAns.toString();
        document.getElementById("cell1").style.background = "white";
        document.getElementById("answerText").value = "";
        $("#game_icon").stop(true, true, false);
        terminateQuestionTime();
        var waiting = setTimeout(function() {
            document.getElementById("cell1").style.background = "#322059";
            setQuestion(count);
            AnimateIcon();
            clearTimeout(waiting);
        }, 1000);

    }


}


function guess() {
    if (!flag) AnimateIcon();
    typingTimer = setTimeout(execute, 3000);
}

function AnimateIcon() {

    $("#game_icon").stop(true, false, false);
    $("#game_icon").fadeIn();
    $("#game_icon").css("top", "120px");
    flag = 1;
    $("#game_icon").animate({
        top: '55%'
    }, {
        duration: 30000,
        specialEasing: {
            left: "linear"
        },
        complete: function() {
            $(this).toggle("fade");
            $('#game_player').effect("shake", { times: 3 }, 'slow');
        }
    });
}

function wrongAnswer() {
    flag = 0;
    $("#game_icon").stop(true, false, true);

    $("#game_icon").animate({
        top: '120px'
    }, {
        duration: 2000,
        specialEasing: {
            top: "linear"
        },
        complete: function() {
            $('#game_icon').effect("bounce", { times: 3 }, 'slow');
            setTimeout(AnimateIcon, 400);

        }
    });

}

function getRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'Jsons/' + categories_title + '.json');
    xhr.send('');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4)
            if (xhr.status === 200) {
                dataObj = JSON.parse(xhr.responseText);
                console.log(dataObj);
                setQuestion(count);
                AnimateIcon();

            }

    }

}

function setQuestion(counter) {

    if (counter !== 10) {
        startQuestion();
        $("#ques").html(getQuestion(counter).toString());
        $('#num').html(counter + 1);
        correctAns = getAnswer(counter);
        console.log("ans", correctAns);
        correctAns = correctAns.toString().toLowerCase().trim();
        count++;
    } else {
        var lastScore = parseInt(getCookie(getCookie("categoryName").toLowerCase() + "HScore"));
        if (lastScore < score) setCookie(categories_title.toLowerCase().trim() + "HScore", score, true);
        console.log(score);
        terminateQuestionTime();
        location.replace('../Results_Page/results.html');
        return;
    }
}

function getQuestion(counter) {
    return dataObj['results'][counter].question;
}

function getAnswer(counter) {
    return dataObj['results'][counter].correct_answer;
}
function endHere()
{
    var currScore = parseInt(getCookie(getCookie("categoryName").toLowerCase() + "HScore"));
        if (currScore < score) setCookie(categories_title.toLowerCase().trim() + "HScore", score, true);
        console.log(score);
        terminateQuestionTime();
    location.replace("../HomePage/homePage.html");
}