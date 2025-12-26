// admin.js

document.addEventListener('DOMContentLoaded', () => {
    const questionForm = document.getElementById('question-form');
    const questionList = document.getElementById('question-list');
    const totalQuestionsSpan = document.getElementById('total-questions');

    // We need to access the methods from script.js, or duplicate logic.
    // For simplicity and decoupling, let's manage localStorage directly here.
    // Ideally, we'd have a shared DataManager class, but we can read 'quizQuestions' directly.

    function loadQuestions() {
        const storedQuestions = localStorage.getItem('quizQuestions');
        if (storedQuestions) {
            return JSON.parse(storedQuestions);
        }
        // If not in storage, we might want to alert or just show empty. 
        // For now, let's assume script.js might have seeded it, or we start empty.
        // If we want to share the seed data from script.js 'questions' array,
        // we need to know if script.js ran. Since we included script.js in admin.html,
        // 'questions' global variable from script.js (if accessible) could be used.
        // However, script.js is currently wrapped in a class or just global const.
        // Let's assume the user visited index.html once OR we explicitly check the global 'questions' var.

        if (typeof questions !== 'undefined' && questions.length > 0) {
            // Seed localStorage if empty
            saveQuestions(questions);
            return questions;
        }
        return [];
    }

    function saveQuestions(qs) {
        localStorage.setItem('quizQuestions', JSON.stringify(qs));
        updateUI();
    }

    function updateUI() {
        const allQuestions = loadQuestions();
        totalQuestionsSpan.textContent = allQuestions.length;
        questionList.innerHTML = '';

        allQuestions.slice().reverse().forEach((q, index) => {
            // Index in displayed list is reversed, so we need the real index for deletion
            const realIndex = allQuestions.length - 1 - index;

            const item = document.createElement('div');
            item.className = 'question-item';

            const textDiv = document.createElement('div');
            textDiv.style.flex = '1';
            textDiv.innerHTML = `<strong>${q.question}</strong><br><small>${q.answers.find(a => a.correct).text}</small>`;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-delete';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.onclick = () => deleteQuestion(realIndex);

            item.appendChild(textDiv);
            item.appendChild(deleteBtn);
            questionList.appendChild(item);
        });
    }

    function deleteQuestion(index) {
        if (confirm('Are you sure you want to delete this question?')) {
            const allQuestions = loadQuestions();
            allQuestions.splice(index, 1);
            saveQuestions(allQuestions);
        }
    }

    questionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const questionText = document.getElementById('question-text').value;
        const answersInputs = document.querySelectorAll('.answer-input');
        const correctIndex = parseInt(document.getElementById('correct-answer').value);

        const newAnswers = Array.from(answersInputs).map((input, index) => {
            return {
                text: input.value,
                correct: index === correctIndex
            };
        });

        const newQuestion = {
            question: questionText,
            answers: newAnswers
        };

        const allQuestions = loadQuestions();
        allQuestions.push(newQuestion);
        saveQuestions(allQuestions);

        questionForm.reset();
        alert('Question added successfully!');
    });

    updateUI();
});
