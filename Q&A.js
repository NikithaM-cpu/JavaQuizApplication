const questions = [
    //50 questions for users to answer and to be randomized
    {
        question: "What is the sum of 23 and 67 ?",
        optionA: "85",
        optionB: "80",
        optionC: "89",
        optionD: "90",
        correctOption: "optionD"
    },

    {
        question: "What is the sum of 30 and 20?",
        optionA: "40",
        optionB: "80",
        optionC: "50",
        optionD: "55",
        correctOption: "optionC"
    },

    {
        question: "What is the sum of 80 and 20?",
        optionA: "40",
        optionB: "100",
        optionC: "80",
        optionD: "82",
        correctOption: "optionB"
    },


    {
        question: "What is the sum of 100 and 20?",
        optionA: "120",
        optionB: "20",
        optionC: "12",
        optionD: "102",
        correctOption: "optionA"
    },


    {
        question: "What is the sum of 2 and 2?",
        optionA: "2",
        optionB: "4",
        optionC: "8",
        optionD: "7",
        correctOption: "optionB"
    },


    {
        question: "What is the sum of 44 and 22?",
        optionA: "77",
        optionB: "98",
        optionC: "88",
        optionD: "66",
        correctOption: "optionB"
    },

    {
        question: "What is the sum of 55 and 2?",
        optionA: "56",
        optionB: "46",
        optionC: "47",
        optionD: "57",
        correctOption: "optionD"
    },

    {
        question: "What is the sum of 92 and 2?",
        optionA: "96",
        optionB: "94",
        optionC: "98",
        optionD: "97",
        correctOption: "optionB"
    },

    {
        question: "What is the sum of 12 and 2?",
        optionA: "12",
        optionB: "14",
        optionC: "18",
        optionD: "17",
        correctOption: "optionB"
    },

    {
        question: "62 + 62 = ",
        optionA: "128",
        optionB: "124",
        optionC: "122",
        optionD: "138",
        correctOption: "optionA"
    },

     {
        question: "What is the sum of 2 and 2?",
        optionA: "2",
        optionB: "4",
        optionC: "8",
        optionD: "7",
        correctOption: "optionB"
    },
    
    {
        question: "How many times does 5 go into 555?",
        optionA: "102",
        optionB: "111",
        optionC: "152",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "How many times does 2 go into 100?",
        optionA: "60",
        optionB: "50",
        optionC: "2",
        optionD: "25",
        correctOption: "optionB"
    },

    {
        question: "How many times does 3 go into 555?",
        optionA: "102",
        optionB: "111",
        optionC: "152",
        optionD: "None of the above",
        correctOption: "optionD"
    },
    
    {
        question: "How many times does 2 go into 666?",
        optionA: "222",
        optionB: "111",
        optionC: "333",
        optionD: "All of the above",
        correctOption: "optionC"
    },

    {
        question: "How many times does 555 go into 555?",
        optionA: "1",
        optionB: "0",
        optionC: "2",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "How many times does 25 go into 100?",
        optionA: "10",
        optionB: "5",
        optionC: "3",
        optionD: "None of the above",
        correctOption: "optionD"
    },

    {
        question: "How many times does 25 go into 100?",
        optionA: "4",
        optionB: "5",
        optionC: "3",
        optionD: "6",
        correctOption: "optionA"
    },

    {
        question: "How many times does 33 go into 66?",
        optionA: "2",
        optionB: "11",
        optionC: "6",
        optionD: "11",
        correctOption: "optionA"
    },

    {
        question: "How many times does 40 go into 80?",
        optionA: "8",
        optionB: "4",
        optionC: "2",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "How many times does 2 go into 4?",
        optionA: "2",
        optionB: "1",
        optionC: "All of the above",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "100 - 50 = ",
        optionA: "2",
        optionB: "50",
        optionC: "5",
        optionD: "25",
        correctOption: "optionB"
    },

    {
        question: "4 - 50 = ?",
        optionA: "54",
        optionB: "46",
        optionC: "-45",
        optionD: "-46",
        correctOption: "optionD"
    },

    {
        question: "100 - 200 = ?",
        optionA: "10",
        optionB: "100",
        optionC: "-100",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "Which of the given subtraction sentence is true?",
        optionA: "100 - 50 = 50",
        optionB: "80 - 20 = 60",
        optionC: "5 - 5 = 0",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Which of the given subtraction sentence is true?",
        optionA: "10 - 5 = 5",
        optionB: "8 - 2 = 6",
        optionC: "15 - 5 = 10",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Which of the given subtraction sentence is true?",
        optionA: "105 - 5 = 115",
        optionB: "82 - 2 = 78",
        optionC: "15 - 15 = 10",
        optionD: "None of the above",
        correctOption: "optionD"
    },

    {
        question: "Which of the given subtraction sentence is true?",
        optionA: "12 - 6 = 9",
        optionB: "18 - 2 = 12",
        optionC: "115 - 5 = 100",
        optionD: "None of the above",
        correctOption: "optionD"
    },

    {
        question: "2005 - 1000 = ?",
        optionA: "1000",
        optionB: "1005",
        optionC: "10005",
        optionD: "1050",
        correctOption: "optionB"
    },

    {
        question: "2005 - 1005 = ?",
        optionA: "1000",
        optionB: "1005",
        optionC: "10005",
        optionD: "1050",
        correctOption: "optionA"
    },

    {
        question: "2 * 3 = ?",
        optionA: "6",
        optionB: "5",
        optionC: "4",
        optionD: "8",
        correctOption: "optionA"
    },

    {
        question: "12 * 2 = ?",
        optionA: "48",
        optionB: "24",
        optionC: "33",
        optionD: "14",
        correctOption: "optionB"
    },

    {
        question: "3 * 6= ?",
        optionA: "18",
        optionB: "12",
        optionC: "All of the above",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "3 * 3= ?",
        optionA: "6",
        optionB: "12",
        optionC: "All of the above",
        optionD: "None of the above",
        correctOption: "optionD"
    },

    {
        question: "3 * 3= ?",
        optionA: "9",
        optionB: "12",
        optionC: "All of the above",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "How many times does 4 go into 8= ?",
        optionA: "3",
        optionB: "4",
        optionC: "All of the above",
        optionD: "None of the above",
        correctOption: "optionD"
    },

    {
        question: "3 * 9= ?",
        optionA: "18",
        optionB: "12",
        optionC: "All of the above",
        optionD: "None of the above",
        correctOption: "optionD"
    },

    {
        question: "Sum of 2 and 3= ?",
        optionA: "8",
        optionB: "2",
        optionC: "All of the above",
        optionD: "5",
        correctOption: "optionD"
    },
    {
        question: "11 * 2= ?",
        optionA: "33",
        optionB: "22",
        optionC: "44",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "What is the sum of 5 * 2 = ?",
        optionA: "20",
        optionB: "10",
        optionC: "All of the above",
        optionD: "None of the above",
        correctOption: "optionB"
    },
]

//An Array to hold shuffled selected questions out of all available questions
let shuffledQuestions = [] 

//function to shuffle and push 5 questions to shuffledQuestions array
function handleQuestions() { 
    
//App will deal with 5 questions per user
    while (shuffledQuestions.length <= 4) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
function NextQuestion(index) {
    //Handles displaying players and quiz information to dom
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 4) {
//displays next question as long as index number isn't greater than 4, remember index number starts from 0, so index 4 is question 5
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 4 meaning we're already at the 5th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 1) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 3 && playerScore < 4) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 4) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 5) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}