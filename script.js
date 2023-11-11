import palavras from './palavras.js';

let answer = [];
let wordOfTheDay = "";
let tries = 1;

const validateInput = (input) => {
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
}

const getRandomWord = () => {
    const randomWord = palavras[Math.floor(Math.random()*palavras.length)];
    return randomWord.toUpperCase();
}

wordOfTheDay = getRandomWord();

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
    //document.getElementById(index).removeAttribute("id");

    //createInput();
}

const unlockTries = () =>{

    for(let i = tries * 5; i <= ((tries + 1) * 5) - 1; i++){
        const formInput = document.getElementById(i);

        formInput.removeAttribute('disabled');
        formInput.classList.remove('bg-gray-500');
        formInput.classList.add('bg-transparent');
    }

}

const onFormSend = () => {

    const rightWord = wordOfTheDay.split("");

    for(let i = (tries - 1) * 5; i <= ((tries) * 5) - 1; i++){
        console.log(i);
        
        rightWord.forEach((e) => {
            //console.log(i);
            if(e == answer[i]){
                //console.log('right');
                filledResult(true, i);
            } else {
                //console.log('wrong' + e);
                filledResult(false, i);
            }
        })
    }


    unlockTries();
    tries += 1;
}

//generateForm();

window.validateInput = validateInput;
window.onInputChange = onInputChange;
window.onFormSend = onFormSend;
