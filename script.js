const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const selection = document.querySelector(".selection")
const easy = document.querySelector(".easy")
const normal = document.querySelector(".normal")
const hard = document.querySelector(".hard")
const question = document.querySelector(".question")
const questionNumber = document.querySelector(".game .QuestionNumber")
const submit = document.querySelector(".submit")
const next = document.querySelector(".next")
const popUp = document.querySelector(".popUp");
const final = document.querySelector(".final");
const homeButton = document.querySelector(".home")

const clickSound = document.getElementById("click")
const clap = document.getElementById("clap")
const completed = document.getElementById("completed")
const lose = document.getElementById("lose")

let easyQ;
let normalQ;
let hardQ;

let current;
let totalQuestion = 3;
let score;
var choice1;
var choice2;
var choice3;
let choosenAnswer1;
let choosenAnswer2;
let choosenAnswer3;
var choosenImage1;
var choosenImage2;
var choosenImage3;
let qIndex;

var correctAnswer1;
var correctAnswer2;
var correctAnswer3;
var correctImage1;
var correctImage2;
var correctImage3;

let chosenBtn1 = false;
let chosenBtn2;
let chosenBtn3;
let chosenBtn4;
let chosenBtn5;
let chosenBtn6;
let chosenBtn7;

let tempArray = [];
let correctDrink

let allQuestion = [
    {name: "Kopi",image:"./img/Kopi.png",
    length: "3", 
    ingredient1:"1",ingredient2:"5", ingredient3:"7",
    ingredient1Image:"./img/blackKopi.png",ingredient2Image:"./img/milk.png", ingredient3Image:"./img/sugar.png"},

    {name: "Tiao Her",image:"./img/TiaoHer.png", 
    length: "2", 
    ingredient1:"2",ingredient2:"0", ingredient3:"0",
    ingredient1Image:"./img/tea.png",ingredient2Image:"", ingredient3Image:""},


    {name: "Kopi O Siew Dia Peng",image:"./img/KopiOSewDiaPeng.png",
    length: "2",  
    ingredient1:"1",ingredient2:"4", ingredient3:"0",
    ingredient1Image:"./img/blackKopi.png",ingredient2Image:"./img/ice.png", ingredient3Image:""},

    
    {name: "Kopi O Kosong",image:"./img/KopiOKosong.png",
    length: "1",  
    ingredient1:"1",ingredient2:"0", ingredient3:"0",
    ingredient1Image:"./img/blackKopi.png",ingredient2Image:"", ingredient3Image:""},

    {name: "Teh",image:"./img/Teh.png", 
    length: "3", 
    ingredient1:"2",ingredient2:"5", ingredient3:"7",
    ingredient1Image:"./img/tea.png",ingredient2Image:"./img/milk.png", ingredient3Image:"./img/sugar.png"},

    {name: "Teh O",image:"./img/TehO.png", 
    length: "2", 
    ingredient1:"2",ingredient2:"7", ingredient3:"0",
    ingredient1Image:"./img/tea.png",ingredient2Image:"./img/sugar.png", ingredient3Image:""},

    {name: "Kopi O",image:"./img/KopiO.png", 
    length: "2", 
    ingredient1:"1",ingredient2:"7", ingredient3:"0",
    ingredient1Image:"./img/blackKopi.png",ingredient2Image:"./img/sugar.png", ingredient3Image:""},

    {name: "Milo Dinosaur",image:"./img/MiloDinosaur.png",
    length: "3",  
    ingredient1:"3",ingredient2:"4", ingredient3:"5",
    ingredient1Image:"./img/milo.png", ingredient2Image:"./img/ice.png", ingredient3Image:"./img/milk.png"},

    {name: "Yuan Yang Kosong",image:"./img/YuanYangKosong.png", 
    length: "3", 
    ingredient1:"1",ingredient2:"2", ingredient3:"5",
    ingredient1Image:"./img/blackKopi.png", ingredient2Image:"./img/tea.png", ingredient3Image:"./img/milk.png"},

    {name: "Kopi C",image:"./img/KopiC.png", 
    length: "3", 
    ingredient1:"1",ingredient2:"6", ingredient3:"7",
    ingredient1Image:"./img/blackKopi.png", ingredient2Image:"./img/evaporatedMilk.png", ingredient3Image:"./img/sugar.png"},

    {name: "Tak Giu",image:"./img/TakGiu.png", 
    length: "3", 
    ingredient1:"3",ingredient2:"5", ingredient3:"7",
    ingredient1Image:"./img/milo.png", ingredient2Image:"./img/milk.png", ingredient3Image:"./img/sugar.png"},

    {name: "Teh C",image:"./img/TehC.png", 
    length: "3", 
    ingredient1:"2",ingredient2:"6", ingredient3:"7",
    ingredient1Image:"./img/tea.png", ingredient2Image:"./img/evaporatedMilk.png", ingredient3Image:"./img/sugar.png"}

]

let selectedIngredients = [
    {number: "1",image:"./img/SelectBlackKopi.png"},
    {number: "2",image:"./img/SelectTea.png"},
    {number: "3",image:"./img/SelectMilo.png"},
    {number: "4",image:"./img/SelectIce.png"},
    {number: "5",image:"./img/SelectMilk.png"},
    {number: "6",image:"./img/SelectEvaporatedMilk.png"},
    {number: "7",image:"./img/SelectSugar.png"}
]

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.add("hide")
        game.classList.remove("hide")
        current = 0;
        totalQuestion = Math.floor(Math.random() * 5) + 5;
        score = 0;
        choice1 = 0;
        choice2 = 0;
        choice3 = 0;
        Question()
    }, 200);   
})

submit.addEventListener("click", () => {
    if(choice1 == 0){
        return
    }
    playClickSound()
    let delay = setTimeout(()=>{
        choosenAnswer1 = false
        choosenAnswer2 = false
        choosenAnswer3 = false

        console.log(choice1,choice2,choice3)
        console.log(correctAnswer1, correctAnswer2, correctAnswer3)

        for(let i = 1; i < 4; i++){
            let currentCheck = "choice" + i
            if(window[currentCheck] == correctAnswer1 && choosenAnswer1 == false){
                console.log("r1")
                choosenAnswer1 = true
            }
            if(window[currentCheck] == correctAnswer2 && choosenAnswer2 == false){
                console.log("r2")
                choosenAnswer2 = true
            }
            if(window[currentCheck] == correctAnswer3 && choosenAnswer3 == false){
                console.log("r3")
                choosenAnswer3 = true
            }
            window[currentCheck] = 0
        }

        let popQuestionNumber = document.querySelector(".popUp .QuestionNumber")
        let coffeeContent = document.querySelector(".popUp .coffee-content")
        let product = document.querySelector(".popUp .product")
        let output = document.querySelector(".output")
        let text = document.querySelector(".text")

        popUp.classList.remove("hide")
        game.classList.add("hide")

        console.log(product,coffeeContent, correctDrink)
        if(choosenAnswer1 == true && choosenAnswer2 == true && choosenAnswer3 == true){
            score += 1;

            popQuestionNumber.innerHTML = `
                ${current}/${totalQuestion}`
            coffeeContent.innerHTML = ` Order: ${correctDrink.name}`
            product.src= correctDrink.image
            output.style.color="#4F8B56"
            output.innerHTML = `Good! <img class="thumb" src="./img/right.png"></p>`
            text.innerHTML = "Your Answer"
        }
        else{
            popQuestionNumber.innerHTML = `
                ${current}/${totalQuestion}`
                coffeeContent.innerHTML = ` Order: ${correctDrink.name}`
            product.src= correctDrink.image
            output.style.color="#DF493A"
            output.innerHTML = `Not Quite Right!</p>`
            text.innerHTML = "Your Answer"
        }
        if(correctAnswer2 == 0){
            let blank =document.querySelector(".rightAnswer2")
            blank.classList.add("hide")
        }
        if(correctAnswer3 == 0){
            let blank =document.querySelector(".rightAnswer3")
            blank.classList.add("hide")
        }
        for(let i = 1; i < 4; i++){
            let right = "rightAnswer" + i
            let check = "correctAnswer" + i
            let image = "correctImage" + i
            if(window[check] != 0){
                let rightAnswer = document.querySelector(`.${right}`)

                rightAnswer.style.backgroundImage = "url('" + window[image] + "')"
                rightAnswer.style.backgroundSize = "contain"
                rightAnswer.style.backgroundPosition = "center center"
                rightAnswer.style.backgroundRepeat = "no-repeat"
            }
        }
    },200)
})

next.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        choice1 = 0;
        choice2 = 0;
        choice3 = 0;
        choosenAnswer1 = false
        choosenAnswer2 = false
        choosenAnswer3 = false
        for(let i = 1; i < 7; i++){
            let btn = "chosenBtn" + i
            window[btn] = false
        }
        popUp.classList.add("hide")
        game.classList.remove("hide")
        Question()
    }, 200);
})

ingredients()

function ingredients(){
    for (let i = 0; i < 7; i ++){
        let currentClass = "btn" + (i + 1)

        let currentBtn = document.getElementById(currentClass)
        
        currentBtn.addEventListener("click", () => {
            playClickSound()
            if(choice1 == selectedIngredients[i].number){
                currentBtn.style.border = "transparent"
                choice1 = 0
                return
            }
            if(choice2 == selectedIngredients[i].number){
                currentBtn.style.border = "transparent"
                choice2 = 0
                return
            }
            if(choice3 == selectedIngredients[i].number){
                currentBtn.style.border = "transparent"
                choice3 = 0
                return
            }
            if(choice1 == 0){
                currentBtn.style.border = "5px solid black"
                choice1 = selectedIngredients[i].number
                console.log(choice1)
            }
            else if(choice2 == 0){
                currentBtn.style.border = "5px solid black"
                choice2 = selectedIngredients[i].number
                console.log(choice2)
            }
            else if(choice3 == 0){
                currentBtn.style.border = "5px solid black"
                choice3 = selectedIngredients[i].number
                console.log(choice3)
            }
            else{
                return
            }
        })
    }
}

function Question(){
    if(current == totalQuestion){
        console.log(score)
        let pass = Math.floor(totalQuestion / 2)
        game.classList.add('hide')
        final.classList.remove("hide")
        if(score == totalQuestion){
            clap.currentTime = 0
            clap.play()
            final.innerHTML = `
            <div class="game-title">
                <img class="title endTitle" src="./img/title.png">
            </div>
            <img class="end" src="./img/kopiKing.png">
            <p>You are a Kopi King!</p>
            <button class="playAgain">
            <p class="words"><img src="./img/again.png" class="arrowHead">Play again</p>
            </button>
            <button class="home">
            <p class="words"><img src="./img/home.png" class="arrowHead">Back to Home</p>
            </button>`
        }
        else if(score > pass){
            completed.currentTime = 0
            completed.play()
            final.innerHTML = `
            <div class="game-title">
                <img class="title endTitle" src="./img/title.png">
            </div>
            <img class="end" src="./img/kopiMaster.png">
            <p>You are a Kopi Master.</p>
            <button class="playAgain">
            <p class="words"><img src="./img/again.png" class="arrowHead">Play again</p>
            </button>
            <button class="home">
            <p class="words"><img src="./img/home.png" class="arrowHead">Back to Home</p>
            </button>`
        }
        else if(score < pass){
            lose.currentTime = 0
            lose.play()
            final.innerHTML = `
            <div class="game-title">
                <img class="title endTitle" src="./img/title.png">
            </div>
            <img class="end" src="./img/kopiNewbie.png">
            <p>You learn something new!</p>
            <button class="playAgain">
            <p class="words"><img src="./img/again.png" class="arrowHead">Play again</p>
            </button>
            <button class="home">
            <p class="words"><img src="./img/home.png" class="arrowHead">Back to Home</p>
            </button>`
        }

        let playAgain = document.querySelector(".playAgain")
        playAgain.addEventListener("click", () => {
            playClickSound()
            let delay = setTimeout(() => {
                final.classList.add("hide")
                start.classList.remove("hide")
                easyQ = normalQ = hardQ = false
            }, 200);      
        })
        let homeButton = document.querySelector(".home")
        homeButton.addEventListener("click", () => {
            playClickSound()
            let delay = setTimeout(() => {
              location.assign('https://gimme.sg/activations/dementia/');
            }, 200);
        })
        return
    }


    if (tempArray.length === 0){
        for(let j = 0; j < allQuestion.length; j++){
            tempArray.push(allQuestion[j])
        }
    }
    
    console.log(tempArray)
    current += 1;
    questionNumber.innerHTML = current + "/" + totalQuestion;

    qIndex = Math.floor(Math.random() * tempArray.length);
    
    correctDrink = tempArray[qIndex]
    correctAnswer1 = tempArray[qIndex].ingredient1
    correctAnswer2 = tempArray[qIndex].ingredient2
    correctAnswer3 = tempArray[qIndex].ingredient3
    correctImage1 = tempArray[qIndex].ingredient1Image
    correctImage2 = tempArray[qIndex].ingredient2Image
    correctImage3 = tempArray[qIndex].ingredient3Image

    question.innerHTML = `
    <img class="product" src="${tempArray[qIndex].image}">
    <div class="coffee-content">${tempArray[qIndex].name}</div>`
    let product = document.querySelector(".product");
    product.style.width = "30%"

    for (let i = 0; i < 3; i ++){
        let currentChoice = "choice" + (i + 1)
        window[currentChoice] = 0;
    }
    for (let i = 0; i < 7; i ++){
        let currentClass = "btn" + (i + 1)

        let currentBtn = document.getElementById(`${currentClass}`)  
        currentBtn.style.border = "transparent"
    }
    for (let i = 0; i < 3; i ++){
        let currentAnswerClass = "rightAnswer" + (i + 1)

        let currentAnswer = document.querySelector(`.${currentAnswerClass}`)  
        currentAnswer.classList.remove("hide")
    }
    console.log(tempArray)
    tempArray.splice(qIndex, 1);
}

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });