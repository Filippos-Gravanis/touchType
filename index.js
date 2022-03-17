const listedWords = ['word1', 'asddasd','word1', 'asddasd','word1', 'asddasd','word1', 'asddasd','word1', 'asddasd','word1', 'asddasd','word1', 'asddasd','word1', 'asddasd','word1', 'asddasd','word1', 'asddasd']
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
                console.log(typedWordCount)
                console.log(listedWords.length)
            }
            if (typedWordCount >= listedWords.length) {
                console.log(typedWordCount + listedWords.length)
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
const displayWords = document.createElement('div')

displayWords.style.display = 'flex'
displayWords.style.flexWrap = 'wrap'
displayWords.style.gap="10px"

let displaydWordsList=[]

for (i = 0; i < listedWords.length; i++) {
    let wordplaceholder = new word(listedWords[i], false)
    console.log(wordplaceholder.text)
    displaydWordsList.push(wordplaceholder)
    displayWords.append(wordplaceholder.text)
}

function word(text) {
    this.text = document.createElement('span')
    this.text.style.fontSize = '30px'
    this.text.style.fontFamily = 'Ubuntu Mono'
    this.text.innerText = text
    this.text.style.color = 'black'
}

document.body.append(displayWords)
document.body.append(wordCountElement)
document.body.append(correctWord)

let typedWordCount = 0
let correctWordCount = 0

input.addEventListener('focus', timeCountDown)
input.addEventListener('keydown', function (keyPress) {
    setTimeout(() => {
        if (keyPress.key === ' ' && timeLeft > 0 && input.value.length > 1 && input.value[1] != '') {
            typedWord = input.value
            if (typedWord.trim() == listedWords[typedWordCount]) {
                correctWordCount = correctWordCount + 1
                displaydWordsList[typedWordCount].text.style.color='green'
            }
            else{
                displaydWordsList[typedWordCount].text.style.color='red'
            }
            if (typedWordCount < listedWords.length) {
                typedWordCount = typedWordCount + 1



            }
            input.value = ""
            input.focus()
        }
    }, 0)


})

