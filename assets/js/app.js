//BEGIN STOPWATCH PROGRAM
const stopwatchDisplay=document.querySelector('.stopwatch-display')
const stopwatchStartBtn=document.querySelector('.btn-stopwatch-start')
const stopwatchStopBtn=document.querySelector('.btn-stopwatch-stop')
const stopwatchResetBtn=document.querySelector('.btn-stopwatch-reset')

let stopwatchSeconds = 0
let stopwatchMinutes = 0
let stopwatchMiliseconds = 0

function runTimer(){
    stopwatchMiliseconds +=100

    if(stopwatchMiliseconds === 1000){
        stopwatchSeconds++
        stopwatchMiliseconds = 0
    }

    if(stopwatchSeconds === 60){
        stopwatchMinutes++
        stopwatchSeconds = 0
    }
    stopwatchDisplay.innerText = `${stopwatchMinutes}:${stopwatchSeconds}:${stopwatchMiliseconds}`
    // console.log(stopwatchMinutes, stopwatchSeconds, stopwatchMilliseconds)
}

let interval
function startStopwatch(){
    clearInterval(interval)
    interval = setInterval(runTimer, 100)
}

stopwatchStartBtn.addEventListener('click', startStopwatch)

function stopStopwatch(){
    clearInterval(interval)
}

stopwatchStopBtn.addEventListener('click', stopStopwatch)

function resetStopwatch(){
    clearInterval(interval)
    stopwatchSeconds = 0
    stopwatchMinutes = 0
    stopwatchMilliseconds = 0
    stopwatchDisplay.innerHTML = `0${stopwatchMinutes}:0${stopwatchSeconds}:0${stopwatchMilliseconds}`
}

stopwatchResetBtn.addEventListener('click', resetStopwatch) 