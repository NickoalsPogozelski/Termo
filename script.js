import palavras from './palavras.js';

class Word {

    constructor() {
        this.wordOfTheDay = this.getRandomWord().toUpperCase();
        this.answer = [];
        this.tries = 1;
    }

    getFirstArrayElement(){
        return (this.tries - 1) * 5;
    }

    getLastArrayElement(){
        return (this.tries * 5) - 1;
    }

    getRandomWord() {
        return palavras[Math.floor(Math.random() * palavras.length)];
    }

    splitRandomWord(){
        return this.wordOfTheDay.split("");
    }

    parseInput(input) {
        input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
        const lastArrayElement = this.getLastArrayElement();

        //Auto Focus
        const currentLength = input.value.length;

        if (currentLength === 1 && input.id < lastArrayElement){
            input.nextElementSibling.focus();
        }
    }

    parseAnswer() {
        let parsedAnswer = '';

        const firstArrayElement = this.getFirstArrayElement();
        const lastArrayElement = this.getLastArrayElement();

        for (let i = firstArrayElement; i <= lastArrayElement; i++){
            parsedAnswer += this.answer[i];

        }

        return parsedAnswer;
    }
}

class MainGame extends Word {

    constructor(){
        super();
        this.isAnswerRight = null;
    }

    onInputChange(input){
        this.parseInput(input);
        this.answer[input.id] = input.value;
    }

    fillInputOnResult(result, index) {
        const input = document.getElementById(index);
        
        switch(result){

            case 'Right':
                input.classList.remove("neutral");
                input.classList.add("right");
            break;

            case 'Wrong':
                input.classList.remove("neutral");
                input.classList.add("wrong");
            break;

            case 'Kindof':
                input.classList.remove("neutral");
                input.classList.add("kindof");
            break;

        }

        input.setAttribute("disabled", true);
    }

    checkAnswer(){

        let isCorrect = false;
        let initializedParsedAnswer = this.parseAnswer();

        for (const palavra of palavras) {
            if (palavra.toUpperCase() === initializedParsedAnswer) {
                isCorrect = true;
                break;
            }
        }
        
        return isCorrect;

    }

    unlockNewGrid(){
        let firstUnlockedElement = this.tries * 5;
        let lastUnlockedElement = ((this.tries + 1) * 5) - 1; 

        for (let i = firstUnlockedElement; i <= lastUnlockedElement; i++){
            const formInput = document.getElementById(i);

            formInput.removeAttribute('disabled');
            formInput.classList.remove('disabled');
            formInput.classList.add('neutral');
        }

        document.getElementById(firstUnlockedElement.toString()).focus();
    }

    onSubmitHandler(){
        const firstArrayElement = this.getFirstArrayElement();
        const lastArrayElement = this.getLastArrayElement();

        if(this.checkAnswer()){
            let rightLetters = 0;

            if (this.tries === 5){
                alert('You lost the Game');
            }

            for(let i = firstArrayElement; i <= lastArrayElement; i++){
                
                this.splitRandomWord().forEach((letter, index) => {
                    if(letter.toUpperCase() == this.answer[i]){    
                    
                        if ( index + firstArrayElement === i ){
                            this.fillInputOnResult('Right', i);
                            rightLetters++;
                        } else {
                            this.fillInputOnResult('Kindof', i);
                        }
                        
                    } else {
                        this.fillInputOnResult("Wrong", i);
                    }
                })
            }

        if (rightLetters === 5) {
            alert("You Won!");
        } else {
            this.unlockNewGrid();
            this.tries++;
        }
        }
    }
}

export {MainGame};
const Game = new MainGame();
window.Game = Game;
