const listedWords = ['word1', 'asddasd']
let timeLeft = 60
let input = document.getElementById("input")
input.style.height = "50px"
input.style.width = "100%"
input.style.fontSize = '20px'
input.style.border = "1px solid blue"
input.style.borderRadius = '10px'
let isTimerStarted = false
function timeCountDown() {
    if (isTimerStarted == false) {
        isTimerStarted = true
        const countDownElement = document.getElementById('timerElement');
        const countDown = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft = timeLeft - 1
                countDownElement.innerText = timeLeft;
            }
            if (typedWordCount >= listedWords.length) {
                clearInterval(countDown)
                input.removeEventListener('focus', timeCountDown)
            }
            else if (timeLeft <= 0) {
                clearInterval(countDown)
                input.removeEventListener('focus', timeCountDown)
            }
        }

            , 1000)
    }

}

const correctWord = document.createElement('p')
wordCountElement = document.createElement('p')
const displayWordsContainer = document.createElement('div')

displayWordsContainer.style.display = 'flex'
displayWordsContainer.style.flexWrap = 'wrap'
displayWordsContainer.style.gap = "10px"

let displaydWordsList = []
let listedWordsCount = listedWords.length
for (i = 0; i < listedWords.length; i++) {
    let wordplaceholder = new word(listedWords[i], false)
    displaydWordsList.push(wordplaceholder)

}
if (listedWordsCount >= 10) {
    for (i = 0; i < 10; i++) {
        displayWordsContainer.append(displaydWordsList[i].text)
    }

}
else {
    for (i = 0; i < listedWordsCount; i++)
        displayWordsContainer.append(displaydWordsList[i].text)
}
function word(text) {
    this.text = document.createElement('span')
    this.text.style.fontSize = '30px'
    this.text.style.fontFamily = 'Ubuntu Mono'
    this.text.innerText = text
    this.text.style.color = 'black'
}

document.body.append(displayWordsContainer)
document.body.append(wordCountElement)
document.body.append(correctWord)

let typedWordCount = 0
let correctWordCount = 0

displaydWordsList[0].text.style.backgroundColor = "#CECCCC"

input.addEventListener('focus', timeCountDown)
input.addEventListener('keydown', function (keyPress) {
    setTimeout(() => {
        if (keyPress.key === ' ' && timeLeft > 0 && input.value.length > 1 && input.value[1] != '' && typedWordCount < listedWords.length) {
            typedWord = input.value
            if (typedWordCount != 0) {
                displaydWordsList[0].text.style.backgroundColor = "white"
            }
            if (typedWord.trim() == listedWords[typedWordCount]) {
                correctWordCount = correctWordCount + 1
                displaydWordsList[typedWordCount].text.style.color = 'green'
            }
            else {
                displaydWordsList[typedWordCount].text.style.color = 'red'
            }
            typedWordCount = typedWordCount + 1


            if (typedWordCount < listedWords.length) {
                displaydWordsList[typedWordCount].text.style.backgroundColor = "#CECCCC"
                console.log(typedWordCount, listedWords.length)
            }
            if (typedWordCount > 0) {
                displaydWordsList[typedWordCount - 1].text.style.backgroundColor = "white"
            }
            if (typedWordCount % 10 == 0) {
                while (displayWordsContainer.firstChild) {
                    displayWordsContainer.removeChild(displayWordsContainer.firstChild);
                    }
                
                if (listedWords.length - typedWordCount >= 10) {


                    for (i = 0; i < 10; i++) {
                        displayWordsContainer.append(displaydWordsList[typedWordCount + i].text)
                    }

                }
                else {
                    for (i = 0; i < listedWords.length - typedWordCount; i++) {
                        console.log(i,listedWords.length,typedWordCount)
                        displayWordsContainer.append(displaydWordsList[typedWordCount+i].text)
                    }
                }

            }
            

            input.value = ""
            input.focus()
        }
    }, 1)


})

