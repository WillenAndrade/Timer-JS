var display = document.querySelector('.display')
var btnstart = document.querySelector('.btnstart')
var sec = 00 
var min = 00
var interval
var time = 0
var on = false

function timingPlus() {
    time++
    display.innerText = twoDigits(time) + ":" + twoDigits(sec)
    return (time)
}

function timingMinus() {
    time--
    if(time < 0) {
        time = 0
    }
    display.innerText = twoDigits(time) + ":" + twoDigits(sec)
    return (time)
}

function twoDigits(digit) {
    if(digit < 10) {
        return("0" + digit)
    } else {
        return (digit)
    }
}

function start() {
        if(time > 0) {
       interval = setInterval(watch, 1000)
       watch()
        } else {
        time = 1000000
       interval = setInterval(watch, 1000)
             watch()
        }
        btnstart.style.display = 'none'  
    }

function pause() {
    clearInterval(interval)
    btnstart.style.display = 'block'
}
function stop() {
    clearInterval(interval)
     sec = 00 
     min = 00
     var display = document.querySelector('.display')
    display.innerText = "00:00"
    time = 00
}

                                                      //Relogio
function watch(){
    sec++
    if(sec == 60) {
        min++
        sec = 0
    }
    var display = document.querySelector('.display')
    display.innerText = twoDigits(min) + ":" + twoDigits(sec)
    if(min == time) {
        clearInterval(interval)
       setInterval(toggleColor, 100)
    }
}

function toggleColor() {
    if(on == false) {
        display.style.color = "green"
    } else {
        display.style.color = "red"
    }
    on = !on
}