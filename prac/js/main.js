let resultElement = document.getElementById('aa');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plus = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiputeBtn = document.getElementById('multi');
const divisionBtn = document.getElementById('divi');

let action;
plus.onclick = function() {
    action = '+';
}
minusBtn.onclick = function() {
    action = '-';
}
multiputeBtn.onclick = function() {
    action = '*';
}
divisionBtn.onclick = function() {
    action = '/';
}

function changeColor(result) {
    if (result > 0 ) {
        resultElement.style.color = 'rgb(184, 0, 0)';
    } else {
        resultElement.style.color = 'black';
    }
    resultElement.textContent = result;
}

submitBtn.onclick = function a() {
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value);
        changeColor(sum);
    }
    else if (action == '-') {
        const mii = Number(input1.value) - Number(input2.value);
        changeColor(mii);
    }
    else if (action == '*') {
        const multipute = Number(input1.value) * Number(input2.value);
        changeColor(multipute);
    }
    else {
        const division = Number(input1.value) / Number(input2.value);
        changeColor(division);
    }
};
a();

