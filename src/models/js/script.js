let submit = document.getElementById('submit');

function calcul_rpn() {
    let result = document.getElementById('result');
    let calcul = document.getElementById('calcul');

    if (result && calcul) {
        result.innerHTML = "=<br><br>" + rpn(calcul.value);
    }
}

if (submit) {
    submit.addEventListener("click", calcul_rpn);
}