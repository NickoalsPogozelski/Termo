import palavras from './palavras.js';

let answer = [];
let wordOfTheDay = "";

const validateInput = (input) => {
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
}

const getRandomWord = () => {
    const randomWord = palavras[Math.floor(Math.random()*palavras.length)];
    return randomWord.toUpperCase();
}

wordOfTheDay = getRandomWord();

const createInput = (key) => {
    const letterInput = document.createElement('input');
    const containerDiv = document.getElementById('container');

    letterInput.setAttribute('type', 'text');
    letterInput.setAttribute('id', key);
    letterInput.setAttribute('class', 'w-10 h-10 mx-1 text-bold text-md rounded-md bg-transparent border-4 text-3xl text-center text-gray-100 focus:border-8 focus:outline-none');
    letterInput.setAttribute('onkeyup', 'onInputChange(this)');

    containerDiv.appendChild(letterInput);
}

const generateForm = () => {
    const word = wordOfTheDay.split("");

    word.forEach((char, index) => {
        createInput(index);
        console.log(index);
    })
    console.log(word);
    
}

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
}

const onFormSend = () => {

    const rightWord = wordOfTheDay.split("");

    rightWord.forEach((e, index) => {
        if(e == answer[index]){
            console.log('right');
            filledResult(true, index);
        } else {
            console.log('wrong' + e);
            filledResult(false, index);
        }
    })
}

generateForm();

window.validateInput = validateInput;
window.onInputChange = onInputChange;
window.onFormSend = onFormSend;