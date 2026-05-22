const semuaTombol = document.querySelectorAll('#btn-container button');
const input = document.getElementById('input');

let currentInput = '';
let isResult = false;
const operators = ['+', '-', '*', '/'];

function updateDisplay() {
    input.value = currentInput || '0';
}

semuaTombol.forEach(tombol => {
    tombol.addEventListener('click', () => {
    const nilai = tombol.textContent;

    if (nilai === 'C') {
        currentInput = '';
        isResult = false;
        updateDisplay();
        return;
    }

    if (nilai === '=') {
        try {
        currentInput = String(eval(currentInput));
    } catch {
        currentInput = '';
        input.value = 'Error';
        return;
    }
        sResult = true;
        updateDisplay();
        return;
    }

    if (isResult && !operators.includes(nilai)) {
        currentInput = '';
        isResult = false;
    }

    const lastChar = currentInput[currentInput.length - 1];
    if (operators.includes(nilai)) {
        if (currentInput === '') return;
        if (operators.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + nilai;
        updateDisplay();
        return;
        }
    }

    currentInput += nilai;
    updateDisplay();
    });
});