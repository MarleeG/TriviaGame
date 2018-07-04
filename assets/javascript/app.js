$(document).ready(function () {
    $(".scoreboard").toggle();
    $("#questions").toggle();
    $("#current-time").toggle();
    $("#again-button").toggle();
    var currentTime;
    var gameLength = 0;
    var wins = 0;
    var losses = 0;
    var unanswered = 0;
    var list = 0;
    var correctAnswer = "";
    var value = "";
    var listClasses = ["option1", "option2", "option3", "option4"];
    var timer;
    
    //Start Button -- Functional
    function clickingButton() {
        $("#start-button").on("click", function () {
            $("#start-button").hide();

            $("#current-time").show();

            clearInterval(timer);
            currentTime = 35;
            callTime();
        });
    };

    clickingButton();

    var questionsAndAnswers = {
        //question1: 'In "The Little Mermaid," who is NOT one of Triton's da ',
        questions: [{
            //1
            //index: 0
            question: "In \"The Little Mermaid,\" who is NOT one of Triton's daughter?",
            options: ['Alana', 'Adrina', 'Attina', 'Adora'],
            answer: "Adora",
            //displayed: false

        }, {
            //2
            //index: 1
            question: "Which phrase does the Evil Queen in \"Snow White\" actually say?",
            options: ['\"Mirror, mirror, on the wall — who is the fairest of them all?\"', '\"Magic mirror, on the wall — who is the fairest one of all?\"', '\"Mirror, mirror, on the wall — who is the fairest one of all?\"', '\"Magic mirror, on the wall — who is the fairest of them all?\"'],
            answer: "\"Magic mirror, on the wall — who is the fairest one of all?\""
        }, {
            //3
            //index: 2
            question: "In the movie \"Tangled,\" Flynn Rider is wanted dead or alive according to his wanted poster because he's a...",
            options: ['Treasonist', 'Thief', 'Robber', 'Bandit'],
            answer: "Thief"
        }, {
            //4
            //index: 3
            question: "Which glass slipper did Cinderella leave behind at the ball?",
            options: ['Left', 'Right'],
            answer: "Left"
        }, {
            //5
            //index: 4
            question: "In \"Sleeping Beauty,\" what is the name of Maleficent’s pet raven?",
            options: ['Mauvais', 'Malum', 'Diable', 'Diablo'],
            answer: "Diablo"
        }, {
            //6
            //index: 5
            question: "Finish the lyrics: “Wouldn't you think I'm the girl, the girl who has everything? Look at this trove, treasures untold…”",
            options: ['\"How many wonders can one cavern hold?\"', '\"Wonders from all over the world.\"', '\"It’s full of gizmos and gadgets galore.\"', '\"There so much to be known.\"'],
            answer: "\"How many wonders can one cavern hold?\""
        }, {
            //7
            //index: 6
            question: "In \"Pocahontas,\" what did Pocahontas see in her dream that made her believe that a change was coming?",
            options: ['A strange cloud formation', 'A burning blue fire', 'A spinning arrow', 'A hawk circling her village'],
            answer: "A spinning arrow"
        }, {
            //8
            //index: 7
            question: "In \"The Lion King,\" what side of Scar's face is his scar on?",
            options: ['Left', 'Right'],
            answer: "Left"
        }, {
            //9
            //index: 8
            question: "In \"Frozen,\" how many brothers does Hans have?",
            options: ['12', '9', '15', '7'],
            answer: "12"
        }, {
            //10
            //index: 9
            question: "Finish the lyrics: \"My soul is spiraling in frozen fractals all around…\"",
            options: ['\"That wraps my heart in a cold and distant past.\"', '\"And all my problems are far gone in the past.\"', '\"Somehow I’ve now been given a new chance.\"', '\"And one thought crystallizes like an icy blast.\"'],
            answer: "\"And one thought crystallizes like an icy blast.\""

        }
        ],
    };

    function askingQuestion(y) {
        var quest = $("#questions");
        var Q = quest.text(questionsAndAnswers.questions[y].question);
        return Q;
    }

    //looping through options array
    //Creating list items dynamically -- depending on length of options
    function looping(x) {
        $("li").remove();
        for (list = 0; list < questionsAndAnswers.questions[x].options.length; list++) {

            //appending list tag to <ol> in html
            $("#options").append("<li>");

            switch (list) {
                case 0:
                    //adding a class to the ea. individual list item
                    $("li:nth-child(1)").addClass(listClasses[list]);

                    //global class
                    $("li:nth-child(1)").addClass("option");

                    //applying the choices in the proper listing in html
                    $("li:nth-child(1)").text(questionsAndAnswers.questions[x].options[list]);
                    break;

                case 1:
                    //adding a class to the ea. individual list item
                    $("li:nth-child(2)").addClass(listClasses[list]);

                    //global class
                    $("li:nth-child(2)").addClass("option");

                    //applying the choices in the proper listing in html
                    $("li:nth-child(2)").text(questionsAndAnswers.questions[x].options[list]);
                    break;

                case 2:
                    //adding a class to the ea. individual list item
                    $("li:nth-child(3)").addClass(listClasses[list]);

                    //global class
                    $("li:nth-child(3)").addClass("option");

                    //applying the choices in the proper listing in html
                    $("li:nth-child(3)").text(questionsAndAnswers.questions[x].options[list]);
                    break;

                case 3:
                    //adding a class to the ea. individual list item
                    $("li:nth-child(4)").addClass(listClasses[list]);

                    //global class
                    $("li:nth-child(4)").addClass("option");

                    //applying the choices in the proper listing in html
                    $("li:nth-child(4)").text(questionsAndAnswers.questions[x].options[list]);
                    break;
                default:
            }
        }
    }

    // // WORKING TIMER 
    function counter() {
        correctAnswer = questionsAndAnswers.questions[gameLength].answer;

        askingQuestion(gameLength);
        looping(gameLength);

        $("#timer").show();

        console.log("currentTime: ", currentTime);
        console.log("gameLength: ", gameLength);

        if (currentTime === -1) {
            unanswered++;
            losses++;
            gameLength++;

            clearInterval(timer);
            currentTime = 35;
            callTime();

            if (gameLength === 10) {
                endGame();
                clearInterval(timer);
            }
            alert("correct answer: " + correctAnswer);
        }

        $(".option").on("click", function () {

            value = ($(this).text());

            if (value === correctAnswer && currentTime > -1) {
                wins++;
                gameLength++;

                clearInterval(timer);
                currentTime = 35;
                callTime();

                if (gameLength === 10) {
                    endGame();
                    clearInterval(timer);
                }

                alert("You got it right!");
            } else if (value !== correctAnswer) {
                losses++;
                gameLength++;

                clearInterval(timer);
                currentTime = 35;
                callTime();

                if (gameLength === 10) {
                    endGame();
                    clearInterval(timer);
                }

                alert("correct answer: " + correctAnswer);
            }
        });

        $("#timer").text(currentTime);
        $("#questions").show();
        currentTime--;
    }

    function endGame() {
        $(".scoreboard").show();
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#unanswered").text(unanswered);
        $("#current-time").empty();
        $("#questions").empty();
        $("li").remove();
        $("#again-button").toggle();
        $("#timer").hide();
    }

    // TRY AGAIN FUNCTION
    $("#again-button").on("click", function () {

        // callTime();
        gameLength = 0;
        wins = 0;
        losses = 0;
        unanswered = 0;
        list = 0;
        correctAnswer = "";
        value = "";
        
        $(".scoreboard").toggle();
        $("#again-button").hide();
        $("#start-button").show();
        clickingButton();
    });


    function callTime() {
        timer = setInterval(counter, 1000);
        return timer;
    }

    //List question and answer CONSOLE MAIN
    // console.log("Question: ", askingQuestion(gameLength));
    // console.log("index of Question: ", gameLength);
    // console.log("Answer of Question: ", questionsAndAnswers.questions[gameLength].answer);
    // console.log("options: ", questionsAndAnswers.questions[gameLength].options);
});