$(document).ready(function () {
    $(".scoreboard").toggle();
    $("#questions").toggle();
    $("#current-time").toggle();
    var currentTime = 35;
    var gameLength = 0;
    var wins = 0;
    var losses = 0;
    var list = 0;
    var correctAnswer = "";
    var value = "";
    var listClasses = ["option1", "option2", "option3", "option4"];


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
        ask = questionsAndAnswers.questions[y].question;
        return document.getElementById("questions").innerHTML = ask;
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

                    //Checking if correct on click
                    // $("li:nth-child(1)").attr("onclick", correctORNah());
                    break;

                case 1:
                    //adding a class to the ea. individual list item
                    $("li:nth-child(2)").addClass(listClasses[list]);

                    //global class
                    $("li:nth-child(2)").addClass("option");

                    // //adding a value to what was clicked
                    // $("li:nth-child(2)").attr("value", questionsAndAnswers.questions[x].options[1]);

                    // //adding onclick function
                    // $("li:nth-child(2)").attr("onclick", "checking()");

                    //applying the choices in the proper listing in html
                    $("li:nth-child(2)").text(questionsAndAnswers.questions[x].options[list]);
                    break;

                //Checking if correct on click
                // $("li:nth-child(2)").attr("onclick", correctORNah());

                case 2:
                    //adding a class to the ea. individual list item
                    $("li:nth-child(3)").addClass(listClasses[list]);

                    //global class
                    $("li:nth-child(3)").addClass("option");

                    // //adding a value to what was clicked
                    // $("li:nth-child(3)").attr("value", questionsAndAnswers.questions[x].options[2]);

                    // //adding onclick function
                    // $("li:nth-child(3)").attr("onclick", "checking()");

                    //applying the choices in the proper listing in html
                    $("li:nth-child(3)").text(questionsAndAnswers.questions[x].options[list]);

                    //Checking if correct on click
                    // $("li:nth-child(3)").attr("onclick", correctORNah());
                    break;

                case 3:
                    //adding a class to the ea. individual list item
                    $("li:nth-child(4)").addClass(listClasses[list]);

                    //global class
                    $("li:nth-child(4)").addClass("option");

                    // //adding a value to what was clicked
                    // $("li:nth-child(4)").attr("value", questionsAndAnswers.questions[x].options[3]);

                    // //adding onclick function
                    // $("li:nth-child(4)").attr("onclick", "checking()");

                    //applying the choices in the proper listing in html
                    $("li:nth-child(4)").text(questionsAndAnswers.questions[x].options[list]);

                    //Checking if correct on click
                    // $("li:nth-child(4)").attr("onclick", correctORNah());
                    break;
                default:
            }
        }
    }


    // WORKING TIMER 
    function counter() {
        $("#timer").text(currentTime);
        correctAnswer = questionsAndAnswers.questions[gameLength].answer;

        currentTime--;

        if (currentTime == 0) {
            losses++;
            gameLength++;

            // clearInterval(timer);
            currentTime = 35;


            alert("correct answer: " + correctAnswer);

        }

        $("#questions").show();
        $("#current-time").show();
        askingQuestion(gameLength);

        looping(gameLength);

        $(".option").on("click", function () {
            // $("li").on("click", function () {
            // addEventListener
            // var myClass = $(this).attr("class");
            // alert(myClass);

            // value = $(this).attr("value");
            value = ($(this).text());
            console.log("new value ", value);

            // console.log("whats this", $(this));

            // console.log("option clicked on: ", value)


            console.log("correct answer:", correctAnswer)
            // checkingIfRight();
            // displayQuestion();
            console.log("What's this: ", this);

            if (value === correctAnswer && currentTime > 0) {
                wins++;
                gameLength++;
                alert("You got it right!");

                currentTime = 35;
                // clearInterval(timer);


                if (gameLength === 10) {
                    endGame();
                }

                // uncomment
                // callTime();

            } else if (value !== correctAnswer) {
                losses++;
                gameLength++;

                currentTime = 35;
                // clearInterval(timer);


                //display correct answer
                alert("correct answer: " + correctAnswer);


                if (gameLength === 10) {
                    endGame();
                }


            }
        });

        function endGame() {
            console.log("game done");
            $(".scoreboard").show();
            $("#wins").text(wins);
            $("#losses").text(losses);
            $("#current-time").remove();
            $("#questions").remove();
            $("li").remove();
        }

    }

    function callTime() {
        setInterval(counter, 1000);
    }
    // restarting interval, to clear it or some shit
    // WORKING TIMER








    //Start Button -- Functional
    function clickingButton() {
        $("#start-button").on("click", function () {
            $("button").hide();

            // game();
            // $("#start-button").hide();
            // document.getElementById("start-button").hide();

            // currentTime = 30;
            callTime();

            $("#styleThis").attr("class", ".wrap");
        });
    };

    clickingButton();

    //Start Button

    // uncomment below
    // callTime();



    // GAME
    function game() {
        //Variables



        var createListElement;
        var indexQuestionArray;



        var questionDiv;
        var quest;

        //asking another questions
        var ask = "";

        // CHECKING IF RIGHT FUNCTION
        // function checkingIfRight() {

        //     if (value === correctAnswer) {
        //         wins++;
        //         $("#wins").text(wins);
        //         // alert("You got it right!");

        //         gameLength++;

        //     } else if (value !== correctAnswer) {
        //         losses++;
        //         $("#losses").text(losses);

        //         //display correct answer
        //         alert("correct answer: " + correctAnswer);
        //         // $("li").remove();

        //     }

        // }
        //CHECKING IF RIGHT FUNCTION




        // while (gameLength <= 9 && gameLength != 10) {
        // needs to be a while loop since for-loop is incrementing it without confirming if guess correct ot not

        // while (gameLength <= 9) {





        // ------------------------------------ Practice ------------------------------------


        // if (currentTime > 0) {
        //     askingQuestion(gameLength);
        //     looping(gameLength);

        // } else {

        // }



        // for (gameLength = 0; gameLength < 10; gameLength++) {
        //     //Trying to figure out error message in console,
        //     //TRying to get click event to function for each question


        //     askingQuestion(gameLength);

        // }



        // ------------------------------------ Practice ------------------------------------

        // INITIAL METHOD






        if (gameLength === 10) {
        }

        console.log("question i'm asking: ", askingQuestion(gameLength));
        console.log("options: ", questionsAndAnswers.questions[gameLength].options);
        console.log("index: ", gameLength);

        //End of game function
    }






    //RANDOM QUESTION LOCATION

    //first: ask question
    // if answer right, win++
    // if answer wrong, losses++, and display correct answer for a few seconds, then display new question


    //List question and answer CONSOLE MAIN
    console.log("Random Question: ", askingQuestion(gameLength));
    console.log("index of Question: ", gameLength);
    console.log("Answer of Question: ", questionsAndAnswers.questions[gameLength].answer);
    console.log("options: ", questionsAndAnswers.questions[gameLength].options);
    //console.log(questionsAndAnswers.questions[0])


    //end of document.ready
});




//Example from class
// var customer = {
//     firstName: "John",
//     lastName: "Smith",
//     age: 25,
//     address: {
//         streetAddress: "21 2nd Street",
//         city: "New York",
//         state: "NY",
//         postalCode: "10021"
//     },
//     phoneNumber: [{
//         type: "home",
//         number: "212 555-1234"
//     }, {
//         type: "fax",
//         number: "646 555-4567"
//     }]
// };
//output: type home
//console.log(customer.phoneNumber[0].type);

// FOR RANDOM QUESTION
    // //Allows me to return random objects indices in an object within a variable 
    // function randomQuestion(arrObject) {
    //     index = Math.floor(Math.random() * (arrObject.length));
    //     var random = arrObject[index].question;
    //     return random;
    // }

    // //holds random question
    // var callRandomQuestion = randomQuestion(questionsAndAnswers.questions);

    // //being able to display the random question with the function
    // function displayQuestion() {
    //     $("#questions").text(callRandomQuestion);
    // }

    // displayQuestion();
    // FOR RANDOM QUESTION


    // CLICK FUNCTION
    // $("li").click(function () {
        //     // var myClass = $(this).attr("class");
        //     // alert(myClass);

        //     value = $(this).attr("value");
        //     console.log("whats this", this);


        //     // console.log("option clicked on: ", value)
        //     correctAnswer = questionsAndAnswers.questions[gameLength].answer;
        //     // checkingIfRight();
        //     // displayQuestion();
        //     console.log("What's this: ", this);

        // });

        // CLICK FUNCTION