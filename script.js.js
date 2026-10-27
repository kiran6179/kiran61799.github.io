// Interactive Quiz Checker Function for Unit 1 Sample Question
function checkQuiz() {
    const selected = document.querySelector('input[name="q1"]:checked');
    const resultElement = document.getElementById('quiz-result');

    if (!selected) {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Please select an option before submitting!';
        return;
    }

    if (selected.value === 'B') {
        resultElement.style.color = 'green';
        resultElement.textContent = 'Correct! Marketing begins with customer needs and creates value[cite: 1].';
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Incorrect. The correct answer is B: Marketing begins with customer needs and creates value[cite: 1].';
    }
}

// Smooth scrolling and interactive enhancements
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});