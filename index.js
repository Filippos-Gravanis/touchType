const wordList=['word1','asddasd']
let minute = 10
let input = document.getElementById("input")
input.style.height="50px"
input.style.width="100%"
input.style.fontSize='20px'
input.style.border="1px solid blue"
input.style.borderRadius='10px'
isTimerStarted = false
function minuteCountDown() {
    if (isTimerStarted == false) {
        isTimerStarted = true
        const timerElement = document.getElementById('timerElement');
        const timer = setInterval(() => {
            if (minute > 0) {
                minute = minute - 1
                timerElement.innerText = minute;
                console.log(wordCount)
                console.log(wordList.length)
            }
            if(wordCount>=wordList.length){
                console.log(wordCount + wordList.length)
                clearInterval(timer)
                input.removeEventListener('focus',minuteCountDown)
            }
            else if (minute<=0){
                clearInterval(timer)
                input.removeEventListener('focus',minuteCountDown)
            }
        }

            , 1000)
    }

}
const correctWord=document.createElement('p')
wordCountElement=document.createElement('p')
wordDisplay=document.createElement('p')
wordDisplay.style.fontSize='20px'
wordDisplay.style.fontFamily="Ubuntu"
strWordList=String(wordList)
for (i=0;i<wordList.length;i++){
    strWordList=strWordList.replace(',',' ')
}
wordDisplay.innerText=strWordList
document.body.append(wordDisplay)
document.body.append(wordCountElement)
document.body.append(correctWord)
let wordCount = 0
let correctWords=0
input.addEventListener('focus', minuteCountDown)
input.addEventListener('keydown', function (keyPress) {
    setTimeout(()=>{if (keyPress.key === ' ' && minute>0 && input.value.length>1 && input.value[1]!='' ) {
        typedWord=input.value
        if (typedWord.trim()==wordList[wordCount] ){
            correctWords=correctWords+1
            correctWord.innerText=correctWords
        }
        if (wordCount<wordList.length){
        wordCount = wordCount + 1
        console.log(wordCount)


        }
        input.value=""
        //wordCountElement.innerText=wordCount
        input.focus()    
    }},10)
    
    
})

