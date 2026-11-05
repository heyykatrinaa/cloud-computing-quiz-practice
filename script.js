
const questions = [
    {
        question: "What does IaaS stand for?",
        answers: [
            "Infrastructure as a Service",
            "Internet as a Service",
            "Information as a Service",
            "Integration as a Service"
        ],
        correct: 0
    },
    {
        question: "Which of the following is an example of PaaS?",
        answers: [
            "Google Docs",
            "Netlify",
            "Microsoft Word",
            "Gmail"
        ],
        correct: 1
    },
    {
        question: "What does SaaS stand for?",
        answers: [
            "Storage as a Service",
            "System as a Service",
            "Software as a Service",
            "Security as a Service"
        ],
        correct: 2
    },
    {
        question: "Which service allows users to use software online?",
        answers: [
            "IaaS",
            "PaaS",
            "SaaS",
            "Hardware"
        ],
        correct: 2
    },
    {
        question: "What is a main benefit of PaaS?",
        answers: [
            "Users must manage physical servers",
            "Developers can focus on building applications",
            "Users must buy hardware",
            "It only works offline"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");

function showQuestion() {
    selectedAnswer = null;
    nextButton.disabled = true;

    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answersElement.innerHTML = "";

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;

        button.addEventListener("click", () => {
            selectedAnswer = index;

            document.querySelectorAll("#answers button")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");
            nextButton.disabled = false;
        });

        answersElement.appendChild(button);
    });

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question";
}

nextButton.addEventListener("click", () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quizElement.style.display = "none";
        resultElement.style.display = "block";
        resultElement.innerHTML = `
            <h2>Quiz Finished!</h2>
            <p>Your Score: ${score} / ${questions.length}</p>
        `;
    }
});

showQuestion();
