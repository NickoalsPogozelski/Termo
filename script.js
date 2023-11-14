import palavras from './palavras.js';

let answer = [];
let wordOfTheDay = "";
let tries = 1;

document.getElementById("0").focus();

const validateInput = (input) => {
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();

    const maxLength = parseInt(input.getAttribute('maxlength'));
    const currentLength = input.value.length;

    if (currentLength === maxLength){
        const nextInput = input.nextElementSibling;
        nextInput.focus();
    }
}

const getRandomWord = () => {
    const randomWord = palavras[Math.floor(Math.random()*palavras.length)];
    return randomWord.toUpperCase();
}

wordOfTheDay = getRandomWord();

const onInputChange = (input) => {

    validateInput(input);
    answer[input.id] = input.value;

    console.log(answer)
}

const filledResult = (right, index) => {
    
    if (right) {
        document.getElementById(index).classList.remove("bg-transparent");
        document.getElementById(index).classList.add("bg-green-400");
        document.getElementById(index).classList.add("border-green-400");
    } else {
        document.getElementById(index).classList.remove("bg-transparent");
        document.getElementById(index).classList.add("bg-red-400");
        document.getElementById(index).classList.add("border-red-400");
    }

    document.getElementById(index).setAttribute("disabled", true);

    //document.getElementById(index).removeAttribute("id");

    //createInput();
}

const unlockTries = () =>{

    for(let i = tries * 5; i <= ((tries + 1) * 5) - 1; i++){
        const formInput = document.getElementById(i);

        formInput.removeAttribute('disabled');
        formInput.classList.remove('bg-gray-700');
        formInput.classList.add('bg-transparent');
        formInput.classList.remove('border-gray-700');

    }

    let lastItemFromRow = tries * 5;
    document.getElementById(lastItemFromRow.toString()).focus();

}

const checkAnswer = () => {
    let parsedAnswer = '';
    let checked = false;

    for (let i = (tries - 1) * 5; i <= ((tries) * 5) - 1; i++) {
        parsedAnswer += answer[i];
        console.log(answer[i] + " - " + i);
    }

    palavras.forEach((palavra) => {
        if ( palavra.toUpperCase() == parsedAnswer){
            console.log(true);
            checked = true;
        }
    })
    console.log(parsedAnswer);
    console.log(wordOfTheDay);
    return checked;
}

const onFormSend = () => {

    const check = checkAnswer();

    console.log(check);

    if ( check ){

    if (tries == 5){
        alert('Você perdeu!');
    }

    const rightWord = wordOfTheDay.split("");

    for(let i = (tries - 1) * 5; i <= ((tries) * 5) - 1; i++){
        console.log(i);
        
        rightWord.forEach((e, index) => {
            //console.log(i);
            if(e === answer[i]){
                
                console.log(index, answer[i], i, index);

                if ( index + ((tries - 1)* 5) === i ) {
                    filledResult(true, i);
                } else {
                    document.getElementById(i).classList.remove("bg-transparent");
                    document.getElementById(i).classList.add("bg-yellow-400");
                    document.getElementById(i).classList.add("border-yellow-400");
                }
                
            } else {
                //console.log('wrong' + e);
                filledResult(false, i);
            }
        })
    }

    unlockTries();
    tries += 1;
    
    }
}

//generateForm();

window.validateInput = validateInput;
window.onInputChange = onInputChange;
window.onFormSend = onFormSend;
