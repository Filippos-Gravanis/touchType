let minute = 60
let input = document.getElementById("input")
input.style.height="50px"
input.style.width="500px"
input.style.border="1px solid blue"
input.style.borderRadius='99px'
isTimerStarted = false
function minuteCountDown() {
    if (isTimerStarted == false) {
        isTimerStarted = true
        const timerElement = document.getElementById('timerElement');
        const timer = setInterval(() => {
            if (minute > 0) {
                minute = minute - 1
                timerElement.innerText = minute;
            }
            else {
                clearInterval(timer)
            }
        }

            , 1000)
    }
}
wordCountElement=document.createElement('p')
document.body.append(wordCountElement)
let wordCount = 0
input.addEventListener('focus', minuteCountDown)
input.addEventListener('keydown', function (keyPress) {
    setTimeout(()=>{if (keyPress.key === ' ' && minute>0 && input.value.length>1 && input.value[1]!='') {
        typedWord=input.value
        wordCount = wordCount + 1
        input.value=""
        wordCountElement.innerText=wordCount
        input.focus()    
    }},0)
    
    
})

