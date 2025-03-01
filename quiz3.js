const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "Which language is used for web development?",
        options: ["Java", "Python", "C#", "JavaScript"],
        answer: 3
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
        answer: 0
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "12"],
        answer: 1
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "HO2"],
        answer: 1
    },
    {
        question: "Which animal is known as the king of the jungle?",
        options: ["Tiger", "Elephant", "Lion", "Cheetah"],
        answer: 2
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        answer: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: 2
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let attemptedQuestions = 0;
let correctAnswers = 0;

function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question-container").innerHTML = questionObj.question;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = '';
    questionObj.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedIndex) {
    const questionObj = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    // Mark the selected answer
    options.forEach((option, index) => {
        if (index === selectedIndex) {
            if (index === questionObj.answer) {
                option.classList.add("correct");
                correctAnswers++;
            } else {
                option.classList.add("wrong");
            }
        } else if (index === questionObj.answer) {
            option.classList.add("correct");
        }
    });

    attemptedQuestions++;

    // Show next button
    document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `You attempted ${attemptedQuestions} questions.`;

    if (correctAnswers === questions.length) {
        resultContainer.innerHTML += `<div id="victory">Yahoo! You answered all questions correctly!</div>`;
    } else {
        resultContainer.innerHTML += `<br>Correct Answers: ${correctAnswers}<br>Incorrect Answers: ${attemptedQuestions - correctAnswers}`;
    }

    document.getElementById("next-button").style.display = "none";
}

// Start the game
displayQuestion();
