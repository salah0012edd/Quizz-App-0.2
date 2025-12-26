// Hardcoded questions (fallback/seed data)
const defaultQuestions = [
    {
        question: "L’informatique est :",
        answers: [
            { text: "L’étude des machines", correct: false },
            { text: "Le traitement automatique de l’information", correct: true },
            { text: "Une science mathématique", correct: false },
            { text: "Une science physique", correct: false }
        ]
    },
    {
        question: "Une information est :",
        answers: [
            { text: "Une donnée sans sens", correct: false },
            { text: "Un signal électrique", correct: false },
            { text: "Une donnée ayant un sens", correct: true },
            { text: "Un fichier informatique", correct: false }
        ]
    },
    {
        question: "Le boulier est un outil inventé par :",
        answers: [
            { text: "Les Grecs", correct: false },
            { text: "Les Romains", correct: false },
            { text: "Les Chinois", correct: true },
            { text: "Les Égyptiens", correct: false }
        ]
    },
    {
        question: "Qui a inventé la Pascaline ?",
        answers: [
            { text: "Charles Babbage", correct: false },
            { text: "Blaise Pascal", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "John Von Neumann", correct: false }
        ]
    },
    {
        question: "Question 5 (Texte manquant dans la demande)",
        answers: [
            { text: "1ère", correct: true },
            { text: "2ème", correct: false },
            { text: "3ème", correct: false },
            { text: "4ème", correct: false }
        ]
    },
    {
        question: "Un système informatique est composé de :",
        answers: [
            { text: "Logiciel uniquement", correct: false },
            { text: "Matériel uniquement", correct: false },
            { text: "Matériel et logiciel", correct: true },
            { text: "Réseau uniquement", correct: false }
        ]
    },
    {
        question: "Le cerveau de l’ordinateur est :",
        answers: [
            { text: "La carte mère", correct: false },
            { text: "Le processeur", correct: true },
            { text: "La RAM", correct: false },
            { text: "Le disque dur", correct: false }
        ]
    },
    {
        question: "Le rôle principal du processeur est :",
        answers: [
            { text: "Stocker les données", correct: false },
            { text: "Exécuter les instructions", correct: true },
            { text: "Afficher les images", correct: false },
            { text: "Alimenter le PC", correct: false }
        ]
    },
    {
        question: "La mémoire RAM est :",
        answers: [
            { text: "Permanente", correct: false },
            { text: "Volatile", correct: true },
            { text: "Externe", correct: false },
            { text: "Secondaire", correct: false }
        ]
    },
    {
        question: "La mémoire ROM sert à :",
        answers: [
            { text: "Stocker les programmes utilisateur", correct: false },
            { text: "Démarrer l’ordinateur", correct: true },
            { text: "Enregistrer les vidéos", correct: false },
            { text: "Sauvegarder les jeux", correct: false }
        ]
    },
    {
        question: "Le clavier est un périphérique :",
        answers: [
            { text: "De sortie", correct: false },
            { text: "D’entrée", correct: true },
            { text: "De stockage", correct: false },
            { text: "Mixte", correct: false }
        ]
    },
    {
        question: "L’imprimante est un périphérique :",
        answers: [
            { text: "D’entrée", correct: false },
            { text: "De sortie", correct: true },
            { text: "De stockage", correct: false },
            { text: "De calcul", correct: false }
        ]
    },
    {
        question: "Le disque dur sert à :",
        answers: [
            { text: "Calculer", correct: false },
            { text: "Stocker les données", correct: true },
            { text: "Afficher les images", correct: false },
            { text: "Commander le système", correct: false }
        ]
    },
    {
        question: "La carte graphique sert à :",
        answers: [
            { text: "Stocker les fichiers", correct: false },
            { text: "Traiter les images", correct: true },
            { text: "Gérer le réseau", correct: false },
            { text: "Lancer les programmes", correct: false }
        ]
    },
    {
        question: "L’unité minimale d’information est :",
        answers: [
            { text: "Octet", correct: false },
            { text: "Bit", correct: true },
            { text: "Byte", correct: false },
            { text: "Pixel", correct: false }
        ]
    },
    {
        question: "Un octet contient :",
        answers: [
            { text: "4 bits", correct: false },
            { text: "6 bits", correct: false },
            { text: "8 bits", correct: true },
            { text: "16 bits", correct: false }
        ]
    },
    {
        question: "Le système binaire utilise :",
        answers: [
            { text: "0 et 1", correct: true },
            { text: "1 et 2", correct: false },
            { text: "0 à 9", correct: false },
            { text: "A à F", correct: false }
        ]
    },
    {
        question: "Le nombre binaire 1010 correspond en décimal à :",
        answers: [
            { text: "8", correct: false },
            { text: "9", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Le code ASCII sert à :",
        answers: [
            { text: "Compresser les fichiers", correct: false },
            { text: "Représenter les caractères", correct: true },
            { text: "Accélérer l’ordinateur", correct: false },
            { text: "Créer des images", correct: false }
        ]
    },
    {
        question: "Un système d’exploitation permet :",
        answers: [
            { text: "De gérer le matériel", correct: true },
            { text: "De jouer uniquement", correct: false },
            { text: "De réparer le PC", correct: false },
            { text: "De naviguer sur Internet", correct: false }
        ]
    },
    {
        question: "Le BIOS permet :",
        answers: [
            { text: "De lancer le système", correct: true },
            { text: "D’éteindre l’ordinateur", correct: false },
            { text: "De supprimer les fichiers", correct: false },
            { text: "De lancer Internet", correct: false }
        ]
    },
    {
        question: "Windows est :",
        answers: [
            { text: "Un langage", correct: false },
            { text: "Un logiciel applicatif", correct: false },
            { text: "Un système d’exploitation", correct: true },
            { text: "Un antivirus", correct: false }
        ]
    },
    {
        question: "Un système multitâche permet :",
        answers: [
            { text: "Un seul programme", correct: false },
            { text: "Plusieurs programmes à la fois", correct: true },
            { text: "Aucun programme", correct: false },
            { text: "Un seul utilisateur", correct: false }
        ]
    },
    {
        question: "Linux est :",
        answers: [
            { text: "Un navigateur", correct: false },
            { text: "Un système d’exploitation", correct: true },
            { text: "Un antivirus", correct: false },
            { text: "Un logiciel de bureautique", correct: false }
        ]
    },
    {
        question: "Le partitionnement consiste à :",
        answers: [
            { text: "Supprimer le disque", correct: false },
            { text: "Diviser le disque en parties", correct: true },
            { text: "Nettoyer le disque", correct: false },
            { text: "Installer Windows", correct: false }
        ]
    },
    {
        question: "Le formatage permet :",
        answers: [
            { text: "De réparer le processeur", correct: false },
            { text: "De préparer un disque à l’utilisation", correct: true },
            { text: "D’augmenter la RAM", correct: false },
            { text: "D’éteindre l’ordinateur", correct: false }
        ]
    },
    {
        question: "Une partition principale permet :",
        answers: [
            { text: "D’installer un OS", correct: true },
            { text: "De naviguer sur Internet", correct: false },
            { text: "De jouer", correct: false },
            { text: "D’imprimer", correct: false }
        ]
    },
    {
        question: "Le formatage supprime :",
        answers: [
            { text: "Le matériel", correct: false },
            { text: "Les données", correct: true },
            { text: "Le système", correct: false },
            { text: "Le processeur", correct: false }
        ]
    },
    {
        question: "Sauvegarder signifie :",
        answers: [
            { text: "Effacer les données", correct: false },
            { text: "Copier les données", correct: true },
            { text: "Modifier les données", correct: false },
            { text: "Compresser les fichiers", correct: false }
        ]
    },
    {
        question: "Une sauvegarde sert à :",
        answers: [
            { text: "Ralentir l’ordinateur", correct: false },
            { text: "Restaurer les données", correct: true },
            { text: "Supprimer les virus", correct: false },
            { text: "Éteindre le PC", correct: false }
        ]
    },
    {
        question: "Un pilote (driver) permet :",
        answers: [
            { text: "De lancer Windows", correct: false },
            { text: "De faire communiquer le matériel et le système", correct: true },
            { text: "De supprimer des fichiers", correct: false },
            { text: "D’installer un jeu", correct: false }
        ]
    }
];

// Current Version of Data
const DATA_VERSION = "v_custom_01";

// Helper to get questions
function getStoredQuestions() {
    // Check version
    const storedVersion = localStorage.getItem('quizDataVersion');

    // If version mismatch or no data, re-seed
    if (storedVersion !== DATA_VERSION) {
        localStorage.setItem('quizQuestions', JSON.stringify(defaultQuestions));
        localStorage.setItem('quizDataVersion', DATA_VERSION);
        return defaultQuestions;
    }

    const stored = localStorage.getItem('quizQuestions');
    if (stored) {
        return JSON.parse(stored);
    }

    // Fallback
    localStorage.setItem('quizQuestions', JSON.stringify(defaultQuestions));
    localStorage.setItem('quizDataVersion', DATA_VERSION);
    return defaultQuestions;
}

class QuizApp {
    constructor() {
        this.homeScreen = document.getElementById('home-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.questionElement = document.getElementById('question');
        this.answerButtons = document.getElementById('answer-buttons');
        this.timeElement = document.getElementById('time');
        this.progressBar = document.getElementById('progress-bar');
        this.currentQuestionElement = document.getElementById('current-question');

        // Results/Analysis Elements
        this.correctAnswersEl = document.getElementById('correct-answers');
        this.incorrectAnswersEl = document.getElementById('incorrect-answers');
        this.scoreEl = document.getElementById('score');
        this.progressMessageEl = document.getElementById('progress-message');
        this.analysisContainer = document.getElementById('analysis-container');
        this.toggleAnalysisBtn = document.getElementById('toggle-analysis-btn');

        this.currentQuestionIndex = 0;
        this.score = 0; // Raw count of correct answers
        this.timer = null;
        this.timeLeft = 0;
        this.selectedQuestions = []; // The subset for this run
        this.userAnswers = []; // Store { question, userAnswer, correctAnswer, isCorrect }

        this.init();
    }

    init() {
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.resultsScreen.classList.remove('active');
            this.homeScreen.classList.add('active');
        });

        if (this.toggleAnalysisBtn) {
            this.toggleAnalysisBtn.addEventListener('click', () => {
                const isHidden = this.analysisContainer.style.display === 'none';
                this.analysisContainer.style.display = isHidden ? 'block' : 'none';
                this.toggleAnalysisBtn.innerHTML = isHidden ?
                    '<i class="fas fa-chevron-up"></i> Hide Analysis' :
                    '<i class="fas fa-list"></i> View Detailed Analysis';
            });
        }
    }

    startQuiz() {
        const allQuestions = getStoredQuestions();

        if (allQuestions.length === 0) {
            alert("No questions found! Please go to Manage Questions and add some.");
            return;
        }

        // Shuffle and use ALL questions
        this.selectedQuestions = [...allQuestions]
            .sort(() => Math.random() - 0.5);

        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];

        this.homeScreen.classList.remove('active');
        this.quizScreen.classList.add('active');

        this.showQuestion();
    }

    showQuestion() {
        this.resetState();
        const question = this.selectedQuestions[this.currentQuestionIndex];

        this.currentQuestionElement.textContent = this.currentQuestionIndex + 1;
        // Update progress bar based on total SELECTED questions, not always 20
        const total = this.selectedQuestions.length;
        this.progressBar.style.width = `${((this.currentQuestionIndex) / total) * 100}%`;

        // Update "Question X/Y" text
        const countDisplay = document.querySelector('.question-count');
        if (countDisplay) {
            countDisplay.innerHTML = `Question <span id="current-question">${this.currentQuestionIndex + 1}</span>/${total}`;
        }

        this.questionElement.textContent = question.question;

        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer-btn', 'btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.dataset.index = index; // Store index for tracking
            button.addEventListener('click', (e) => this.selectAnswer(e, answer));
            this.answerButtons.appendChild(button);
        });

        this.startTimer();
    }

    resetState() {
        clearInterval(this.timer);
        this.timeElement.parentElement.classList.remove('danger'); // specific style removal if any
        while (this.answerButtons.firstChild) {
            this.answerButtons.removeChild(this.answerButtons.firstChild);
        }
    }

    startTimer() {
        this.timeLeft = 30;
        this.timeElement.textContent = this.timeLeft;

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.timeElement.textContent = this.timeLeft;

            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.handleTimeOut();
            }
        }, 1000);
    }

    handleTimeOut() {
        // Record as wrong (null answer)
        this.recordAnswer(null, false);

        Array.from(this.answerButtons.children).forEach(button => {
            button.disabled = true;
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
        });
        setTimeout(() => this.nextQuestion(), 1500);
    }

    selectAnswer(e, selectedAnswer) {
        clearInterval(this.timer);
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';

        this.recordAnswer(selectedAnswer, correct);

        if (correct) {
            selectedButton.classList.add('correct');
            this.score++;
        } else {
            selectedButton.classList.add('wrong');
        }

        Array.from(this.answerButtons.children).forEach(button => {
            button.disabled = true; // disable all
            if (button.dataset.correct === 'true') {
                button.classList.add('correct'); // show correct one
            }
        });

        setTimeout(() => this.nextQuestion(), 1500);
    }

    recordAnswer(selectedAnswerObj, isCorrect) {
        const currentQ = this.selectedQuestions[this.currentQuestionIndex];
        const correctAnsObj = currentQ.answers.find(a => a.correct);

        this.userAnswers.push({
            question: currentQ.question,
            userAnswer: selectedAnswerObj ? selectedAnswerObj.text : "Time Out",
            correctAnswer: correctAnsObj.text,
            isCorrect: isCorrect
        });
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.selectedQuestions.length) {
            this.showQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.add('active');

        const total = this.selectedQuestions.length;
        const percentage = Math.round((this.score / total) * 100);

        this.correctAnswersEl.textContent = this.score;
        this.incorrectAnswersEl.textContent = total - this.score;
        this.scoreEl.textContent = percentage;

        this.saveAndCompareProgress(percentage);
        this.generateAnalysis();
    }

    saveAndCompareProgress(currentPercentage) {
        const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');

        let message = "First attempt! Keep going.";
        if (history.length > 0) {
            const lastScore = history[history.length - 1].score;
            if (currentPercentage > lastScore) {
                message = `Great job! You improved by ${currentPercentage - lastScore}% from last time.`;
            } else if (currentPercentage < lastScore) {
                message = `You dropped by ${lastScore - currentPercentage}% from last time. Keep practicing!`;
            } else {
                message = "Consistent performance. Same score as last time.";
            }
        }

        this.progressMessageEl.textContent = message;

        // Save headers
        history.push({
            date: new Date().toISOString(),
            score: currentPercentage,
            total: this.selectedQuestions.length,
            correct: this.score
        });
        localStorage.setItem('quizHistory', JSON.stringify(history));
    }

    generateAnalysis() {
        this.analysisContainer.innerHTML = '';
        this.analysisContainer.style.display = 'none'; // reset to hidden
        this.toggleAnalysisBtn.innerHTML = '<i class="fas fa-list"></i> View Detailed Analysis'; // reset button text

        this.userAnswers.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'analysis-item';
            div.style.padding = '1rem';
            div.style.marginBottom = '0.5rem';
            div.style.background = 'var(--surface)';
            div.style.borderLeft = item.isCorrect ? '4px solid var(--success)' : '4px solid var(--error)';
            div.style.borderRadius = '4px';

            div.innerHTML = `
                <p style="margin-bottom:0.5rem; font-weight:bold;">${index + 1}. ${item.question}</p>
                <div style="font-size:0.9rem; display:flex; gap:1rem; flex-wrap:wrap;">
                    <span style="color: ${item.isCorrect ? 'var(--success)' : 'var(--error)'}">
                        Your Answer: ${item.userAnswer}
                    </span>
                    ${!item.isCorrect ? `<span style="color: var(--success)">Correct Answer: ${item.correctAnswer}</span>` : ''}
                </div>
            `;
            this.analysisContainer.appendChild(div);
        });
    }
}

// Start the app
const app = new QuizApp();