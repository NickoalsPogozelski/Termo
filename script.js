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

        const currentLength = input.value.length;

        if (currentLength === 1 && input.id < lastArrayElement){
            input.nextElementSibling.focus();
        }
    }

    parseAnswer() {
        let parsedAnswer = '';

        this.answer.forEach((letra) => {
            parsedAnswer += letra;
        })
          
        console.log(parsedAnswer);
        return parsedAnswer;
    }
}

class MainGame extends Word {

    constructor(){
        super();
        this.isAnswerRight = null;
    }

    onInputChange(input){
        let answerIndex = input.id % 5;

        this.parseInput(input);
        this.answer[answerIndex] = input.value;
        console.log(this.answer);
    }

    fillInputOnResult(result, index, letter) {
        const input = document.getElementById(index);
        const key = document.getElementById(letter);
        
        switch(result){

            case 'Right':
                input.classList.remove("neutral");
                input.classList.remove("wrong");
                input.classList.add("right");
                
                key.classList.remove("key-neutral");
                key.classList.add("right");
            break;

            case 'Wrong':
                input.classList.remove("neutral");
                input.classList.add("wrong");

                key.classList.remove("key-neutral");
                key.classList.add("wrong");
            break;

            case 'Kindof':
                input.classList.remove("neutral");
                input.classList.remove("wrong");
                input.classList.add("kindof");

                key.classList.remove("key-neutral");
                key.classList.add("kindof");
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

        this.answer = [];

        for (let i = firstUnlockedElement; i <= lastUnlockedElement; i++){
            const formInput = document.getElementById(i);

            formInput.removeAttribute('disabled');
            formInput.classList.remove('disabled');
            formInput.classList.add('neutral');
        }

        document.getElementById(firstUnlockedElement.toString()).focus();
    }

    onSubmitHandler(){
        let rightLetters = 0;
        console.log(this.answer);
        
        if(this.checkAnswer()){

            if (this.tries === 6){
                alert('You lost the Game');
            }

            this.answer.forEach((answerLetter, answerIndex) => {
                let gridElement = 0;

                if(this.tries == 1){
                    gridElement = answerIndex;
                } else {
                    const iterator = (this.tries - 1) * 5;
                    gridElement = answerIndex + iterator;
                }
                
                
                this.splitRandomWord().forEach((randomWordLetter, RandomWordIndex) => {
                    console.log(gridElement);
                    if(randomWordLetter.toUpperCase() == answerLetter && answerIndex == RandomWordIndex){    
                        this.fillInputOnResult('Right', gridElement, answerLetter);
                        rightLetters++;
                        return;
                    } else if (randomWordLetter.toUpperCase() == answerLetter){
                        this.fillInputOnResult('Kindof', gridElement, answerLetter);
                        return;
                    } else if (randomWordLetter.toUpperCase() != answerLetter) {
                        console.log("WRONG!!!! why: ", randomWordLetter, " and: ", answerLetter, ".... also if you wanna know: ", answerIndex, RandomWordIndex );
                        this.fillInputOnResult('Wrong', gridElement, answerLetter);
                    }          

                })
            })
           
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
