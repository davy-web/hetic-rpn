// Ajax
const $form = $('#form');

$form.on('submit', submitHandler);

function submitHandler(e) {
    e.preventDefault();

    let result = document.getElementById('result');
    let calcul = document.getElementById('calcul');

    $.ajax({
        url: '/calculate',
        type: 'POST',
        data: $form.serialize()
    }).done(response => {
        result.innerHTML = response.result;
        calcul.value = response.calcul;
    });
}

// Bouton
function click_button(element) {
    let calcul = document.getElementById('calcul');
    let text = element.srcElement.innerText;

    if (text == "c") {
        calcul.value = "";
    }
    else if (text == "space") {
        calcul.value = calcul.value + " ";
    }
    else if (text == "supp") {
        calcul.value = calcul.value.substring(0, calcul.value.length - 1);
    }
    else {
        calcul.value = text ? calcul.value + text : calcul.value + " ";
    }
}

function click_button_event(class_button) {
    let button = document.getElementsByClassName(class_button);

    if (button) {
        let button_length = button.length;

        for (let i = 0; i < button_length; i++) {
            button[i].addEventListener("click", click_button);
        }
    }
}

click_button_event("button");
click_button_event("button_operator");
click_button_event("button_function");