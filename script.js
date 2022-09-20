const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const selection = document.querySelector(".selection")
const easy = document.querySelector(".easy")
const normal = document.querySelector(".normal")
const hard = document.querySelector(".hard")
const question = document.querySelector(".question")
const questionNumber = document.querySelector(".QuestionNumber")
const submit = document.querySelector(".submit")
const popUp = document.querySelector(".popUp");
const final = document.querySelector(".final");

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
    start.classList.add("hide")
    selection.classList.remove("hide")
})

easy.addEventListener("click", () => {
    selection.classList.add("hide")
    game.classList.remove("hide")
    easyQ = true
    current = 0;
    totalQuestion = 5;
    score = 0;
    choice1 = 0;
    choice2 = 0;
    choice3 = 0;
    Question()
})

normal.addEventListener("click", () => {
    selection.classList.add("hide")
    game.classList.remove("hide")
    normalQ = true
    current = 0;
    totalQuestion = 10;
    score = 0;
    choice1 = 0;
    choice2 = 0;
    choice3 = 0;
    Question()
})

hard.addEventListener("click", () => {
    selection.classList.add("hide")
    game.classList.remove("hide")
    hardQ = true
    current = 0;
    totalQuestion = 15;
    score = 0;
    choice1 = 0;
    choice2 = 0;
    choice3 = 0;
    Question()
})

submit.addEventListener("click", () => {
    if(choice1 == 0){
        return
    }
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

    if(choosenAnswer1 == true && choosenAnswer2 == true && choosenAnswer3 == true){
        score += 1;
        popUp.classList.remove("hide")
        game.classList.add("hide")

        popUp.innerHTML = `
        <div class="QuestionNumber">
            ${current}/${totalQuestion}
        </div>
        <div class="coffee-content"> Order: ${allQuestion[qIndex].name}</div>
        <img class="product" src="${allQuestion[qIndex].image}">
        <p class="complete">Completed!</p>
        <p class="text">Your Answer:</p>
        <div class="equation">
            <button class="rightAnswer1"></button>
            <button class="rightAnswer2"></button>
            <button class="rightAnswer3"></button>
        </div>
        <button class="next">Next</button>`
    }
    else{
        popUp.classList.remove("hide")
        game.classList.add("hide")
        popUp.innerHTML = `
        <div class="QuestionNumber">
            ${current}/${totalQuestion}
        </div>
        <div class="coffee-content"> Order: ${allQuestion[qIndex].name}</div>
        <img class="product" src="${allQuestion[qIndex].image}">
        <p class="not">Not Quite Right!</p>
        <p class="text">Right Answer:</p>
        <div class="equation">
            <button class="rightAnswer1"></button>
            <button class="rightAnswer2"></button>
            <button class="rightAnswer3"></button>
        </div>
        <button class="next">Next</button>`
    }
    for(let i = 1; i < 4; i++){
        let right = "rightAnswer" + i
        let check = "correctAnswer" + i
        let image = "correctImage" + i
        if(window[check] != null){
            let rightAnswer = document.querySelector(`.${right}`)

            rightAnswer.style.backgroundImage = "url('" + window[image] + "')"
            rightAnswer.style.backgroundSize = "contain"
            rightAnswer.style.backgroundPosition = "center center"
            rightAnswer.style.backgroundRepeat = "no-repeat"
        }
    }
    let next = document.querySelector(".next")
    next.addEventListener("click", () => {
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
    })
})

ingredients()

function ingredients(){
    for (let i = 0; i < 7; i ++){
        let currentClass = "btn" + (i + 1)

        let currentBtn = document.getElementById(currentClass)
        
        currentBtn.addEventListener("click", () => {
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
            final.innerHTML = `
            <div class="game-title">
                <img class="title" src="./img/title.png">
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
            final.innerHTML = `
            <div class="game-title">
                <img class="title" src="./img/title.png">
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
            final.innerHTML = `
            <div class="game-title">
                <img class="title" src="./img/title.png">
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

        let home = document.querySelector(".home")
        home.addEventListener("click", () => {
            final.classList.add("hide")
            start.classList.remove("hide")
    })
    let playAgain = document.querySelector(".playAgain")
        playAgain.addEventListener("click", () => {
            final.classList.add("hide")
            game.classList.remove("hide")
            current = 0;
            score = 0;
            choice1 = 0;
            choice2 = 0;
            choice3 = 0;
            Question()
    })

        return
    }


    current += 1;
    questionNumber.innerHTML = current + "/" + totalQuestion;

    qIndex = Math.floor(Math.random() * 12);
    
    correctAnswer1 = allQuestion[qIndex].ingredient1
    correctAnswer2 = allQuestion[qIndex].ingredient2
    correctAnswer3 = allQuestion[qIndex].ingredient3
    correctImage1 = allQuestion[qIndex].ingredient1Image
    correctImage2 = allQuestion[qIndex].ingredient2Image
    correctImage3 = allQuestion[qIndex].ingredient3Image

    if(easyQ == true){
        question.innerHTML = `
        <div class="top">
            <div class="left">
                <img class="product" src="${allQuestion[qIndex].image}">
                <div class="coffee-content">${allQuestion[qIndex].name}</div>
            </div>
            <div class="right">
                <div class="coffee-content"> Ingredients:</div>
                <img class="in" src="${allQuestion[qIndex].ingredient1Image}">
                <img class="in" src="${allQuestion[qIndex].ingredient2Image}">
                <img class="in" src="${allQuestion[qIndex].ingredient3Image}">
            </div>
        </div>`
    }

    if(normalQ == true){
        let missingIngredient = Math.floor(Math.random() * allQuestion[qIndex].length);

        if(missingIngredient == 0){
            allQuestion[qIndex].ingredient1Image = "./img/q.png"
        }
        if(missingIngredient == 1){
            allQuestion[qIndex].ingredient2Image = "./img/q.png"
        }
        if(missingIngredient == 2){
            allQuestion[qIndex].ingredient3Image = "./img/q.png"
        }

        question.innerHTML = `
        <div class="top">
            <div class="left">
                <img class="product" src="${allQuestion[qIndex].image}">
                <div class="coffee-content">${allQuestion[qIndex].name}</div>
            </div>
            <div class="right">
                <div class="coffee-content"> Ingredient:</div>
                <img class="in" src="${allQuestion[qIndex].ingredient1Image}">
                <img class="in" src="${allQuestion[qIndex].ingredient2Image}">
                <img class="in" src="${allQuestion[qIndex].ingredient3Image}">
            </div>
        </div>`
        if(missingIngredient == 0){
            allQuestion[qIndex].ingredient1Image = correctImage1
        }
        if(missingIngredient == 1){
            allQuestion[qIndex].ingredient2Image = correctImage2
        }
        if(missingIngredient == 2){
            allQuestion[qIndex].ingredient3Image = correctImage3
        }
    }
    if(hardQ == true){
        question.innerHTML = `
        <img class="product" src="${allQuestion[qIndex].image}">
        <div class="coffee-content">${allQuestion[qIndex].name}</div>`
    }

    for (let i = 0; i < 3; i ++){
        let currentChoice = "choice" + (i + 1)
        window[currentChoice] = 0;
    }
    for (let i = 0; i < 7; i ++){
        let currentClass = "btn" + (i + 1)

        let currentBtn = document.getElementById(`${currentClass}`)  
        currentBtn.style.border = "transparent"
    }
}