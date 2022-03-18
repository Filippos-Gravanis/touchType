const wordList = ['word1', 'asddasd',"why","yes","no"]
let timeLeft = 60
let wordIndex=0
const input = document.getElementById("input")
input.style.height = "50px"
input.style.width = "100%"
input.style.fontSize = '20px'
input.style.border = "1px solid blue"
input.style.borderRadius = '10px'
let isCountdownStarted = false
let isGameOver=false
function timeLeftCountDown() {
    if (isCountdownStarted == false) {
        isCountdownStarted = true
        const countDownElement = document.getElementById('timerElement');
        const countDown = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft = timeLeft - 1
                countDownElement.innerText = timeLeft;
            }
            if (typedWordCount >= wordList.length || timeLeft <= 0) {
                clearInterval(countDown)
                input.removeEventListener('focus', timeLeftCountDown)
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

document.body.append(displayWordsContainer)
document.body.append(wordCountElement)
document.body.append(correctWord)

let typedWordCount = 0
let correctWordsCount = 0

displayedWordsList[0].text.style.backgroundColor = "#CECCCC"

input.addEventListener('focus', timeLeftCountDown)
input.addEventListener('keydown', function (keyPress) {
    setTimeout(() => {
        if (keyPress.key === ' ' && timeLeft > 0 && input.value.length > 1 && input.value[1] != '' && typedWordCount < wordList.length) {
            typedWord = input.value
            wordIndex=0
            if (typedWordCount != 0) {
                displayedWordsList[0].text.style.backgroundColor = "white"
            }
            if (typedWord.trim() == wordList[typedWordCount]) {
                correctWordsCount = correctWordsCount + 1
                displayedWordsList[typedWordCount].text.style.color = 'green'
            }
            else {
                displayedWordsList[typedWordCount].text.style.color = 'red'
            }
            typedWordCount = typedWordCount + 1


            if (typedWordCount < wordList.length) {
                displayedWordsList[typedWordCount].text.style.backgroundColor = "#CECCCC"
                console.log(typedWordCount, wordList.length)
            }
            if (typedWordCount > 0) {
                displayedWordsList[typedWordCount - 1].text.style.backgroundColor = "white"
            }
            if (typedWordCount % 10 == 0) {
                while (displayWordsContainer.firstChild) {
                    displayWordsContainer.removeChild(displayWordsContainer.firstChild);
                    }
                
                if (wordList.length - typedWordCount >= 10) {


                    for (i = 0; i < 10; i++) {
                        displayWordsContainer.append(displayedWordsList[typedWordCount + i].text)
                    }

                }
                else {
                    for (i = 0; i < wordList.length - typedWordCount; i++) {
                        console.log(i,wordList.length,typedWordCount)
                        displayWordsContainer.append(displayedWordsList[typedWordCount+i].text)
                    }
                }

            }
            
            

            input.value = ""
            input.focus()
        }
        if((timeLeft === 0 || typedWordCount>=wordListLength) && !isGameOver ){
            isGameOver=true
            let wpm=(60)*correctWordsCount
            const wpmElement=document.createElement('p')
            document.body.append(wpmElement)
            wpmElement.innerText=wpm
            
        }
        if(keyPress.key!==' ' && timeLeft > 0  && typedWordCount < wordList.length){
                if(input.value!=displayedWordsList[typedWordCount].text.innerText.substr(0,input.value.length)){
                    displayedWordsList[typedWordCount].text.style.color="red"
                
                }
                else{
                    displayedWordsList[typedWordCount].text.style.color="black"
                }
                console.log(input.value,displayedWordsList[typedWordCount].text.innerText.substr(0,input.value.length))
                wordIndex=wordIndex + 1
        }
    }, 1)


})

