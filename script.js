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
    ingredient1:"1",ingredient2:"5", ingredient3:"7",
    ingredient1Image:"./img/blackKopi.png",ingredient2Image:"./img/milk.png", ingredient3Image:"./img/sugar.png"},

    {name: "Tiao Her",image:"./img/TiaoHer.png", 
    ingredient1:"2",ingredient2:"0", ingredient3:"0",
    ingredient1Image:"./img/tea.png",ingredient2Image:"", ingredient3Image:""},


    {name: "Kopi O Sew Dia Peng",image:"./img/KopiOSewDiaPeng.png", 
    ingredient1:"1",ingredient2:"4", ingredient3:"0",
    ingredient1Image:"./img/blackKopi.png",ingredient2Image:"./img/ice.png", ingredient3Image:""},

    
    {name: "Kopi O Kosong",image:"./img/KopiOKosong.png", 
    ingredient1:"1",ingredient2:"0", ingredient3:"0",
    ingredient1Image:"./img/blackKopi.png",ingredient2Image:"", ingredient3Image:""},

    {name: "Teh",image:"./img/Teh.png", 
    ingredient1:"2",ingredient2:"5", ingredient3:"7",
    ingredient1Image:"./img/tea.png",ingredient2Image:"./img/milk.png", ingredient3Image:"./img/sugar.png"},

    {name: "Teh O",image:"./img/TehO.png", 
    ingredient1:"2",ingredient2:"7", ingredient3:"0",
    ingredient1Image:"./img/tea.png",ingredient2Image:"./img/sugar.png", ingredient3Image:""},

    {name: "Kopi O",image:"./img/KopiO.png", 
    ingredient1:"1",ingredient2:"7", ingredient3:"0",
    ingredient1Image:"./img/blackKopi.png",ingredient2Image:"./img/sugar.png", ingredient3Image:""},

    {name: "Milo Dinosaur",image:"./img/MiloDinosaur.png", 
    ingredient1:"3",ingredient2:"4", ingredient3:"5",
    ingredient1Image:"./img/milo.png", ingredient2Image:"./img/ice.png", ingredient3Image:"./img/milk.png"},

    {name: "Yuan Yang Kosong",image:"./img/YuanYangKosong.png", 
    ingredient1:"1",ingredient2:"2", ingredient3:"5",
    ingredient1Image:"./img/blackKopi.png", ingredient2Image:"./img/tea.png", ingredient3Image:"./img/milk.png"},

    {name: "Kopi C",image:"./img/KopiC.png", 
    ingredient1:"1",ingredient2:"6", ingredient3:"7",
    ingredient1Image:"./img/blackKopi.png", ingredient2Image:"./img/evaporatedMilk.png", ingredient3Image:"./img/sugar.png"},

    {name: "Tak Giu",image:"./img/TakGiu.png", 
    ingredient1:"3",ingredient2:"5", ingredient3:"7",
    ingredient1Image:"./img/milo.png", ingredient2Image:"./img/milk.png", ingredient3Image:"./img/sugar.png"},

    {name: "Teh C",image:"./img/TehC.png", 
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
    chosenBtn1 = false;
    chosenBtn2 = false;
    chosenBtn3 = false;
    chosenBtn4 = false;
    chosenBtn5 = false;
    chosenBtn6 = false;
    chosenBtn7 = false;
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
    chosenBtn1 = false;
    chosenBtn2 = false;
    chosenBtn3 = false;
    chosenBtn4 = false;
    chosenBtn5 = false;
    chosenBtn6 = false;
    chosenBtn7 = false;
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
    chosenBtn1 = false;
    chosenBtn2 = false;
    chosenBtn3 = false;
    chosenBtn4 = false;
    chosenBtn5 = false;
    chosenBtn6 = false;
    chosenBtn7 = false;
    Question()
})

submit.addEventListener("click", () => {
    if(choice1 == 0){
        return
    }
    choosenAnswer1 = false
    choosenAnswer2 = false
    choosenAnswer3 = false

    for(let i = 1; i < 4; i++){
        let currentCheck = "choice" + i
        if(window[currentCheck] == correctAnswer1 && choosenAnswer1 == false){
            console.log("r1")
            choice1 = 0
            choosenAnswer1 = true
        }
        if(window[currentCheck] == correctAnswer2 && choosenAnswer2 == false){
            console.log("r2")
            choice2 = 0
            choosenAnswer2 = true
        }
        if(window[currentCheck] == correctAnswer3 && choosenAnswer3 == false){
            console.log("r3")
            choice3 = 0
            choosenAnswer3 = true
        }
        console.log(choice3)
        console.log(correctAnswer3)
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
        <p>Your Answer:</p>
        <div class="equation">
            <button class="rightAnswer1"></button>
            <button class="rightAnswer2"></button>
            <button class="rightAnswer3"></button>
        </div>
        <button class="next">
            <img class="startbtn" src="./img/next.png">
        </button>`
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
        <p>Right Answer:</p>
        <div class="equation">
            <button class="rightAnswer1"></button>
            <button class="rightAnswer2"></button>
            <button class="rightAnswer3"></button>
        </div>
        <button class="next">
            <img class="startbtn" src="./img/next.png">
        </button>`
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
            if(choice1 == 0){
                let answer1 = document.querySelector(".answer1");
                choosenImage1 = selectedIngredients[i].image
                answer1.style.backgroundImage = "url('" + selectedIngredients[i].image + "')"
                answer1.style.backgroundSize = "contain"
                answer1.style.backgroundPosition = "center center"
                answer1.style.backgroundRepeat = "no-repeat"
                choice1 = selectedIngredients[i].number
                choice1cliked = i + 1
            }
            else if(choice2 == 0){
                let answer2 = document.querySelector(".answer2");
                choosenImage2 = selectedIngredients[i].image
                answer2.style.backgroundImage = "url('" + selectedIngredients[i].image + "')"
                answer2.style.backgroundSize = "contain"
                answer2.style.backgroundPosition = "center center"
                answer2.style.backgroundRepeat = "no-repeat"
                choice2 = selectedIngredients[i].number
                choice2cliked = i + 1
            }
            else if(choice3 == 0){
                let answer3 = document.querySelector(".answer3");
                choosenImage3 = selectedIngredients[i].image
                answer3.style.backgroundImage = "url('" + selectedIngredients[i].image + "')"
                answer3.style.backgroundSize = "contain"
                answer3.style.backgroundPosition = "center center"
                answer3.style.backgroundRepeat = "no-repeat"
                choice3 = selectedIngredients[i].number
                choice3cliked = i + 1
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
                <img class="startbtn" src="./img/playAgain.png">
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
                <img class="startbtn" src="./img/playAgain.png">
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
                <img class="startbtn" src="./img/playAgain.png">
            </button>`
        }

        let playAgain = document.querySelector(".playAgain")
        playAgain.addEventListener("click", () => {
            final.classList.add("hide")
            selection.classList.remove("hide")
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
                <div class="coffee-content"> Order:</div>
                <img class="product" src="${allQuestion[qIndex].image}">
                <div class="coffee-content">${allQuestion[qIndex].name}</div>
            </div>
            <div class="right">
                <div class="coffee-content"> Ingredient:</div>
                <img class="in" src="${allQuestion[qIndex].ingredient1Image}">
                <img class="in" src="${allQuestion[qIndex].ingredient2Image}">
                <img class="in" src="${allQuestion[qIndex].ingredient3Image}">
            </div>
        </div>
        <div class="equation">
            <button class="answer1"></button>
            <button class="answer2"></button>
            <button class="answer3"></button>
        </div>`
    }

    if(normalQ == true){
        let missingIngredient = Math.floor(Math.random() * 3);

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
                <div class="coffee-content"> Order:</div>
                <img class="product" src="${allQuestion[qIndex].image}">
                <div class="coffee-content">${allQuestion[qIndex].name}</div>
            </div>
            <div class="right">
                <div class="coffee-content"> Ingredient:</div>
                <img class="in" src="${allQuestion[qIndex].ingredient1Image}">
                <img class="in" src="${allQuestion[qIndex].ingredient2Image}">
                <img class="in" src="${allQuestion[qIndex].ingredient3Image}">
            </div>
        </div>
        <div class="equation">
            <button class="answer1"></button>
            <button class="answer2"></button>
            <button class="answer3"></button>
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
        <div class="coffee-content"> Order:</div>
        <img class="product" src="${allQuestion[qIndex].image}">
        <div class="coffee-content">${allQuestion[qIndex].name}</div>
        <div class="equation">
            <button class="answer1"></button>
            <button class="answer2"></button>
            <button class="answer3"></button>
        </div>`
    }

    for (let i = 0; i < 3; i ++){
        let currentClass = "answer" + (i + 1)

        let currentChoice = "choice" + (i + 1)

        let currentBtn = document.querySelector(`.${currentClass}`)

        currentBtn.addEventListener("click", () => {    
            window[currentChoice] = 0;
            currentBtn.style.backgroundImage = "none"
        })
    }
}