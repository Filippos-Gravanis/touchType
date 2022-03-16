const listedWords=['word1','asddasd']
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
                console.log(listedWords.length)
            }
            if(wordCount>=listedWords.length){
                console.log(wordCount + listedWords.length)
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
const wordDisplay=document.createElement('div')
wordDisplay.style.display='flex'
wordDisplay.style.flexWrap='wrap'
strWordList=String(listedWords)
let wordplaceholder=new word('fasdf',true)
if (wordplaceholder.isTyped==true){
    wordplaceholder.text.style.color='green'
}
wordDisplay.append(wordplaceholder.text)
for (i=0;i<listedWords.length;i++){
    strWordList=strWordList.replace(',',' ')
}

function word(text,isTyped){
    this.text=document.createElement('span')
    this.text.style.fontSize='30px'
    this.text.style.fontFamily='Ubuntu Mono'
    this.isTyped=isTyped
    this.text.innerText=text
    this.text.style.color='black'
    }

document.body.append(wordDisplay)
document.body.append(wordCountElement)
document.body.append(correctWord)
let wordCount = 0
let correctWords=0
input.addEventListener('focus', minuteCountDown)
input.addEventListener('keydown', function (keyPress) {
    setTimeout(()=>{if (keyPress.key === ' ' && minute>0 && input.value.length>1 && input.value[1]!='' ) {
        typedWord=input.value
        if (typedWord.trim()==listedWords[wordCount] ){
            correctWords=correctWords+1
        }
        if (wordCount<listedWords.length){
        wordCount = wordCount + 1


        }
        input.value=""
        input.focus()    
    }},10)
    
    
})

