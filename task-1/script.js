// script.js

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
        answer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.className = "option-btn";
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    submitBtn.style.display = "none";
    result.textContent = `Your score: ${score} / ${questions.length}`;
}

submitBtn.addEventListener("click", loadQuestion);

// Load the first question
loadQuestion();
