const display = document.querySelector('.calc-display');
const buttons = document.querySelectorAll( '.calc-num, .calc-action, .calc-dot');
const cleaner = document.querySelector('.calc-display-clean');
const equal = document.querySelector('.calc-result');
let isResetNeeded = false;

buttons.forEach( el => el.addEventListener('click', numberActClick) );
cleaner.addEventListener('click', cleanerClick );
equal.addEventListener('click', equalClick);

function numberActClick (e) {
    const target = e.target;
    if(isResetNeeded) { 
        cleanerClick();
        isResetNeeded = false;
    }
    display.value += target.innerText;
}

function cleanerClick (e) {
    display.value = '';
}
    
function equalClick (e) {
    const result = eval(display.value);
    if(isFinite(result)) {
        display.value = result;
    } else {
        display.value = 'NaN';
        isResetNeeded = true;
    }
}    