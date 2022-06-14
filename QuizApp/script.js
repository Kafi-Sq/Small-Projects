const quizData = [
    {
        question: 'What is the capital of Somalia?',
        a: 'Galkacyo',
        b: 'Bosaso',
        c: 'Mogadishu',
        d: 'Hargeisa',
        correct: 'c'
    },
    {
        question: 'Who was the latter president in WW2',
        a: 'Henry S. Truman',
        b: 'John F. Kennedy',
        c: 'Franklin D. Roosevelt',
        d: 'Obama',
        correct: 'a',
    },
    {
        question: 'What is the most used programming language?',
        a: 'C',
        b: 'Python',
        c: 'JavaScript',
        d: 'Java',
        correct: 'd'
    },
    {
        question: 'What country won the 2018 World Cup?',
        a: 'Croatia',
        b: 'France',
        c: 'Japan',
        d: 'Germany',
        correct: 'b'
    },
    {
        question: 'What number does not belong in the series: (1,2,6,10,12,16,32)',
        a: '2',
        b: '12',
        c: '10',
        d: '32',
        correct: 'c'
    },
    {
        question: 'What city is the most walkable city in the world?',
        a: 'New York',
        b: 'Marrakech',
        c: 'Paris',
        d: 'Florence',
        correct: 'd'
    },
    {
        question: 'How old is Lebron James?',
        a: '32',
        b: '37',
        c: '45',
        d: '30',
        correct: 'b'
    },
    {
        question: 'What is the highest grossing movie?',
        a: 'Avatar',
        b: 'Avengers: Endgame',
        c: 'Titanic',
        d: 'Star Wars: Episode VII',
        correct: 'a'
    },
];

let currentQuestion = 0;
let score = 0;

const quizEl = document.getElementById('quiz');
const answersEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const sumbitBtn = document.getElementById('submit')

loadQuiz();

function loadQuiz(){
    deSelect();
    const currentQ = quizData[currentQuestion];
    questionEl.innerText = currentQ.question;
    a_text.innerText = currentQ.a;
    b_text.innerText = currentQ.b;
    c_text.innerText = currentQ.c;
    d_text.innerText = currentQ.d;
    
}

function getSelected(){
    let answer = undefined;
    answersEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelect(){
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

sumbitBtn.addEventListener('click', () => {
    // Check to see answer
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>Score: ${score}/${quizData.length}</h2>`
        }
    }
});

