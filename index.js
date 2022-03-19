const wordList = ['word1', 'asddasd' ]
let timeLeft = 60
let wordIndex = 0
const input = document.getElementById("input")
input.style.height = "50px"
input.style.width = "100%"
input.style.fontSize = '20px'
input.style.border = "1px solid grey"
input.style.borderRadius = '10px'
let isCountdownStarted = false
let isGameOver = false
const docContainer=document.getElementById('documentContainer');
docContainer.style.display='flex'
docContainer.style.flexDirection='column'
function timeLeftCountDown() {
    if (isCountdownStarted == false) {
        isCountdownStarted = true
        const countDownElement = document.getElementById('timerElement');
        countDownElement.style.backgroundColor='#CECCCC'
        countDownElement.style.fontSize='25px'
        countDownElement.style.margin='auto'
        countDownElement.style.flexGrow='2'
        const countDown = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft = timeLeft - 1
                countDownElement.innerText = timeLeft;
            }
            if (typedWordsCount >= wordList.length || timeLeft <= 0) {
                clearInterval(countDown)
                input.removeEventListener('focus', timeLeftCountDown)
            }
        }

            , 1000)
    }

}

const correctWord = document.createElement('p')
const displayWordsContainer = document.createElement('div')

displayWordsContainer.style.display = 'flex'
displayWordsContainer.style.flexWrap = 'wrap'
displayWordsContainer.style.gap = "10px"
displayWordsContainer.style.border='2px solid grey'
displayWordsContainer.style.padding='10px'

let displayedWordsList = []
let wordListLength = wordList.length

for (i = 0; i < wordList.length; i++) {
    let wordplaceholder = new word(wordList[i], false)
    displayedWordsList.push(wordplaceholder)

}
if (wordListLength >= 10) {
    for (i = 0; i < 10; i++) {
        displayWordsContainer.append(displayedWordsList[i].text)
    }

}
else {
    for (i = 0; i < wordListLength; i++)
        displayWordsContainer.append(displayedWordsList[i].text)
}
function word(text) {
    this.text = document.createElement('span')
    this.text.style.fontSize = '30px'
    this.text.style.fontFamily = 'Ubuntu Mono'
    this.text.innerText = text
    this.text.style.color = 'black'
}
docContainer.append(displayWordsContainer)
docContainer.append(correctWord)

let typedWordsCount = 0
let correctWordsCount = 0

displayedWordsList[0].text.style.backgroundColor = "#CECCCC"
const restartButton=document.getElementById('restartBtn')
restartButton.addEventListener('click', ()=>{
    timeLeft=60
    typedWordsCount=0
    correctWordsCount=0
    isCountdownStarted=false
    input.addEventListener('focus', timeLeftCountDown)
})
input.addEventListener('focus', timeLeftCountDown)
input.addEventListener('keydown', function (keyPress) {
    setTimeout(() => {
        if (keyPress.key === ' ' && timeLeft > 0 && input.value.length > 1 && input.value[1] != '' && typedWordsCount < wordList.length) {
            typedWord = input.value
            wordIndex = 0
            if (typedWordsCount != 0) {
                displayedWordsList[0].text.style.backgroundColor = "white"
            }
            if (typedWord.trim() == wordList[typedWordsCount]) {
                correctWordsCount = correctWordsCount + 1
                displayedWordsList[typedWordsCount].text.style.color = 'green'
            }
            else {
                displayedWordsList[typedWordsCount].text.style.color = 'red'
            }
            typedWordsCount = typedWordsCount + 1


            if (typedWordsCount < wordList.length) {
                displayedWordsList[typedWordsCount].text.style.backgroundColor = "#CECCCC"
                console.log(typedWordsCount, wordList.length)
            }
            if (typedWordsCount > 0) {
                displayedWordsList[typedWordsCount - 1].text.style.backgroundColor = "white"
            }
            if (typedWordsCount % 10 == 0) {
                while (displayWordsContainer.firstChild) {
                    displayWordsContainer.removeChild(displayWordsContainer.firstChild);
                }

                if (wordList.length - typedWordsCount >= 10) {


                    for (i = 0; i < 10; i++) {
                        displayWordsContainer.append(displayedWordsList[typedWordsCount + i].text)
                    }

                }
                else {
                    for (i = 0; i < wordList.length - typedWordsCount; i++) {
                        console.log(i, wordList.length, typedWordsCount)
                        displayWordsContainer.append(displayedWordsList[typedWordsCount + i].text)
                    }
                }

            }



            input.value = ""
            input.focus()
        }
        if ((timeLeft === 0 || typedWordsCount >= wordListLength) && !isGameOver) {
            isGameOver = true
            let wpm =  correctWordsCount
            const wpmElement = document.createElement('p')
            document.body.append(wpmElement)
            wpmElement.innerText = wpm

        }
        if (keyPress.key !== ' ' && timeLeft > 0 && typedWordsCount < wordList.length) {
            if (input.value != displayedWordsList[typedWordsCount].text.innerText.substr(0, input.value.length)) {
                displayedWordsList[typedWordsCount].text.style.color = "red"

            }
            else {
                displayedWordsList[typedWordsCount].text.style.color = "black"
            }
            wordIndex = wordIndex + 1
        }
    }, 1)


})

